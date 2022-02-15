const without = function(source, itemsToRemove) {
  let sourceWithout = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      sourceWithout.push(source[i]);
    }
  }
  return sourceWithout;
};

module.exports = without;