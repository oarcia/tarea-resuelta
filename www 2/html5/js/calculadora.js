function suma(){
    var numero_1 = document.getElementById("numero_uno")
    var numero_2 = document.getElementById("numero_dos")
    
    //se obtienen los resultados
    var resultado = document.getElementById("resultado")
    var texto_resultado = document.getElementById("texto_resultado")   
    if(!numero_1.value || !numero_2.value){
        alert("ingrese los dos valores")
    }else{
        //conviertte los numeros a flotante
        var float_1 = parseFloat(numero_1.value)
        var float_2 = parseFloat(numero_2.value)
        // no se que va
        resultado.value = suma
        texto_resultado.innerHTML = "la suma de  "+ float_1 + " + " +float_2 + " = "+suma
    }
}


function resta(){
    var resta_1 = document.getElementById("resta_uno")
    var resta_2 = document.getElementById("resta_dos")
    
    //se obtienen los resultados
    var resta_resul = document.getElementById("resta_resul")
    var resta_resultado = document.getElementById("resta_resultado")   
    if(!resta_1.value || !resta_2.value){
        alert("ingrese los dos valores")
    }else{
        //conviertte los numeros a flotante
        var rfloat_1 = parseFloat(resta_1.value)
        var rfloat_2 = parseFloat(resta_2.value)
        // no se que va
        resta_resul.value = resta
        resta_resultado.innerHTML = "la resta de  "+rfloat_1 + " + " +rfloat_2 + " = "+ resta
    }
}
