  $(document).ready(function() {
  function myDate(){
  var now = new Date();
  var outHour = now.getHours();
  var outMin = now.getMinutes();
  var outSec = now.getSeconds();
  } 
  myDate();
  setInterval(function(){   myDate();}, 1000);

  });
