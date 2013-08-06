var onoption = function(){
	
	var idArr = new Array();
	
	var EH = function(){
		
		var oncrutObjId;
		
		return{
			init:function(){
				oncrutObjId = idArr[0];
				var obj = Im.getObj(oncrutObjId);
								var obj2 = Im.getObj("home-langmsgWindow");
				obj2.style.background = "#06A7FF";

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
					if(lineArr[idlangArr.indexOf(id)]!=undefined){
						lineArr[idlangArr.indexOf(id)].drawLineTo(248, 15.5, 288, 15.5); ;
					}
					oncrutObjId = id;
				}
			}
			,
			outchangeColor:function(id){
				
			}
			,
			reset:function(id){
				if(lineArr[idlangArr.indexOf(id)]!=undefined){
					lineArr[idlangArr.indexOf(id)].clearLine();
				}
				var obj = Im.getObj(id);
				obj.style.background = "#ffffff";
				obj.style.color = "#000000";
			}
		}
	}();
	return{
		init:function(arr){
			idArr = arr;

			EH.init();
 
 			this.setEvent();
			return idArr;
		}
		,
		setEvent:function(){
			for(var i=0;i<idArr.length;i++){
				var frameObj = Im.getObj(idArr[i]);
				frameObj.onmouseover = function(){
					EH.onchangeColor(this.id);
					EH.outchangeColor(this.id);
				};
			}
		}
	}
};
