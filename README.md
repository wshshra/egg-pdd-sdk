# egg-pdd-sdk



## Install

```bash
$ npm i egg-pdd-sdk --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.pddSdk = {
  enable: true,
  package: 'egg-pdd-sdk',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.pddSdk = {
  client_id:"client_id",
  client_secret:"client_secret"
};
```

## Example

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