'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');
// 处理数组
function objValueToString(obj){
  const keysArray = Object.keys(obj);
  const newObj = {};
  for (const i of keysArray) {
    if(Array.isArray(obj[i])){
      newObj[i] = JSON.stringify(obj[i])
    }else{
      newObj[i] = obj[i]
    }
  }
  return newObj
}
// 将对象按字母排序拼接
function objSortString(jsonObj) {
  const sortedKeysArray = Object.keys(jsonObj).sort();
  let str = '';
  for (const i of sortedKeysArray) {
    str += i + jsonObj[i];
  }
  return str;
}

function md5(str) {
  let obj = crypto.createHash('md5');
  obj.update(str);
  return obj.digest('hex');
}
class PDDService extends Service {
  async post(parameter = {}) {
    return new Promise(async (resolve, reject) => {
      // 获取config
      const { client_id, client_secret } = this.app.config.pddSdk;
      const obj = objValueToString(parameter)
      const data = {
        client_id,
        data_type: 'JSON',
        timestamp: Math.round(new Date() / 1000),
        ...obj,
      }
      // 排序拼接
      const sortData = objSortString(data);
      const url = "https://gw-api.pinduoduo.com/api/router";
      const result = await this.app.curl(url, {
        method: 'POST',
        dataType: 'json',
        data: {
          ...data,
          sign: md5(client_secret + sortData + client_secret)
            .toUpperCase(),
        },
      });
      if (
        typeof result.data.error_response !== 'undefined' ||
        result.res.status !== 200
      ) {
        this.app.logger.error(result.data);
        reject(result.data)
      } else {
        resolve(result.data)
      }
    })
  }
}
module.exports = PDDService;