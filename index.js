let heroi = "renato";
let xp = Math.floor(Math.random() * 20001); 
console.log(xp);
        
if (xp < 1000){
    xp = "ferro"
}else if (xp < 2000){
  xp = "bronze"
}
else if (xp < 5000){
  xp = "prata"
}
else if (xp < 7000){
  xp = "ouro"
}
else if (xp < 8000){
  xp = "platina"
}
else if (xp < 9000){
  xp = "ascendente"
}
else if (xp < 10000){
  xp = "imortal"
}
else if (xp > 10000){
  xp = "radiante"
}

console.log(`o heroi ${heroi} está no nível de ${xp}`)


    