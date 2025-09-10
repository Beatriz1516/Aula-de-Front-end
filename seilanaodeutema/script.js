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