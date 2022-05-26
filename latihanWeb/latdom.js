const tombol = document.getElementById('tombol');
const bGround = document.querySelector('html');


tombol.addEventListener('click', function() {
    bGround.classList.toggle('merah')
}
)

tombol.addEventListener('click', function() {
    bGround.classList.toggle('kuning')
}
)


const tombol_acak = document.createElement('button');
const wordButton = document.createTextNode('pencet!');
const br = document.createElement('br')


tombol_acak.appendChild(wordButton);
tombol_acak.setAttribute('type', 'button');

tombol.after(br);
br.after(tombol_acak);

tombol_acak.addEventListener('', function(){

})


const bMerah = document.querySelector('input[name=red]');
const bHijau = document.querySelector('input[name=green]');
const bBiru = document.querySelector('input[name=blue]');


bMerah.addEventListener('input', function(){
    const r = bMerah.value;
    const g = bHijau.value;
    const b = bBiru.value;
    bGround.style.backgroundColor = 'rgb('+ r + ', '+ g +', '+ b +')';
})

bHijau.addEventListener('input', function(){
    const r = bMerah.value;
    const g = bHijau.value;
    const b = bBiru.value;
    bGround.style.backgroundColor = 'rgb('+ r + ', '+ g +', '+ b +')';
})

bBiru.addEventListener('input', function(){
    const r = bMerah.value;
    const g = bHijau.value;
    const b = bBiru.value;
    bGround.style.backgroundColor = 'rgb('+ r + ', '+ g +', '+ b +')';
})