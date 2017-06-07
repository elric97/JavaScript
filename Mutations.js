
function mutation(arr) {
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  var x=arr[1].split('');
  for (var i=0;i<x.length;i++)
    {
      var y=arr[0].indexOf(x[i],0);
      if (y===-1)
        {
          return false;
        }
    }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
