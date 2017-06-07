
function rot13(str) { // LBH QVQ VG!
  var arr=[];
  var x,y;
  for (var i=0;i<str.length;i++)
    {
      if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
        {
          x=str.charCodeAt(i);
          x=x-13;
          if (x<65)
            {
              y=64-x;
              x=90-y;
              arr.push(String.fromCharCode(x));
            }
          else
            arr.push(String.fromCharCode(x));
        }
      else
        arr.push(String.fromCharCode(str.charCodeAt(i)));
    }
  str=arr.join("");
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
