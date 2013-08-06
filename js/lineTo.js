var lineto = function(_name) {
	var name=_name;
	var thickness = 1;
	var color = "#000000";
	var opacity = 1;
	var speed = 1;
	var area;
	var createTimeout;
	var deleteTimeout;
	var oncreate = false;
	var ondelete = false;
	var createline = [];
	var deleteline = [];
	var numOfdeleteDot = 1;
	var x0, y0, x1, y1, kx, ky;
	var D = function() {
		return {
			dot : function(x, y) {
				if (area != undefined) {
					var dotId = area.id + "-" + x + "-" + y;
					createline.push(dotId);
					var dot = "<div id=" + dotId + " style='opacity:" + opacity + ";width:0;height:0;border-width:" + thickness + "px;border-style:solid;border-color:" + color + ";position:absolute;left:" + x + "px;top:" + y + "px;'></div";
					area.innerHTML += dot;
					return dot;
				}
			},
			del : function(id) {
				var d = Im.getObj(id);
				d.parentNode.removeChild(d);
			}
		}
	}();

	return {
		lineSpot : function(id) {
			if(!oncreate){
				area = Im.getObj(id);
			}
		},
		lineStyle : function(t, c, o, s) {
			if(!oncreate){
				thickness = t;
				color = c;
				opacity = o;
				speed = s;
			}
		},
		drawLineTo : function(_x0, _y0, _x1, _y1) {
			if (area != undefined) {
				if (!oncreate && !ondelete) {
					x0 = _x0;
					y0 = _y0;
					x1 = _x1;
					y1 = _y1;
					k = (_y1 - _y0) / (_x1 - _x0);
					if (k < 1) {
						kx = 2 * thickness;
						ky = 2 * k * thickness;
						ky = Number(ky.toFixed(2));
					} else {
						kx = 2 * 1 / k * thickness;
						kx = Number(kx.toFixed(2));
						ky = 2 * thickness;
					}
					if (!ondelete) {
						deleteline = createline;
						numOfdeleteDot = 1;
					}	
					createline = [];
					this.createdot();
				}else if(false){
					clearTimeout(deleteTimeout);
					ondelete = false;
					x0 = _x0;
					y0 = _y0;
					x1 = _x1;
					y1 = _y1;
					k = (_y1 - _y0) / (_x1 - _x0);
					if (k < 1) {
						kx = 2 * thickness;
						ky = 2 * k * thickness;
						ky = Number(ky.toFixed(2));
					} else {
						kx = 2 * 1 / k * thickness;
						kx = Number(kx.toFixed(2));
						ky = 2 * thickness;
					}
					numOfdeleteDot = 1;
					createline = [];
					this.createdot();
					/*
					clearTimeout(createTimeout);
					oncreate = false;
					clearTimeout(deleteTimeout);
					ondelete = false;
					deleteline = createline;
					numOfdeleteDot = 1;
					this.clearLine();				
					*/
				}
			} else {
				return "area undefined";
			}
		},
		createdot : function() {
			oncreate=true;
			if (x0 < x1 || y0 < y1) {
				D.dot(x0, y0);
				x0 = x0 + kx;
				y0 = y0 + ky;
				createTimeout = setTimeout(name+".createdot()", speed);
			} else {
				clearTimeout(createTimeout);
				oncreate = false;
			}
		}
		,
		clearLine : function(){
			if (deleteline.length == 0) {
				deleteline = createline;
			}
			if(oncreate){
				oncreate = false;
				clearTimeout(createTimeout);
				deleteline = createline;
			}
			if (!ondelete) {
				deleteline = createline;
				ondelete=true;
				this.deletedot();
			}
		}
		,
		deletedot : function() {
			if (deleteline.length - numOfdeleteDot >= 0) {
				D.del(deleteline[deleteline.length - (numOfdeleteDot++)]);
				deleteTimeout = setTimeout(name+".deletedot()", speed * 0.75);
			} else {
				clearTimeout(deleteTimeout);
				ondelete = false;
			}
		}
		,
		param : function() {
			var arr1 = [thickness, color, opacity, speed, area, createTimeout, deleteTimeout];
			var arr2 = [createline, deleteline, numOfdeleteDot,oncreate,ondelete];
			return [arr1,arr2];
		}
	}
};
/*
lineto.lineSpot("select-as");
lineto.lineStyle(2, "#06A7FF", 1, 40);
lineto.drawLineTo(248, 15.5, 288, 15.5); 
*/