module.exports = { 
    //param A : array of integers
    //return an integer
       largestRectangleArea : function(A){
           
           // min from left, index 0 will be 1;
           // min from right, index N - 1 will be 1;
   
           let minFromLeft = [1]; // indexes
           let minFromRight = []; // indexes
           // minFromRight[A.length - 1] = 1;
   
           let minStack = [];
           // minStack.push(0)
   
           for ( let i = 0; i < A.length; i++ )
           {
               while ( minStack.length !== 0 && A[minStack[minStack.length -1]] >= A[i] )
               {
                   minStack.pop();
                   continue;
               }
   
               if ( minStack.length === 0 )
               {
                   minStack.push(i);
                   minFromLeft[i] = -1;
                   continue;
               }
   
               minFromLeft[i] = minStack[minStack.length - 1];
               minStack.push(i);
           }
   
           // let Stack = [];
           minStack = [];
           // minStack.push(0)
   
           for ( let i = A.length - 1; i >= 0; i-- )
           {
               while ( minStack.length !== 0 && A[minStack[minStack.length -1]] >= A[i] )
               {
                   minStack.pop();
                   continue;
               }
               
               if ( minStack.length === 0 )
               {
                   minStack.push(i);
                   minFromRight[i] = -1;
                   continue;
               }
               
               minFromRight[i] = minStack[minStack.length - 1];
               minStack.push(i)
           }
   
           console.log('minFromLeft', minFromLeft);
           console.log('minFromRight', minFromRight);
   
           // return;
           let max = -1;
   
           for ( let i = 0; i < A.length; i++ )
           {
                   if ( i === 1 )
                   {
                       // console.log('at 1', minFromRight[i] - minFromLeft[i] - 1)
                   }
                   max = Math.max(max, (minFromRight[i] - minFromLeft[i] - 1) * A[i], A[i]);
               //  i - mfl + minfrom right - i
               if ( max == 290 )
               {
                   // console.log('left', i, minFromLeft[i], 'or', A[i])
               }
           }
           
           // for ( let i = A.length -1; i >= 0; i-- )
           // {
           //     if ( minFromRight[i] !== -1 )
           //     {
           //         max = Math.max(max, (minFromRight[i] - i) * A[i]);
           //     }
           //     else {
           //         max = Math.max(max, A[i]);
           //     }
   
           //     if ( max == 290 )
           //     {
           //         // console.log('right', i, minFromRight[i], 'or', A[i])
           //     }
           // }
   
           // for ( let i = 0; i < A.length; i++ )
           // {
           //     if ( 348 % A[i] === 0 )
           //         // console.log('A[i]', A[i]);
           // }
   
           return max;
       }
   }

largestRectangleArea1 = (A) => {
    let minFromLeft = [1]; // indexes
    let minFromRight = []; // indexes

    let minStack = [];

    for ( let i = 0; i < A.length; i++ )
    {
        while ( minStack.length !== 0 && A[minStack[minStack.length -1]] >= A[i] )
        {
            minStack.pop();
            continue;
        }
        
        if ( minStack.length === 0 )
        {
            minStack.push(i);
            minFromLeft[i] = -1;
            continue;
        }
        
        minFromLeft[i] = minStack[minStack.length - 1];
        minStack.push(i);
    }
    
    minStack = [];
    
    for ( let i = A.length - 1; i >= 0; i-- )
    {
        while ( minStack.length !== 0 && A[minStack[minStack.length -1]] >= A[i] )
        {
            minStack.pop();
            continue;
        }
        
        if ( minStack.length === 0 )
        {
            // ! Use A.length
            minStack.push(i);
            minFromRight[i] = -1;
            continue;
        }
        
        minFromRight[i] = minStack[minStack.length - 1];
        minStack.push(i)
    }
    
    console.log('minfrom left', minFromLeft);
    console.log('minfrom right', minFromRight);
    
    let max = -1;
    
    for ( let i = 0; i < A.length; i++ )
    {
        if ( i === 1 )
        {
            console.log('1', (minFromRight[i] - minFromLeft[i] - 1) * A[i])
            console.log( A[i])
        }

        max = Math.max(max, (minFromRight[i] - minFromLeft[i] - 1) * A[i], A[i]);
    }
    
    return max;
}

// console.log(largestRectangleArea1([47,69,67,97,86,34,98,16,65,95,66,69,18,1,99,56,35,9,48,72,49,47,1,72,87,52,13,23,95,55,21,92,36,88,48,39,84,16,15,65,7,58,2,21,54,2,71,92,96,100,28,31,24,10,94,5,81,80,43,35,67,33,39,81,69,12,66,87,86,11,49,94,38,44,72,44,18,97,23,11,30,72,51,61,56,41,30,71,12,44,81,43,43,27]));
console.log(largestRectangleArea1([1, 1, 1, 1,1]));

