

'use strinct'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
app.get('/api/:parametro?:operando?:parametro2?' , function(req, res){
    var parametro1 = "toño"
    var parametro2 = "damon"
    var resultado = 1

    if(req.params.parametro){
        parametro1 = req.params.parametro
    }
    if(req.params.parametro2){
        parametro2 = req.params.parametro2
    }
    if(req.params.operando){
        var operando2=req.params.operando
    switch(operando2){
        case "+":
            resultado = parseFloat(parametro1 + parametro2)
            break;
        case "-":
            resultado = parseFloat(parametro1  - parametro2)
            break;
        case "*":
            resultado = parseFloat(parametro1 * parametro2)  
            break
        case "=":
            resultado = parseFloat(parametro1 / parametro2)
            break;
    }
}

    //var res= parseInt(parametro1 + parametro2)

    res.status(200).send({
        arreglo: [{ objeto_1: 1, objeto_2: 2 }, { objeto_1: 2, objeto_2: 3 }],
        ejemplo: "esto es un ejemplo de respuesta" + parametro1 +  parametro2 + "el  resultado" + resultado
    })
})
app.listen(7070, function(){
    console.log('Esto es un emjemplo de dddd')
});