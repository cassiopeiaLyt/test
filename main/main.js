module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxnum()}
o) 元素数量 = ${sequence.size()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    this.input = input;
  }

  minimum() {
    var min = 0;
	for (var i=0; i< this.input.length; i++) {
		if(this.input[i] < min)
			min = this.input[i];
	}
	return min;
  }

  maxnum() {
	var max = 0;
	for (var i=0; i< this.input.length; i++) {
		if(this.input[i] > max)
			max = this.input[i];
	}
	return max;
  }
  
  size() {
	return this.input.length;  
  }
  
  average() {
	var sum = 0;
	for (var i=0; i< this.input.length; i++) {
		sum += this.input[i];
	}
	var avg = parseFloat(sum / this.input.length).toFixed(2);
	return avg;
  }
}
