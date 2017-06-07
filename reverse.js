function reverseString(str) {
  var newarray=str.split("");
  var rev=newarray.reverse();
  str=rev.join("");
  return str;
}

reverseString("hello");