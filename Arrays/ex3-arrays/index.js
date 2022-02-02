let vetorA = [];
let vetorB = [];
console.log('--------- VETOR A -----------');
for (let i = 0; i < 15; i++) {
    vetorA[i] = Math.floor(Math.random() * 100);
    console.log(vetorA[i]);
    vetorB[i] = vetorA[i] * vetorA[i];
}

console.log('--------- VETOR B -----------');
vetorB.forEach(element => {
    console.log(element);
});