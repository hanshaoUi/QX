/*
微信：HOPE-RP
微信小程序：智绘AI
**********************
[riwrute_local]
^https:\/\/chat.haoqingkeji.com\/api.php\/wxapp\/getTasks.* url script-response-body https://raw.githubusercontent.com/hanshaoUi/QX/main/pojie/hq.js
hostname = chat.haoqingkeji.com
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

recursiveReplace(modified, 'max', 1000);

recursiveReplace(modified, 'count', 1000);

recursiveReplace(modified, 'num', 2000);

$done({ body: JSON.stringify(modified) });
