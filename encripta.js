function enviar(){
c_cta=document.f_contra.c_cta.value;
c_pass=document.f_contra.c_pass.value;
if(c_cta.length<5){
		alert("Error, la palabra debe de ser de más de 5 caracteres");
		document.f_contra.c_cta.style.background="red";
	}
	else{ 
			abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"
			llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abc"
			salida="";
				cont=0;
				while(cont<c_cta.length){
					letra=c_cta.charAt(cont);
					pos=abc.indexOf(letra);
					salida=salida+llave.charAt(pos);
					cont++;
		}
		salida1="";
				cont1=0;
				while(cont1<c_pass.length){
					letra1=c_pass.charAt(cont1);
					pos1=abc.indexOf(letra1);
					salida1=salida1+llave.charAt(pos1);
					cont1++;
		}
		if ((salida=="mxdqd") && (salida1="defgh")){
	alert("bienvenido");
}
}
}
