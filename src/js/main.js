//creazione delle variabili
let $ul = document.getElementById('fizzbuzzer');
let msg = '';
//creazione di for
for (let i = 1; i < 100; i++) {
    if (i % 15 == 0) msg = 'fizzbuzz';
    else if (i % 3 == 0) msg = 'fizz';
    else if (i % 5 == 0) msg = 'buzz';
    else msg = '';
    console.log(i);
}
