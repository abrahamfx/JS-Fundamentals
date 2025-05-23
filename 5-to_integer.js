if(Number(Math.floor(process.argv[2])) <=0 || Number(Math.floor(process.argv[2])) >=0 ){
    console.log(`My number: ${Number(Math.floor(process.argv[2]))}`);
} 
else{
    console.log("Not a number");
}