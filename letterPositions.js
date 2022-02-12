const letterPositions = function(string) {
  let returnObj = {};
  // put string i into a variable
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let value = returnObj[letter];
    if (!value) {
      returnObj[letter] = [i];
    } else {
      value.push(i);
    }
  } return returnObj;
 }
 

