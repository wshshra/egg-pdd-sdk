# egg-pdd-sdk



## 安装

```bash
$ npm i egg-pdd-sdk --save
```

## 使用

```js
// {app_root}/config/plugin.js
exports.pddSdk = {
  enable: true,
  package: 'egg-pdd-sdk',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.pddSdk = {
  client_id:"client_id",
  client_secret:"client_secret"
};
```

## 示例

```js
// controller
async test() {
    const { ctx, service } = this;
    const data = await service.pdd.post({
      type: "pdd.ddk.goods.pid.generate",
      number: 2,
      p_id_name_list: ["3","4"],
    });
    ctx.body=data;
}
```

## License

[MIT](LICENSE)