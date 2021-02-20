var bizlogic = {
  // 是否是本地
  isLocal: true,
  // 是否是正式
  isFormal: false, // isLocal:false 时才有效
 
  // 本地测试地址 
  localTest: 'https://www.lzb1223.club:443/',
  // 本地登录测试地址 
  localTest_login: 'https://www.lzb1223.club:443/',
 
  // 测试服务器地址 
  serverTest: 'https://www.lzb1223.club:443/',
  // 测试服务器登录地址 
  serverTest_login: 'https://www.lzb1223.club:443/',
 
  // 正式服务器接口地址
  serverFormal: '',
  // 正式服务器登录接口
  serverFormal_login: ''
};
var serverUrl = '',
  loginUrl = '';
 
// 判断是否是本地
if (bizlogic.isLocal == true) {
  serverUrl = bizlogic.localTest;
  loginUrl = bizlogic.localTest_login;
} else {
  serverUrl = bizlogic.isFormal ? bizlogic.serverFormal : bizlogic.serverTest;
  loginUrl = bizlogic.isFormal ? bizlogic.serverFormal_login : bizlogic.serverTest_login;
};
 
 
module.exports = {
  serverUrl: serverUrl,
  loginUrl: loginUrl
};