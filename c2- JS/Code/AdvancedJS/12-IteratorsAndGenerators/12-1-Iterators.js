// Arrays are an example of iterable objects

let  book=[ 'lalalala', 'titititi', 'akaakaaka',
            'mymymy','phewphew','olajuwon'
];
let it=book.values()

let current=it.next();
while(!current.done){
    console.log(`CUrrent Value is: ${current.value}`);
    current=it.next();

}
/* 
CUrrent Value is: lalalala
CUrrent Value is: titititi
CUrrent Value is: akaakaaka
CUrrent Value is: mymymy
CUrrent Value is: phewphew
CUrrent Value is: olajuwon
 */