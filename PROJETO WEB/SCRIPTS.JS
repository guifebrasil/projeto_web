// conhecendo o javascript

// Entender sobre funçoes báscicas

function saudacao(nome){
    return "Olá," + nome + "!";

}

// Funçoes com multiplos parametros 

function soma (num1, num2){
    return num1 + num2;
}

// funcoes com estrutura condicional

function parOuimpar(num){
    if (num %2 === 0){
        return "par"
     }else{
        return "Impar";
    }
}


// funcao com laco de repeticao

function contagemregressiva(num){
    for(let i = num; i>=0; i++){
        console.log (i);
    }
}

//Criando e manipulando objetos

let carro = {
    marca : "Nissan",
    modelo : "Versa",
    Ano : 2023,
    ligar : function(){
        console.log ("O carro está ligado")
    }
};


// Acessando as propriedades do objeto

console.log(carro.marca); // Saida.Nissan
console.log(carro['modelo']); // Saida.Versa


// Manipulando Objetos
carro.cor = "Azul";
console.log(carro.cor);

carro.ano = 2023;
console.log(carro.ano);

delete carro.cor;
console.log(carro.cor);

//Criando Manipulando arrays

numeros= [1,2,3,4,5];
let nome= ["Maria", "Joao", "Paulo", "Jose"];
let misto= [1, "Paulo", true, [1, 2], {nome: "Joao", idade:30}];

// Acessando valores de arrays

let frutas= ["Banana", "Maca", "Pera", "Cereja"];
console.log(frutas[0]);
console.log(frutas[2]);

// Alterando valores de arrays

let frutas2 = ["Banana", "Maca", "Pera", "Cereja"]
frutas [2] ="Mamao"
console.log(frutas)

// Metedos comuns de arrays

// push(): Adiciona um novo elemento no final do array
// pop(): remove o ultimo elemento do array
// shift(): remove o primewiro elemento do array
// unshift(): adiciona novo elemento no inicio do array
// slice(): cria um bovo array com base em parte do array antigo
// splice(): Adiciona ou remove elementos de array em uma posicao espeífica
// Join(): Une todos os elementos do array em uma unica string


let frutas= ["Banana", "Maca", "Pera", "Cereja"];
frutas.push ("Uva");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.loig(frutas);

frutas.unshift("Manga");
console.log(Frutas);

frutas.splice(1, 0, "kIWI");
console.log(frutas);

let frutasTropicais = frutas.slice(0, 2);
console.log(frutasTropicais);

// Metdos de intergraçao - foreach() - map() - filter()

let frutas3 = ["Banana", "Maça", "Pera", "Cereja"];
frutas,forEac(functuion(fruta)){
    console.log(frutas3);
}

let numeros = [1,2,3,4,5];
let quadrados = numeros.map(function(numeros)){
    return numeros * numeros;
});
console.log(quadrados);

