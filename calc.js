{//relogio e calendariohttp://127.0.0.1:3000/inden.htmlhttp://127.0.0.1:3000/inden.html

setInterval(()=>{
   var rel = document.getElementById("relogio");
   var calen = document.getElementById("calendario");
   const today = new Date();
   rel.innerHTML= today.toLocaleTimeString('pt-BR');
   calen.innerHTML= today.toLocaleDateString('pt-BR');

}, 1000);

}
var digtela = [];
var valor1 = [];
var valor2 = [];
var valor3 = [];
var valor4 = [];
var tela =document.getElementById('NumeroTela');

function digAper(value){
   digtela.push(value);
 var total = digtela.reduce((total, numero) => total + numero, ) ;
 tela.value=total;
}
function operacao(value){
   var total = digtela.reduce((total, numero) => total + numero, ) ;
    var volue1 =valor1.push(total);
    var volue3 =valor3.push(value);
    var qts = valor3.length;
   if(total > 0) {
      digtela.splice(0);
   }
}

   function result(){
      var total = digtela.reduce((total, numero) => total + numero, ) ;
      var volue2 =valor2.push(total);
      var verif = valor1.length;
    
      if (valor3 == '+'){
         var numb1= parseFloat(valor1) ;
         var numb2= parseFloat(valor2) ;
         var soma = numb1 + numb2;
          valor4.push(soma);
         tela.value=valor4;
        
      } 
       else if (valor3 == '-'){
         var numb1= parseFloat(valor1) ;
         var numb2= parseFloat(valor2) ;
         var subtracao = numb1 - numb2;
         valor4.push(subtracao);
         tela.value=valor4;
      }
      else if (valor3 == 'x'){
         var numb1= parseFloat(valor1) ;
         var numb2= parseFloat(valor2) ;
         var mutiplicacao = numb1 * numb2;
         valor4.push(mutiplicacao);
         tela.value=valor4;
      }
      else if (valor3 == '÷'){
         var numb1= parseFloat(valor1) ;
         var numb2= parseFloat(valor2) ;
         var divisao = numb1 / numb2;
         valor4.push(divisao);
         tela.value=valor4;
         if(total > 0) {
            digtela.splice(0);
          }  
}
if(valor4 > 1) {
   valor1.shift();
   valor2.shift();
   valor3.shift();  
   valor4.shift();
 }
   }

 function apag(){
   var apag = digtela.pop();
   if(digtela.length <= 1){

      tela.value='0000000000';
   }
   else{
      var total = digtela.reduce((total, numero) => total + numero, ) ;
      tela.value=total;
   }
}

   console.log(digtela);

  
   





































