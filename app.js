'use strict';
const crypto = require('crypto');

function objSortString(jsonObj) {
  const arr = Object.keys(jsonObj).sort();
  let str = '';
  for (const i in arr) {
    str += arr[i] + jsonObj[arr[i]];
  }
  return str;
}

function md5(str){
  let obj = crypto.createHash('md5');
  obj.update(str);
  return obj.digest('hex');
}

module.exports = app => {
  app.pddPost = ()=>{
    const { ctx } = this;
    const config = app.config.pddSdk;
    return new Promise((resolve, reject) => {
      resolve(1)
    })
  };
  app.coreLogger.info('read data ok');
};