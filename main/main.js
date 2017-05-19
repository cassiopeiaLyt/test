module.exports = function main(str) {
  var charr = str.split("");
  var sum = 0;
  for (var i=0; i < charr.length; i++) {
	var temp = parseInt(charr[i]);
	sum += temp;
  }
  return sum;
};
