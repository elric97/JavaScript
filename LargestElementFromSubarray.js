
function largestOfFour(arr) {
  var narr=[];
  for (var i=0;i<arr.length;i++)
    {
      var x=arr[i].sort(function(a,b){
        return b-a;
      });
      narr[i]=x[0];
    }
  return narr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
