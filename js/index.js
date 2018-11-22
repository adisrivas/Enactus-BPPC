$(document).ready(function() {
  $(window).scroll(function() {
  	if($(document).scrollTop() > 20) {
    	$('#navadd').addClass('default1');
    }
    else {
    $('#navadd').removeClass('default1');
    }
  });
    $('#delay1').delay(2000).fadeOut(180);
    $('#delay2').delay(2500).fadeIn(200);
});
var overlay = document.getElementById("overlay");
window.addEventListener('load', function(){
  overlay.style.display = 'none';
  overlay.style.opacity= 0;
});
function opennav() {
var nav=document.getElementById("hbutton");
if(nav.style.display == "none")
{ nav.style.display = "block"; }
else {
  nav.style.display = "none";
}
}
var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
 
if (!ismobile){
 window.addEventListener('scroll', function(){
  var scrolled=document.getElementById('scrolled');
  scrolled.style.top=-(window.pageYOffset * 0.5)+ 'px';
 }, false)
}