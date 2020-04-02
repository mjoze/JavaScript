const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];
const p = document.querySelector('p');

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');
// Styled
console.log('%c I am so great text', 'font-size:30px;border:2px solid red');
// warning!
console.warn('warn');
// Error :|
console.error('erros');

// Info
console.info('info');
// Testing
console.assert(1 === 3, 'Wrong condition');
// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`)
})
// counting
console.count('Hugo');
console.count('Hugo');
console.count('Hugo');
console.count('Hugo');

// timing
console.time('get data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('get data');
        console.log(data);
    });

console.table(dogs);