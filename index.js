
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN <= toN) return fromN + sum(fromN + 1, toN);
  else return 0;
}

module.exports = sum;
