var lineto = function() {

	var thickness = 1;
	var color = "#000000";
	var opacity = 1;
	var speed = 1;
	var area;
	var timeout;
	var x0, y0, x1, y1,kx,ky;
	var D = function() {
		return {
			dot : function(x, y) {
				if (area != undefined) {
					var dot = "<div style='opacity:" + opacity + ";width:0;height:0;border-width:" + thickness + "px;border-style:solid;border-color:" + color + ";position:absolute;left:" + x + "px;top:" + y + "px;'></div";
					area.innerHTML += dot;
					return dot;
				}
			},
		}
	}();

	return {
		createdot : function() {
			if (x0 <= x1 || y0 <= y1) {
				D.dot(x0,y0);
				x0 = x0 + kx;
				y0 = y0 + ky;
				setTimeout("lineTo.createdot()",speed);
			} else {
				clearTimeout(timeout);
			}
		},
		lineSpot : function(id) {
			area = Im.getObj(id);
		},
		lineStyle : function(t, c, o, s) {
			thickness = t;
			color = c;
			opacity = o;
			speed = s;
		},
		drawLineTo : function(_x0, _y0, _x1, _y1) {
			if (area != undefined) {
				x0 = _x0;
				y0 = _y0;
				x1 = _x1;
				y1 = _y1;
				k = (_y1-_y0)/(_x1-_x0);
				if(k<1){
					kx = 2*thickness;
					ky = 2*k*thickness;
					ky = Number(ky.toFixed(2));
				}else{
					kx = 2*1/k*thickness;
					kx = Number(kx.toFixed(2));
					ky = 2*thickness;						
				}
				this.createdot();
				
				return [kx,ky];
			} else {
				return "area undefined";
			}
		}
	}
}();
lineto.lineSpot("lineTo");
lineto.lineStyle(5,"red",1,40);
lineto.drawLineTo(20,20,50,180);
