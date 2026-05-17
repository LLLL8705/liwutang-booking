const form = document.getElementById("staffLoginForm");
const usernameInput = document.getElementById("staffUsername");
const passwordInput = document.getElementById("staffPassword");
const statusBox = document.getElementById("loginStatus");

function setLoginStatus(message, type = "info") {
  statusBox.textContent = message;
  statusBox.dataset.type = type;
}

function nextUrl() {
  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") || "/staff.html";
  return next.startsWith("/") ? next : "/staff.html";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  if (!username || !password) {
    setLoginStatus("请填写账号和密码。", "warn");
    return;
  }

  try {
    setLoginStatus("正在登录...", "info");
    const response = await fetch("/api/staff/login", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "登录失败");
    setLoginStatus("登录成功，正在进入后台。", "success");
    window.location.href = nextUrl();
  } catch (error) {
    setLoginStatus(error.message || "登录失败，请重试。", "error");
  }
});

usernameInput.value = "admin";
