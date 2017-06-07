
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  /*function ne(val)
  {
    if (invalid(val))
      return true;
    return false;
  }*/
  arr=arr.filter(Boolean);
  
  return arr;
}

bouncer([7, "ate", "", false, 9]);
