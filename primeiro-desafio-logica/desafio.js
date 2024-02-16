//1-Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

function umAdez(){
let numero = 1;

while(numero <= 10){
        alert(numero);
        console.log(numero)
        numero++;
    }
}

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
function zeroAdez(){
let numero = 10;

while(numero > -1){
        alert(numero);
        console.log(numero)
        numero--;    
    }
}

//3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
function ContatemRegressiva(){
let numero = prompt("Digite o numero que irá começar a contagem regressiva");
let i = numero;

while(i > -1){
        alert(i);
        console.log(i);
         i--;
    }
}
//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
function ContadorProgressiva() {
let numero = prompt("Até que numero voce quer a contagem progressiva?");
i = 0;

while(i <= numero){
    alert(i);
    console.log(i);
    i++;
    }
}
umAdez()
zeroAdez()
ContatemRegressiva()
ContadorProgressiva()