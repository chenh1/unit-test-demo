var Util = {
  // perform some random math
  randomMath: function(num1, num2) {
    if (num1 < num2) {
      return num2 - num1;
    }
    else if (num1 > num2) {
      return num1 * num2;
    }
    else {
      return num1 + num2;
    }
  },

  // Adds up the length of each word in the array
  addWordLengths: function(array) {
    var count = 0;

    for (var x = 0; x < array.length; x++) {
      count += array[x].length;
    }

    return count;
  },
  // Counts the number of times a letter appears in an array
  countLettersInArray: function(array, letter) {
    return Util.countLettersInString(array.join(''), letter);
  },
  // Counts the number of times a letter appears in a string
  countLettersInString: function(string, letter) {
    var matches = string.match(new RegExp(letter, 'gi'));

    if (matches !== null) {
      return matches.length;
    } else {
      return 0;
    }
  }
};


module.exports = Util;
