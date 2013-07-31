var bmpIdArr = ["bm0","bm1","bm2","bm3","bm4","bm5","bm6","bm7"];
var bmpUrlArr = ["p/b0.jpg","p/b1.jpg","p/b2.jpg","p/b3.jpg","p/b4.jpg","p/b5.jpg","p/b6.jpg","p/b7.jpg"];
var blen = bmpIdArr.length;

var initIdArr = ["bm0","bm1","bm2","bm3"];
var crutIdArr = ["bm0","bm1","bm2","bm3"];
var otherIdArr = ["bm4","bm5","bm6","bm7"];
var arrArr = ["crutIdArr","otherIdArr"];

var blen = bmpIdArr.length;
var ilen = initIdArr.length;

var crutArr = arrArr[0];
var timeOut;
var glidePath = 800;
var crutP = 0;
var t = 1;
var dir = 1;

function BmpBar(){
	BmpBar.prototype.init=function (){
		var bImgC = getObj("bImgC");
		for(var i=0;i<blen;i++){
			bImgC.innerHTML += "<div id='"+bmpIdArr[i]+"' class='styleOfImgFrame'><img src='"+bmpUrlArr[i]+"' width='100%' height='100%' /></div>" 
		}
		this.reSet();
		this.setImgEvent()
	}
	BmpBar.prototype.reSet = function(){
		if(crutArr == arrArr[0]){
			for(var i=0;i<ilen;i++){
				var bmp = getObj(crutIdArr[i]);
				bmp.style.top=0;
				bmp.style.left=0;
			}
		}
	}
	BmpBar.prototype.setImgEvent = function (){
		for(var i=0;i<blen;i++){
			getObj(bmpIdArr[i]).onmouseover = function (){bb.theOnEvent(this.id)};
			getObj(bmpIdArr[i]).onmouseout = function (){bb.theOutEvent(this.id)};
		}
	}
	BmpBar.prototype.theOnEvent=function (imgId){
		var bmp = getObj(imgId);
		//clearTimeout(timeOut);		
	}
	BmpBar.prototype.theOutEvent=function (imgId){
		var bmp = getObj(imgId);
		//timeOut = setTimeout("imgGlide()",40);		
	}
}
function ClickOnDirectionBtn(){
	ClickOnDirectionBtn.prototype.clickLeft = function(){
		dir=1;	
		t=1;
		crutP=0;
		if(crutArr == arrArr[0]){
			for(var i=0;i<ilen;i++){
				var bmp = getObj(otherIdArr[i]);
				bmp.style.left=0;
			}
			crutArr=arrArr[1];
			imgGlide();
		}else{
			for(var i=0;i<ilen;i++){
				var bmp = getObj(otherIdArr[i]);		
				bmp.style.left=800;
			}
			crutArr=arrArr[0];
			imgGlide();
		}
	};
	ClickOnDirectionBtn.prototype.clickRight = function(){
		dir=-1;
		t=1;
		crutP=0;
		if(crutArr == arrArr[0]){
			for(var i=0;i<ilen;i++){
				var bmp = getObj(otherIdArr[i]);
				bmp.style.left = -1600;
			}
			crutArr=arrArr[1];
			imgGlide();
		}else{
			for(var i=0;i<ilen;i++){
				var bmp = getObj(otherIdArr[i]);
				bmp.style.left = -800;		
			}
			crutArr=arrArr[0];
			imgGlide();
		}
	}	
}

var imgGlide = function (){
	
	if(t<=16){
		for(var i=0;i<8;i++){
			if(i<4){
				var bmp = getObj(crutIdArr[i]);
				bmp.style.left = parseInt(getObjStyle(bmp,"left")) - dir*glidePath/(2*t);
		 	}else{
		 		var bmp = getObj(otherIdArr[i-4]);
				bmp.style.left = parseInt(getObjStyle(bmp,"left")) - dir*glidePath/(2*t);
		 	}
		}
		timeOut = setTimeout("imgGlide()",25);
	}else{
		clearTimeout(timeOut);
		for(var i=0;i<8;i++){
			if(i<4){
				var bmp = getObj(crutIdArr[i]);
				bmp.style.left = parseInt(getObjStyle(bmp,"left")) - dir*(glidePath-crutP);
			}else{
		 		var bmp = getObj(otherIdArr[i-4]);
				bmp.style.left = parseInt(getObjStyle(bmp,"left")) - dir*(glidePath-crutP);
		 	}
		}
		var tp = crutIdArr;
		crutIdArr = otherIdArr;	
		otherIdArr = tp;
	}
	if(crutP<=glidePath){
		crutP += glidePath/(2*t);
	}
	t=t*2;
}
var bb = new BmpBar();
var codb = new ClickOnDirectionBtn();
bb.init();

getObj("btnprev").onclick = codb.clickLeft;
getObj("btnnext").onclick = codb.clickRight;
