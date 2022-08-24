// Your code here.
const loop = (size, limit, decr, func) => {

/* 1st attempt
 *
 * if(limit(size))	
  func(size);
 else
   return;
loop(size=decr(size), limit, decr, func); 

*/
	for(let i = size; limit(i); i=decr(i))
	{
		func(i);
	}

}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
