function compChoice() {
    const comp = Math.random();
    if (comp < 0.4) return 'gajah';
    if (comp >= 0.4 && comp < 0.7) return 'orang'; 
    return 'semut';

}

function getRes(comp, player){
    const hasil = '';
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}

function randChoice(){
    const imageComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - timeStart > 1000){
            clearInterval;
            return;
        }
        imageComp.setAttribute('src', 'img/'+ gambar[i++]+'.png');
        if (i == gambar.length) i = 0;
    }, 100)
}



// take choice

const choicePlayer = document.querySelectorAll('li img');

choicePlayer.forEach(function(pil){
    pil.addEventListener('click', function(){
        //get hasil 
    
        const pilComp = compChoice();
        const pilPlayer = pil.className;
        const getHasil = getRes(pilComp, pilPlayer);

        // random choice computer
        randChoice();

        //change img for computer
        
        setTimeout(function(){
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/'+ pilComp + '.png');
            
            //return hasil to info
        
            const printInfo = document.querySelector('.info');
            printInfo.innerHTML = getHasil;

            //adding score

            //computer

            const addComp = document.querySelector('.score .computer');
            const addPlayer = document.querySelector('.score .player');
            let i = 0;
            let j = 0;
            if (getHasil == 'MENANG'){
                i += 1;
                j;
            } else if(getHasil == 'SERI') {
                i;
                j;
            } else {
                i;
                j += 1;
            }

            
        }, 1000)
    
    }
    );
        


});


