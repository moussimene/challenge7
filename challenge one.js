let message="There is no war in Ba Sing Se";
let numWords=0;
if (message.length!==0){
    numWords+=1;
   }
for(let word in message){
   // console.log(message[word])
   
    if (message[word]===" "){
          numWords+=1;
}
 
}
 
console.log(numWords);