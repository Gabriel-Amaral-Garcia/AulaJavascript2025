function ex01(n1, n2){

    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    if(n1 == n2){
        document.getElementById("m1").innerHTML = n1 + " é igual a " + n2 + "</br>";
    } else{
        document.getElementById("m1").innerHTML = n1 + " é diferente de " + n2 + "</br>";
    }
}


function abc(n1,n2,n3){

    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n3 = document.getElementById("n3").value;
    let n4 = Number(n1) + Number(n2);
    if(n4 > n3){
        document.getElementById("m2").innerHTML = n4 + "é maior que " + n3 + "</br>";
    }else if(n4 == n3){
    
        document.getElementById("m2").innerHTML = n4 + "é igual" + n3 + "</br>";

    }else{
        document.getElementById("m2").innerHTML = n4 + "é menor que " + n3 + "</br>";
    }
}

function wow(n1){

    n1 = document.getElementById("n1").value;

    if(n1 < 500){
        document.getElementById("m3").innerHTML = "voce tem direito ao aumento de salario" + "</br>";
    }else {
        document.getElementById("m3").innerHTML = "voce nao tem direito ao aumento de salario" + "</br>";
    }

}

function ss(n1){

    n1 = document.getElementById("n1").value;
    
    if(n1 < 500){
       n4 = Number(n1) * 1.3;
        document.getElementById("m4").innerHTML = "voce tem direito ao aumento de salario, seu salario atual é"+ n4 + "</br>";
    }else {
        document.getElementById("m4").innerHTML = "voce nao tem direito ao aumento de salario" + "</br>";
    }

}

function dez(n1,n2){

    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

  
 /*   
    if(n1 == 5){
        n3 = n2 * 500;
        document.getElementById("m5").innerHTML ="tenis nike " + "preço 500" + "e o valor total " + n3 +"</br>";
    }else if(n1 ==10){
        n4 = n2 * 300;
            document.getElementById("m5").innerHTML ="tenis adidas " + "preço 300" + "e o valor total " + n4 + "</br>";
    }else{
        document.getElementById("m5").innerHTML ="codigo invalido " + "</br>";
    }
*/
    switch(Number(n1)) {
        case "5":
            n3 = n2 * 500;
            document.getElementById("m5").innerHTML ="tenis nike " + "preço 500" + "e o valor total" + n3 +"</br>";
          break;
        case "10":
            n4 = n2 * 300;
            document.getElementById("m5").innerHTML ="tenis adidas " + "preço 300" + "e o valor total" + n4 + "</br>";
          break;
        default:
            document.getElementById("m5").innerHTML ="codigo invalido " + "</br>";
    }
}


























