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
function getMatrix(data){
	data+='';

	var time;
	switch(data){
		case '0':time=view._0;
		break;
		case '1':time=view._1;
		break;
		case '2':time=view._2;
		break;
		case '3':time=view._3;
		break;
		case '4':time=view._4;
		break;
		case '5':time=view._5;
		break;
		case '6':time=view._6;
		break;
		case '7':time=view._7;
		break;
		case '8':time=view._8;
		break;
		case '9':time=view._9;
		break;
		default:return 'Couldn\'t detect hours';break;
	}
	return time;
}
function Display(data_name,timing){
	timing+='';
	if(timing.length<2){
		var time = getMatrix(timing);

		$("#"+data_name+"_bit1 ul li div."+data_name).removeClass('orange');
		$("#secs_bit2 ul li div."+data_name).removeClass('orange');
		for(i=0;i<view._0.length;i++){
			$("#"+data_name+"_bit1 ul li div."+data_name+"."+view._0[i]+".box").addClass('orange');
		}
		for(i=0;i<time.length;i++){
			$("#"+data_name+"bit2 ul li div."+data_name+"."+time[i]+".box").addClass('orange');
		}

	}
	else {var bit1 = timing.substring(0,1);
		var bit2 = timing.substring(1,2);
      // returns an array 
      var time1 = getMatrix(bit1);
      var time2 = getMatrix(bit2);
      $("#"+data_name+"_bit1 ul li div."+data_name).removeClass('orange');
      for(i=0;i<time1.length;i++){
      	$("#"+data_name+"_bit1 ul li div."+data_name+"."+time1[i]+".box").addClass('orange');
      }
      $("#"+data_name+"_bit2 ul li div."+data_name).removeClass('orange');


      for(i=0;i<time2.length;i++){
      	$("#"+data_name+"_bit2 ul li div."+data_name+"."+time2[i]+".box").addClass('orange');
      }
  }

}