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