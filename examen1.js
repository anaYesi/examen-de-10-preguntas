//ejercicio 1
function capicua(numero)
{
	var num = numero;
	var	numeroInvertido = 0;
	var	resto = 0;
	while(num!=0 )
	{
		resto=num%10;
 		numeroInvertido=numeroInvertido*10+resto;
 		num=parseInt(num/10);

	}

	if(numeroInvertido == numero)
		document.write("El numero " + numero +" es capicua");
	else
		document.write("El numero " + numero +" no es capicua");

}
//capicua(121);
//ejercicio 2
function potencia(base, exponente)
{
	var acumulador = 1;
	for(var i = 0; i<exponente; i++)
	{
		acumulador = acumulador * base;
	}
	document.write("la base = "+ base +" exponente es = "+ exponente);
	document.write("Respuesta : "+acumulador);
}
//potencia(3,3);
//ejercicio 3
function contar1(array, letra)
{
	var acumulador = "";
	for (var i =0; i<array.length; i++) 
	{
		for(var j = 0; j<array[i].length; j++)
		if(array[i].charAt(j) == letra)	
			acumulador = acumulador + letra

	}
	document.write(acumulador.length);
}
//contar1(["murcielago","pato","caballo","zebra"],"e");
//ejercicio 4
function contar(array)
{
	var texto = array[0];
	var textoDividido = texto.split(" ");
	var numPalabras = textoDividido.length;
	console.log(numPalabras);

}
//contar(["El mundo es tan cruel"]);
//ejercicio 5
function tamaño(array)
{
	var menor = array[0].length;
	for(var i = 1; i<array.length; i++)
	{
		if( menor <= array[i].length)
			menor = array[i].length ;
	}
	document.write(menor);
}
//tamaño(["gato","perro","cocodrilo","leon"]);

//ejercicio 6
function conVocales(array)
{
	var contador = 0;
	for(var i = 0; i<array.length; i++)
	{
		//var a = array[i];
		for (var j = 0; j<array[i].length; j++) 
		{
			if(array[i][j] == "a" || array[i][j]== "e" || array[i][j]== "i" || array[i][j]== "o"|| array[i][j]== "u")
			{

				contador = contador +1;
			}

		}

	}
	document.write(contador);
	//otra forma
	/*var longitud = array.length;
	var contador = 0;
	for(var i = 0; i<longitud; i++)
	{
		var a = array[i];
		for (var j = 0; j<a[i].length; j++) 
		{
			if(a[j] == "a" || a[j]== "e" || a[j]== "i" || a[j]== "o"|| a[j]== "u")
			{

				contador = contador +1;
			}

		}

	}
	document.write(contador);*/

}
//conVocales(["ojo","mouse","lapiz"]);

//ejercicio 7
function sumatoria(numero1, numero2)
{
	var acumulador =0;
	for (var i = numero1; i<=numero2; i++) 
	{
		if(i%2 ==1)
			acumulador = acumulador +i;

	}
	document.write(acumulador);
}
//sumatoria(1,7)
//ejercicio 8




