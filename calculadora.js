'use strinct'

//argumentos que se obtienen desde la terminal

//parseamon los strings a float

var operando1 = parseFloat(args[0])
var operando2 = parseFloat(args[2])

    //el signo no se parsea

    var operando = args[1]

    var resultado = "resultado:"

    if(args.length == 3){
        switch(operando){
            case "+":
                resultado += parseFloat(operando1 + operando2)
                break;
            case "-":
                resultado += parseFloat(operando1 - operando2)
                break;
            case "*":
                resultado += parseFloat(operando1 * operando2)    
                break
            case "/":
                resultado += parseFloat(operando1 / operando2)
                break;
        }

    }
console.log(resultado)