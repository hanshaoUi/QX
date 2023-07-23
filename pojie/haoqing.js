/*
微信：HOPE-RP
微信小程序：智绘AI
**********************
[riwrute_local]
^https:\/\/chat.haoqingkeji.com\/api.php.* url script-response-body https://raw.githubusercontent.com/hanshaoUi/QX/main/pojie/haoqing.js
[mitm]
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

recursiveReplace(modified, 'errno', 0);
recursiveReplace(modified, 'balance', 1000);
recursiveReplace(modified, 'balance_draw', 19990);

recursiveReplace(modified, 'is_commission', 1);
recursiveReplace(modified, 'vip_expire_time', '9999-9-9');
recursiveReplace(modified, 'is_check', 0);

console.log(JSON.stringify(modified))
$done({ body: JSON.stringify(modified) });
