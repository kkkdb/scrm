export {setNum, getDateStr} 


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
		for (var i = integer.length - 1; i >= 0; i--) {
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
	var dd = new Date(); 
    dd.setDate(dd.getDate()+addDayCount);//获取addDayCount天后的日期
    var y = dd.getFullYear(); 
    var M = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate(); //获取当前几号，不足10补0
    var H = dd.getHours()<10?"0"+dd.getHours():dd.getHours();
    var m = dd.getMinutes()<10?"0"+dd.getMinutes():dd.getMinutes();
    var s = dd.getSeconds()<10?"0"+dd.getSeconds():dd.getSeconds();
    if (hms) {
        return y+"-"+M+"-"+d+" "+H+":"+m+":"+s; 
    }else{
        return y+"-"+M+"-"+d; 
    }
}