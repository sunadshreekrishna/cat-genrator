function catgenrator(){
	var img= document.createElement('img');
	img.setAttribute('src','http://thecatapi.com/api/images/get?format=src&type=gif');
	document.getElementById("gen_cat").appendChild(img);
	img.setAttribute("class","rounded-circle");
	img.setAttribute("height","200");
	img.setAttribute("width","200");
}

function reset(){
	document.getElementById("gen_cat").remove();
}