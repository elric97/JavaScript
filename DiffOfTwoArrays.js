
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var n1=arr1.filter(function(wds){
    return arr2.indexOf(wds)===-1; //same as the second one 
  });
  var n2=arr2.filter(function(wds){
    return arr1.indexOf(wds)===-1; //return the items which exist in arr2 but not in arr1 (-1) to show that item does not exist in that array 
  });
  newArr=n1.concat(n2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
