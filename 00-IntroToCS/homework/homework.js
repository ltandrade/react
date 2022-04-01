function BinarioADecimal(num) {
  // tu codigo aca
  let j=0;
  var numDec=0;
  
  for (let i=num.length-1;i>=0;i--) {
    numDec=numDec+(num[i]*(Math.pow(2, j)));
    j++;
  }
  return numDec;
}

function DecimalABinario(num) {
  // tu codigo aca
  if (num<=0) {return '0'}

  var arr=[];
  
  while (num>0) {
   arr.unshift(num%2)
   num = Math.floor (num/2);
  }
  
  return arr.join("");
  
  }
  


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}