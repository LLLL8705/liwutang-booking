const http = require("http");
const fs = require("fs");
const path = require("path");
const https = require("https");
const crypto = require("crypto");
const { URL } = require("url");
const QRCode = require("qrcode");

const rootDir = __dirname;
const dataDir = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(rootDir, "data");
const dbFile = path.join(dataDir, "db.json");
const smsConfigFile = path.join(rootDir, "sms.config.json");
const staffConfigFile = path.join(rootDir, "staff.config.json");
const paymentConfigFile = path.join(rootDir, "payment.config.json");
const port = Number(process.env.PORT || 8787);
const phoneCodes = new Map();
const phoneVerifications = new Map();
const staffSessions = new Map();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon"
};

function ensureDb() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({ bookings: [], supportThreads: [], auditLogs: [], payments: [] }, null, 2), "utf8");
  }
}

function readDb() {
  ensureDb();
  try {
    const parsed = JSON.parse(fs.readFileSync(dbFile, "utf8"));
    return {
      bookings: Array.isArray(parsed.bookings) ? parsed.bookings : [],
      supportThreads: Array.isArray(parsed.supportThreads) ? parsed.supportThreads : [],
      auditLogs: Array.isArray(parsed.auditLogs) ? parsed.auditLogs : [],
      payments: Array.isArray(parsed.payments) ? parsed.payments : []
    };
  } catch {
    return { bookings: [], supportThreads: [], auditLogs: [], payments: [] };
  }
}

function writeDb(db) {
  ensureDb();
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), "utf8");
}

function readSmsConfigFile() {
  if (!fs.existsSync(smsConfigFile)) return {};
  try {
    return JSON.parse(fs.readFileSync(smsConfigFile, "utf8"));
  } catch {
    return {};
  }
}

function readStaffConfigFile() {
  if (!fs.existsSync(staffConfigFile)) return {};
  try {
    return JSON.parse(fs.readFileSync(staffConfigFile, "utf8"));
  } catch {
    return {};
  }
}

function readPaymentConfigFile() {
  if (!fs.existsSync(paymentConfigFile)) return {};
  try {
    return JSON.parse(fs.readFileSync(paymentConfigFile, "utf8"));
  } catch {
    return {};
  }
}

function loadStaffConfig() {
  const fileConfig = readStaffConfigFile();
  return {
    username: process.env.STAFF_USERNAME || fileConfig.username || "admin",
    password: process.env.STAFF_PASSWORD || fileConfig.password || "Liwutang@2026!",
    role: process.env.STAFF_ROLE || fileConfig.role || "admin"
  };
}

function resolveRootPath(filePath) {
  const value = cleanConfigValue(filePath);
  if (!value) return "";
  return path.isAbsolute(value) ? value : path.join(rootDir, value);
}

function loadPaymentConfig() {
  const fileConfig = readPaymentConfigFile();
  const wechat = fileConfig.wechat || {};
  return {
    provider: process.env.PAYMENT_PROVIDER || fileConfig.provider || "wechat_native",
    enabled: String(process.env.PAYMENT_ENABLED || fileConfig.enabled || "").toLowerCase() === "true" || fileConfig.enabled === true,
    wechat: {
      appid: process.env.WECHAT_PAY_APPID || wechat.appid || "",
      mchid: process.env.WECHAT_PAY_MCHID || wechat.mchid || "",
      serialNo: process.env.WECHAT_PAY_SERIAL_NO || wechat.serialNo || "",
      apiV3Key: process.env.WECHAT_PAY_API_V3_KEY || wechat.apiV3Key || "",
      privateKey: process.env.WECHAT_PAY_PRIVATE_KEY || wechat.privateKey || "",
      privateKeyPath: process.env.WECHAT_PAY_PRIVATE_KEY_PATH || wechat.privateKeyPath || "",
      notifyUrl: process.env.WECHAT_PAY_NOTIFY_URL || wechat.notifyUrl || "",
      wechatpayPublicKey: process.env.WECHAT_PAY_PUBLIC_KEY || wechat.wechatpayPublicKey || "",
      wechatpayPublicKeyPath: process.env.WECHAT_PAY_PUBLIC_KEY_PATH || wechat.wechatpayPublicKeyPath || "",
      wechatpayPublicKeyId: process.env.WECHAT_PAY_PUBLIC_KEY_ID || wechat.wechatpayPublicKeyId || "",
      descriptionPrefix: process.env.WECHAT_PAY_DESCRIPTION_PREFIX || wechat.descriptionPrefix || "砺武堂武术私教预约"
    }
  };
}

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const index = part.indexOf("=");
      if (index === -1) return cookies;
      cookies[decodeURIComponent(part.slice(0, index))] = decodeURIComponent(part.slice(index + 1));
      return cookies;
    }, {});
}

function createStaffSession(account, req) {
  const token = createId("staff");
  const now = new Date().toLocaleString("zh-CN", { hour12: false });
  staffSessions.set(token, {
    username: account.username,
    role: account.role || "staff",
    createdAt: now,
    lastSeenAt: now,
    ip: clientIp(req),
    expiresAt: Date.now() + 8 * 60 * 60 * 1000
  });
  return token;
}

function getStaffSession(req) {
  const token = parseCookies(req).lw_staff_session;
  if (!token) return null;
  const session = staffSessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    staffSessions.delete(token);
    return null;
  }
  session.lastSeenAt = new Date().toLocaleString("zh-CN", { hour12: false });
  return { token, ...session };
}

function setStaffCookie(res, token) {
  res.setHeader("Set-Cookie", `lw_staff_session=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${8 * 60 * 60}`);
}

function clearStaffCookie(res) {
  res.setHeader("Set-Cookie", "lw_staff_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0");
}

function clientIp(req) {
  return String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").split(",")[0].trim();
}

function staffPublicInfo(session) {
  if (!session) return null;
  return {
    username: session.username,
    role: session.role,
    createdAt: session.createdAt,
    lastSeenAt: session.lastSeenAt
  };
}

function requireStaff(req, res) {
  const session = getStaffSession(req);
  if (session) return session;
  sendJson(res, 401, { error: "请先登录工作人员后台" });
  return null;
}

function audit(req, action, detail = {}, actor = null) {
  const db = readDb();
  const now = new Date().toLocaleString("zh-CN", { hour12: false });
  db.auditLogs.unshift({
    id: createId("log"),
    action,
    actor: actor?.username || "public",
    role: actor?.role || "",
    ip: clientIp(req),
    userAgent: req.headers["user-agent"] || "",
    detail,
    createdAt: now
  });
  db.auditLogs = db.auditLogs.slice(0, 1000);
  writeDb(db);
}

function maskSensitive(value, visibleStart = 3, visibleEnd = 4) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (text.length <= visibleStart + visibleEnd) return text.replace(/.(?=.{2})/g, "*");
  return `${text.slice(0, visibleStart)}${"*".repeat(Math.max(4, text.length - visibleStart - visibleEnd))}${text.slice(-visibleEnd)}`;
}

function maskPhone(value) {
  return maskSensitive(value, 3, 4);
}

function maskIdCard(value) {
  return maskSensitive(value, 3, 4);
}

function sanitizePublicBooking(booking) {
  return {
    id: booking.id,
    coachId: booking.coachId,
    coachName: booking.coachName,
    date: booking.date,
    dateLabel: booking.dateLabel,
    day: booking.day,
    slot: booking.slot,
    status: booking.status
  };
}

function sanitizeStaffBooking(booking) {
  return {
    ...booking,
    phoneMasked: maskPhone(booking.phone),
    idCard: "",
    idCardMasked: booking.idCardMasked || maskIdCard(booking.idCard)
  };
}

function loadSmsConfig() {
  const fileConfig = readSmsConfigFile();
  return {
    provider: process.env.SMS_PROVIDER || fileConfig.provider || "aliyun",
    accessKeyId: process.env.ALIYUN_ACCESS_KEY_ID || fileConfig.accessKeyId || "",
    accessKeySecret: process.env.ALIYUN_ACCESS_KEY_SECRET || fileConfig.accessKeySecret || "",
    signName: process.env.ALIYUN_SMS_SIGN_NAME || fileConfig.signName || "",
    templateCode: process.env.ALIYUN_SMS_TEMPLATE_CODE || fileConfig.templateCode || "",
    regionId: process.env.ALIYUN_SMS_REGION_ID || fileConfig.regionId || "cn-hangzhou"
  };
}

function isSmsConfigured(config = loadSmsConfig()) {
  return Boolean(
    config.provider === "aliyun" &&
    config.accessKeyId &&
    config.accessKeySecret &&
    config.signName &&
    config.templateCode
  );
}

function cleanConfigValue(value) {
  return String(value || "").trim();
}

function chooseConfigValue(value, fallback = "") {
  const next = cleanConfigValue(value);
  if (!next || /^\*+$/.test(next)) return cleanConfigValue(fallback);
  return next;
}

function writeSmsConfigFile(config) {
  const next = {
    provider: "aliyun",
    accessKeyId: cleanConfigValue(config.accessKeyId),
    accessKeySecret: cleanConfigValue(config.accessKeySecret),
    signName: cleanConfigValue(config.signName),
    templateCode: cleanConfigValue(config.templateCode),
    regionId: cleanConfigValue(config.regionId) || "cn-hangzhou"
  };
  fs.writeFileSync(smsConfigFile, JSON.stringify(next, null, 2), "utf8");
  return next;
}

function maskValue(value) {
  const text = cleanConfigValue(value);
  if (!text) return "";
  if (text.length <= 6) return "*".repeat(text.length);
  return `${text.slice(0, 3)}${"*".repeat(Math.max(4, text.length - 6))}${text.slice(-3)}`;
}

function smsConfigStatus(config = loadSmsConfig()) {
  const fields = {
    accessKeyId: cleanConfigValue(config.accessKeyId),
    accessKeySecret: cleanConfigValue(config.accessKeySecret),
    signName: cleanConfigValue(config.signName),
    templateCode: cleanConfigValue(config.templateCode),
    regionId: cleanConfigValue(config.regionId) || "cn-hangzhou"
  };
  const missing = Object.keys(fields).filter((key) => key !== "regionId" && !fields[key]);
  return {
    provider: config.provider || "aliyun",
    configured: isSmsConfigured({ ...config, ...fields }),
    missing,
    regionId: fields.regionId,
    signName: fields.signName,
    templateCode: fields.templateCode,
    accessKeyIdMasked: maskValue(fields.accessKeyId),
    accessKeySecretMasked: maskValue(fields.accessKeySecret)
  };
}

function isWechatPaymentConfigured(config = loadPaymentConfig()) {
  const wechat = config.wechat || {};
  const privateKeyPath = resolveRootPath(wechat.privateKeyPath);
  const hasPrivateKey = Boolean(cleanConfigValue(wechat.privateKey) || (privateKeyPath && fs.existsSync(privateKeyPath)));
  return Boolean(
    config.enabled &&
      config.provider === "wechat_native" &&
      wechat.appid &&
      wechat.mchid &&
      wechat.serialNo &&
      wechat.apiV3Key &&
      wechat.notifyUrl &&
      hasPrivateKey
  );
}

function paymentConfigStatus(config = loadPaymentConfig()) {
  const wechat = config.wechat || {};
  const privateKeyPath = resolveRootPath(wechat.privateKeyPath);
  const publicKeyPath = resolveRootPath(wechat.wechatpayPublicKeyPath);
  const hasPrivateKey = Boolean(cleanConfigValue(wechat.privateKey) || (privateKeyPath && fs.existsSync(privateKeyPath)));
  const hasPublicKey = Boolean(cleanConfigValue(wechat.wechatpayPublicKey) || (wechat.wechatpayPublicKeyPath && fs.existsSync(publicKeyPath)));
  const fields = {
    appid: cleanConfigValue(wechat.appid),
    mchid: cleanConfigValue(wechat.mchid),
    serialNo: cleanConfigValue(wechat.serialNo),
    apiV3Key: cleanConfigValue(wechat.apiV3Key),
    notifyUrl: cleanConfigValue(wechat.notifyUrl)
  };
  const missing = Object.keys(fields).filter((key) => !fields[key]);
  if (!hasPrivateKey) missing.push("privateKey");
  return {
    provider: config.provider || "wechat_native",
    enabled: Boolean(config.enabled),
    wechatNativeReady: isWechatPaymentConfigured(config),
    missing,
    appidMasked: maskValue(fields.appid),
    mchidMasked: maskValue(fields.mchid),
    serialNoMasked: maskValue(fields.serialNo),
    apiV3KeyMasked: maskValue(fields.apiV3Key),
    notifyUrl: fields.notifyUrl,
    publicNotifyVerifyReady: hasPublicKey
  };
}

function getPaymentAmountCents(booking) {
  const explicit = Number(booking.paymentAmountCents);
  if (Number.isFinite(explicit) && explicit > 0) return Math.round(explicit);
  const text = String(booking.paymentAmount || booking.price || "");
  const match = text.replace(/,/g, "").match(/(\d+(?:\.\d{1,2})?)/);
  if (!match) return 0;
  return Math.round(Number(match[1]) * 100);
}

function normalizeOutTradeNo(value) {
  const raw = String(value || "").replace(/[^0-9A-Za-z_-]/g, "").slice(0, 32);
  if (raw.length >= 6) return raw;
  return `LW${Date.now()}${Math.random().toString(36).slice(2, 8)}`.slice(0, 32);
}

function readWechatPrivateKey(config = loadPaymentConfig()) {
  const privateKey = cleanConfigValue(config.wechat?.privateKey);
  if (privateKey) return privateKey.replace(/\\n/g, "\n");
  const keyPath = resolveRootPath(config.wechat?.privateKeyPath);
  if (!keyPath || !fs.existsSync(keyPath)) {
    const error = new Error("微信支付商户私钥不存在，请检查 payment.config.json");
    error.statusCode = 503;
    throw error;
  }
  return fs.readFileSync(keyPath, "utf8");
}

function wechatAuthorization(method, urlPath, body = "", config = loadPaymentConfig()) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString("hex");
  const message = `${method}\n${urlPath}\n${timestamp}\n${nonce}\n${body}\n`;
  const signature = crypto.createSign("RSA-SHA256").update(message).sign(readWechatPrivateKey(config), "base64");
  return `WECHATPAY2-SHA256-RSA2048 mchid="${config.wechat.mchid}",nonce_str="${nonce}",timestamp="${timestamp}",serial_no="${config.wechat.serialNo}",signature="${signature}"`;
}

function httpsRequestJson({ method = "GET", hostname, path: requestPath, headers = {}, body = "" }) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        method,
        hostname,
        path: requestPath,
        headers: {
          Accept: "application/json",
          "User-Agent": "LiwutangBooking/1.0",
          ...headers
        }
      },
      (res) => {
        let responseBody = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          responseBody += chunk;
        });
        res.on("end", () => {
          let parsed = {};
          try {
            parsed = responseBody ? JSON.parse(responseBody) : {};
          } catch {
            parsed = { raw: responseBody };
          }
          if (res.statusCode >= 400) {
            const error = new Error(parsed.message || parsed.code || `HTTP ${res.statusCode}`);
            error.statusCode = res.statusCode;
            error.payload = parsed;
            reject(error);
            return;
          }
          resolve(parsed);
        });
      }
    );
    req.setTimeout(15000, () => req.destroy(new Error("支付服务连接超时")));
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function createWechatNativePayment(booking) {
  const config = loadPaymentConfig();
  if (!isWechatPaymentConfigured(config)) {
    const error = new Error("微信支付尚未完成商户配置，请先填写 payment.config.json");
    error.statusCode = 503;
    throw error;
  }
  const amountCents = getPaymentAmountCents(booking);
  if (!amountCents) {
    const error = new Error("请选择可在线支付的定金金额");
    error.statusCode = 400;
    throw error;
  }
  const outTradeNo = normalizeOutTradeNo(booking.orderId);
  const body = JSON.stringify({
    appid: config.wechat.appid,
    mchid: config.wechat.mchid,
    description: `${config.wechat.descriptionPrefix || "砺武堂预约"}-${booking.coachName || ""}`.slice(0, 127),
    out_trade_no: outTradeNo,
    notify_url: config.wechat.notifyUrl,
    amount: {
      total: amountCents,
      currency: "CNY"
    },
    attach: JSON.stringify({
      bookingId: booking.id,
      phoneLast4: String(booking.phone || "").slice(-4)
    }).slice(0, 127)
  });
  const requestPath = "/v3/pay/transactions/native";
  const result = await httpsRequestJson({
    method: "POST",
    hostname: "api.mch.weixin.qq.com",
    path: requestPath,
    body,
    headers: {
      Authorization: wechatAuthorization("POST", requestPath, body, config),
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  });
  if (!result.code_url) {
    const error = new Error("微信支付未返回支付二维码链接");
    error.statusCode = 502;
    throw error;
  }
  const qrCodeDataUrl = await QRCode.toDataURL(result.code_url, {
    errorCorrectionLevel: "M",
    margin: 1,
    width: 260,
    color: {
      dark: "#111111",
      light: "#ffffff"
    }
  });
  return {
    provider: "wechat",
    mode: "native",
    orderId: outTradeNo,
    amountCents,
    codeUrl: result.code_url,
    qrCodeDataUrl,
    createdAt: new Date().toLocaleString("zh-CN", { hour12: false })
  };
}

async function queryWechatPayment(orderId) {
  const config = loadPaymentConfig();
  if (!isWechatPaymentConfigured(config)) {
    const error = new Error("微信支付尚未完成商户配置");
    error.statusCode = 503;
    throw error;
  }
  const requestPath = `/v3/pay/transactions/out-trade-no/${encodeURIComponent(orderId)}?mchid=${encodeURIComponent(config.wechat.mchid)}`;
  return httpsRequestJson({
    method: "GET",
    hostname: "api.mch.weixin.qq.com",
    path: requestPath,
    headers: {
      Authorization: wechatAuthorization("GET", requestPath, "", config)
    }
  });
}

function paymentStatusFromWechatTradeState(tradeState) {
  const map = {
    SUCCESS: "已支付",
    NOTPAY: "待微信支付",
    USERPAYING: "用户支付中",
    CLOSED: "支付已关闭",
    REVOKED: "支付已撤销",
    PAYERROR: "支付失败",
    REFUND: "已转入退款"
  };
  return map[tradeState] || tradeState || "待微信支付";
}

function upsertPaymentRecord(db, record) {
  const index = db.payments.findIndex((item) => item.orderId === record.orderId);
  if (index >= 0) db.payments[index] = { ...db.payments[index], ...record };
  else db.payments.unshift(record);
  db.payments = db.payments.slice(0, 1000);
}

function updateBookingPaymentFromTrade(db, orderId, trade = {}) {
  const index = db.bookings.findIndex((booking) => booking.orderId === orderId);
  if (index === -1) return null;
  const tradeState = trade.trade_state || trade.tradeState || "";
  const paymentStatus = paymentStatusFromWechatTradeState(tradeState);
  const paid = tradeState === "SUCCESS";
  const now = new Date().toLocaleString("zh-CN", { hour12: false });
  db.bookings[index] = {
    ...db.bookings[index],
    paymentProvider: "wechat",
    paymentStatus,
    wechatTradeState: tradeState,
    wechatTransactionId: trade.transaction_id || db.bookings[index].wechatTransactionId || "",
    paidAt: paid ? trade.success_time || db.bookings[index].paidAt || now : db.bookings[index].paidAt || "",
    status: paid && ["待支付", "待跟进"].includes(db.bookings[index].status) ? "已确认" : db.bookings[index].status,
    updatedAt: now
  };
  upsertPaymentRecord(db, {
    orderId,
    bookingId: db.bookings[index].id,
    provider: "wechat",
    status: tradeState || "UNKNOWN",
    paymentStatus,
    transactionId: trade.transaction_id || "",
    amountCents: trade.amount?.total || db.bookings[index].paymentAmountCents || 0,
    updatedAt: now,
    paidAt: paid ? trade.success_time || now : ""
  });
  return db.bookings[index];
}

function sanitizePaymentStatusBooking(booking) {
  if (!booking) return null;
  return {
    id: booking.id,
    orderId: booking.orderId,
    status: booking.status,
    paymentStatus: booking.paymentStatus,
    paymentProvider: booking.paymentProvider,
    paymentAmount: booking.paymentAmount,
    paymentAmountCents: booking.paymentAmountCents,
    paidAt: booking.paidAt || "",
    wechatTradeState: booking.wechatTradeState || "",
    wechatTransactionId: booking.wechatTransactionId || ""
  };
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      chunks.push(chunk);
      size += chunk.length;
      if (size > 2 * 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function decryptWechatResource(resource, config = loadPaymentConfig()) {
  const apiV3Key = Buffer.from(String(config.wechat.apiV3Key || ""), "utf8");
  if (apiV3Key.length !== 32) throw new Error("微信支付 APIv3 Key 必须是32位");
  const ciphertext = Buffer.from(resource.ciphertext || "", "base64");
  const authTag = ciphertext.slice(ciphertext.length - 16);
  const encrypted = ciphertext.slice(0, ciphertext.length - 16);
  const decipher = crypto.createDecipheriv("aes-256-gcm", apiV3Key, resource.nonce);
  decipher.setAuthTag(authTag);
  if (resource.associated_data) decipher.setAAD(Buffer.from(resource.associated_data));
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return JSON.parse(decrypted.toString("utf8"));
}

function verifyWechatNotifySignature(req, rawBody, config = loadPaymentConfig()) {
  const publicKey = cleanConfigValue(config.wechat?.wechatpayPublicKey);
  const publicKeyPath = resolveRootPath(config.wechat?.wechatpayPublicKeyPath);
  const publicKeyPem = publicKey ? publicKey.replace(/\\n/g, "\n") : publicKeyPath && fs.existsSync(publicKeyPath) ? fs.readFileSync(publicKeyPath, "utf8") : "";
  if (!publicKeyPem) return false;
  const timestamp = req.headers["wechatpay-timestamp"];
  const nonce = req.headers["wechatpay-nonce"];
  const signature = req.headers["wechatpay-signature"];
  if (!timestamp || !nonce || !signature) return false;
  const message = `${timestamp}\n${nonce}\n${rawBody}\n`;
  return crypto.createVerify("RSA-SHA256").update(message).verify(publicKeyPem, signature, "base64");
}

function isLocalRequest(req) {
  const address = req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : "";
  return address === "127.0.0.1" || address === "::1" || address === "::ffff:127.0.0.1";
}

function requireLocalAdmin(req, res) {
  if (isLocalRequest(req)) return true;
  sendJson(res, 403, { error: "短信配置只能在服务器本机打开" });
  return false;
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2 * 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function bookingStamp(booking) {
  return Date.parse(booking.updatedAt || booking.createdAt || booking.agreementAt || "") || 0;
}

function supportStamp(thread) {
  return Date.parse(thread.updatedAt || thread.createdAt || "") || 0;
}

function sameBookingSlot(left, right) {
  const leftCoach = left.coachId || left.coachName || "";
  const rightCoach = right.coachId || right.coachName || "";
  return (
    String(leftCoach) === String(rightCoach) &&
    left.date === right.date &&
    left.slot === right.slot &&
    left.phone === right.phone &&
    left.status !== "已取消"
  );
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createPhoneCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function cleanPhone(value) {
  return String(value || "").replace(/\s+/g, "");
}

function aliyunEncode(value) {
  return encodeURIComponent(String(value))
    .replace(/\*/g, "%2A")
    .replace(/%7E/g, "~");
}

function aliyunTimestamp() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
}

function buildAliyunQuery(params, accessKeySecret) {
  const canonicalizedQuery = Object.keys(params)
    .sort()
    .map((key) => `${aliyunEncode(key)}=${aliyunEncode(params[key])}`)
    .join("&");
  const stringToSign = `GET&%2F&${aliyunEncode(canonicalizedQuery)}`;
  const signature = crypto
    .createHmac("sha1", `${accessKeySecret}&`)
    .update(stringToSign)
    .digest("base64");
  const signedParams = { ...params, Signature: signature };
  return Object.keys(signedParams)
    .sort()
    .map((key) => `${aliyunEncode(key)}=${aliyunEncode(signedParams[key])}`)
    .join("&");
}

function httpsGetJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        try {
          const parsed = JSON.parse(body || "{}");
          if (res.statusCode >= 400) {
            reject(new Error(parsed.Message || parsed.message || `HTTP ${res.statusCode}`));
            return;
          }
          resolve(parsed);
        } catch {
          reject(new Error("短信服务返回内容无法解析"));
        }
      });
    });
    req.setTimeout(10000, () => {
      req.destroy(new Error("短信服务连接超时"));
    });
    req.on("error", reject);
  });
}

async function sendAliyunSmsCode(phone, code, config) {
  const params = {
    AccessKeyId: config.accessKeyId,
    Action: "SendSms",
    Format: "JSON",
    PhoneNumbers: phone,
    RegionId: config.regionId,
    SignName: config.signName,
    SignatureMethod: "HMAC-SHA1",
    SignatureNonce: createId("nonce"),
    SignatureVersion: "1.0",
    TemplateCode: config.templateCode,
    TemplateParam: JSON.stringify({ code }),
    Timestamp: aliyunTimestamp(),
    Version: "2017-05-25"
  };
  const query = buildAliyunQuery(params, config.accessKeySecret);
  const result = await httpsGetJson(`https://dysmsapi.aliyuncs.com/?${query}`);
  if (result.Code !== "OK") {
    throw new Error(result.Message || result.Code || "短信发送失败");
  }
  return result;
}

async function sendSmsCode(phone, code) {
  const config = loadSmsConfig();
  if (!isSmsConfigured(config)) {
    const error = new Error("短信服务未配置，请先填写 sms.config.json");
    error.statusCode = 503;
    throw error;
  }
  return sendAliyunSmsCode(phone, code, config);
}

async function handleApi(req, res, url) {
  if (req.method === "OPTIONS") {
    sendJson(res, 204, {});
    return;
  }

  const db = readDb();

  if (url.pathname === "/api/staff/login" && req.method === "POST") {
    const body = await readBody(req);
    const account = loadStaffConfig();
    const username = String(body.username || "").trim();
    const password = String(body.password || "");
    if (username !== account.username || password !== account.password) {
      audit(req, "staff_login_failed", { username });
      sendJson(res, 401, { error: "账号或密码不正确" });
      return;
    }
    const token = createStaffSession(account, req);
    setStaffCookie(res, token);
    audit(req, "staff_login_success", { username }, { username: account.username, role: account.role });
    sendJson(res, 200, { ok: true, staff: staffPublicInfo(getStaffSession(req) || staffSessions.get(token)) });
    return;
  }

  if (url.pathname === "/api/staff/session" && req.method === "GET") {
    const session = getStaffSession(req);
    if (!session) {
      sendJson(res, 401, { error: "未登录" });
      return;
    }
    sendJson(res, 200, { ok: true, staff: staffPublicInfo(session) });
    return;
  }

  if (url.pathname === "/api/staff/logout" && req.method === "POST") {
    const session = getStaffSession(req);
    if (session) {
      staffSessions.delete(session.token);
      audit(req, "staff_logout", {}, session);
    }
    clearStaffCookie(res);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (url.pathname === "/api/audit-logs" && req.method === "GET") {
    const session = requireStaff(req, res);
    if (!session) return;
    sendJson(res, 200, db.auditLogs.slice(0, 300));
    return;
  }

  if (url.pathname === "/api/audit-logs" && req.method === "POST") {
    const session = requireStaff(req, res);
    if (!session) return;
    const body = await readBody(req);
    audit(req, body.action || "staff_operation", body.detail || {}, session);
    sendJson(res, 201, { ok: true });
    return;
  }

  if (url.pathname === "/api/sms-config" && req.method === "GET") {
    const session = requireStaff(req, res);
    if (!session) return;
    if (!requireLocalAdmin(req, res)) return;
    sendJson(res, 200, smsConfigStatus());
    return;
  }

  if (url.pathname === "/api/sms-config" && req.method === "POST") {
    const session = requireStaff(req, res);
    if (!session) return;
    if (!requireLocalAdmin(req, res)) return;
    const body = await readBody(req);
    const existing = readSmsConfigFile();
    const next = writeSmsConfigFile({
      accessKeyId: chooseConfigValue(body.accessKeyId, existing.accessKeyId),
      accessKeySecret: chooseConfigValue(body.accessKeySecret, existing.accessKeySecret),
      signName: chooseConfigValue(body.signName, existing.signName),
      templateCode: chooseConfigValue(body.templateCode, existing.templateCode),
      regionId: chooseConfigValue(body.regionId, existing.regionId || "cn-hangzhou")
    });
    audit(req, "sms_config_saved", { signName: next.signName, templateCode: next.templateCode }, session);
    sendJson(res, 200, { ok: isSmsConfigured(next), ...smsConfigStatus(next) });
    return;
  }

  if (url.pathname === "/api/phone-code/send" && req.method === "POST") {
    const body = await readBody(req);
    const phone = cleanPhone(body.phone);
    if (phone.length < 6) {
      sendJson(res, 400, { error: "请填写正确手机号" });
      return;
    }

    const code = createPhoneCode();
    const sentAt = new Date().toLocaleString("zh-CN", { hour12: false });
    try {
      await sendSmsCode(phone, code);
    } catch (error) {
      if (error.statusCode === 503 && isLocalRequest(req)) {
        phoneCodes.set(phone, {
          code,
          expiresAt: Date.now() + 10 * 60 * 1000,
          sentAt,
          delivery: "local-dev"
        });
        sendJson(res, 200, {
          ok: true,
          expiresIn: 600,
          devCode: code,
          delivery: "local-dev",
          warning: "短信服务未配置，当前仅用于本机测试；上线前请配置真实短信服务。"
        });
        return;
      }
      sendJson(res, error.statusCode || 502, { error: error.message || "短信发送失败" });
      return;
    }

    phoneCodes.set(phone, {
      code,
      expiresAt: Date.now() + 10 * 60 * 1000,
      sentAt,
      delivery: "sms"
    });
    sendJson(res, 200, { ok: true, expiresIn: 600, delivery: "sms" });
    return;
  }

  if (url.pathname === "/api/phone-code/verify" && req.method === "POST") {
    const body = await readBody(req);
    const phone = cleanPhone(body.phone);
    const code = String(body.code || "").trim();
    const record = phoneCodes.get(phone);

    if (!record || record.expiresAt < Date.now()) {
      phoneCodes.delete(phone);
      sendJson(res, 400, { error: "验证码已过期，请重新发送" });
      return;
    }

    if (record.code !== code) {
      sendJson(res, 400, { error: "验证码不正确" });
      return;
    }

    phoneCodes.delete(phone);
    const token = createId("pv");
    const verifiedAt = new Date().toLocaleString("zh-CN", { hour12: false });
    phoneVerifications.set(token, {
      phone,
      verifiedAt,
      expiresAt: Date.now() + 30 * 60 * 1000
    });
    sendJson(res, 200, { ok: true, verifiedAt, token });
    return;
  }

  if (url.pathname === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      bookings: db.bookings.length,
      supportThreads: db.supportThreads.length,
      smsConfigured: isSmsConfigured(),
      payment: paymentConfigStatus()
    });
    return;
  }

  if (url.pathname === "/api/payments/config" && req.method === "GET") {
    sendJson(res, 200, paymentConfigStatus());
    return;
  }

  if (url.pathname === "/api/bookings" && req.method === "GET") {
    const sorted = db.bookings.sort((a, b) => bookingStamp(b) - bookingStamp(a));
    const session = getStaffSession(req);
    sendJson(res, 200, sorted.map(session ? sanitizeStaffBooking : sanitizePublicBooking));
    return;
  }

  if (url.pathname === "/api/bookings" && req.method === "POST") {
    const booking = await readBody(req);
    if (!booking.name || !booking.phone || !booking.coachName || !booking.date || !booking.slot) {
      sendJson(res, 400, { error: "请填写完整预约信息" });
      return;
    }

    if (!booking.agreementAccepted || !booking.agreementOpenedAt || !booking.agreementConfirmedAt) {
      sendJson(res, 400, { error: "请先打开协议并完成确认" });
      return;
    }

    const duplicate = db.bookings.find((item) => sameBookingSlot(item, booking));
    if (duplicate) {
      sendJson(res, 409, { error: "该手机号已预约这个教练的同一时间段", booking: sanitizeStaffBooking(duplicate) });
      return;
    }

    const now = new Date().toLocaleString("zh-CN", { hour12: false });
    const rawIdCard = booking.idCard || "";
    const wantsWechatNative = booking.paymentMethod === "wechat-native";
    const onlinePaymentStatus = wantsWechatNative ? "待微信支付" : "待支付/待核销";
    const nextBooking = {
      ...booking,
      id: booking.id || createId("bk"),
      orderId: normalizeOutTradeNo(booking.orderId || createId("ord")),
      status: booking.status || (wantsWechatNative ? "待支付" : "待跟进"),
      idCard: "",
      idCardMasked: booking.idCardMasked || maskIdCard(rawIdCard),
      idCardLast4: booking.idCardLast4 || (rawIdCard ? String(rawIdCard).slice(-4) : ""),
      submittedIp: clientIp(req),
      submittedUserAgent: req.headers["user-agent"] || "",
      evidenceCreatedAt: now,
      evidenceVersion: booking.evidenceVersion || "commercial-v2",
      paymentProvider: wantsWechatNative ? "wechat" : booking.paymentProvider || "",
      paymentMode: wantsWechatNative ? "native" : booking.paymentMode || "",
      paymentStatus: booking.paymentStatus || onlinePaymentStatus,
      paymentAmountCents: getPaymentAmountCents(booking),
      createdAt: booking.createdAt || now,
      updatedAt: booking.updatedAt || now
    };
    let paymentCheckout = null;
    if (wantsWechatNative) {
      try {
        paymentCheckout = await createWechatNativePayment(nextBooking);
      } catch (error) {
        sendJson(res, error.statusCode || 502, { error: error.message || "微信支付下单失败" });
        return;
      }
      nextBooking.orderId = paymentCheckout.orderId;
      nextBooking.paymentProvider = "wechat";
      nextBooking.paymentMode = "native";
      nextBooking.paymentStatus = "待微信支付";
      nextBooking.paymentCodeUrl = paymentCheckout.codeUrl;
      nextBooking.paymentQrCodeDataUrl = paymentCheckout.qrCodeDataUrl;
      nextBooking.paymentCreatedAt = paymentCheckout.createdAt;
      nextBooking.wechatTradeState = "NOTPAY";
      upsertPaymentRecord(db, {
        orderId: paymentCheckout.orderId,
        bookingId: nextBooking.id,
        provider: "wechat",
        mode: "native",
        status: "NOTPAY",
        paymentStatus: "待微信支付",
        amountCents: paymentCheckout.amountCents,
        codeUrl: paymentCheckout.codeUrl,
        createdAt: paymentCheckout.createdAt,
        updatedAt: paymentCheckout.createdAt
      });
    }
    db.bookings.unshift(nextBooking);
    db.bookings = db.bookings.slice(0, 1000);
    writeDb(db);
    audit(req, "booking_created", {
      bookingId: nextBooking.id,
      orderId: nextBooking.orderId,
      coachName: nextBooking.coachName,
      date: nextBooking.date,
      slot: nextBooking.slot
    });
    sendJson(res, 201, sanitizeStaffBooking(nextBooking));
    return;
  }

  const paymentStatusMatch = url.pathname.match(/^\/api\/payments\/status\/([^/]+)$/);
  if (paymentStatusMatch && req.method === "GET") {
    const orderId = decodeURIComponent(paymentStatusMatch[1]);
    let booking = db.bookings.find((item) => item.orderId === orderId);
    if (!booking) {
      sendJson(res, 404, { error: "没有找到支付订单" });
      return;
    }
    if (booking.paymentProvider === "wechat" && booking.paymentStatus !== "已支付") {
      try {
        const trade = await queryWechatPayment(orderId);
        booking = updateBookingPaymentFromTrade(db, orderId, trade) || booking;
        writeDb(db);
      } catch (error) {
        if (error.statusCode !== 404) {
          sendJson(res, error.statusCode || 502, {
            error: error.message || "支付状态查询失败",
            booking: sanitizePaymentStatusBooking(booking)
          });
          return;
        }
      }
    }
    sendJson(res, 200, { ok: true, booking: sanitizePaymentStatusBooking(booking) });
    return;
  }

  if (url.pathname === "/api/payments/wechat/notify" && req.method === "POST") {
    const rawBody = await readRawBody(req);
    const config = loadPaymentConfig();
    if (!verifyWechatNotifySignature(req, rawBody, config)) {
      audit(req, "wechat_payment_notify_rejected", { reason: "signature_failed" });
      sendJson(res, 401, { code: "FAIL", message: "signature failed" });
      return;
    }
    try {
      const payload = JSON.parse(rawBody || "{}");
      const trade = decryptWechatResource(payload.resource || {}, config);
      const orderId = trade.out_trade_no;
      const booking = updateBookingPaymentFromTrade(db, orderId, trade);
      writeDb(db);
      audit(req, "wechat_payment_notify", {
        orderId,
        bookingId: booking?.id || "",
        tradeState: trade.trade_state || "",
        transactionId: trade.transaction_id || ""
      });
      sendJson(res, 200, { code: "SUCCESS", message: "成功" });
      return;
    } catch (error) {
      audit(req, "wechat_payment_notify_failed", { error: error.message });
      sendJson(res, 400, { code: "FAIL", message: error.message || "notify failed" });
      return;
    }
  }

  const bookingMatch = url.pathname.match(/^\/api\/bookings\/([^/]+)$/);
  if (bookingMatch && (req.method === "PATCH" || req.method === "DELETE")) {
    const session = requireStaff(req, res);
    if (!session) return;
    const id = decodeURIComponent(bookingMatch[1]);
    const index = db.bookings.findIndex((booking) => booking.id === id);
    if (index === -1) {
      sendJson(res, 404, { error: "没有找到预约" });
      return;
    }

    if (req.method === "DELETE") {
      const [deleted] = db.bookings.splice(index, 1);
      writeDb(db);
      audit(req, "booking_deleted", { bookingId: id, customerName: deleted.name, coachName: deleted.coachName }, session);
      sendJson(res, 200, sanitizeStaffBooking(deleted));
      return;
    }

    const patch = await readBody(req);
    db.bookings[index] = {
      ...db.bookings[index],
      ...patch,
      id: db.bookings[index].id,
      updatedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };
    writeDb(db);
    audit(req, "booking_updated", { bookingId: id, patch }, session);
    sendJson(res, 200, sanitizeStaffBooking(db.bookings[index]));
    return;
  }

  if (url.pathname === "/api/support-threads" && req.method === "GET") {
    const session = requireStaff(req, res);
    if (!session) return;
    sendJson(res, 200, db.supportThreads.sort((a, b) => supportStamp(b) - supportStamp(a)));
    return;
  }

  if (url.pathname === "/api/support-threads" && req.method === "POST") {
    const thread = await readBody(req);
    if (!thread.id) thread.id = createId("cs");
    const index = db.supportThreads.findIndex((item) => item.id === thread.id);
    if (index >= 0) db.supportThreads[index] = { ...db.supportThreads[index], ...thread };
    else db.supportThreads.unshift(thread);
    db.supportThreads = db.supportThreads.slice(0, 500);
    writeDb(db);
    audit(req, index >= 0 ? "support_thread_updated_public" : "support_thread_created", {
      threadId: thread.id,
      name: thread.name || "",
      phoneMasked: maskPhone(thread.phone)
    });
    sendJson(res, index >= 0 ? 200 : 201, index >= 0 ? db.supportThreads[index] : thread);
    return;
  }

  if (url.pathname === "/api/support-threads/bulk" && req.method === "PUT") {
    const session = requireStaff(req, res);
    if (!session) return;
    const threads = await readBody(req);
    if (!Array.isArray(threads)) {
      sendJson(res, 400, { error: "客服数据格式不正确" });
      return;
    }
    threads.forEach((thread) => {
      if (!thread.id) return;
      const index = db.supportThreads.findIndex((item) => item.id === thread.id);
      if (index >= 0) db.supportThreads[index] = { ...db.supportThreads[index], ...thread };
      else db.supportThreads.unshift(thread);
    });
    db.supportThreads = db.supportThreads.sort((a, b) => supportStamp(b) - supportStamp(a)).slice(0, 500);
    writeDb(db);
    audit(req, "support_threads_bulk_updated", { count: threads.length }, session);
    sendJson(res, 200, db.supportThreads);
    return;
  }

  const supportMatch = url.pathname.match(/^\/api\/support-threads\/([^/]+)$/);
  if (supportMatch && req.method === "PATCH") {
    const session = requireStaff(req, res);
    if (!session) return;
    const id = decodeURIComponent(supportMatch[1]);
    const index = db.supportThreads.findIndex((thread) => thread.id === id);
    if (index === -1) {
      sendJson(res, 404, { error: "没有找到客服咨询" });
      return;
    }
    const patch = await readBody(req);
    db.supportThreads[index] = {
      ...db.supportThreads[index],
      ...patch,
      id: db.supportThreads[index].id,
      updatedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };
    writeDb(db);
    audit(req, "support_thread_updated", { threadId: id, patch }, session);
    sendJson(res, 200, db.supportThreads[index]);
    return;
  }

  sendJson(res, 404, { error: "API not found" });
}

function serveStatic(req, res, url) {
  const decodedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stat) => {
    if (error || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    const range = req.headers.range;

    if (range && ext === ".mp4") {
      const match = range.match(/bytes=(\d*)-(\d*)/);
      const start = match && match[1] ? Number(match[1]) : 0;
      const end = match && match[2] ? Number(match[2]) : stat.size - 1;
      const chunkSize = end - start + 1;
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": contentType
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }

    res.writeHead(200, {
      "Content-Length": stat.size,
      "Content-Type": contentType,
      "Cache-Control": ext === ".html" || ext === ".js" || ext === ".css" ? "no-cache" : "public, max-age=3600"
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    if (["/staff.html", "/sms-setup.html"].includes(url.pathname) && !getStaffSession(req)) {
      res.writeHead(302, { Location: `/login.html?next=${encodeURIComponent(url.pathname)}` });
      res.end();
      return;
    }
    if ((url.pathname === "/login.html" || url.pathname === "/login") && getStaffSession(req)) {
      res.writeHead(302, { Location: "/staff.html" });
      res.end();
      return;
    }
    serveStatic(req, res, url);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error" });
  }
});

server.listen(port, "0.0.0.0", () => {
  ensureDb();
  console.log(`Liwutang booking system running at http://localhost:${port}`);
  console.log(`Customer: http://localhost:${port}/index.html`);
  console.log(`Staff:    http://localhost:${port}/staff.html`);
});
