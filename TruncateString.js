
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num<=3)
    {
      str=str.slice(0,num);
      str=str+"...";
      return str;
    }
  else if (str.length>num)
    {
      str=str.slice(0,num-3);
      str=str+"...";
      return str;
    }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
