var Im = function() {

	var xmlRequest;
	var accountName;
	var sendData = "";
	var returnData = "";
	var returnState = "";
	var serverUrl = "http://haraldred.cn02.tgesc.com/MiniShop/login.php";
	var basicUrl = "http://haraldred.cn02.tgesc.com/MiniShop/";

	var D = function() {
		return {
			createXMLHttpRequest : function() {
				var xmHttpObj;
				try {
					xmHttpObj = new XMLHttpRequest();
				} catch (e) {
					try {
						xmHttpObj = new ActiveXObject("Msxml2.XMLHTTP");
					} catch (e) {
						xmHttpObj = new ActiveXObject("Microsoft.XMLHTTP");
					}
				}
				return xmHttpObj;
			}
		}
	}();
	return {
		sendRequest : function(url, params, type, processResponse) {
			xmlRequest = D.createXMLHttpRequest();
			if (type == "POST") {
				xmlRequest.open(type, url, true);
				xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlRequest.onreadystatechange = processResponse;
				xmlRequest.send("param=" + params);
			} else if (type == "GET") {
				var url = url + "?" + params;
				xmlRequest.open(type, url, true);
				xmlRequest.onreadystatechange = processResponse;
				xmlRequest.send();
			}
		},
		getObj : function(id) {
			return document.getElementById(id);
			/*
			 if(document.getElementById(id) != undefined) {
			 return document.getElementById(id);
			 } else {
			 return document.getElementById(id[0]).contentWindow.document.getElementById(id[1]);
			 }
			 */
		},
		getObjStyle : function(obj, key) {
			var value = null;
			if (obj.currentStyle) {
				value = obj.currentStyle[key];
			} else {
				value = window.getComputedStyle(obj).getPropertyValue(key);
			}
			return value;
		},
		toJSONString : function(arrs, indexarr) {
			var beginC = "{";
			var endC = "}";
			var data = beginC;
			if (indexarr == undefined) {
				for (var i = 0; i < arrs.length; i++) {
					data += "num" + i;
					data += ":"
					data += "'" + arrs[i] + "'";
					if (i != arrs.length - 1) {
						data += ","
					}
				}
				data += endC;
			} else if (arrs.length == indexarr.length) {
				for (var i = 0; i < arrs.length; i++) {
					data += "'" + indexarr[i] + "'";
					data += ":"
					data += arrs[i];
					if (i != arrs.length - 1) {
						data += ","
					}
				}
				data += endC;
			} else {
				data = "error in arr's length"
			}
			return data;
		},
		toArray : function(obj) {
			var arr = new Array();
			var i = 0;
			for (var key in obj) {
				arr[i] = obj[key];
				i++;
			}
			return arr;
		}
	}
}();
/*
var xmlRequest;
var accountName;
var sendData = "";
var returnData = "";
var returnState = "";
var serverUrl = "http://haraldred.cn02.tgesc.com/MiniShop/login.php";
var basicUrl = "http://haraldred.cn02.tgesc.com/MiniShop/";

function createXMLHttpRequest() {
	var xmHttpObj;
	try {
		xmHttpObj = new XMLHttpRequest();
	} catch (e) {
		try {
			xmHttpObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			xmHttpObj = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmHttpObj;
}

function getObj(id) {

	if (document.getElementById(id) != undefined) {
		return document.getElementById(id);
	} else {
		return document.getElementById("headerIframe").contentWindow.document.getElementById(id);
	}
}

function sendRequest(url, params, type, processResponse) {
	xmlRequest = createXMLHttpRequest();
	if (type == "POST") {
		xmlRequest.open(type, url, true);
		xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlRequest.onreadystatechange = processResponse;
		xmlRequest.send("param=" + params);
	} else if (type == "GET") {
		var url = url + "?" + params;
		xmlRequest.open(type, url, true);
		xmlRequest.onreadystatechange = processResponse;
		xmlRequest.send();
	}
}

function toJSONString(arrs, indexarr) {
	var beginC = "{";
	var endC = "}";
	var data = beginC;
	if (indexarr == undefined) {
		for (var i = 0; i < arrs.length; i++) {
			data += "num" + i;
			data += ":"
			data += "'" + arrs[i] + "'";
			if (i != arrs.length - 1) {
				data += ","
			}
		}
		data += endC;
	} else if (arrs.length == indexarr.length) {
		for (var i = 0; i < arrs.length; i++) {
			data += indexarr[i];
			data += ":"
			data += "'" + arrs[i] + "'";
			if (i != arrs.length - 1) {
				data += ","
			}
		}
		data += endC;
	} else {
		data = "error in arr's length"
	}
	return data;
}

function toArray(obj) {
	var arr = new Array();
	var i = 0;
	for (var key in obj) {
		arr[i] = obj[key];
		i++;
	}
	return arr;
}

function getObjStyle(obj, key) {
	var value = null;
	if (obj.currentStyle) {
		//ie 6、7、8
		value = obj.currentStyle[key];
	} else {
		//ff、ie9、chrome
		value = window.getComputedStyle(obj).getPropertyValue(key);
		//value = document.defaultView.getComputedStyle(obj,null).width;
		//value = window.getComputedStyle(obj, null)[key];
		//value = document.defaultView.getComputedStyle(obj, null)[key];
	}
	return value;
}

//-----------------------------------------------------------------------
*/