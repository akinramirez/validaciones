function validacion3caractRepet(e) {
    document.getElementById("validacion1").innerHTML = "";

    var input = document.getElementById("txtGenerico").value;
    var max = input.length;
    var expreg = /^(?!.*?([a-z, A-Z])\1\1).+/;

    if (!expreg.test(input)) {
        max += 1;
        if (max > 2) {
            document.getElementById("validacion1").innerHTML = "No se puede ingresar un caracter igual tres veces seguido!";
            return false;
        }
    }
}

function validarTelefono() {
    document.getElementById("validacion2").innerHTML = "";

    var input2 = document.getElementById("txtNumeroTel").value;
    var expreg = /^([23589][0-9]{3})+(-){0,1}([0-9]{4})$/;

    if (input2 != "") {
        if (expreg.test(input2)) {
            document.getElementById("validacion2").innerHTML = "Formato correcto!";
            return true;
        } else {
            document.getElementById("validacion2").innerHTML = "Formato incorrecto!";
        }
    }
}