$(document).ready(function(){
   
$("#member-one").click(function(){
    $("#mem-ber-one").slideToggle("slow");
})
$("#member-two").click(function(){
    $("#mem-ber-two").slideToggle("slow");
})
$("#member-three").click(function(){
    $("#mem-ber-three").slideToggle("slow");
})
$("#member-four").click(function(){
    $("#mem-ber-four").slideToggle("slow");
})
$("#close-icon").click(function(){
   if(window.matchMedia('(max-width: 768px)').matches){
    $(".navb-ar").animate({left: '-30%'},800);
    $(".home-info").animate({width: '100%',right:'0%'},700)
   }
  else{
  $(".navb-ar").animate({left: '-18%'},800);
  $(".home-info").animate({width: '100%',right:'0%'},700)}
   
})
$("#openn").click(function(){
  if(window.matchMedia('(max-width: 768px)').matches){
        
    $(".home-info").animate({width: '70%',right:'-30%'},800)
    $(".navb-ar").animate({width: '30%',left:'0'},700);
  }
  else{
        
    $(".home-info").animate({width: '82%',right:'-18%'},800)
    $(".navb-ar").animate({width: '18%',left:'0'},700);
  }
    
       
})

})


function counter(val) {
    var len = val.value.length;
    if(len>100){
        document.getElementById("number").innerHTML="your available character finished";
    }
    else{
        document.getElementById("number").innerHTML=len;
    }
    
  };



var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML=days+" D";
    document.getElementById("hours").innerHTML=hours+" h";
    document.getElementById("minutes").innerHTML=minutes+" m";
    document.getElementById("seconds").innerHTML=seconds+" s";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);