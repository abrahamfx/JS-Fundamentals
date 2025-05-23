let rep = Number(Math.floor(process.argv[2]))
if(rep  <=0 || rep >=0){  
   for(let i = 0; i<rep; i++ ){
    console.log("C is fun");
   }
}
else{
    console.log("Missing number of occurrences");
}