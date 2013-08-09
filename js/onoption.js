var onoption = function(){
	
	var idArr = new Array();
	var colorArr = [];
	var EH = function(){
		
		var oncrutObjId;
		
		return{
			init:function(){
				oncrutObjId = idArr[0];
				var obj = Im.getObj(oncrutObjId);
				//------------------------------------------
				var obj2 = Im.getObj("langContent");
				obj2.style.background = "#06A7FF";
				//-----------------------------------------
				obj.style.background = "#06A7FF";
				obj.style.color = "#ffffff";
			}
			,
			onchangeColor:function(id){
				if(id != oncrutObjId){
					var obj = Im.getObj(id);
					if(colorArr[idlangArr.indexOf(id)]!=undefined){
						obj.style.background = colorArr[idlangArr.indexOf(id)];
						//-----------------------------------------------------------------------------------
						Im.getObj("langContent").style.background = colorArr[idlangArr.indexOf(id)];
						//-----------------------------------------------------------------------------------
					}else{
						obj.style.background = colorArr[0];
					}
					obj.style.color = "#ffffff";
					this.reset(oncrutObjId);
					if(lineArr[idlangArr.indexOf(id)]!=undefined){
						//--------------------------------------------------------------
						lineArr[idlangArr.indexOf(id)].drawLineTo(248, 15.5, 315, 15.5);
						//--------------------------------------------------------------
					}
					oncrutObjId = id;
				}
			}
			,
			outchangeColor:function(id){
				//-----------------------------------------------------------------------
				if(lineArr[idlangArr.indexOf(id)]!=undefined){
					if(!lineArr[idlangArr.indexOf(id)].hasline()){
						lineArr[idlangArr.indexOf(id)].drawLineTo(248, 15.5, 315, 15.5); ;
					}
				}
				//------------------------------------------------------------------------
			}
			,
			reset:function(id){
				if(lineArr[idlangArr.indexOf(id)]!=undefined){
					lineArr[idlangArr.indexOf(id)].clearLine();
				}
				var obj = Im.getObj(id);
				if(idtitleArr.indexOf(id)!=-1){
					obj.style.background = "none";
				}else if(idlangArr.indexOf(id)!=-1){
					obj.style.background = "#ffffff";
				}
				obj.style.color = "#000000";
			}
		}
	}();
	return{
		init:function(iarr,carr){
			idArr = iarr;
			colorArr = carr;
			
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
