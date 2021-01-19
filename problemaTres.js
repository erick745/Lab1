function problemaTres(entrada) {
    var palindrome = true;
    var centro = 0;
    var arreglo = entrada.split("");
    while(palindrome && arreglo.length > 0)
    {
        if(arreglo.indexOf(arreglo[0], 1) > 0)
            arreglo.splice(arreglo.indexOf(arreglo[0], 1), 1);
        else
        {
            if(centro < 1)
                centro ++;
            else 
                palindrome = false;
        }
        arreglo = arreglo.slice(1);
        
    }
    if(palindrome === true) 
        console.log("Verdadero");
    else
        console.log("Falso");   
}
problemaTres('aabb');
problemaTres('mar');
problemaTres('oruro');
problemaTres('potosi');