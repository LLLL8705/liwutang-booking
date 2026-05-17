# 砺武堂公网部署说明

目标：先把网站放到公网，让别人用手机和电脑随时打开查看。

## 推荐方式：Render 公开视频版

当前默认 `render.yaml` 是公开视频配置：

- 会运行 `server.js`
- 顾客页面可以公开访问
- 工作人员后台仍有登录保护
- 不启用微信支付
- 数据写到临时目录，适合展示和测试，不适合长期保存真实客户资料

## 上传到 Render

1. 注册 GitHub。
2. 新建一个私有仓库，例如 `liwutang-booking`。
3. 把本项目文件上传到仓库。
4. 注册并登录 Render。
5. 选择 `New +`。
6. 选择 `Blueprint`。
7. 连接 GitHub 仓库。
8. Render 会读取 `render.yaml`。
9. 填写环境变量：
   - `STAFF_USERNAME`
   - `STAFF_PASSWORD`
10. 开始部署。

部署成功后会得到一个公网地址，类似：

```text
https://liwutang-booking.onrender.com
```

顾客页面：

```text
https://liwutang-booking.onrender.com/index.html
```

工作人员后台：

```text
https://liwutang-booking.onrender.com/staff.html
```

## 正式保存预约数据

如果后面要长期保存真实预约、客服、协议记录，请把 `render.persistent.yaml` 的内容复制成 `render.yaml` 再部署。

这个版本会创建 Render 持久化磁盘，并把数据保存到：

```text
/opt/render/project/src/data
```

注意：持久化磁盘通常需要付费实例，适合正式经营后再开。

## 支付

当前先不启用支付。以后要接微信支付时，再填写：

- `PAYMENT_ENABLED=true`
- `WECHAT_PAY_APPID`
- `WECHAT_PAY_MCHID`
- `WECHAT_PAY_SERIAL_NO`
- `WECHAT_PAY_API_V3_KEY`
- `WECHAT_PAY_PRIVATE_KEY`
- `WECHAT_PAY_NOTIFY_URL`
- `WECHAT_PAY_PUBLIC_KEY`

支付回调地址格式：

```text
https://你的域名/api/payments/wechat/notify
```
