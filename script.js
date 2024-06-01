var ulang = true;
alert("cek angka!!");
while (ulang) {
  var angka = prompt("masukan angka");
  if (angka % 2 === 0) {
    alert("anda memasukkan angka Genap");
  } else if (angka % 2 === 1) {
    alert("anda memasukan angka Ganjil");
  } else {
    alert("yang anda masukan bukan angka");
  }

  ulang = confirm("lagi");
}
alert("makasih");