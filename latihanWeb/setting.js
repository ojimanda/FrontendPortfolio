// // suwit
// alert('Selamat datang di permainan suwit random!');

// var awal = true;
// while(awal){

// // pilihan player
// var choice_player = prompt('Anda memilih apa: \n Pilihan : Batu, Gunting, Kertas.');
// //pilihan computer
// var choice_comp = Math.random();

// if (choice_comp <= 0.4) {
//     comp = 'Batu';
// } else if (choice_comp <= 0.8) {
//     comp = 'Gunting'
// } else {
//     comp = 'Kertas'
// }


// var lose = 'Anda kalah.'
// var win = 'Anda menang'
// //rules
// if(choice_player == comp){
//     res = 'Imbang, coy!';
// } else if (comp == 'Batu' && choice_player =='Gunting') {
//     res = win;
// } else if (comp == 'Batu' && choice_player == 'Kertas') {
//     res = lose;
// } else if (comp == 'Gunting' && choice_player == 'Batu') {
//     res = win;
// } else if (comp == 'Gunting' && choice_player == 'Kertas') {
//     res = lose;
// } else if (comp == 'Kertas' && choice_player == 'Batu') {
//     res = lose;
// } else if (comp == 'Kertas' && choice_player == 'Gunting') {
//     res = win;
// } else {
//     res = 'Anda salah memasukkan input.'
// }


// // hasil
// if (choice_player == 'Batu' || choice_player == 'Gunting' || choice_player == 'Kertas'){
//     alert('Anda memilih '+ choice_player + ' dan computer memilih '+ comp + '. \n Maka hasilnya adalah '+ res)
// } else {
//     alert('Masukkin input yg bener, woy!')
// }

// awal = confirm('Lagi ga, nih?');
// }

// function cubic(x) {
//     return x*x*x;
// }


// function volumeKubus(){
//     var hasil = 0;
//     for(i = 0; i < arguments.length; i++){
//         hasil += cubic(arguments[i]);
//     }
//     return hasil;
// }

// var p = volumeKubus(1, 2, 3);
// console.log(p);

var myVar = [1, 2, [3, 4]];


for (i = 0; i < myVar.length; i++){
    console.log(myVar[i]);
}