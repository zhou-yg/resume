var langArr = ["Flash AS","Java","PHP","HTML+CSS+JavaScript","C/C++","Android","mysql","sqlite","sqlserver"];
var idArr = ["select-as","select-java","select-php","select-js","select-c"];

var onSelectFrame = function(){
	
	var idArr = new Array();
	
	var EH = function(){
		
		var oncrutObjId = "select-as";
		
		return{
			init:function(){
				var obj = Im.getObj(oncrutObjId);
				obj.style.background = "#06A7FF";
				obj.style.color = "#ffffff";
			}
			,
			onchangeColor:function(id){
				if(id != oncrutObjId){
					var obj = Im.getObj(id);
					obj.style.background = "#06A7FF";
					obj.style.color = "#ffffff";
					this.reset(oncrutObjId);
					oncrutObjId = id;
				}
			}
			,
			reset:function(id){
					var obj = Im.getObj(id);
					obj.style.background = "#ffffff";
					obj.style.color = "#000000";
			}
		}
	}();
	return{
		init:function(arr){
			idArr = arr;
			this.setEvent();

			return idArr;
		}
		,
		setEvent:function(){
			EH.init();
			for(var i=0;i<idArr.length;i++){
				var frameObj = Im.getObj(idArr[i]);
				frameObj.onmouseover = function(){EH.onchangeColor(this.id)};
			}
		}
	}
}();
onSelectFrame.init(idArr);