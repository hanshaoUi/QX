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
     console.log(modified)
     modified.detail.maxImg = 100
} else if (charBeforeQuery === 'w'){

  
}





    
recursiveReplace(modified);

$done({ body: JSON.stringify(modified) });
