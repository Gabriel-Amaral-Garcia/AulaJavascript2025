function ex1(n1)
{
    n1 = document.getElementById("n1").value;
    let quadrado = Number(n1) * Number(n1);
    let cubo = Number(n1) * Number(n1) * Number(n1);
    
    document.getElementById("mensagem1").innerHTML = "O numero digitado é: " + n1 + "<br> O quadrado do número é: " + quadrado + "<br> O cudo do numero é: " + cubo;
}

function ex2(F)
{
    F = document.getElementById("F").value;
    let C = (Number(F)-32)*5/9;

    document.getElementById("mensagem2").innerHTML = "A temperatura em graus Fahrenheit foi " + F + "<br> A temperatura em graus Celsius é : " + C;
}

function ex3(valor,tempo,taxa)
{
    valor = document.getElementById("valor").value;
    taxa = document.getElementById("taxa").value;
    tempo = document.getElementById("tempo").value;

    let valorParcela = Number(valor) + (Number(valor) * (Number(taxa) * Number(taxa)/100) * Number(tempo));

    document.getElementById("mensagem3").innerHTML = "<u>Valores informados</u>" + "<br>Valor = " + valor + "<br>Taxa = " + taxa + "<br>Tempo = " + tempo + "<br><br><b>O valor atualizado é: " + valorParcela + "</b>";

}

function ex4(base,altura)
{
    base = document.getElementById("base").value;
    altura = document.getElementById("altura").value;

    let areaTriangulo = Number(base)*Number(altura)/2;

    document.getElementById("mensagem4").innerHTML = "Base = " + base + "<br>Altura = " + altura + "<br><br><b>A ârea do triâgulo é : " + areaTriangulo + "</b>";
}

function ex5(lado)
{
    lado = document.getElementById("lado").value;

    let areaQuadrado = Number(lado) * Number(lado);

    document.getElementById("mensagem5").innerHTML = "O lado do quadrado é " + lado + "<br><br><b>A area do quadrado é : " + areaQuadrado + "</b>";
}


function ex6(qtd,preco){

    

    qtd = document.getElementById("produto").value;
    preco = document.getElementById("preco").value;

    let subtotal = Number(qtd)* Number(preco);
    let valor = (Number(subtotal)*10)/100;
    document.getElementById("mensagem6").innerHTML = "O valor final a pagar é " + valor + "</br>";

}


function ex7(n1,n2,n3){

    n1 = document.getElementById("Nota1").value;
    n2 = document.getElementById("Nota2").value;
    n3 = document.getElementById("Nota3").value;

    let aritimetica = (Number(n1) + Number(n2) + Number(n3) )/3;
    document.getElementById("mensagem7").innerHTML = "A media é " + aritimetica + "</br>";
}

function ex8(peso,altura){

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    let imc = Number(peso) / Number(altura)**2;

    document.getElementById("mensagem8").innerHTML = "O imc é " + imc + "</br>";
}


function ex9 (porc, valor, juros){

    porc = document.getElementById("porcentagem").value;
    valor = document.getElementById("valor").value;
    juros = document.getElementById("juros").value;

    let sla = (Number(valor)*(porc))/100;
    let n = Number(juros) + Number(sla);
    document.getElementById("mensagem9").innerHTML = "sla" + n + "</br>";
}