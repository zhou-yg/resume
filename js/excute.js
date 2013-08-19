var msgArr = ["r-type0","r-type1","r-type2","r-type3"];
var msgColorArr = ["#06A7FF","#06A7FF","#06A7FF","#06A7FF"];
var msgIndexsArr = [105,12.5,138,12.5];
var rlineto1 = lineto
var rlineto2 = lineto
var rlineto3 = lineto
var rlineto4 = lineto
var lineArr;
rlineto1 = rlineto1("rlineto1");
rlineto2 = rlineto2("rlineto2");
rlineto3 = rlineto3("rlineto3");
rlineto4 = rlineto4("rlineto4");
rlineto1.lineSpot(msgArr[0]);
rlineto1.lineStyle(2, msgColorArr[0], 1, 25);
rlineto2.lineSpot(msgArr[1]);
rlineto2.lineStyle(2, msgColorArr[1], 1, 25);
rlineto3.lineSpot(msgArr[2]);
rlineto3.lineStyle(2, msgColorArr[2], 1, 25);
rlineto4.lineSpot(msgArr[3]);
rlineto4.lineStyle(2, msgColorArr[3], 1, 25);
rlineArr = [rlineto1, rlineto2, rlineto3, rlineto4];
//rlineto1.drawLineTo(msgIndexsArr[0], msgIndexsArr[1], msgIndexsArr[2], msgIndexsArr[3]);

var onmsgtype = onoption;
onmsgtype = onmsgtype();
onmsgtype.init(msgArr,msgColorArr,"#ffffff",false,false)
//nmsgtype.setArr(msgIndexsArr,rlineArr);
//==================================================================================================================//
//var langArr = ["Flash AS", "Java", "PHP", "HTML+CSS+JavaScript", "C/C++", "Android", "mysql", "sqlite", "sqlserver"];
var idtitleArr = ["type0", "type1"];
//var idtitleArr = ["type0", "type1","type2"];
var titleColorArr = ["#06A7FF","#06A7FF"];
var windowArr = ["basicMsgWindow","professionalSkillWindow"];
var glide1 = glidelr;
var glide2 = glidelr;
glide1 = glide1("glide1");
glide2 = glide2("glide2");
var glideArr = [glide1,glide2];
glide.init(glideArr,idtitleArr,windowArr);
var onsubtitle = onoption;
onsubtitle = onsubtitle();
onsubtitle.init(idtitleArr,titleColorArr,"none",false,true);
//=======================================================//
var idlangArr = ["select-as", "select-java", "select-php", "select-js", "select-c"];
var langColorArr = ["#06A7FF","#98D0F0","#A9D4EC", "#62BFF5", "#1FA8F7"];

var lineto1 = lineto
var lineto2 = lineto
var lineto3 = lineto
var lineto4 = lineto
var lineto5 = lineto
var lineArr;
lineto1 = lineto1("lineto1");
lineto2 = lineto2("lineto2");
lineto3 = lineto3("lineto3");
lineto4 = lineto4("lineto4");
lineto5 = lineto5("lineto5");
lineto1.lineSpot("select-as");
lineto1.lineStyle(2, langColorArr[0], 1, 25);
lineto2.lineSpot("select-java");
lineto2.lineStyle(2, langColorArr[1], 1, 25);
lineto3.lineSpot("select-php");
lineto3.lineStyle(2, langColorArr[2], 1, 25);
lineto4.lineSpot("select-js");
lineto4.lineStyle(2, langColorArr[3], 1, 25);
lineto5.lineSpot("select-c");
lineto5.lineStyle(2, langColorArr[4], 1, 25);
lineArr = [lineto1, lineto2, lineto3, lineto4, lineto5];
lineto1.drawLineTo(248, 15.5, 315, 15.5);

//"#06A7FF","#33CCFF","#33CC33","#CCCCFF","#FFCC99"
//#ff9636 #1e8cbe #1e8cbe #0074a2 colorful
//#98D0F0 #7FBCDF #62BFF5 #1FA8F7   blue
var onlangtype = onoption;
onlangtype = onlangtype();
var langIndexArr = [248,15.5,315,15.5];
onlangtype.init(idlangArr,langColorArr,"#ffffff",true,false);
onlangtype.setArr(langIndexArr,lineArr);
//=======================================================================//