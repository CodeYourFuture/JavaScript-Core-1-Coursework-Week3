function logicalCalc(array, op){
  //your code here
  let logic 
//   for (let i = 0; i < array.length; i++) {
    if (op === "AND") {
    logic = array.reduce((a, b) => a && b);
   } else if (op === "OR") {
    logic = array.reduce((a, b) => a || b);
   } else if ( op === "XOR") {
    logic = array.reduce((a, b) => a != b);
   }
//   }
  return logic
}

