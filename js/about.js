var overlay = document.getElementById("overlay");
var nav = document.getElementById("navv");
window.addEventListener('load', function(){
  overlay.style.display = 'none';
  overlay.style.opacity= 0;
  nav.style.opacity= 1;
  nav.style.background= '#434342f7';
})
function opennav() {
var nav=document.getElementById("hbutton");
if(nav.style.display == "none")
{ nav.style.display = "block"; }
else {
  nav.style.display = "none";
}
}