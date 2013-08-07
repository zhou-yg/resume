var langArr = ["Flash AS", "Java", "PHP", "HTML+CSS+JavaScript", "C/C++", "Android", "mysql", "sqlite", "sqlserver"];
var idlangArr = ["select-as", "select-java", "select-php", "select-js", "select-c"];
var idtitleArr = ["type0", "type1", "type2"];
var onsubtitle = onoption;
var onlangtype = onoption;

onsubtitle = onsubtitle();
onlangtype = onlangtype();

onsubtitle.init(idtitleArr);
onlangtype.init(idlangArr);
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
lineto1.lineStyle(2, "#06A7FF", 1, 40);

lineto2.lineSpot("select-java");
lineto2.lineStyle(2, "#06A7FF", 1, 40);

lineto3.lineSpot("select-php");
lineto3.lineStyle(2, "#06A7FF", 1, 40);

lineto4.lineSpot("select-js");
lineto4.lineStyle(2, "#06A7FF", 1, 40);

lineto5.lineSpot("select-c");
lineto5.lineStyle(2, "#06A7FF", 1, 40);

lineArr = [lineto1, lineto2, lineto3, lineto4, lineto5];

//lineJSONObject = eval("("+Im.toJSONString(lineArr,linespotArr)+")")
lineto1.drawLineTo(248, 15.5, 290, 15.5);
