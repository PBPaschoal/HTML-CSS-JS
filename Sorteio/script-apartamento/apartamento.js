var apartamentos = [
    101, 102, 103, 104, 105, 106,
    201, 202, 203, 204, 205, 206,
    301, 302, 303, 304, 305, 306,
    401, 402, 403, 404, 405, 406,
    501, 502, 503, 504, 505, 506
];

var sorteioRealizado = 0;
var numerosDisponiveis = apartamentos.slice();
var numerosUtilizados = [];

function realizarSorteio() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    var numerosSorteados = [];

    // Definir a ordem específica apenas para o primeiro clique
    if (sorteioRealizado === 0) {
        numerosSorteados = [
            503, 402, 206, 103, 301, 104, 504, 102, 401, 406,
            303, 505, 204, 506, 304, 105, 202, 101, 501, 403,
            306, 106, 404, 502, 405, 205, 201, 302, 305, 203
        ];
    } else {
        // Sortear aleatoriamente sem repetições para os demais cliques
        numerosSorteados = sortearAleatorioSemRepeticao(30);
    }

    for (var i = 0; i < numerosSorteados.length; i++) {
        resultadoDiv.innerHTML += (i + 1) + "º - Apartamento: " + numerosSorteados[i] + "<br>";
    }

    sorteioRealizado++;
}

function sortearAleatorioSemRepeticao(qtd) {
    var numerosDisponiveisFiltrados = numerosDisponiveis.filter(function (num) {
        return numerosUtilizados.indexOf(num) === -1;
    });

    if (numerosDisponiveisFiltrados.length === 0) {
        numerosUtilizados = [];
        numerosDisponiveisFiltrados = apartamentos.slice();
    }

    // Sortear a quantidade desejada sem repetições
    var resultados = [];
    for (var i = 0; i < qtd; i++) {
        var index = Math.floor(Math.random() * numerosDisponiveisFiltrados.length);
        var resultado = numerosDisponiveisFiltrados[index];
        numerosUtilizados.push(resultado);
        // Remover o número sorteado dos disponíveis
        numerosDisponiveisFiltrados.splice(index, 1);
        resultados.push(resultado);
    }

    return resultados;
}
