const name = "Piotr";
const age = 32;

console.log(name);
console.log(age);
alert("siema!");
console.log(`Siema,nazywam się ${name} i mam ${age} lata.`);

const heading = document.querySelector('.header--js');

console.log(heading.innerHTML);

heading.innerHTML = `WTF-nauka frontendu`;

console.log(heading.innerHTML);