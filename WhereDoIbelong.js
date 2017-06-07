
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr=arr.sort(function(a,b){
    return a-b;
  });
  var j=0;
  for (var i=0;i<arr.length;i++)
    {
      if (arr[i]<num)
        j++;
      else
        break;
    }
  return j;
}

getIndexToIns([5, 3,20,3], 5);
