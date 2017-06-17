
function sumAll(arr) {
  var sum=0;
  var x=Math.min(arr[0],arr[1]);
  var y=Math.max(arr[0],arr[1]);
  //return arr[1];
  for (var i=x;i<=y;i++)
    {
      sum+=i;
    }
  return sum;
}

sumAll([4, 1]);
