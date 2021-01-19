function problemaUno(entrada){
    var largo = 0;
    var palargos = [];
    
    for (var i = 0; i < entrada.length; i++) {
      if (entrada[i].length >  largo) {
        var largo = entrada[i].length;
          }
    }
  
    for (var i = 0; i < entrada.length; i++) {
      if (entrada[i].length === largo) {
        palargos.push(entrada[i]);
          }
      }
      console.log(palargos);   
  }
  problemaUno(['aba','aa','ad','vcd','aba']);
  problemaUno(['enyky','benyky','yely','varennyky']);
  problemaUno(['ab','abc','zabcdefghijk','lmnopqr','abecedarioab']);