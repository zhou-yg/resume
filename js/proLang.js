var langArr = ["Flash AS","Java","PHP","HTML+CSS+JavaScript","C/C++","Android","mysql","sqlite","sqlserver"];
var idArr = ["select-as","select-java","select-php","select-js","select-c"];

var onSelectFrame = function(){
	
	var idArr = new Array();
	
	return{
		init:function(arr){
			idArr = arr;
			this.setEvent();

			return idArr;
		}
		,
		setEvent:function(){
			
		}
	}
}();