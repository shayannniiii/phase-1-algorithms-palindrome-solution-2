function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  var reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
