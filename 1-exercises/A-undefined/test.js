function getRealFloor(n) {
   return (n > 13) ? n - 2 : (n <= 0) ? n : n - 1;
  
}

console.log(getRealFloor(15));
