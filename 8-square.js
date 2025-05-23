let x = "";
let matrix = Number(Math.floor(process.argv[2])); // take argument and covert to integer
if(matrix  <=0 || matrix >=0){     // if argument is convertable to integer ...
   for (let i = 0; i < matrix; i++) {
     for (let j = 0; j < matrix; j++) {
       x = x + "X";
       }
     console.log(x);  // print then reset x 
     x = "";
   }

}
else{
    console.log("Missing size");
}

