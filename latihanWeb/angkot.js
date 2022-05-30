var penumpang = ['aku', 'kamu', 'dia'];

 var tambah_penumpang = function(nama_penumpang, penumpang) {
     if (penumpang.length == 0){
        penumpang.push(nama_penumpang);
            return penumpang;
     } else {
        for( var i = 0; i < penumpang.length; i++){
            if (penumpang[i] == undefined){
                penumpang[i] = nama_penumpang;
                    return penumpang;
            } else if(penumpang[i] == nama_penumpang){
                console.log(nama_penumpang + ' sudah ada di dalam angkot.');
                return penumpang;
            }
            else if (i == penumpang.length - 1) {
                penumpang.push(nama_penumpang);
                    return penumpang;
            }
        }
     }
 }

 var hapus_penumpang = function(nama_penumpang, penumpang) {
     if (penumpang.length == 0){
         console.log('Angkot kosong.')
         return penumpang;
     } else {
         for (var i = 0; i < penumpang.length; i++){
             if (penumpang[i] == nama_penumpang) {
                 penumpang[i] = undefined;
                 return penumpang;
             } else {
                 console.log('Tidak ada nama berikut di dalam angkot');
                 return penumpang;
             }
         }
     }
 }


 function ipk(){
    var hasil = 0;
    var rataan;
    for (i = 0; i < arguments.length; i++){
        hasil += arguments[i];
        rataan = hasil / arguments.length;
    }
    console.log(rataan);
}

var ip = ipk(2.3, 4, 3.5);
console.log(ip);

var ip2 = ipk(3, 4, 3.5)
console.log(ip2);