function titan(maxnum){
 
    let randomizer= Math.floor(Math.random() * maxnum +1);
 
    console.log(`you chose ${randomizer}`)
    
    switch(randomizer) {
        case 0:
            console.log("A certain victory")
          break;
        case 1:
            console.log("not so certain victory")
          break;

        case 2:
            console.log("an uneasy victory")
        break;
 
        default:
            console.log("Your fate is unclear, ô chosen undead")
          
      }
    }
    titan(6);
 