//déclenchement de jquery
$(document).ready(function(){

//Cacher le premier paragraphe
$('#firstText').hide();
});
//En javaScript natif
window.onload=function(){
  document.getElementById('firstText').style.display='none';
}
