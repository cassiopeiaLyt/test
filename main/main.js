module.exports = function main(email, suffixes) {
  var arr = email.split("@");
  console.log(arr[1]);
  console.log(suffixes[0]);
  if(arr[1] == suffixes[0])
	  return true;
  else
	  return false;
};
