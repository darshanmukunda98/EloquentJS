const range = (ii,jj,kk=1) => {
  let s=[];
  let neg=kk;
  //console.log(neg);
 kk=Math.abs(kk);
  if(ii>jj)
  {
    let temp = jj;
    jj = ii;
    ii = temp;
  }
  
 
    for(let i=ii;i<=jj;i+=kk)
      s.push(i);
  if(neg < 0)
  {
    s=s.reverse();
  }
  
  return s;
}
const sum=(arr) => {
  let sum=0;
  for (let i=0;i<arr.length;i++)
    sum+=arr[i];
  return sum;
}




console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
