import React from 'react'

export default function ExecutionContext() {
    var n = 2;
    function Squire(num:number) {
        var ans = num*num;
        return ans;
    }
    var sqr1 = Squire(n);
    var sqr2 = Squire(4)
    console.log(sqr1, sqr2, 'Execution context');
  return (
    <div>
      Execution context is:  {sqr1} {sqr2} 
    </div>
  )
}
