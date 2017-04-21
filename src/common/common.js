import MasterConfig from '../../config/master_config'
import {getCookie, setCookie} from './cookie'
export {setNum, getDateStr, checkLoginStatus} 


function setNum(num){
	let price = num + '',
	integer = price.split('.')[0],
	decimal = price.split('.')[1],
	temp_price = '',
	count = 0,
	isNegative = false;
	if (integer.indexOf('-')>-1) {
		isNegative = true;
		integer = Math.abs(integer)+'';
	}
	if (integer.length>3) {
		for (let i = integer.length - 1; i >= 0; i--) {
			if (count&&!(count%3)) {
				temp_price = integer[i] + ',' + temp_price;
			}else{
				temp_price = integer[i] + temp_price;
			}
			count++;
		}
		let result = temp_price + (decimal?('.' + decimal):'');
		return isNegative?('-'+result):result;
	}else{
		return price;
	}
}

function getDateStr(addDayCount, hms=false){
	let dd = new Date(); 
    dd.setDate(dd.getDate()+addDayCount);//获取addDayCount天后的日期
    let y = dd.getFullYear(); 
    let M = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
    let d = dd.getDate()<10?"0"+dd.getDate():dd.getDate(); //获取当前几号，不足10补0
    let H = dd.getHours()<10?"0"+dd.getHours():dd.getHours();
    let m = dd.getMinutes()<10?"0"+dd.getMinutes():dd.getMinutes();
    let s = dd.getSeconds()<10?"0"+dd.getSeconds():dd.getSeconds();
    if (hms) {
        return y+"-"+M+"-"+d+" "+H+":"+m+":"+s; 
    }else{
        return y+"-"+M+"-"+d; 
    }
}

function isWeChatBrowser() {
    let e = navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i) ? 1 : 0
}

function getApi(url) {
    let port = parseInt(getCookie("BackendPort"));
    return (port ? ":" + port : "") + "/" + url + "&app_id=" + MasterConfig["appId"] + "&payment_app_id=" + MasterConfig["appId"] + "&provider=WECHAT"
}

function login() {
    if (!MasterConfig['is_debug']) {
        let appId = MasterConfig["appId"],
            code = getUrlParams('code');
        if (!code) {
            let newHref = location.href.split('?')[0] + removeParamFromUrl(["from", "code", "share_id", "isappinstalled", "state"]),
                oauthUrl = MasterConfig["oauthUrl"];
            location.href = oauthUrl + "appid=" + appId + "&redirect_uri=" + encodeURIComponent(newHref) + "#wechat_redirect";
        } else{
            http({
                url: getApi("wechat/login?__ph="),
                type: "post",
                data: {'code':code,'app_id':appId},
                success (data){
                	setCookie({"AccessToken":data.data.access_token, "AppId":appId, "OpenId":data.data.open_id, "userId":data.data.user_id, "userName":data.data.user_name});
                    location.href = removeParamFromUrl(["code"]);
                }
            })
        }
    }
}

function checkLoginStatus(callback) {
    callback?callback:"";
    if (isWeChatBrowser() || "true" != MasterConfig["is_debug"] && "app_jump" != getUrlParams('source')) {
        let accessToken = getCookie("AccessToken"),
            AppId = getCookie("AppId"),
            appId = MasterConfig["appId"];
        return "" != accessToken && AppId == appId ? callback() : login()
    }
}

//获取url上的参
function getUrlParams(name){
    let aQuery = window.location.href.split("?");  //取得Get参数
    let aGET = name?'':{};
    if (aQuery[1]) {
        let aBuf = aQuery[1].split("&");
        if (name) {
	        for(let i=0, iLoop = aBuf.length; i<iLoop; i++){
	            let aTmp = aBuf[i].split("=");  //分离key与Value
	            if (name==aTmp[0]) {
	                aGET = aTmp[1];
	            }
	        }
        	return decodeURI(aGET);
        }else{
        	for(let i=0, iLoop = aBuf.length; i<iLoop; i++){
	            let aTmp = aBuf[i].split("=");  //分离key与Value
	            aGET[aTmp[0]] = aTmp[1];
	        }
	        return aGET;
        }
    }
    return null
}

function removeParamFromUrl(e) {
    let o = getUrlParams();
    for (let n in e) delete o[e[n]];
    return buildUrlParamString(o)
}

function buildUrlParamString(e) {
    let o = "";
    for (let n in e) o += n + "=" + e[n] + "&";
    o = o.slice(0, o.length - 1);
    let t = "" == o || void 0 == o;
    return t ? "" : "?" + o
}