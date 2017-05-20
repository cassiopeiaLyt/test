module.exports = function main(number) {
    console.log("Debug Info");
	
	var numberList = [
				   {  //0
					 up: '._.',
					 middle: '|.|',
					 down: '|_|',
				   },
				   {  //1
					 up: '...',
					 middle: '..|',
					 down: '..|',
				   },
				   {  //2
					 up: '._.',
					 middle: '._|',
					 down: '|_.',
				   },
				   { //3
					 up: '._.',
					 middle: '._|',
					 down: '._|',
				   },
				   { //4
					 up: '...',
					 middle: '|_|',
					 down: '..|',
				   },
				   { //5
					 up: '._.',
					 middle: '|_.',
					 down: '._|',
				   },
				   { //6
					 up: '._.',
					 middle: '|_.',
					 down: '|_|',
				   },
				   { //7
					 up: '._.',
					 middle: '..|',
					 down: '..|',
				   },
				   { //8
					 up: '._.',
					 middle: '|_|',
					 down: '|_|',
				   },
				   { //9
					 up: '._.',
					 middle: '|_|',
					 down: '..|',
				   }
                    ];
					
	var numbers = number.split("");
	var first = parseInt(numbers[0]);
	var up = numberList[first].up;
	var middle = numberList[first].middle;
	var down = numberList[first].down;
	
	for(var i = 1; i < numbers.length; i++){
		var index = parseInt(numbers[i]);
		up += " "+ numberList[index].up;
		middle += " "+ numberList[index].middle;
		down += " "+ numberList[index].down;
	
	}
	var list  = up + "\n" + middle + "\n" + down + "\n";
	
	
	
	
	
    return list;
};