let countries= ['China','Japan','South Korea','Vietnam','Malaysia'];
let capital= ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];

function capitaldupays (countries,capital){
    for(let pays in countries){
    

    console.log("Your country " + countries[pays] + " has the capital named :" +capital[pays]);
    
}


}
 capitaldupays(countries,capital);