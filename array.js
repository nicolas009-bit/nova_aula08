// [] -> significa um array
//os valores são separados por vigurla(,)

let nomes = ["Isa", "Victor", "Pedro", "Samuel", "Geovana",]
console.log(nomes);
console.log(nomes[2]);//consulta de posição (na contagem falada comecando do 0)

nomes[4] = "caleb" //substituindo valor em posição especifica.
console.log(nomes);


console.log(nomes.length);// conta quantas informações eu tenho no meu array


nomes[nomes.length] = "geovana"

console.log(nomes);

nomes.push("Nicolas")//push adiciona mais um valor ao Final do array
console.log(nomes);


nomes.unshift("Ro")//unshift adiciona mais um valor no Começo do array
console.log(nomes);

let ultimoNome = nomes.pop()
console.log(nomes);
console.log(ultimoNome);



let primeiroNome = nomes.shift()
console.log(nomes);
console.log(primeiroNome);

nomes.includes // validar informações na array

nomes.indexOf// mostra a posição dentro da array

//e se eu precisar percorrer todo o array
//=> arrow function usando para definir uma funcao anonima
//() => {} declaração da função anonima
nomes.forEach((linha, contador)=>{
    console.log("O "+(contador + 1) +"º registro é "+ linha);
    
})
