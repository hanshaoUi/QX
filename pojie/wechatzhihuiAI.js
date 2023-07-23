/*
微信：HOPE-RP
微信小程序：智绘AI
**********************
[riwrute_local]
^https:\/\/aituhui.top\/smallapplet\/login.* url script-response-body https://raw.githubusercontent.com/hanshaoUi/QX/main/pojie/wechatzhihuiAI.js
[mitm]
hostname = aituhui.top
**********************

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
console.log(JSON.stringify(modified))

function recursiveReplace(obj, key, newValue) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = newValue;
    }
    for (let i in obj) {
        if (obj[i] !== null && typeof obj[i] === 'object') {
            recursiveReplace(obj[i], key, newValue);
        }
    }
}

recursiveReplace(modified, 'maxImg', 9999999);

$done({ body: JSON.stringify(modified) });
