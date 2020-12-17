/**
 * inekler ve koyunlar diye liste olusturdum sadece cunku tavuklarin ayaklarindan paca yapilmiyor bu yuzden almaya gerek
 * domuzlari da liste icine almadim cunku usta sadece helal olanlari aliyor
 */

let hayvanlar = ["domuz", "inek", "koyun", "tavuk", "inek", "domuz", "koyun", "inek", "domuz", "koyun", "domuz", "inek", "domuz", "tavuk", "inek", "inek"];
let inekler = [];
let koyunlar = [];

for (i = 0; i < hayvanlar.length; i+=1) {
  if (hayvanlar[i].includes("inek")) {
    inekler.push("inek");
  } else if (hayvanlar[i].includes("koyun")) {
    koyunlar.push("koyun");
  }
}
console.log(`Ustaya gonderilen bacak sayisi:${inekler.length * 4 + koyunlar.length * 4}`);