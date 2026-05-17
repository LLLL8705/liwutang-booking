# 砺武堂预约系统使用说明

## 启动

在本目录运行：

```powershell
D:\node.exe server.js
```

也可以运行：

```powershell
npm start
```

## 页面地址

- 顾客预约网站：http://localhost:8787/index.html
- 工作人员后台：http://localhost:8787/staff.html

## 数据保存

预约信息和客服咨询会保存到：

```text
data/db.json
```

顾客提交预约后，工作人员后台会从同一个数据文件读取，不再依赖某一个浏览器的本地存储。

## 协议与手机号确认

顾客预约前必须完成：

- 手机验证码确认。
- 打开服务协议，并在协议底部点击“我已完整阅读并确认”。

系统会保存协议版本、协议打开时间、确认时间、确认声明、顾客姓名、电话、身份证号、预约教练、课程时间和上课地点。工作人员后台每条预约都可以导出“协议确认记录”。

当前验证码已改为真实短信接口。默认接入阿里云短信服务，不再显示本地测试验证码。

配置方式：

1. 复制 `sms.config.example.json` 为 `sms.config.json`。
2. 在 `sms.config.json` 填入阿里云短信服务的 AccessKey、短信签名和模板 Code。
3. 短信模板变量使用 `code`，例如模板内容：`您的验证码为${code}，10分钟内有效。`
4. 重启服务：

```powershell
D:\node.exe server.js
```

也可以用环境变量配置：

```powershell
$env:ALIYUN_ACCESS_KEY_ID="..."
$env:ALIYUN_ACCESS_KEY_SECRET="..."
$env:ALIYUN_SMS_SIGN_NAME="..."
$env:ALIYUN_SMS_TEMPLATE_CODE="..."
D:\node.exe server.js
```

未配置短信服务时，顾客点击“发送验证码”会提示“短信服务未配置”，不会假装发送成功。

## 手机或其他电脑访问

如果手机和电脑在同一个网络，把 `localhost` 换成这台电脑的局域网 IP 即可，例如：

```text
http://你的电脑IP:8787/index.html
http://你的电脑IP:8787/staff.html
```

正式公开给顾客使用时，建议部署到服务器并配置域名、HTTPS、工作人员后台密码。

## 商业化与风控闭环

当前版本已经加入：

- 工作人员后台登录保护：`/staff.html` 和 `/sms-setup.html` 未登录会跳转到 `/login.html`。
- 默认后台账号：`admin`，默认密码：`Liwutang@2026!`。正式上线前请复制 `staff.config.example.json` 为 `staff.config.json` 并改成强密码，也可以用环境变量 `STAFF_USERNAME`、`STAFF_PASSWORD` 配置。
- 后台 API 权限：预约名单、客服列表、短信配置、状态修改、删除预约、审计日志都需要工作人员登录。
- 操作日志：登录、预约提交、后台状态修改、删除、导出表格、客服处理等关键动作会写入 `data/db.json` 的 `auditLogs`。
- 身份证保护：顾客预约阶段不再强制填写身份证；如填写，系统只保存和展示脱敏信息。
- 正式预约闭环：AI推荐、选择教练时间、阅读协议、在线定金/线下核销选择、预约编号、订单编号、后台同步。
- 协议证据链：保存协议版本、政策版本、打开时间、确认时间、预约编号、订单编号、IP、User-Agent、课程、教练、地点、支付状态和协议文本快照。
- 风控字段：未成年人监护人、紧急联系人、身体情况/伤病史、训练风险确认、上门课地址。

## 微信在线支付配置

当前版本已接入微信支付 Native 扫码支付流程：顾客提交预约后，服务器向微信支付创建真实订单，前端显示支付二维码；支付成功后，订单状态会更新为“已支付”，工作人员后台同步显示微信交易号和支付完成时间。

正式启用前需要：

1. 申请并开通微信支付商户号。
2. 准备商户号、AppID、商户API证书序列号、APIv3 Key、商户私钥 `apiclient_key.pem`。
3. 让网站部署到公网 HTTPS 域名，并把回调地址配置为 `https://你的域名/api/payments/wechat/notify`。
4. 复制 `payment.config.example.json` 为 `payment.config.json`，填写真实参数，并把 `enabled` 改为 `true`。
5. 重启服务：`D:\node.exe server.js`。

本地没有商户参数时，网站不会假装支付成功；选择“微信支付在线收款”会提示先配置商户信息。支付宝目前仍保留为工作人员核销方式，后续可以按同样方式接入支付宝当面付。
