/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  var result = "",
      carry = 0

  while(a || b || carry){
    let sum = +a.slice(-1) + +b.slice(-1) + carry // get last digit from each number and sum 

    if( sum > 1 ){  
      result = sum%2 + result
      carry = 1
    }
    else{
      result = sum + result
      carry = 0
    }
    
    // trim last digit (110 -> 11)
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }
  
  return result
  }
    
    
