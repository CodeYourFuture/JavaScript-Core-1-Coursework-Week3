function well(x){
let newArr = "";
newArr = x.toString();
newArr = newArr.toLowerCase();
  let count = (newArr.match(/good/g) || []).length;
  if (count > 2) {
    return "I smell a series!"
  } else if (count <= 0) {
    return "Fail!"
  } else return "Publish!"
}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]))