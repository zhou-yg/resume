var glidelr = function() {

	var glideObj = undefined;
	var glideDistance = 0;
	var glideCrutDistance = 0;
	var glideDirection = -1;
	var glideTimeOut;//setTimeOut on this object;
	var t = 1;
	var initTop = 0;
	var initLeft = 0;

	var rate = 0;
	var rateArr = [16,32,64];
	var speed = 0;
	var speedArr = [35,28,23];
	
	var Re = function(){
		return{
			reSet:function(){
				glideObj = undefined;
				glideDistance = 0;
				glideCrutDistance = 0;
				glideDirection = -1;
				t = 1;
				initTop = 0;
				initLeft = 0;
				
				return "reSet";
			}
		}	
	}();
	return {
		go : function(objId, distance,direction) {
			glideObj = Im.getObj(objId);
			glideDistance = distance;
			glideDirection = direction;
			if(distance<=400){
				speed = speedArr[0];
				rate  = rateArr[0];
			}else if(distance>=800){
				speed = speedArr[1];
				rate = rateArr[1]
			}else{
				speed = speedArr[2];
				rate = rateArr[2];
			}
			this.glideAction();
		},
		glideAction : function() {
			if(t<=rate){
				glideObj.style.left = String(parseInt(Im.getObjStyle(glideObj,"left")) - glideDirection*glideDistance/(2*t))+"px";
				glideTimeOut = setTimeout("glideLR.glideAction()",speed);
			}else{
				clearTimeout(glideTimeOut);
				glideObj.style.left = String(parseInt(Im.getObjStyle(glideObj,"left"))-glideDirection*(glideDistance-glideCrutDistance))+"px";
				Re.reSet();
			}
			if(glideCrutDistance<=glideDistance){
				glideCrutDistance += glideDistance/(2*t);
			}
			t=t*2;
		}
		,
		getArr:function(){
			return {"gObj":glideObj,"gDirection":glideDistance,"gcDis":glideCrutDistance,"gDistance":glideDirection,"gTimeOut":glideTimeOut,"gT":t};
		}
	};
}();
