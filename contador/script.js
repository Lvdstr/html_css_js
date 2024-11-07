let number = 0;
let number1 = number.toFixed(4)

function aumentar_contador(){
    number1++;
    document.getElementById("numero").innerHTML = number1;
}

function diminuir_contador(){
    if(number1 > 0){
        number1--;
        document.getElementById("numero").innerHTML = number1;
    }
}