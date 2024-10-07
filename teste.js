let derrota = Math.floor(Math.random() * 150); 
let vitoria = Math.floor(Math.random() * 150); 
rank(vitoria,derrota);
function rank(vitoria,derrota) {
    let status = "";
    let total = 0;
    let final = [];
    if (vitoria > derrota){
     total = vitoria - derrota
     }   
     else{total = derrota - vitoria
    
     }

    if(total < 10){
       status = "Ferro";
    } else if(total <= 20 ){
       status = "Bronze";
    } else if (total <= 50){
       status = "Prata";}
       else if (total <= 80){
        status = "Ouro";}
       else if (total <=90){
        status = "Diamante";
       }else if( total <= 100){
        status = "Lendãrio";
       }else {status = "Imortal";}
       
       return {total , status};
        
        }
const resultado = rank(vitoria,derrota);

console.log(`O Herói tem de saldo de ${resultado.total} vitorias está no nível de ${resultado.status}`)