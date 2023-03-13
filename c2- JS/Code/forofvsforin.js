const animal={
    color:'blue',
    noise:'argggggg'
}
let daddy=Object.create(animal);
daddy.noise='oink oink';
console.log(daddy);
// for in iterarates over object + prototype attributes
for(let x in daddy) console.log('Using for in ',x,' = ',daddy[x]);

for(let y of Object.keys(daddy)) console.log('Using for of ',y,' = ',daddy[y]);