alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto...
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break; 
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        // Para execultar essa fórmula: "tentativas = tentativas + 1;", podemos representar da mesma forma que foi feito na parte de baixo:
        tentativas++
    }
}

// São duas maneiras possiveis de escrever o comando abaixo, a primeira é com "operador condicional tenário" e com "if":
let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }