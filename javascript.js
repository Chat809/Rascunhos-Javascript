var nome = "khalil";
var brother = "Leonardo";
var noia = "              Nóia            ";
var kilks = "Kilks";
console.log(nome);

console.log(nome.length);
console.log("Gabiroide".length);

console.log(nome.toUpperCase());
console.log(nome.toLocaleLowerCase());

//IndexOf lozaliza a ocorrência de uma sequencia de caracteres em string ou retorna -1
console.log(nome.indexOf("lil"));

console.log(brother.replace("Leonardo", "Babuíno"));

//Nesse caso, apenas uma substituição aconteceria
//Para fazer uma substituição global sensitiva à letras maiúsculas e minúsculas:
console.log(brother.replace(/Leonardo/gi, "Babuíno"));

//Retirar pedaos de string:
console.log(brother.slice(0, 3));

//Remoção de espaçamentos laterais de uma string
console.log(noia.trim());

console.log(brother + " e " + kilks + " fumam com os " + noia.trim());

console.log(`${brother} e ${kilks} fumam com os ${noia}`);

//Exponenciação
console.log(200 ** 2);

var a = 1;
var b = 2;
console.log(a + b);

//Módulo oferece o restante da divisão e o resultado possível dos termos em números inteiros
console.log(4 % 3);

//Pré e pós incremento de 1, onde um adiciona na variável original enquanto o outro executa a operação com variável auxiliar
b = b + 1;
console.log(b);
b++;
console.log(b);
++b;

//Booleanos
var religion = false;
console.log(religion);

var reli = true;
console.log(reli);

console.log(7 > 9);

console.log(10 != 10);

console.log(10 == 10);
//Verifica se há igualdade também no tipo de dado
console.log("10" === 10);

console.log(!reli);

console.log(!!reli);

//Falsy values: false, null, undefined, 0, -0, NaN, An empty string ('')

console.log(!null);

//Condicionais

if (true) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

//Ternários, atalho para a condicional if com "? :"
console.log(true ? "Verdadeiro" : "Falso");

let subs = 5000;
let ranks =
  subs >= 1000
    ? "Nível 1"
    : subs >= 2000
    ? "Nível 2"
    : subs >= 3000
    ? "Nível 3"
    : subs >= 4000
    ? "Nível 4"
    : subs >= 5000
    ? "Nível 5"
    : "Sem nível definido";

//Switch case
var cor = "amarelo";
switch (cor) {
  case "azul":
    console.log("Cor Azul");
    break;

  case "verde":
    console.log("Cor verde");
    break;

  case "laranja":
    console.log("Cor laranja");
    break;

  default:
    console.log("Cor branca");
    break;
}

//Multicases
switch (cor) {
  case "vermelho":
  case "laranja":
  case "amarelo":
    console.log("Cor quente!");
    break;

  case "azul":
  case "cinza":
  case "verde":
    console.log("Cor fria!");

  default:
    console.log("Não identificado!");
    break;
}

//Arrays
var numeros = [6, 2, 7, 4, 1, 8, 9];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros.lenght);
console.log(numeros.pop());
console.log(numeros.slice(2, 5));
console.log(numeros.join("/"));

var usuario = [
  "Khalil",
  20,
  "Universitário",
  "Engenharia de Software",
  "Brasileiro",
];
usuario.push("Homem");
console.log(usuario);
console.log(usuario.includes("Canadense"));
console.log(usuario.indexOf("Khalil"));

var nome = usuario[0];
console.log(nome);

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var array3 = array1.concat(array2).concat([7, 8, 9]);
console.log(array3);

console.log([...array1, ...array2, ...[7, 8, 9]]);

//Array Destructuring
const khalilsalomao = {
  name: "Khalil",
  idade: "20 anos",
  profissao: "Estudante",
};

const { name, idade1, profissao } = khalilsalomao;
console.log(idade);

//Let, const, var
var aluno = "Vagabundo";

if (true) {
  let telefone = 98988033360;
  console.log(telefone);
}

if (true) {
  const naoestuda = { nota: "0" };
  naoestuda.nota = "10";
  console.log(naoestuda);
}

//Descobrir o tipo de dado contido na variável
let ruadosbobos = 0;
console.log(typeof ruadosbobos);

//Little spoiler of functions
function logMessage() {
  console.log("Back to the game!");
}

logMessage();

function logMessageOne() {
  console.log("Manda o papo");
}

const logMessageTwo = function () {
  console.log("Manda tu");
};

logMessageOne();

logMessageTwo();

//Returno de funções pode ser undefined ou predeterminado, callback
function func() {
  return 5;
}

const result = func();

console.log(result);

//DOM Document Object Model

//Loops
var contador = 0;
while (contador < 5) {
  console.log(contador);
  ++contador;
}

var contador = 0;
while (contador < 5) {
  if (contador === 3) {
    break;
  }
  console.log(contador);
  ++contador;
}

var contador = 0;
while (contador < 100) {
  if (contador % 3 === 0 && contador % 5 === 0) {
    console.log("Ping-Pong!");
  } else if (contador % 3 === 0) {
    console.log("ping");
  } else if (contador % 5 === 0) {
    console.log("Pong");
  }
  ++contador;
}

for (var contador = 0; contador < 10; contador++) {
  console.log(contador);
}

var numerosaleatorios = [3, 5, 10, 2, 19, 21, 13];
for (var contador = 0; contador < numerosaleatorios.lenght; contador++) {
  console.log(numerosaleatorios[contador]);
}

for (var i = 0; i < 50; i++) {
  if (i % 2 === 0) {
    break;
  }
  console.log("Testando break");
}

for (var i = 0; i < 50; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Testando continue");
}

//Percorrer array atribuindo os valores das posições para uma variável
var numerosaleatorios2 = [3, 5, "Khalil", 8];
for (var num of numerosaleatorios2) {
  console.log("Testando for of", num);
}

//Ping pong utilizando for
for (var i = 0; i < 100; i++) {
  if (i % 3 === 0 && 1 % 5 === 0) {
    console.log("Ping-Pong");
  } else if (i % 3 === 0) {
    console.log("Ping");
  } else if (i % 5 === 0) {
    console.log("Pong");
  }
}

//Functions: Aprofundamento
function ola() {
  console.log("Olá");
}

ola();

function soma(a, b) {
  return a + b;
}

var resultadoSoma = soma(10, 5);
console.log(resultadoSoma);

function somaTudo(numeros) {
  var total = 0;
  for (var num of numeros) {
    total = total + num;
  }
  return total;
}

arrayNumeros = [3, 5, 7, 10, 9, 12];
var resultado = somaTudo(arrayNumeros);
console.log("Reesultado:", resultado);

//Array para armazenar demais dados em uma função
function escreverEndereco(rua, cidade, pais, ...complementos) {
  console.log(rua);
  console.log(cidade);
  console.log(pais);

  console.log(complementos);
}

escreverEndereco("Rua 12", "São Luís", "Brasil", "Casa 42");

//Função autoexecutável para proteger variaveis, privatizar
(function autoExecuta(nome) {
  console.log("Executei", nome);
})("Khalil");

//Functions também são tipos de valores que podem ser atribuídos à variáveis
//Podem ser funções anônimas caso não tenham nome
var subtraidois = function subtrai(a, b) {
  return a - b;
};
console.log(subtraidois(10, 3));

//Função callback, concatenação de funcões, uma referenciando a outra
function somaCallback(a, b, fnCallback) {
  return fnCallback(a + b);
}

console.log(
  somaCallback(10, 3, function (total) {
    return total * 2;
  })
);

//Função callback declarando como variável(Particularmente, creio que seja mais fácil a orientação)
var multiplica = function (total) {
  return total * 2;
};
console.log(somaCallback(10, 3, multiplica));

console.log(
  somaCallback(23, 11, function (total) {
    return total + 20;
  })
);

//Valores default como parâmetros caso a função não receba valores, evitando que o console retorne undefined
function escrevaNome(nome = "Khalil", idade) {
  console.log(nome);
  console.log(idade);
}
escrevaNome();

//Objects
var kauazinholins = {
  nome: "Ubiracir",
  idade: "19",
  pais: "Brasil",
};

//Retirando valores dos atributos do objeto
var nome = kauazinholins.nome;
console.log(nome);

//Ou
var { nome, idade, pais } = kauazinholins;
console.log(nome, idade, pais);

//Extraindo de atributo e pondo como valor de variável
var { nome: nomedefault } = kauazinholins;
console.log(nomedefault);

//Extraindo de objetos com herança longa
var kaua = {
  dadosdeusuario: {
    cpf: "0109837389",
    id: "ksjdhfdsjk",
  },
};

console.log(kaua.dadosdeusuario.cpf);

//Valor deafult para atributo que não existe
var {
  dadosdeusuario: { endereco = "Brasil" },
} = kaua;
console.log(endereco);

//Retornar array com atributos de objeto ou apenas eles
var bolo = {
  tempo: "20 minutos",
  ovos: "3",
  leite: "500ml",
  manteiga: "30g",
};

console.log(Object.keys(bolo));
console.log(Object.values(bolo));

var props = Object.keys(bolo);

for (var i = 0; i < props.length; i++) {
  console.log(kaua[props[i]]);
}

//Ou
for (var prop of props) {
  console.log("kaua", kaua[prop]);
}

//Função que receba uma string (a) e um número (n) como argumento e retorna o enésimo caractere de 'a'.
function myFunction(a, n) {
  return a[n - 1];
}

//Verificando se um elemento está contido no outro
function contendo(a, b) {
  return a.includes(b) ? b + a : a + b;
}

//Função que retorna quantas vezes um valor se repete dentro do outro
function ocorrencia(a, b) {
  return b.split(a).length - 1;
}

//Verificando se o valor é um número inteiro
function verificainieiro(a) {
  return parseInt(a) === a;
}

//Simplificando função booleana evitando estrutura condicional
function simplificando(a, b) {
  return a < b ? a / b : a * b;
}

//Escreva uma função que receba um número (a) como argumento. Divida a em seus dígitos individuais e retorne-os em uma matriz. Dica: você pode querer alterar o tipo de número para a divisão

function myFunction(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

//Declaração e manipulação de objetos
let khalil = {
  idade: 20,
  genero: "masculino",
  hobbies: "Esportes",
};

console.log(khalil);
console.log(khalil.idade);

khalil.endereco = "turu";
delete khalil.endereco;

//Fusão de objetos

var user1 = {
  nome: "Xulinha",
  idade: "22",
};

var extrainfouser1 = {
  pais: "Brasil",
  cidade: "São Luís",
};

var user1full = Object.assign({}, user1, extrainfouser1);
console.log(user1full);

//Getters e Setters
var users = [
  {
    nome: "Joao",
    idade: 19,
  },
  {
    nome: "Francisco",
    idade: 45,
  },
  {
    nome: "José",
    idade: 35,
  },
];

console.log(users[2].nome);

//Escopos//Importante Dominar//

//Escopo global, onde as variáveis podem serv vistas e utilizadas no código inteiro
mulambo = 0;

//Escopo local dentro de uma função, objeto, {}
let mulambinho = 1;

//Escopo dinâmico, onde o valor da variável no javascript só é lida quando executada. THIS

function imprimeThis() {
  console.log("ImprimeThis", this);
}

//Escopo lexical, onde a variável possui valor estático
function pegaladrao() {
  (ladrao = "Noia"), console.log(noia);
}

//Escopo de bloco(menor), ifs, switch, while
//OBS: var não respeita escopos de blocos, só de functions
//Não é possível redeclarar variável com let, o que já é possível com o var

//Manipulação de arrays e objetos
//document.querySelector(".container");

//This, new, call, apply, bind
//Arrow functions, não utilizam this
console.log(triplex(10, 11));

var triplexobjeto = () => ({ nome: "Khalil", idade: 20 });
console.log(triplexretorna());

//Closures
//Uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna.
//Função possui memória de onde foi criada(escopo léxico), ainda que seja executada fora do escopo léxico
function pegatroco() {
  function troco(valor) {
    return 10 + valor;
  }
  return {
    add5() {
      return auxiliar(5);
    },
    add7() {
      return auxiliar(7);
    },
  };
}

let trocofinal = pegatroco();
console.log(trocofinal.add5);

//Evitar utilizar funções anônimas
function imprimenomecompleto(nome) {
  return function () {
    console.log(nome, "Khalil");
  };
}

function inicializa() {
  let nome = "Khalil";
  setTimeout(imprimenomecompleto(nome), 1000);
}

inicializa();

//Programação Funcional = Variáveis declaradas com valores imutáveis + Execução estática, como se fosse executada pela primeira vez
//Deve ser independente = Ao menos um argumento, retorna algo, não existem loops, recursividade

//Constantes
//Escopo de bloco, ou seja, ela respeita os limites de onde foi criada
//Entender bem a diferença de redeclarar e reatribuir, constantes não permitem nenhum dos dois
//Let não redeclara, mas reatribui, já o var permite ambos

//Hoisting/Elevação, pois as variáveis são jogadas para serem lidas primeiro pela engine do javascript
//Temporal Dead Zone, qualquer acesso feito à variável nesse espaço de tempo resultará em ReferenceError
//Constantes não possuem Temporal Dead Zone
//Undefined ou error caso a variável seja declarada depois de chamada
//Functions sofrem Hoisting
//Functions Expression não sofrem, dão erro
//Ideal evitar hoisting

function calcula() {
  return geraResultado();

  function soma(a, b) {
    return a + b;
  }

  function geraResultado() {
    return soma(10, 5) / 3;
  }
}

console.log(calcula());

//É possível dizer no início o que a função deve retornar, o restante é a lógica

//DOM
//Como selecionar elemento filho com querySelector
//document.querySelector("#wrapper button");
//Método join transforma o array em uma string com todos os elementos separados por vírgula, .join("") no final
//Includes retorna true ou false
//IndexOf retorna a posição do elemento no array

let profissoes = ["Carpinteiro", "Músico", "Programador"];
console.log(profissoes.includes("Programador"));

if (profissoes.includes("Programador")) {
  console.log("Sim, há um programador entre nós");
  console.log(profissoes.indexOf("Programador"));
} else {
  console.log("Não, não há nenhum programador");
}

//Método concat funde dois arrays em um só
let Babu = ["Leo", "Kawê", "Rafael"];
let ino = ["Kauã", "Tarcísio", "Gabriel"];

let babus = babus.concat(babu, ino);

//Spread framenta o array em objetos iteráveis indiviuais, ou seja, eles se tornam parâmetros, não mais o arrays inteiro
const maxnumber = [2, 3, 4];
console.log(Math.max(...maxnumber));

//Reverter a ordem dos arrays, útil para utilização em filtros, como preço: maior para menor etc.
let maxnumbereverse = maxnumber.reverse();

//Encontrar elementos que se adequam à função que será executada em cada um dos elementos com find
//Findindex percorre executando teste lógico para tentar encontrar array verdadeiro
//Includes para checar se há determinado elemento no array, indexOf para mostrar a posição caso encontre.
//Map para criar uma nova lista com valor identico, útil para restes, aplicação de descontos, modificações fixas.
//Filter para saber se há determinado tipo de dado na array e retornar true ou false
//Reduce para criar um objeto final a partir de uma operação entre os valores da array
//ForEach itera em cada objeto e retorna inidividualmente em cada
//Some para saber se algum elemento se enxaixa na solução e iterar a partir disso
//Every é um some que serve para todos e itera caso todos se encaixem na condição

//Revisão de estruturas de repetição

//Callback, executa outra função depois do retorno de uma

function exibir(num) {
  console.log("A operação resulta em: " + num);
}

function soma(a, b, callback) {
  var op = a + b;
  callback(op);
}

function multiplicacao(a, b, callback) {
  var op = a * b;
  callback(op);
}

soma(2, 2, exibir);
multiplicacao(3, 4, exibir);

//Mais exemplos de utilização de arrow functions
//const soma=function(v1, v2){return v1+v2}

let soma = (v1, v2) => {
  return v1 + v2;
};

let nome = (n) => {
  return n;
};

console.log(soma(10, 5));

let add = (n = n + 5);
console.log(add(10));

//Evento click
const button = document.getElementById("button");
const input = document.getElementById("input");

const handleClick = () => {
  input.value = "Hello World";
};

button.addEventListener("click", handleClick);

//Evento mouseover
const element = document.getElementById("element");

const changeText = () => {
  element.innerText = "Thanks!";
};

element.addEventListener("mouseover", changeText);
