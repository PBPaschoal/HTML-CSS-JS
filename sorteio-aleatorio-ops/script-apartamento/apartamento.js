var apartamentos = [
    101, 102, 103, 104, 105, 106,
    201, 202, 203, 204, 205, 206,
    301, 302, 303, 304, 305, 306,
    401, 402, 403, 404, 405, 406,
    501, 502, 503, 504, 505, 506
];

var numerosEspecificos = [
    [103, 301, 403],
    [301, 302, 506],
    [101, 405, 502],
    [301, 205, 104]
];

var sorteioRealizado = 0;
var numerosDisponiveis = apartamentos.slice(); // Cria uma cópia dos números disponíveis

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function realizarSorteio() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior
    var numerosSorteados = [];

    if (sorteioRealizado < numerosEspecificos.length) {
        numerosSorteados = numerosEspecificos[sorteioRealizado];
    } else {
        numerosSorteados = numerosDisponiveis.splice(0, 3); // Seleciona os próximos 3 números disponíveis    
    }

    var numerosUtilizados = [];
    for (var i = 0; i < 30; i++) {
        var resultado = "";
        if (i < numerosSorteados.length) {
            resultado = numerosSorteados[i];
            numerosUtilizados.push(resultado);
        } else {
            var numerosDisponiveisFiltrados = numerosDisponiveis.filter(function (num) {
                return numerosUtilizados.indexOf(num) === -1;
            });
            if (numerosDisponiveisFiltrados.length === 0) {
                numerosUtilizados = [];
                numerosDisponiveisFiltrados = numerosDisponiveis.slice();
            }
            var index = Math.floor(Math.random() * numerosDisponiveisFiltrados.length);
            resultado = numerosDisponiveisFiltrados[index];
            numerosUtilizados.push(resultado);
        }
        resultadoDiv.innerHTML += (i + 1) + "º - Apartamento: " + resultado + "<br>";
    }
    sorteioRealizado++;
}