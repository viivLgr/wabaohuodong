$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});

	var b = document.getElementById(this[0].id).getElementsByTagName('TABLE');
	for(i =0; i<b.length; i++){
		if(b[i].className == "easyui-datagrid"){
			o[b[i].id] = $('#'+b[i].id).datagrid('getData').rows;
		}
	}	
	return o;
};

$.fn.serializeJSonString = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});

	var b = document.getElementById(this[0].id).getElementsByTagName('TABLE');
	for(i =0; i<b.length; i++){
		if(b[i].className == "easyui-datagrid"){
			o[b[i].id] = $('#'+b[i].id).datagrid('getData').rows;
		}
	}	
	return JSON.stringify(o);
};

function myAjax(iUrl,iData,fun,iAsync){
	if(iAsync == undefined) iAsync = true;
	jQuery.ajax({
		type : "POST",
		url : iUrl,
		async : iAsync,
		data : JSON.stringify(iData),
		contentType : "application/json; charset=utf-8",
		success : function(result) {
			if(result.code == -99){
				var topPathArr = top.location.href.split("/");
				var topPath = topPathArr[topPathArr.length-1]; 
				//var winPathArr = window.location.href.split("/");
				//var winPath = winPathArr[winPathArr.length-1];
				var Days = 30;
				var exp = new Date();
				exp.setTime(exp.getTime() + Days*24*60*60*1000);
				document.cookie = "topPath="+ escape (topPath) + ";expires=" + exp.toGMTString();
				top.location.href = "initLogin.do?flag=1";
			}else{
				fun(result);
			}
		},
		error : function(result) {
			//alert("系统错误");
		}
	});
}


var change_date = function(days) {  
    // 参数表示在当前日期下要增加的天数  
    var now = new Date();  
    // + 1 代表日期加，- 1代表日期减  
    now.setDate((now.getDate() + 1) - 1 * days);  
    var year = now.getFullYear();  
    var month = now.getMonth() + 1;  
    var day = now.getDate();  
    if (month < 10) {  
        month = '0' + month;  
    }  
    if (day < 10) {  
        day = '0' + day;  
    }  

    return year + '-' + month + '-' + day;  
};  

var FormatDateTime = function (obj, IsDay) {   
    var myDate = new Date(obj);   
    var year = myDate.getFullYear();  
    var month = ("0" + (myDate.getMonth() + 1)).slice(-2);  
    var day = ("0" + myDate.getDate()).slice(-2);  
    var h = ("0" + myDate.getHours()).slice(-2);  
    var m = ("0" + myDate.getMinutes()).slice(-2);  
    var s = ("0" + myDate.getSeconds()).slice(-2);   
    var mi = ("00" + myDate.getMilliseconds()).slice(-3);  
    if (IsDay == true) {   
        return year + "-" + month + "-" + day;   
    }   
    else {   
        return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;   
    }  
};

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//生成随机数
function getRandom(n){
    return Math.floor(Math.random()*n+1)
}

function redirectLogin(){
	var topPathArr = top.location.href.split("/");
	var topPath = topPathArr[topPathArr.length-1]; 
	var exp = new Date();
	exp.setTime(exp.getTime() + 30*24*60*60*1000);
	document.cookie = "topPath="+ escape (topPath) + ";expires=" + exp.toGMTString();
	top.location.href = "initLogin.do";
}
//js截取小数点后两位小数
function getCutDouble(Number)  
{
	var num=String(Number);
	var numStr = num+"";  
	var bit = numStr.indexOf('.');
	var result = "";
	if(bit == -1){  
		result =  num;  
	}else{
		var bit2 = numStr.substring(bit+1,numStr.length);  
		if(bit2.length >=3){  
			result = num.substring(0,bit+3);
		}else{
			result = num;  
		}  
	}
	return result;
}  

