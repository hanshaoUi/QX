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




let Premium = $response.body;
var modified = JSON.parse(Premium);
console.log(modified)
modified.detail.maxImg = 100
    
recursiveReplace(modified);

$done({ body: JSON.stringify(modified) });
