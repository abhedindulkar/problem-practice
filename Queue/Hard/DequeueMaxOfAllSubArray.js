// * Sliding window max of all subarray

module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
       slidingMaximum : function(A, B){
           
           let dq = [A[0]];
           let frontIndex = 0;
           let result = [];
           // let 
           // Preparing for the sliding Window Dequeue.
           for ( let i = 1; i < B; i++ )
           {
               while ( A[i] > dq[dq.length - 1] )
               {
                   dq.pop();
               }
   
               if ( A[i] <= dq[dq.length - 1] )
               {
                   dq.push(A[i]);
                   continue;
               }
           }

           ans.push(dq[frontIndex]);
        
           let removingIndex = 0;
           for ( let i = B; i < A.length; i++ )
           {
                // * Removing Front Element from dq
                if ( A[i - B - 1] === dq[frontIndex] )
                {
                    frontIndex++;
                }

                while ( A[i] > dq[dq.length - 1] )
                {
                    dq.pop();
                }
    
                if ( A[i] <= dq[dq.length - 1] )
                {
                    dq.push(A[i]);
                }

                ans.push(dq[frontIndex]);
           }

           return ans;
       }
   };
   

maxArrayOfAllSubArrays = (A, B) => {

    let dq = [A[0]];
    let frontIndex = 0;
    let ans = [];

    // Preparing for the sliding Window Dequeue.
    for ( let i = 1; i < B; i++ )
    {
        while ( A[i] > dq[dq.length - 1] )
        {
            dq.pop();
        }

        // if ( A[i] <= dq[dq.length - 1] )
        // {
            dq.push(A[i]);
            // continue;
        // }
    }

    console.log('generated DQ', dq)

    ans.push(dq[frontIndex]);
 
    let removingIndex = 0;
    for ( let i = B; i < A.length; i++ )
    {
         // * Removing Front Element from dq
         if ( A[i - B] === dq[frontIndex] )
         {
             frontIndex++;
         }

         while ( A[i] > dq[dq.length - 1] && dq.length - 1 >= frontIndex )
         {
            dq.pop();
         }

        //  if ( dq.length === 0 )
        //  {
        //     frontIndex = 0;
        //  }

        //  if ( A[i] <= dq[dq.length - 1] )
        //  {
            dq.push(A[i]);
        //  }
        // console.log('i => ', i, ', ',  dq)

         ans.push(dq[frontIndex]);
    }

    return ans;
}

console.log(maxArrayOfAllSubArrays([1, 2, 3], 3));

i = 3
fI=> 0;

i = 4;
fI = 0;