const form = document.getElementById("smsConfigForm");
const reloadButton = document.getElementById("reloadConfig");
const testForm = document.getElementById("testSmsForm");
const stateBadge = document.getElementById("configState");
const statusBox = document.getElementById("setupStatus");

const fieldLabels = {
  accessKeyId: "AccessKey ID",
  accessKeySecret: "AccessKey Secret",
  signName: "短信签名",
  templateCode: "模板 Code"
};

function setStatus(message, type = "info") {
  statusBox.textContent = message;
  statusBox.dataset.type = type;
}

function setState(config) {
  stateBadge.textContent = config.configured ? "已配置" : "未完成";
  stateBadge.dataset.state = config.configured ? "ready" : "missing";
}

function missingText(missing = []) {
  if (!missing.length) return "";
  return missing.map((key) => fieldLabels[key] || key).join("、");
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "请求失败");
  }
  return payload;
}

async function loadConfig() {
  try {
    const config = await api("/api/sms-config");
    document.getElementById("accessKeyId").value = config.accessKeyIdMasked || "";
    document.getElementById("accessKeySecret").value = "";
    document.getElementById("signName").value = config.signName || "";
    document.getElementById("templateCode").value = config.templateCode || "";
    document.getElementById("regionId").value = config.regionId || "cn-hangzhou";
    setState(config);
    if (config.configured) {
      setStatus("短信服务已配置，可以在右侧发送一条测试验证码。", "success");
    } else {
      setStatus(`短信服务还缺少：${missingText(config.missing)}。补全后保存即可。`, "warn");
    }
  } catch (error) {
    setStatus(`${error.message}。请在服务器本机打开 http://localhost:8787/sms-setup.html 进行配置。`, "error");
    stateBadge.textContent = "不可配置";
    stateBadge.dataset.state = "missing";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = {
    accessKeyId: document.getElementById("accessKeyId").value.trim(),
    accessKeySecret: document.getElementById("accessKeySecret").value.trim(),
    signName: document.getElementById("signName").value.trim(),
    templateCode: document.getElementById("templateCode").value.trim(),
    regionId: document.getElementById("regionId").value.trim() || "cn-hangzhou"
  };

  try {
    setStatus("正在保存短信配置...", "info");
    const config = await api("/api/sms-config", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    setState(config);
    if (config.configured) {
      document.getElementById("accessKeyId").value = config.accessKeyIdMasked || payload.accessKeyId;
      document.getElementById("accessKeySecret").value = "";
      setStatus("短信配置已保存。现在可以发送测试验证码，确认阿里云短信是否正常。", "success");
    } else {
      setStatus(`已保存当前内容，但还缺少：${missingText(config.missing)}。`, "warn");
    }
  } catch (error) {
    setStatus(error.message, "error");
  }
});

reloadButton.addEventListener("click", loadConfig);

testForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const phone = document.getElementById("testPhone").value.trim();
  if (!phone) {
    setStatus("请先填写测试手机号。", "warn");
    return;
  }

  try {
    setStatus("正在发送测试验证码...", "info");
    await api("/api/phone-code/send", {
      method: "POST",
      body: JSON.stringify({ phone })
    });
    setStatus("测试验证码已发送，请查看手机短信。", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

loadConfig();
