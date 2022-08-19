// Your code here.
function countBs(str)
{
  return countChar(str,'B');
}
function countChar(str,char)
{
  let count=0;
  while(str.length>0)
  {
    if (str[0] == char)
      count ++;	
    str=str.slice(1)
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
