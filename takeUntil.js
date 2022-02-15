const takeUntil = function(data, callback) {
  let data1 = data.filter(callback);
  let firstElement = data1.shift();
  let hello = [];
  for (let item of data) {
    hello.push(item);
    if (item === firstElement) {
      hello.pop();
      break;
    }
  } return hello;
};

module.exports = takeUntil;