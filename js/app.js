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
			gen+="<div class='"+type+""+count+" box'></div>";
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