var view = { 
	_0:[2,3,4,6,10,11,15,16,20,21,30,32,33,34],
	_1:[2,3,6,8,13,18,23,28,31,32,33,34,35],
	_2:[2,3,4,6,10,15,18,19,22,26,31,32,33,34,35],
	_3:[2,3,4,6,10,15,18,19,22,26,31,32,33,34,35],
	_4:[4,5,8,10,12,15,16,20,21,22,23,24,25,30,35],
	_5:[1,2,3,4,5,6,11,12,13,14,20,25,26,30,32,33,34],
	_6:[2,3,4,6,10,11,16,17,18,19,21,25,26,30,32,33,34],
	_7:[1,2,3,4,5,6,10,15,19,23,27,32],
	_8:[2,3,4,6,10,11,15,17,18,19,21,25,26,30,32,33,34],
	_9:[2,3,4,6,10,11,15,17,18,19,20,25,26,30,32,33,34]
};
function gen_separator(){
	
	gen="<div id='seperator'><ul>";
	
	for(i=0;i<7;i++){
		gen+="<li>";
		gen+="<div class='box'></div>";
		gen+="</li>"
	}
	gen+="</ul></div>";
	return gen;
}
function gen_separatorPointer(){
	
	gen="<div id='seperator_pointer'><ul>";
	gen+="<li><div class='box'></div></li>";
	gen+="<li><div class='box'></div></li>";
	gen+="<li><div class='orange box '></div></li>";
	gen+="<li><div class='box'></div></li>";
	gen+="<li><div class='orange box '></div></li>";
	gen+="<li><div class='box'></div></li>";
	gen+="<li><div class='box'></div></li>";
	gen+="</ul></div>";
	return gen;
}
function gen_bit(type,id){
	var gen = "";
	var count=1;
	gen+="<div id='"+type+"_bit"+id+"'><ul>";
	for(i=0;i<7;i++){
		gen+="<li>";
		for(var j=0;j<5;j++){
			gen+="<div class='"+type+" "+count+" box'></div>";
			count++;
		}
		gen+="</li>";
	}
	gen+="</ul></div>";
	return gen;
}
function create(){
	var digits = document.getElementById('digits');
	var gen = "";
	var count=1;
	gen+="<div id='hours'>"
	gen+=gen_bit("hours","1");
	gen+=gen_separator();
	gen+=gen_bit("hours","2");
	gen+="</div>";

	gen+=gen_separator();
	gen+=gen_separatorPointer();
	gen+=gen_separator();
	
	gen+="<div id='minutes'>"
	gen+=gen_bit("mins","1");
	gen+=gen_separator();
	gen+=gen_bit("mins","2");
	gen+="</div>";

	gen+=gen_separator();
	gen+=gen_separatorPointer();
	gen+=gen_separator();
	
	gen+="<div id='seconds'>"
	gen+=gen_bit("secs","1");
	gen+=gen_separator();
	gen+=gen_bit("secs","2");
	gen+="</div>";
	
	digits.innerHTML=gen;
}
