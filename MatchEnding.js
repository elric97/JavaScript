
function confirmEnding(str, target) {
  var j=target.length;
  var y=-1*j;
  var x=str.substr(y,j);
  if (x==target)
    return true;
  return false;
}

confirmEnding("Bastian", "n");
