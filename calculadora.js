function somar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "<b>Resultado: </b>" + (num1 + num2);
}

function subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "<b>Resultado: </b>" + (num1 - num2);
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "<b>Resultado: </b>" + (num1 * num2);
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "<b>Resultado: </b>" + (num1 / num2);
}