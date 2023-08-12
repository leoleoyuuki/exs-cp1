/**
 * @author leo yuuki rm550373
 * Exercício 1
 * Crie um array contendo 10 valores de salário e utilizando o método map() atribua
 * um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
 * de 2000.
 */
let salarios = [ 1350 , 1850 , 2790 , 3470 , 5080 , 2130 , 3400 , 1200 , 1375 , 1790];

let salarioMenor = [];
let salarioMaior = [];
salarios.map(salario => {
    if(salario < 2000){
        salarioMenor.push(salario);
    }
    else{
        salarioMaior.push(salario);
    }
} );



let salarioMenorAumentado = [];
salarioMenor.map(salario => {
    salario += salario * 0.15;
    salarioMenorAumentado.push(salario);
});



let salarioMaiorAumentado = [];
salarioMaior.map(salario =>{
    salario += salario  * 0.10;
    salarioMaiorAumentado.push(salario);
});




console.log("Aumento dos salários abaixo de 2000:\n")
console.log(salarioMenor);
console.log(salarioMenorAumentado);

console.log("\n");

console.log("Aumento dos salários acima de 2000:\n")
console.log(salarioMaior);
console.log(salarioMaiorAumentado);

console.log("\n");


salarios = [...salarioMenorAumentado , ...salarioMaiorAumentado]
console.log("Todos os salarios atualizados: \n")
console.log(salarios)


console.log("\n");


/**
 * @author leo yuuki rm550373
 * Exercício 2
 * Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
 * método filter(), contendo somente os salários superiores a 2500.
 */

let maior2500 = [];
maior2500 = salarios.filter(salario => salario > 2500);



console.log("Salarios maiores que R$2500:\n")
console.log(maior2500);

console.log("\n");


/**
 * @author leo yuuki rm550373
 * Exercício 3
 * Utilizando o array de resultado do exercício anterior, usando o método reduce(),
 * some os valores.
 * 
 * obs: Professor disse que não precisava do ex3, porém tava diertido então fiz ;)
 */
const soma = maior2500.reduce((acumulador , atual) => acumulador + atual  );

console.log("Soma dos maiores que 2500:\n")
console.log(soma);







