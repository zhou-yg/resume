var onoption = function(){
	
	var idArr = new Array();
	var colorArr = new Array();
	var basicColor;
	var isdrawed;
	var isglide;
	var glideObjArr = new Array();
	var indexsArr = new Array();
	var linesArr = new Array();

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
						linesArr[idindex].drawLineTo(indexsArr[0],indexsArr[1],indexsArr[2],indexsArr[3]);
					}
					if(isglide){
						glide.go(id);
					}
					oncrutObjId = id;
				}
			}
			,
			outchangeColor:function(id){
				var idindex = idArr.indexOf(id);
				if(isdrawed){
					if(!linesArr[idindex].hasline()){
						linesArr[idindex].drawLineTo(indexsArr[0],indexsArr[1],indexsArr[2],indexsArr[3]); 
					}
				}
			}
			,
			reset:function(id){
				var idindex = idArr.indexOf(id);
				if(isdrawed){
					linesArr[idindex].clearLine();
				}
				var obj = Im.getObj(id);
				obj.style.background = basicColor;
				obj.style.color = "#000000";
			}
		}
	}();
	return{
		init:function(_iarr,_carr,_bc,_isdraw,_isglide){
			idArr = _iarr;
			colorArr = _carr;
			basicColor = _bc;
			isdrawed = _isdraw;
			isglide = _isglide;
			
			EH.init();
 
 			this.setEvent();
			return idArr;
		}
		,
		setArr:function(_indexsArr,_linesArr){
			indexsArr = _indexsArr;
			linesArr = _linesArr;						
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
