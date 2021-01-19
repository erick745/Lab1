function problemaDos(entrada) 
{
    for(var i = 0; i < entrada.length; i++) 
    {
      if(entrada[i] === ")") 
      {
        entrada = entrada.substring(0, i) + entrada.substring(i + 1);
        i--;
        var inverso = "";
        while(entrada[i] !== "(") 
        {
          inverso += entrada[i];
          entrada = entrada.substring(0, i) + entrada.substring(i + 1);
          i --;
        }
        entrada = entrada.substring(0, i) + inverso + entrada.substring(i + 1);
        i += inverso.length - 1;
      }
    }
    console.log(entrada);
  }
problemaDos('(bar)');
problemaDos('foo(bar)baz');
problemaDos('foo(bar)baz(blim)');
problemaDos('foo(bar(baz))blim');
