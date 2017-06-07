
function factorialize(num) {
  var x=num;
  if (num===0)
    return 1;
  for (var i=num-1;i>0;i--)
    {
      x *= i;
    }
  return x;
}

factorialize(5);
