/*
微信：HOPE-RP
微信小程序：智绘AI
**********************
[riwrute_local]
^https:\/\/aituhui.top\/smallapplet\/tasks\/getMyPosition.* url script-response-body https://raw.githubusercontent.com/hanshaoUi/QX/main/pojie/WeChatmini.js
[mitm]
hostname = aituhui.top
**********************

*/


let URL = $response.url;

const queryIndex = URL.lastIndexOf('?');
const charBeforeQuery = url.charAt(queryIndex - 1);
let Premium = $response.body;
var modified = JSON.parse(Premium);
if (charBeforeQuery === 'n') {
      function recursiveReplace(obj) {
        for (var key in obj) {
          if (typeof obj[key] === 'object') {
            recursiveReplace(obj[key]); // 递归处理对象或数组
          } else if (key === 'detail') {
            obj[key] = 100; // 替换匹配到的值
          }
        }
      }
} else if (charBeforeQuery === 'w'){

  function recursiveReplace(obj) {
        for (var key in obj) {
          if (typeof obj[key] === 'object') {
            recursiveReplace(obj[key]); // 递归处理对象或数组
          } else if (key === 'maxImg') {
            obj[key] = 100; // 替换匹配到的值
          }
        }
      }
  
}





    
recursiveReplace(modified);

$done({ body: JSON.stringify(modified) });
