// Verifica se o número é primo 
function ehPrimo(num) {
    if (num <= 1) {
        return false; // Não é primo
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Não é primo
        }
    }
    return true; // É primo
}

// Encontra os N primeiros números primos
function encontrarNPrimeirosPrimos(n, mostrarContagem = true) {
    const primos = [];
    let num = 2; // Inicia a verificação a partir de 2, o primeiro número primo

    while (primos.length < n) { 
        if (ehPrimo(num)) {
            primos.push(num); 
            if (mostrarContagem) {
                alert(`${num} é Primo`); // Mostra a contagem de N números primos
            }                         
        } else {
            if (mostrarContagem) {
                alert(`${num} não é Primo`); // Mostra a contagem de N número que não são primos
            }
        }
        num++; // incrementação 
    }

    alert(`Os ${n} primeiros números primos são: ${primos.join(', ')}`); // Unir os elementos do Array em uma única String
    return primos;
}

// Coloque N Números e veja o output
let resultado = encontrarNPrimeirosPrimos(5, true); // Passe true para ver a contagem ou passe false para pular
