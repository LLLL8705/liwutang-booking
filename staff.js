const BOOKING_KEY = "wushuBookings";
const STAFF_SEEN_KEY = "wushuStaffSeenBookingIds";
const SUPPORT_THREADS_KEY = "wushuSupportThreads";
const apiEnabled = window.location.protocol !== "file:";
const HOME_TEACHING_NOTE = "可上门教学：西城区、东城区、海淀区、朝阳区、丰台区10公里内可上门教学";
const FIXED_TEACHING_NOTE = "定点授课：具体训练场地由工作人员电话确认";

const coaches = [
  {
    id: "zhang",
    nameCn: "张清淳",
    nameEn: "Zhang Qingchun",
    program: "剑术枪术八卦掌",
    title: "剑术、枪术与八卦掌冠军教练",
    schedule: {
      0: ["10:00", "15:30", "20:00"],
      1: ["09:30", "14:30", "19:30"],
      2: ["10:30", "16:00", "20:00"],
      3: ["09:30", "15:00", "19:30"],
      4: ["10:00", "16:30", "20:00"],
      5: ["09:00", "11:30", "15:30"],
      6: ["10:00", "14:30", "17:00"]
    }
  },
  {
    id: "zhu",
    nameCn: "朱万博",
    nameEn: "Zhu Wanbo",
    program: "南拳与南派器械",
    title: "南拳与器械套路教练",
    schedule: {
      0: ["10:00", "14:30", "19:30"],
      1: ["09:30", "15:30", "20:00"],
      2: ["10:30", "16:00", "19:30"],
      3: ["09:30", "14:30", "20:00"],
      4: ["10:00", "15:30", "19:30"],
      5: ["09:30", "11:30", "16:00"],
      6: ["10:00", "14:00", "16:30"]
    }
  },
  {
    id: "guo",
    nameCn: "郭子嘉",
    nameEn: "Guo Zijia",
    program: "太极拳与形意拳",
    title: "太极拳与形意拳冠军教练",
    schedule: {
      0: ["10:30", "15:00", "19:30"],
      1: ["09:30", "14:30", "20:00"],
      2: ["10:00", "16:00", "19:30"],
      3: ["09:30", "15:30", "20:00"],
      4: ["10:30", "16:00", "19:30"],
      5: ["09:30", "11:30", "15:30"],
      6: ["10:00", "14:30", "16:30"]
    }
  },
  {
    id: "li",
    nameCn: "李政翰",
    nameEn: "Li Zhenghan",
    program: "竞技武术套路",
    title: "竞技武术套路教练",
    schedule: {
      0: ["10:30", "15:30", "19:30"],
      1: ["09:30", "14:30", "20:00"],
      2: ["10:00", "16:00", "19:30"],
      3: ["09:30", "15:30", "20:00"],
      4: ["10:30", "16:00", "19:30"],
      5: ["09:00", "11:00", "15:30"],
      6: ["09:30", "14:00", "16:30"]
    }
  }
];

const statusOptions = ["待支付", "待跟进", "已联系", "已确认", "已完成", "已取消"];
const weekdayLabels = ["周日 Sun", "周一 Mon", "周二 Tue", "周三 Wed", "周四 Thu", "周五 Fri", "周六 Sat"];

const state = {
  bookings: [],
  supportThreads: [],
  auditLogs: [],
  seenIds: new Set(),
  knownIds: new Set(),
  knownSupportIds: new Set(),
  coach: "全部",
  date: "",
  status: "全部",
  search: "",
  notificationsEnabled: false
};

const staffStats = document.querySelector("#staffStats");
const coachFilter = document.querySelector("#coachFilter");
const dateFilter = document.querySelector("#dateFilter");
const statusFilter = document.querySelector("#statusFilter");
const staffSearch = document.querySelector("#staffSearch");
const coachBoard = document.querySelector("#coachBoard");
const messageList = document.querySelector("#messageList");
const staffBookingList = document.querySelector("#staffBookingList");
const scheduleTitle = document.querySelector("#scheduleTitle");
const scheduleDateBadge = document.querySelector("#scheduleDateBadge");
const unreadBadge = document.querySelector("#unreadBadge");
const listCount = document.querySelector("#listCount");
const staffToast = document.querySelector("#staffToast");
const enableNotify = document.querySelector("#enableNotify");
const refreshDesk = document.querySelector("#refreshDesk");
const copyDaySummary = document.querySelector("#copyDaySummary");
const exportStaffCsv = document.querySelector("#exportStaffCsv");
const logoutStaff = document.querySelector("#logoutStaff");
const todayOnly = document.querySelector("#todayOnly");
const allDates = document.querySelector("#allDates");
const markAllRead = document.querySelector("#markAllRead");
const supportThreadCount = document.querySelector("#supportThreadCount");
const supportThreadList = document.querySelector("#supportThreadList");
const markAllSupportHandled = document.querySelector("#markAllSupportHandled");
const auditList = document.querySelector("#auditList");
const auditCount = document.querySelector("#auditCount");

function todayValue() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value) {
  return new Date(`${value || todayValue()}T00:00:00`);
}

function weekdayOf(value) {
  return parseDate(value).getDay();
}

function humanDate(value) {
  const date = parseDate(value);
  return `${date.getMonth() + 1}/${date.getDate()} ${weekdayLabels[date.getDay()]}`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function maskSensitive(value, visibleStart = 3, visibleEnd = 4) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (text.length <= visibleStart + visibleEnd) return text.replace(/.(?=.{2})/g, "*");
  return `${text.slice(0, visibleStart)}${"*".repeat(Math.max(4, text.length - visibleStart - visibleEnd))}${text.slice(-visibleEnd)}`;
}

function displayIdCard(booking) {
  return booking.idCardMasked || maskSensitive(booking.idCard, 3, 4) || "签约/付款后补充";
}

function displayPhone(booking) {
  return booking.phoneMasked || maskSensitive(booking.phone, 3, 4) || "";
}

function loadBookings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(BOOKING_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function apiRequest(path, options = {}) {
  if (!apiEnabled) return null;
  const response = await fetch(path, {
    ...options,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401) {
      window.location.href = `/login.html?next=${encodeURIComponent(window.location.pathname)}`;
      return null;
    }
    throw new Error(payload?.error || "接口请求失败");
  }
  return payload;
}

async function loadBookingsFromServer() {
  if (!apiEnabled) return null;
  try {
    const bookings = await apiRequest("/api/bookings");
    return Array.isArray(bookings) ? bookings : null;
  } catch {
    return null;
  }
}

function saveBookings() {
  localStorage.setItem(BOOKING_KEY, JSON.stringify(state.bookings));
}

function loadSupportThreads() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SUPPORT_THREADS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function loadSupportThreadsFromServer() {
  if (!apiEnabled) return null;
  try {
    const threads = await apiRequest("/api/support-threads");
    return Array.isArray(threads) ? threads : null;
  } catch {
    return null;
  }
}

function saveSupportThreads() {
  localStorage.setItem(SUPPORT_THREADS_KEY, JSON.stringify(state.supportThreads));
  if (apiEnabled) {
    apiRequest("/api/support-threads/bulk", {
      method: "PUT",
      body: JSON.stringify(state.supportThreads)
    }).catch(() => {});
  }
}

function loadSeenIds() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STAFF_SEEN_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveSeenIds() {
  localStorage.setItem(STAFF_SEEN_KEY, JSON.stringify([...state.seenIds]));
}

function bookingStamp(booking) {
  const idTime = String(booking.id || "").match(/bk-(\d+)/);
  return Number(idTime?.[1]) || Date.parse(booking.createdAt || "") || 0;
}

function sortBookings(bookings) {
  return [...bookings].sort((a, b) => bookingStamp(b) - bookingStamp(a));
}

function supportStamp(thread) {
  return Date.parse(thread.updatedAt || thread.createdAt || "") || 0;
}

function sortSupportThreads(threads) {
  return [...threads].sort((a, b) => supportStamp(b) - supportStamp(a));
}

function getCoachById(id) {
  return coaches.find((coach) => coach.id === id) || null;
}

function getCoachForBooking(booking) {
  return getCoachById(booking.coachId) || coaches.find((coach) => String(booking.coachName || "").includes(coach.nameCn)) || null;
}

function coachLabel(coach) {
  return `${coach.nameCn} ${coach.nameEn}`;
}

function getSlotCapacity(slot) {
  const hour = Number(String(slot).split(":")[0]);
  return hour >= 18 ? 2 : 3;
}

function getServiceModeLabel(mode) {
  return mode === "home" ? "上门教学" : "定点授课";
}

function bookingLocationText(booking = {}) {
  const serviceMode = booking.serviceMode || (booking.serviceAddress ? "home" : "");
  const serviceModeLabel = booking.serviceModeLabel || (serviceMode ? getServiceModeLabel(serviceMode) : "");

  if (serviceMode === "home" || booking.serviceAddress) {
    return `${serviceModeLabel || "上门教学"}；${booking.homeTeachingNote || HOME_TEACHING_NOTE}；具体位置：${booking.serviceAddress || "未填写"}`;
  }

  if (serviceMode === "fixed") {
    return booking.homeTeachingNote || FIXED_TEACHING_NOTE;
  }

  return booking.homeTeachingNote || HOME_TEACHING_NOTE;
}

function sameCoachBooking(booking, coach) {
  if (booking.coachId) return booking.coachId === coach.id;
  return String(booking.coachName || "").includes(coach.nameCn);
}

function activeBookings() {
  return state.bookings.filter((booking) => booking.status !== "已取消");
}

function slotBookings(coach, dateValue, slot) {
  return activeBookings().filter((booking) => sameCoachBooking(booking, coach) && booking.date === dateValue && booking.slot === slot);
}

function filteredBookings() {
  const query = normalize(state.search);
  return sortBookings(state.bookings).filter((booking) => {
    const coach = getCoachForBooking(booking);
    const coachMatch = state.coach === "全部" || booking.coachId === state.coach || coach?.id === state.coach;
    const dateMatch = !state.date || booking.date === state.date;
    const statusMatch = state.status === "全部" || booking.status === state.status;
    const text = normalize([
      booking.name,
      booking.phone,
      booking.idCardMasked,
      booking.coachName,
      booking.program,
      booking.programName,
      booking.serviceModeLabel,
      booking.serviceAddress,
      booking.goal,
      booking.ideas,
      booking.homeTeachingNote,
      booking.status
    ].join(" "));
    return coachMatch && dateMatch && statusMatch && (!query || text.includes(query));
  });
}

function unreadBookings() {
  return state.bookings.filter((booking) => booking.id && !state.seenIds.has(booking.id));
}

function renderCoachOptions() {
  coachFilter.innerHTML = [
    `<option value="全部">全部教练 All Coaches</option>`,
    ...coaches.map((coach) => `<option value="${coach.id}">${coach.nameCn} ${coach.nameEn}</option>`)
  ].join("");
}

function renderStats() {
  const today = todayValue();
  const visibleDate = state.date || today;
  const total = state.bookings.length;
  const todayCount = activeBookings().filter((booking) => booking.date === today).length;
  const selectedDateCount = activeBookings().filter((booking) => booking.date === visibleDate).length;
  const pendingCount = state.bookings.filter((booking) => ["待支付", "待跟进"].includes(booking.status)).length;
  const unreadCount = unreadBookings().length;
  const supportPendingCount = state.supportThreads.filter((thread) => thread.status === "待处理").length;

  staffStats.innerHTML = [
    { label: "全部预约 Total", value: total, meta: "累计记录" },
    { label: "今日预约 Today", value: todayCount, meta: humanDate(today) },
    { label: "筛选日期人数 Selected Date", value: selectedDateCount, meta: humanDate(visibleDate) },
    { label: "待处理消息 Pending", value: pendingCount + unreadCount + supportPendingCount, meta: `${pendingCount} 预约 · ${supportPendingCount} 咨询 · ${unreadCount} 未读` }
  ]
    .map((item) => `
      <article>
        <span>${item.label}</span>
        <strong>${item.value}</strong>
        <em>${item.meta}</em>
      </article>
    `)
    .join("");
}

function renderCoachBoard() {
  const scheduleDate = state.date || todayValue();
  const weekday = weekdayOf(scheduleDate);
  const visibleCoaches = state.coach === "全部" ? coaches : coaches.filter((coach) => coach.id === state.coach);

  scheduleTitle.textContent = state.date ? "预约人数与时间段" : "全部日期筛选中，时间段显示今日";
  scheduleDateBadge.textContent = humanDate(scheduleDate);

  coachBoard.innerHTML = visibleCoaches
    .map((coach) => {
      const slots = coach.schedule[weekday] || [];
      const coachBookings = activeBookings().filter((booking) => sameCoachBooking(booking, coach) && booking.date === scheduleDate);
      const slotRows = slots.length
        ? slots.map((slot) => {
            const bookings = slotBookings(coach, scheduleDate, slot);
            const capacity = getSlotCapacity(slot);
            const names = bookings.map((booking) => booking.name).filter(Boolean).join("、") || "暂无预约";
            const fullClass = bookings.length >= capacity ? "is-full" : bookings.length ? "is-busy" : "";
            return `
              <div class="slot-item ${fullClass}">
                <span class="slot-time">${slot}</span>
                <span class="slot-names">${escapeHTML(names)}</span>
                <strong class="slot-count">${bookings.length}/${capacity} 人</strong>
              </div>
            `;
          }).join("")
        : `<div class="empty-state">当天无可约时间段</div>`;

      return `
        <article class="coach-card">
          <div class="coach-card-head">
            <div>
              <h3>${coach.nameCn}</h3>
              <p>${coach.program} · ${coach.title}</p>
            </div>
            <div class="coach-total">
              <strong>${coachBookings.length}</strong>
              <span>预约</span>
            </div>
          </div>
          <div class="slot-list">${slotRows}</div>
          <div class="card-actions">
            <button class="ghost-btn light" type="button" data-copy-coach="${coach.id}">复制给教练</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function bookingMessage(booking) {
  return [
    "【砺武堂新预约】",
    `预约编号：${booking.id || "未生成"}`,
    `订单编号：${booking.orderId || "未生成"}`,
    `学员：${booking.name || "未填写"}`,
    `电话：${booking.phone || "未填写"}`,
    `身份证号：${displayIdCard(booking)}`,
    `年龄/性别：${booking.age || "未填"} / ${booking.gender || "未填"}`,
    `监护人：${booking.guardianName || "无"} ${booking.guardianPhone || ""}`,
    `紧急联系人：${booking.emergencyName || "未填写"} ${booking.emergencyPhone || ""}`,
    `身体情况：${booking.healthHistory || "未填写"}`,
    `教练：${booking.coachName || ""}`,
    `课程：${booking.program || booking.programName || ""}`,
    `时间：${booking.dateLabel || booking.date || ""} ${booking.day || ""} ${booking.slot || ""}`,
    `上课方式：${bookingLocationText(booking)}`,
    `定金/支付：${booking.paymentAmount || ""} · ${booking.paymentMethodLabel || ""} · ${booking.paymentStatus || "待支付/待核销"}`,
    booking.wechatTransactionId ? `微信交易号：${booking.wechatTransactionId}` : "",
    booking.paidAt ? `支付完成时间：${booking.paidAt}` : "",
    `手机验证：${booking.phoneVerifiedAt ? `已确认（${booking.phoneVerifiedAt}）` : "未确认"}`,
    `安全确认：${booking.riskAcknowledged ? "已确认训练风险" : "未确认"}`,
    `目标：${booking.goal || "未填写"}`,
    `想法：${booking.ideas || "无"}`,
    `服务协议：${booking.agreementAccepted ? `已阅读并同意《${booking.agreementName || "武术私教服务协议"}》（乙方教练：${booking.agreementCoachName || booking.coachName || "未记录"}）` : "未确认"}`,
    `协议打开时间：${booking.agreementOpenedAt || "未记录"}`,
    `协议确认时间：${booking.agreementConfirmedAt || booking.agreementAt || "未记录"}`,
    `确认声明：${booking.agreementConfirmationText || "未记录"}`,
    `状态：${booking.status || "待跟进"}`
  ].join("\n");
}

function agreementRecordText(booking) {
  return [
    "砺武堂武术私教服务协议确认记录",
    "",
    `预约编号：${booking.id || "未生成"}`,
    `订单编号：${booking.orderId || "未生成"}`,
    `顾客姓名：${booking.name || "未填写"}`,
    `联系电话：${booking.phone || "未填写"}`,
    `身份证号：${displayIdCard(booking)}`,
    `手机验证：${booking.phoneVerifiedAt ? `已确认（${booking.phoneVerifiedAt}，手机号：${booking.phoneVerifiedPhone || booking.phone || ""}）` : "未确认"}`,
    "",
    `预约教练：${booking.coachName || ""}`,
    `课程项目：${booking.program || booking.programName || ""}`,
    `预约时间：${booking.dateLabel || booking.date || ""} ${booking.day || ""} ${booking.slot || ""}`,
    `上课地点：${bookingLocationText(booking)}`,
    `价格：${booking.price || ""}`,
    `定金/支付：${booking.paymentAmount || ""} · ${booking.paymentMethodLabel || ""} · ${booking.paymentStatus || "待支付/待核销"}`,
    booking.wechatTransactionId ? `微信交易号：${booking.wechatTransactionId}` : "",
    booking.paidAt ? `支付完成时间：${booking.paidAt}` : "",
    "",
    `监护人：${booking.guardianName || "无"} ${booking.guardianPhone || ""}`,
    `紧急联系人：${booking.emergencyName || "未填写"} ${booking.emergencyPhone || ""}`,
    `身体情况：${booking.healthHistory || "未填写"}`,
    `安全确认：${booking.riskAcknowledged ? "已确认训练风险" : "未确认"}`,
    "",
    `协议名称：${booking.agreementName || "武术私教服务协议"}`,
    `协议版本：${booking.agreementVersion || "未记录"}`,
    `政策版本：${booking.policyVersion || "未记录"}`,
    `协议乙方教练：${booking.agreementCoachName || booking.coachName || "未记录"}`,
    `协议打开时间：${booking.agreementOpenedAt || "未记录"}`,
    `协议确认时间：${booking.agreementConfirmedAt || booking.agreementAt || "未记录"}`,
    `确认动作：${booking.agreementConfirmAction || "顾客点击协议确认按钮"}`,
    `确认声明：${booking.agreementConfirmationText || "我已完整阅读并理解安全风险、取消规则、上门范围等内容，自愿确认并提交本次预约。"}`,
    "",
    `取消规则：${booking.cancellationPolicyText || "未记录"}`,
    `退款规则：${booking.refundPolicyText || "未记录"}`,
    `安全规则：${booking.safetyPolicyText || "未记录"}`,
    "",
    `训练目标：${booking.goal || "未填写"}`,
    `其他想法：${booking.ideas || "无"}`,
    `提交IP：${booking.submittedIp || "服务器记录"}`,
    `证据创建时间：${booking.evidenceCreatedAt || ""}`,
    `记录创建时间：${booking.createdAt || ""}`,
    `记录更新时间：${booking.updatedAt || ""}`,
    "",
    booking.agreementSnapshotText ? `协议文本快照：\n${booking.agreementSnapshotText}` : ""
  ].filter(Boolean).join("\n");
}

function coachDayMessage(coachId) {
  const coach = getCoachById(coachId);
  const dateValue = state.date || todayValue();
  if (!coach) return "";

  const bookings = activeBookings().filter((booking) => sameCoachBooking(booking, coach) && booking.date === dateValue);
  const weekday = weekdayOf(dateValue);
  const lines = [
    `【砺武堂教练预约表】`,
    `${coach.nameCn}教练 · ${humanDate(dateValue)} · 共${bookings.length}人`,
    ""
  ];

  (coach.schedule[weekday] || []).forEach((slot) => {
    const current = slotBookings(coach, dateValue, slot);
    const capacity = getSlotCapacity(slot);
    lines.push(`${slot}：${current.length}/${capacity}人`);
    current.forEach((booking) => {
      lines.push(`- ${booking.name || "未填姓名"} ${booking.phone || ""} · ${booking.programName || booking.program || ""} · ${bookingLocationText(booking)} · ${booking.status || "待跟进"}`);
    });
  });

  if (!bookings.length) lines.push("今日暂无预约。");
  return lines.join("\n");
}

function daySummaryMessage() {
  const dateValue = state.date || todayValue();
  const lines = [`【砺武堂预约总表】${humanDate(dateValue)}`];
  coaches.forEach((coach) => {
    lines.push("", coachDayMessage(coach.id));
  });
  return lines.join("\n");
}

function renderMessages() {
  const messages = sortBookings(state.bookings).slice(0, 12);
  const unreadCount = unreadBookings().length;
  unreadBadge.textContent = unreadCount ? `${unreadCount} 条未读` : "已读";

  if (!messages.length) {
    messageList.innerHTML = `<div class="empty-state">暂无预约消息。顾客提交预约成功后会显示在这里；如果刚刚预约，请点右上角“刷新”，后台也会每3秒自动同步。</div>`;
    return;
  }

  messageList.innerHTML = messages
    .map((booking) => {
      const unread = booking.id && !state.seenIds.has(booking.id);
      return `
        <article class="message-card ${unread ? "is-unread" : ""}">
          <h3>${unread ? "新预约 · " : ""}${escapeHTML(booking.name || "未填姓名")}</h3>
          <div class="message-meta">
            <span>${escapeHTML(booking.coachName || "")}</span>
            <span>身份证：${escapeHTML(displayIdCard(booking))}</span>
            <span>${escapeHTML(`${booking.dateLabel || booking.date || ""} ${booking.day || ""} ${booking.slot || ""}`)}</span>
            <span>${escapeHTML(bookingLocationText(booking))}</span>
            <span>${escapeHTML(booking.status || "待跟进")}</span>
            <span>${booking.agreementAccepted ? `协议已确认：${escapeHTML(booking.agreementCoachName || booking.coachName || "")}` : "协议未确认"}</span>
          </div>
          <p>${escapeHTML(booking.program || booking.programName || "")}<br />${escapeHTML(booking.phone || "")} · ${escapeHTML(booking.goal || "未填写目标")}</p>
          <div class="card-actions">
            <button class="ghost-btn light" type="button" data-copy-booking="${escapeHTML(booking.id)}">复制消息</button>
            <button class="ghost-btn light" type="button" data-export-agreement="${escapeHTML(booking.id)}">导出协议记录</button>
            <button class="ghost-btn light" type="button" data-status-id="${escapeHTML(booking.id)}" data-status-value="已联系">标记已联系</button>
            <button class="ghost-btn light" type="button" data-mark-read="${escapeHTML(booking.id)}">已读</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function supportThreadMessage(thread) {
  const messages = thread.messages || [];
  const latestUser = [...messages].reverse().find((message) => message.role === "user");
  return [
    "【砺武堂客服咨询】",
    `客户：${thread.name || "未留姓名"}`,
    `电话：${thread.phone || "未留电话"}`,
    `身份证号：${thread.idCard || "未留身份证号"}`,
    `状态：${thread.status || "待处理"}`,
    `年龄/性别：${thread.age || "未填"} / ${thread.gender || "未填"}`,
    `意向项目：${thread.program || "未填写"}`,
    `训练目标：${thread.goal || "未填写"}`,
    `最新问题：${latestUser?.text || "无"}`,
    `更新时间：${thread.updatedAt || thread.createdAt || ""}`
  ].join("\n");
}

function renderSupportThreads() {
  if (!supportThreadList || !supportThreadCount) return;
  const threads = sortSupportThreads(state.supportThreads);
  const pendingCount = threads.filter((thread) => thread.status === "待处理").length;
  supportThreadCount.textContent = `${pendingCount} 待处理 / ${threads.length} 条咨询`;

  if (!threads.length) {
    supportThreadList.innerHTML = `<div class="empty-state">暂无客服咨询。顾客在右下角客服里提问后会显示在这里。</div>`;
    return;
  }

  supportThreadList.innerHTML = threads
    .map((thread) => {
      const messages = (thread.messages || []).slice(-4);
      const pendingClass = thread.status === "待处理" ? "is-pending" : "";
      return `
        <article class="support-thread-card ${pendingClass}">
          <div>
            <div class="support-thread-head">
              <div>
                <h3>${escapeHTML(thread.name || "未留姓名")}</h3>
                <p>${escapeHTML(thread.phone || "未留电话")} · ${escapeHTML(thread.updatedAt || thread.createdAt || "")}</p>
              </div>
              <span class="status-pill">${escapeHTML(thread.status || "待处理")}</span>
            </div>
            <div class="message-meta">
              <span>${escapeHTML(thread.age || "年龄未填")}</span>
              <span>${escapeHTML(thread.gender || "性别未填")}</span>
              <span>身份证：${escapeHTML(thread.idCard || "未填")}</span>
              <span>${escapeHTML(thread.program || "项目未填")}</span>
            </div>
            <p>目标：${escapeHTML(thread.goal || "未填写")}；想法：${escapeHTML(thread.ideas || "无")}</p>
            <div class="support-dialogue">
              ${messages
                .map((message) => `<p><strong>${message.role === "user" ? "顾客" : "AI客服"}：</strong>${escapeHTML(message.text || "")}</p>`)
                .join("")}
            </div>
          </div>
          <div class="support-thread-actions">
            <select class="status-select" data-support-status-select="${escapeHTML(thread.id)}">
              ${["待处理", "已自动回复", "已处理"].map((status) => `<option value="${status}" ${status === thread.status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
            <button class="ghost-btn light" type="button" data-copy-support="${escapeHTML(thread.id)}">复制咨询</button>
            <button class="ghost-btn light" type="button" data-support-status-id="${escapeHTML(thread.id)}" data-support-status-value="已处理">标记已处理</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderBookingList() {
  const bookings = filteredBookings();
  listCount.textContent = `${bookings.length} 条`;

  if (!bookings.length) {
    staffBookingList.innerHTML = state.bookings.length
      ? `<div class="empty-state">已有预约记录，但被当前筛选条件隐藏。请点“全部日期”，或清空教练、状态、搜索条件后查看。</div>`
      : `<div class="empty-state">暂无预约记录。顾客确认预约后，后台会自动同步；也可以点右上角“刷新”。</div>`;
    return;
  }

  staffBookingList.innerHTML = bookings
    .map((booking) => `
      <article class="booking-row">
        <div>
          <div class="booking-row-head">
            <h3>${escapeHTML(booking.name || "未填姓名")}</h3>
            <span class="status-pill">${escapeHTML(booking.status || "待跟进")}</span>
          </div>
          <div class="booking-meta">
            <span>${escapeHTML(booking.phone || "")}</span>
            <span>身份证：${escapeHTML(displayIdCard(booking))}</span>
            <span>${escapeHTML(booking.coachName || "")}</span>
            <span>${escapeHTML(`${booking.dateLabel || booking.date || ""} ${booking.day || ""} ${booking.slot || ""}`)}</span>
            <span>${escapeHTML(booking.price || "")}</span>
            <span>${escapeHTML(`${booking.paymentAmount || ""} ${booking.paymentStatus || "待支付/待核销"}`)}</span>
            <span>${escapeHTML(bookingLocationText(booking))}</span>
            <span>${escapeHTML(booking.guardianName ? `监护人：${booking.guardianName}` : "非未成年/未填监护人")}</span>
            <span>${escapeHTML(booking.riskAcknowledged ? "安全风险已确认" : "安全风险未确认")}</span>
            <span>${booking.agreementAccepted ? `协议已确认：${escapeHTML(booking.agreementCoachName || booking.coachName || "")}` : "协议未确认"}</span>
            <span>${booking.phoneVerifiedAt ? `手机已确认：${escapeHTML(booking.phoneVerifiedAt)}` : "手机未确认"}</span>
            <span>${booking.agreementConfirmedAt || booking.agreementAt ? `协议确认：${escapeHTML(booking.agreementConfirmedAt || booking.agreementAt || "")}` : "协议未确认"}</span>
          </div>
          <p>${escapeHTML(booking.program || booking.programName || "")}<br />目标：${escapeHTML(booking.goal || "未填写")}；想法：${escapeHTML(booking.ideas || "无")}</p>
        </div>
        <div class="row-actions">
          <select class="status-select" data-status-select="${escapeHTML(booking.id)}">
            ${statusOptions.map((status) => `<option value="${status}" ${status === booking.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
          <button class="ghost-btn light" type="button" data-copy-booking="${escapeHTML(booking.id)}">复制</button>
          <button class="ghost-btn light" type="button" data-export-agreement="${escapeHTML(booking.id)}">协议记录</button>
          <button class="ghost-btn light" type="button" data-mark-read="${escapeHTML(booking.id)}">已读</button>
        </div>
      </article>
    `)
    .join("");
}

function renderAuditLogs() {
  if (!auditList || !auditCount) return;
  auditCount.textContent = `${state.auditLogs.length} 条`;
  if (!state.auditLogs.length) {
    auditList.innerHTML = `<div class="empty-state">暂无操作日志。</div>`;
    return;
  }

  auditList.innerHTML = state.auditLogs.slice(0, 80).map((log) => `
    <article class="audit-row">
      <div>
        <strong>${escapeHTML(log.action || "operation")}</strong>
        <span>${escapeHTML(log.createdAt || "")} · ${escapeHTML(log.actor || "")} · ${escapeHTML(log.ip || "")}</span>
      </div>
      <p>${escapeHTML(JSON.stringify(log.detail || {}))}</p>
    </article>
  `).join("");
}

function renderAll() {
  renderStats();
  renderCoachBoard();
  renderMessages();
  renderSupportThreads();
  renderBookingList();
  renderAuditLogs();
}

async function refreshBookings(notify = false) {
  const serverBookings = await loadBookingsFromServer();
  const nextBookings = sortBookings(serverBookings || loadBookings());
  const nextIds = new Set(nextBookings.map((booking) => booking.id).filter(Boolean));
  const newBookings = nextBookings.filter((booking) => booking.id && !state.knownIds.has(booking.id));

  state.bookings = nextBookings;
  localStorage.setItem(BOOKING_KEY, JSON.stringify(state.bookings));
  state.knownIds = nextIds;
  renderAll();

  if (notify && newBookings.length) {
    announceNewBookings(newBookings);
  }
}

async function refreshSupportThreads(notify = false) {
  const serverThreads = await loadSupportThreadsFromServer();
  const nextThreads = sortSupportThreads(serverThreads || loadSupportThreads());
  const nextIds = new Set(nextThreads.map((thread) => thread.id).filter(Boolean));
  const newThreads = nextThreads.filter((thread) => thread.id && !state.knownSupportIds.has(thread.id));

  state.supportThreads = nextThreads;
  localStorage.setItem(SUPPORT_THREADS_KEY, JSON.stringify(state.supportThreads));
  state.knownSupportIds = nextIds;
  renderStats();
  renderSupportThreads();

  if (notify && newThreads.length) {
    announceNewSupportThreads(newThreads);
  }
}

async function refreshAuditLogs() {
  if (!apiEnabled) return;
  try {
    const logs = await apiRequest("/api/audit-logs");
    state.auditLogs = Array.isArray(logs) ? logs : [];
    renderAuditLogs();
  } catch {
    // apiRequest handles login redirects.
  }
}

function recordAudit(action, detail = {}) {
  if (!apiEnabled) return;
  apiRequest("/api/audit-logs", {
    method: "POST",
    body: JSON.stringify({ action, detail })
  }).then(refreshAuditLogs).catch(() => {});
}

function showToast(message) {
  staffToast.textContent = message;
  staffToast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => staffToast.classList.remove("is-visible"), 2400);
}

function copyText(text, message = "已复制") {
  const fallback = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast(message);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast(message)).catch(fallback);
    return;
  }

  fallback();
}

function downloadTextFile(filename, text) {
  const blob = new Blob([`\uFEFF${text}`], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

async function updateStatus(id, status) {
  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;
  booking.status = status;
  booking.updatedAt = new Date().toLocaleString("zh-CN", { hour12: false });
  saveBookings();
  if (apiEnabled) {
    try {
      await apiRequest(`/api/bookings/${encodeURIComponent(id)}`, {
        method: "PATCH",
        body: JSON.stringify({ status, updatedAt: booking.updatedAt })
      });
    } catch {
      showToast("服务器状态更新失败，已先保存在本机");
    }
  }
  await refreshBookings(false);
  showToast(`已更新为：${status}`);
}

async function updateSupportStatus(id, status) {
  const thread = state.supportThreads.find((item) => item.id === id);
  if (!thread) return;
  thread.status = status;
  thread.updatedAt = new Date().toLocaleString("zh-CN", { hour12: false });
  saveSupportThreads();
  if (apiEnabled) {
    try {
      await apiRequest(`/api/support-threads/${encodeURIComponent(id)}`, {
        method: "PATCH",
        body: JSON.stringify({ status, updatedAt: thread.updatedAt })
      });
    } catch {
      showToast("服务器客服状态更新失败，已先保存在本机");
    }
  }
  await refreshSupportThreads(false);
  showToast(`咨询已更新为：${status}`);
}

function markAllSupportThreadsHandled() {
  const now = new Date().toLocaleString("zh-CN", { hour12: false });
  state.supportThreads.forEach((thread) => {
    if (thread.status === "待处理") {
      thread.status = "已处理";
      thread.updatedAt = now;
    }
  });
  saveSupportThreads();
  refreshSupportThreads(false);
  showToast("客服咨询已全部标记处理");
}

function markRead(id) {
  if (!id) return;
  state.seenIds.add(id);
  saveSeenIds();
  renderMessages();
  renderStats();
  showToast("已标记已读");
}

function markAllBookingsRead() {
  state.bookings.forEach((booking) => {
    if (booking.id) state.seenIds.add(booking.id);
  });
  saveSeenIds();
  renderAll();
  showToast("全部消息已标记已读");
}

function exportCsv() {
  const rows = [
    ["编号", "订单编号", "姓名", "电话", "身份证号脱敏", "手机验证时间", "年龄", "性别", "监护人", "紧急联系人", "身体情况", "教练", "课程", "日期", "星期", "时间", "上课方式", "具体位置", "地点说明", "定金", "支付方式", "支付状态", "微信交易号", "支付完成时间", "状态", "服务协议", "协议乙方教练", "协议版本", "协议打开时间", "协议确认时间", "确认声明", "目标", "想法", "创建时间"],
    ...filteredBookings().map((booking) => [
      booking.id || "",
      booking.orderId || "",
      booking.name || "",
      booking.phone || "",
      displayIdCard(booking),
      booking.phoneVerifiedAt || "",
      booking.age || "",
      booking.gender || "",
      booking.guardianName || "",
      booking.emergencyName || "",
      booking.healthHistory || "",
      booking.coachName || "",
      booking.program || booking.programName || "",
      booking.date || "",
      booking.day || "",
      booking.slot || "",
      booking.serviceModeLabel || "",
      booking.serviceAddress || "",
      bookingLocationText(booking),
      booking.paymentAmount || "",
      booking.paymentMethodLabel || "",
      booking.paymentStatus || "",
      booking.wechatTransactionId || "",
      booking.paidAt || "",
      booking.status || "",
      booking.agreementAccepted ? "已阅读并同意" : "未确认",
      booking.agreementCoachName || "",
      booking.agreementVersion || "",
      booking.agreementOpenedAt || "",
      booking.agreementConfirmedAt || booking.agreementAt || "",
      booking.agreementConfirmationText || "",
      booking.goal || "",
      booking.ideas || "",
      booking.createdAt || ""
    ])
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `liwutang-staff-bookings-${state.date || todayValue()}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  recordAudit("staff_export_csv", { count: filteredBookings().length, date: state.date || "all" });
  showToast("预约表格已导出");
}

function announceNewBookings(bookings) {
  const first = bookings[0];
  showToast(`收到 ${bookings.length} 条新预约：${first.name || "新学员"} ${first.slot || ""}`);

  if (!state.notificationsEnabled || !("Notification" in window) || Notification.permission !== "granted") return;

  bookings.slice(0, 3).forEach((booking) => {
    new Notification("砺武堂新预约", {
      body: `${booking.name || "新学员"} · ${booking.coachName || ""} · ${booking.dateLabel || booking.date || ""} ${booking.slot || ""}`,
      tag: booking.id || `booking-${Date.now()}`
    });
  });
}

function announceNewSupportThreads(threads) {
  const first = threads[0];
  showToast(`收到 ${threads.length} 条客服咨询：${first.name || "未留姓名"}`);

  if (!state.notificationsEnabled || !("Notification" in window) || Notification.permission !== "granted") return;

  threads.slice(0, 3).forEach((thread) => {
    const latestUser = [...(thread.messages || [])].reverse().find((message) => message.role === "user");
    new Notification("砺武堂客服咨询", {
      body: `${thread.name || "未留姓名"} · ${thread.phone || "未留电话"} · ${latestUser?.text || "有新问题"}`,
      tag: thread.id || `support-${Date.now()}`
    });
  });
}

function setupEvents() {
  coachFilter.addEventListener("change", () => {
    state.coach = coachFilter.value;
    renderAll();
  });

  dateFilter.addEventListener("change", () => {
    state.date = dateFilter.value;
    renderAll();
  });

  statusFilter.addEventListener("change", () => {
    state.status = statusFilter.value;
    renderBookingList();
  });

  staffSearch.addEventListener("input", () => {
    state.search = staffSearch.value;
    renderBookingList();
  });

  todayOnly.addEventListener("click", () => {
    state.date = todayValue();
    dateFilter.value = state.date;
    renderAll();
  });

  allDates.addEventListener("click", () => {
    state.date = "";
    dateFilter.value = "";
    renderAll();
  });

  markAllRead.addEventListener("click", markAllBookingsRead);
  markAllSupportHandled?.addEventListener("click", markAllSupportThreadsHandled);
  refreshDesk.addEventListener("click", () => {
    refreshBookings(false);
    refreshSupportThreads(false);
    refreshAuditLogs();
    showToast("已刷新预约数据");
  });
  copyDaySummary.addEventListener("click", () => copyText(daySummaryMessage(), "今日排课已复制"));
  exportStaffCsv.addEventListener("click", exportCsv);

  logoutStaff?.addEventListener("click", async () => {
    try {
      await apiRequest("/api/staff/logout", { method: "POST" });
    } catch {
      // Already logged out or network unavailable.
    }
    window.location.href = "/login.html";
  });

  enableNotify.addEventListener("click", async () => {
    if (!("Notification" in window)) {
      showToast("当前浏览器不支持桌面提醒");
      return;
    }

    const permission = await Notification.requestPermission();
    state.notificationsEnabled = permission === "granted";
    enableNotify.textContent = state.notificationsEnabled ? "提醒已开启 Notify On" : "开启提醒 Notify";
    showToast(state.notificationsEnabled ? "新预约提醒已开启" : "未开启提醒权限");
  });

  document.addEventListener("click", (event) => {
    const copyBooking = event.target.closest("[data-copy-booking]");
    const exportAgreement = event.target.closest("[data-export-agreement]");
    const copyCoach = event.target.closest("[data-copy-coach]");
    const copySupport = event.target.closest("[data-copy-support]");
    const markReadButton = event.target.closest("[data-mark-read]");
    const statusButton = event.target.closest("[data-status-id]");
    const supportStatusButton = event.target.closest("[data-support-status-id]");

    if (copyBooking) {
      const booking = state.bookings.find((item) => item.id === copyBooking.dataset.copyBooking);
      if (booking) copyText(bookingMessage(booking), "预约消息已复制");
      return;
    }

    if (exportAgreement) {
      const booking = state.bookings.find((item) => item.id === exportAgreement.dataset.exportAgreement);
      if (booking) {
        const safeName = String(booking.name || "customer").replace(/[\\/:*?"<>|]/g, "_");
        downloadTextFile(`协议确认记录-${safeName}-${booking.id || Date.now()}.txt`, agreementRecordText(booking));
        showToast("协议确认记录已导出");
      }
      return;
    }

    if (copyCoach) {
      copyText(coachDayMessage(copyCoach.dataset.copyCoach), "教练预约表已复制");
      return;
    }

    if (copySupport) {
      const thread = state.supportThreads.find((item) => item.id === copySupport.dataset.copySupport);
      if (thread) copyText(supportThreadMessage(thread), "客服咨询已复制");
      return;
    }

    if (markReadButton) {
      markRead(markReadButton.dataset.markRead);
      return;
    }

    if (statusButton) {
      updateStatus(statusButton.dataset.statusId, statusButton.dataset.statusValue);
      return;
    }

    if (supportStatusButton) {
      updateSupportStatus(supportStatusButton.dataset.supportStatusId, supportStatusButton.dataset.supportStatusValue);
    }
  });

  document.addEventListener("change", (event) => {
    const statusSelect = event.target.closest("[data-status-select]");
    const supportStatusSelect = event.target.closest("[data-support-status-select]");
    if (statusSelect) updateStatus(statusSelect.dataset.statusSelect, statusSelect.value);
    if (supportStatusSelect) updateSupportStatus(supportStatusSelect.dataset.supportStatusSelect, supportStatusSelect.value);
  });

  window.addEventListener("storage", (event) => {
    if (event.key === BOOKING_KEY) refreshBookings(true);
    if (event.key === SUPPORT_THREADS_KEY) refreshSupportThreads(true);
  });

  window.addEventListener("focus", () => {
    refreshBookings(true);
    refreshSupportThreads(true);
    refreshAuditLogs();
  });

  window.addEventListener("pageshow", () => {
    refreshBookings(false);
    refreshSupportThreads(false);
    refreshAuditLogs();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    refreshBookings(true);
    refreshSupportThreads(true);
    refreshAuditLogs();
  });
}

function init() {
  state.bookings = sortBookings(loadBookings());
  state.supportThreads = sortSupportThreads(loadSupportThreads());
  state.seenIds = loadSeenIds();
  state.knownIds = new Set(state.bookings.map((booking) => booking.id).filter(Boolean));
  state.knownSupportIds = new Set(state.supportThreads.map((thread) => thread.id).filter(Boolean));

  renderCoachOptions();
  dateFilter.value = state.date;
  renderAll();
  setupEvents();
  refreshBookings(false);
  refreshSupportThreads(false);
  refreshAuditLogs();
  setInterval(() => {
    refreshBookings(true);
    refreshSupportThreads(true);
    refreshAuditLogs();
  }, 3000);
}

init();
