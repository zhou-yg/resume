var langArr = ["Flash AS", "Java", "PHP", "HTML+CSS+JavaScript", "C/C++", "Android", "mysql", "sqlite", "sqlserver"];
var idlangArr = ["select-as", "select-java", "select-php", "select-js", "select-c"];
var langColorArr = ["#06A7FF","#33CC33","#CCCCFF","#FFCCCC","#FFCC99"];//#ff9636 #1e8cbe
var idtitleArr = ["type0", "type1"];
//var idtitleArr = ["type0", "type1","type2"];
var windowArr = ["basicMsgWindow","professionalSkillWindow"];
var onsubtitle = onoption;
var onlangtype = onoption;

onsubtitle = onsubtitle();
onlangtype = onlangtype();

onsubtitle.init(idtitleArr,langColorArr);
onlangtype.init(idlangArr,langColorArr);

var glideArr = [];
var glide1 = glidelr;
var glide2 = glidelr;
glide1 = glide1("glide1");
glide2 = glide2("glide2");
glideArr = [glide1,glide2];
glide.init(idtitleArr,windowArr,830);
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
lineto1.lineStyle(2, langColorArr[0], 1, 40);

lineto2.lineSpot("select-java");
lineto2.lineStyle(2, langColorArr[1], 1, 40);

lineto3.lineSpot("select-php");
lineto3.lineStyle(2, langColorArr[2], 1, 40);

lineto4.lineSpot("select-js");
lineto4.lineStyle(2, langColorArr[3], 1, 40);

lineto5.lineSpot("select-c");
lineto5.lineStyle(2, langColorArr[4], 1, 40);

lineArr = [lineto1, lineto2, lineto3, lineto4, lineto5];

//lineJSONObject = eval("("+Im.toJSONString(lineArr,linespotArr)+")")
lineto1.drawLineTo(248, 15.5, 290, 15.5);
//==========================//
