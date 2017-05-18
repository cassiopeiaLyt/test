module.exports = function main() {
    console.log("Debug Info");
    return "hello world!";
};

module.exports = function remainder(a,b) {
	var c = a % b;
	console.log(c);
	return c;
};