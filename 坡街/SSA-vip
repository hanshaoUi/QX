#SSA丝社
#下载地址：https://apps.apple.com/cn/app/ssa%E4%B8%9D%E7%A4%BE-%E5%8E%9F%E5%88%9B%E5%BD%B1%E5%83%8F/id1530892845

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/cms/Appapi/username/username';
if (url.indexOf(vip) != -1) {
    obj.point= 999999;
    obj.jomkenylv = 99;
    obj.groupname = "白金会员";
    obj.overduedate = 2027383523;
    obj.overduedate2 = 2027383523;
    body = JSON.stringify(obj);
}
$done({body});
