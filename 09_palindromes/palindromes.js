const palindromes = function (str) {
  const letters = str.toLowerCase().match(/\w/g);
  return letters.join("") === letters.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
