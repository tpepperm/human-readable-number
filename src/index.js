module.exports = function toReadable (number) {
  var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  var num = number.toString();
  var arr = [];
  var firstIndex = undefined;
  if (num.length == 4) {
      firstIndex = 0;
      var index = parseInt(num[firstIndex]);
      arr.push(digits[index]);
      arr.push(" thousand");
  }
  if (num.length >= 3) {
      firstIndex = (firstIndex == undefined) ? 0 : (firstIndex + 1);
      var index = parseInt(num[firstIndex]);
      arr.push(digits[index]);
      arr.push(" hundred");
  } 
  if (num.length >= 2) {
      firstIndex = (firstIndex == undefined) ? 0 : (firstIndex + 1);
      var index = parseInt(num[firstIndex]) - 1;
      if (index >= 0) {
        if (firstIndex != 0){
            arr.push(" ");
            }
        if (index == 0) {
            index = parseInt(num[firstIndex+1]);
            arr.push(teens[index]);
            return arr.join("");
        }
        arr.push(tens[index-1]);
    }
  }
  if (num.length >= 1) {
      firstIndex = (firstIndex == undefined) ? 0 : (firstIndex + 1);
      var index = parseInt(num[firstIndex]);
      if (firstIndex != 0) {
          if (index == 0) {
              return arr.join("");
          }
          arr.push(" ");
      }
      arr.push(digits[index]);
  }
  return arr.join("");
}
