
function titleCase(str) {
  str=str.toLowerCase();
  var arr=str.split(' ');
  var j=0;
  for (var i=0;i<arr.length;i++)
    {
      var x=arr[i].split('');
      x[0]=x[0].toUpperCase();
      arr[i]=x.join('');
    }
  str=arr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
