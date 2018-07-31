function inicio (){
	let boton= document.getElementById("boton");
	boton.addEventListener("click", cambiar);	
}

function cambiar(){
	let lista=["#584480","#F40909","#0f5f14","#0bbcea", "#000","#8a496b","FF1F70"];
	let div= document.getElementById("body");
	div.style.background = lista[Math.floor(Math.random() * lista.length)];
}