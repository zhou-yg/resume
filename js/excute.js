var langArr = ["Flash AS", "Java", "PHP", "HTML+CSS+JavaScript", "C/C++", "Android", "mysql", "sqlite", "sqlserver"];
var idtitleArr = ["type0", "type1"];
//var idtitleArr = ["type0", "type1","type2"];
var idlangArr = ["select-as", "select-java", "select-php", "select-js", "select-c"];
var windowArr = ["basicMsgWindow","professionalSkillWindow"];
var titleColorArr = ["#06A7FF","#06A7FF"];
var langColorArr = ["#06A7FF","#98D0F0","#A9D4EC", "#62BFF5", "#1FA8F7"];
//"#06A7FF","#33CCFF","#33CC33","#CCCCFF","#FFCC99"
//#ff9636 #1e8cbe #1e8cbe #0074a2 colorful
//#98D0F0 #7FBCDF #62BFF5 #1FA8F7   blue
var glide1 = glidelr;
var glide2 = glidelr;
glide1 = glide1("glide1");
glide2 = glide2("glide2");
var glideArr = [glide1,glide2];
glide.init(glideArr,idtitleArr,windowArr);

var onsubtitle = onoption;
var onlangtype = onoption;

onsubtitle = onsubtitle();
onlangtype = onlangtype();

var langIndexArr = [248,15.5,315,15.5];
onsubtitle.init(idtitleArr,titleColorArr,"none",false,true);
onlangtype.init(idlangArr,langColorArr,"#ffffff",true,false,langIndexArr);

//glide.init(idtitleArr,windowArr,830);
//==================//
var lineto1
var lineto2
var lineto3
var lineto4
var lineto5

var lineJSONObject;
var lineArr;

lineto1 = lineto;
lineto2 = lineto;
lineto3 = lineto;
lineto4 = lineto;
lineto5 = lineto;

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
//==========================//