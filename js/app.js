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
function gen_bit(type,id){
	var gen = "";
	var count=1;
	gen+="<div id='"+type+"_bit"+id+"'>";
	for(i=0;i<7;i++){
		gen+="<ul><li>";
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
	gen+=gen_separator();
	gen+="</div>";
	gen+="<div id='minutes'>"
	
	gen+="</div>";
	gen+="<div id='seconds'>"
	
	gen+="</div>";
	digits.innerHTML=gen;


}