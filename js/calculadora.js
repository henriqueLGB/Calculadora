    /* FUNÇÃO PARA LIMPAR O DISPLAY */
    function apagar(){
        
        let display = document.getElementById('display').value = ''
  
      }
  
      /* FUNÇÃO PARA ADICIONAR OS NÚMEROS */
      function adicionaNumero(numero){
  
        let display = document.getElementById('display').value
        let exibir = document.getElementById('display').value = display + numero 
        
      }
  
      /* FUNÇÃO PARA ADICIONAR OS SIMBOLOS */
      function adicionarSimbolo(simbolo){
  
        let display = document.getElementById('display').value;
        let exibir;
  
        switch(simbolo){
          
          case 'divisao':
            exibir = document.getElementById('display').value = display + '/';
          break;
  
          case 'multiplicar':
            exibir = document.getElementById('display').value = display + '*';
          break;
  
          case 'subtrair': 
            exibir = document.getElementById('display').value = display + '-';
          break;
  
          case 'somar': 
            exibir = document.getElementById('display').value = display + '+';
          break;
  
          case 'ponto': 
            exibir = document.getElementById('display').value = display + '.';
          break;
  
          
        }
        
      }
  
      /* FUNÇÃO PARA EXIBIR O RESULTADO */
      function resultado(){
        
        let valor = document.getElementById('display');
  
        /* VERIFICA SE O VALOR É NULO OU ZERO */
        if(valor.value == null || valor.value == 0){
          return valor.value = '';
        }
  
        let calculo = eval(valor.value);
        
        valor.value = calculo;
  
      }