var onoption = function(){
	
	var idArr = new Array();
	var colorArr = new Array();
	var basicColor;
	var isdrawed;
	var isglide;
	var glideObjArr = new Array();
	var indexsArr = new Array();
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
					var idindex = idArr.indexOf(id);
					obj.style.background = colorArr[idindex];
						
					Im.getObj("langContent").style.background = colorArr[idindex];
					
					obj.style.color ="#ffffff";
					this.reset(oncrutObjId);
					if(isdrawed){
						linearr[idindex].drawLineTo(indexsArr[0],indexsArr[1],indexsArr[2],indexsArr[3]);
					}
					if(isglide){
						glide.go(id);
					}
					/*
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
					*/
					oncrutObjId = id;
				}
			}
			,
			outchangeColor:function(id){
				var idindex = idArr.indexOf(id);
				if(isdrawed){
					if(!lineArr[idindex].hasline()){
						lineArr[idindex].drawLineTo(indexsArr[0],indexsArr[1],indexsArr[2],indexsArr[3]); 
					}
				}
			}
			,
			reset:function(id){
				var idindex = idArr.indexOf(id);
				if(isdrawed){
					lineArr[idindex].clearLine();
				}
				var obj = Im.getObj(id);
				obj.style.background = basicColor;
				obj.style.color = "#000000";
			}
		}
	}();
	return{
		init:function(_iarr,_carr,_bc,_isdraw,_isglide,_indexsArr){
			idArr = _iarr;
			colorArr = _carr;
			basicColor = _bc;
			isdraw = _isdraw;
			isglide = _isglide;
			indexsArr = _indexsArr;
			
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
