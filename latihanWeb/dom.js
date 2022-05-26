// DOM selection

//getElementById

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Dom Project';
judul.style.textAlign = 'center';


//getElementsByTagName

const p = document.getElementsByTagName('p');
for (var i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'red';
}


const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '40px';

//getElementsByClassName

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'edited by js';
p1[0].style.color = 'blue';


//querySelector
 const p4 = document.querySelector('#b p');
 p4.style.backgroundColor = 'blue';

 const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//DOM Manipulation

const liBaru = document.createElement('li');
const wordLi = document.createTextNode('item 4 js');

liBaru.appendChild(wordLi);

liBaru.style.backgroundColor = 'orange';

const ul = document.querySelector('section#b ul');
const liAfter = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, liAfter);