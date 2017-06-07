
function palindrome(str) {
  // Good luck!
  str=str.replace(/[^0-9a-zA-Z]/g,'');
  str=str.toLowerCase();
  var arr=str.split('');
  var j=str.length;
  var x=0;
  j--;
  for (var i=0;i<(Math.floor(str.length/2));i++)
    {
      if (arr[i]===arr[j])
        {
          x++;
        }
      j--;
    }
  
  if (x==Math.floor(str.length/2))
    return true;
  else
    return false;
}



palindrome("1 eye for of 1 eye.");
