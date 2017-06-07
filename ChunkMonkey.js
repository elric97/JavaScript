
function chunkArrayInGroups(arr, size) {
    var arr1=[];
    var i,j;
    if (arr.length%size===0)
      {
        i=arr.length/size;
      }
    else
      {
        i=Math.ceil(arr.length/size);
      }
    j=0;
    for (j=0;j<i;j++)
    {
      arr1.push(arr.slice(size*j,size*(j+1)));
    }
    return arr1;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
