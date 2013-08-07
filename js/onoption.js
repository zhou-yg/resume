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
						lineArr[idlangArr.indexOf(id)].drawLineTo(248, 15.5, 290, 15.5);
					}
					oncrutObjId = id;
				}
			}
			,
			outchangeColor:function(id){
				if(lineArr[idlangArr.indexOf(id)]!=undefined){
					if(!lineArr[idlangArr.indexOf(id)].hasline()){
						lineArr[idlangArr.indexOf(id)].drawLineTo(248, 15.5, 290, 15.5); ;
					}
				}
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
				var selectObj = Im.getObj(idArr[i]);
				selectObj.onmouseover = function(){
					EH.onchangeColor(this.id);
				};
				selectObj.onmousemove =  function(){
					EH.outchangeColor(this.id);
				}
			}
		}
	}
};
