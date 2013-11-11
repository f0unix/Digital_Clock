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
$(document).ready(function() {
  function myDate(){
    var now = new Date();
    var outHour = now.getHours();
    var outMin = now.getMinutes();
    var outSec = now.getSeconds();
    outHour+='';
    if(outHour.length<2){
      var time;
      switch(outHour){
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
        default:console.log('Couldn\'t detect hours');break;
      }
      console.log(time);
    }
    //$("#secs_bit1 ul li div.secs "+i+" box")
    //$("#secs_bit2 ul li div.secs "+i+" box")
    //console.log(outHour+":"+outMin+":"+outSec);

  } 
  myDate();
  setInterval(function(){myDate();}, 1000);
});