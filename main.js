import './style.css'

//L(Lumières), C(Caméras), P(Porte), F(Foxy), B(Boost)

let tour = 0;
let batterie = 100;
let heure = 0;

function gardienDeNuit(t){
  for (let i = 0; i < 28; i++) {
    
    let random = Math.floor(Math.random() * (t.length - 1))
    let randomValue = t[random];
    // debugger
    if (tour === 4) {
       
      heure += 1;
      tour = 0;
      
    } 
    
    
    
    if (randomValue ===  t[0]) {
      
      batterie-=1;   
      
    } else if (randomValue === t[1]) {
      
      batterie-=2;
      
    } else if (randomValue === t[2]) {
      
      batterie-=5;
      
      
    } else if (randomValue === t[3]) {
      
      batterie-=10;
      
    } else if(randomValue === t[4]) {
      
      batterie+=12;

      if (batterie > 100) {
        batterie = 100;
      }
      
    } 


    if (heure === 6) return console.log("Bravo, vous avez survécu jusqu'a 6h du matin avec " + batterie + "% de batterie restante");
    

    if (batterie <= 0){
      return console.log("Tu as perdu, tu est mort à " + heure + "h du matin.");
  
   } 
  
    tour ++;
  }
  return batterie, heure;
  
}
gardienDeNuit(["L","C","P","F","B"]);

