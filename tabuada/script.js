function calcularTabuada() {
    let numero = document.getElementById("numero").value;
    let resultadoDiv = document.getElementById("resultado");

    if (numero === "") {
        resultadoDiv.innerHTML = "<p style='color:red'> Digite um número válido!</p>";
    } else {
        let resultadoHTML = "<h3> Tabuada do " + numero + ":</h3>";
        let i = 1;

        while (i <= 10){
            resultadoHTML += "<p>" + numero + " x " + i + " = " + (numero * i) + "</p>";
            i++;
        }

        resultadoDiv.innerHTML = resultadoHTML;
    }
};

function calcularSoma() {
    let numeroS = document.getElementById("numeroS").value;
    let resultadoSDiv = document.getElementById("resultadoS");

    if (numeroS === "") {
        resultadoSDiv.innerHTML = "<p style='color:red'> Digite um número válido!</p>";
    } else {
        let resultadoSHTML = "<h3> Soma do " + numeroS + ":</h3>";
        let p = 1;

        while (p <= 10){
            resultadoSHTML += "<p>" + Number(numeroS) + " + " + p + " = " + (Number(numeroS) + p) + "</p>";
            p++;
        }

        resultadoSDiv.innerHTML = resultadoSHTML;
    }
};

function calcularSubtração() {
    let numeroM = document.getElementById("numeroM").value;
    let resultadoMDiv = document.getElementById("resultadoM");

    if (numeroM === "") {
        resultadoMDiv.innerHTML = "<p style='color:red'> Digite um número válido!</p>";
    } else {
        let resultadoMHTML = "<h3> Subtração do " + numeroM + ":</h3>";
        let z = 1;

        while (z <= 10){
            resultadoMHTML += "<p>" + Number(numeroM) + " - " + z + " = " + (Number(numeroM) - z) + "</p>";
            z++;
        }

        resultadoMDiv.innerHTML = resultadoMHTML;
    }
};

function calcularDivisão() {
    let numeroD = document.getElementById("numeroD").value;
    let resultadoDDiv = document.getElementById("resultadoD");

    if (numeroD === "") {
        resultadoDDiv.innerHTML = "<p style='color:red'> Digite um número válido!</p>";
    } else {
        let resultadoDHTML = "<h3> Divisão do " + numeroD + ":</h3>";
        let w = 1;

        while (w <= 10){
            resultadoDHTML += "<p>" + Number(numeroD) + " / " + w + " = " + (Number(numeroD) / w) + "</p>";
            w++;
        }

        resultadoDDiv.innerHTML = resultadoDHTML;
    }
};