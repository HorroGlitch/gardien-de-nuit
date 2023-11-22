import './style.css'

//L(Lumières), C(Caméras), P(Porte), F(Foxy), B(Boost)

let batterie = 100;
let heure = 0;

function gardienDeNuit(t){
  for (let i = 0; i < t.length; i++) {
    
    if (4%t[i] === 0) {
      
      heure = heure + 1;
      
    } else if (batterie <= 0){
      console.log("Tu as perdu, tu est mort à " + heure + "h du matin.");
    }



    if (t[i] === "L") {

        batterie-=1;   

      } else if (t[i] === "C") {

        batterie-=5;

      } else if (t[i] === "P") {

        batterie-=8;

      } else if (t[i] === "F") {
     
        batterie-=15;

      } else if(t[i] === "B") {

        batterie+=10;

  }

}
return batterie, heure;

}
gardienDeNuit(["F","F","F","F","F","F","F"]);

