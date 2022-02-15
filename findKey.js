const findKey = function(object, callback) {
  let name = '';
  for (let item in object) {
    if (callback(object[item])) {
      name = item;
      break;
    }
  } return name;
};

module.exports = findKey;