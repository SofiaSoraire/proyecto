function validar(){
	var crear= true;
	var titulo= document.getElementById("titulo").value;
	var descripcion= document.getElementById("descripcion").value;
	var archivos= document.getElementById("archivos").value;
	var terminos= document.getElementById("terminos").checked;
	

if(titulo==""){
	alert("escriba el titulo, por favor.");
	return;
}

if(descripcion==""){
	alert("escriba una descripcion, por favor.");
	return;
}

if(archivos==""){
	alert("adjunte un archivo, por favor.");
	return;
}
if(!terminos){
	alert("acepte los terminos y condiciones, por favor.");
	return;
}

}


