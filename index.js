var attributes = document.getElementsByTagName('body');
for(var i = 0; i < attributes.length; i++) {
attributes[i].onload = function() {
	f();
}
}
document.getElementById('newgame').onmouseover = function() {
	playhover();
}
document.getElementById('quitgame').onmouseover = function() {
	playhover();
}
document.getElementById('quitgame').onclick = function() {
	close();
}