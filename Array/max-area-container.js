//two pointer

//! Wrong approach i.e sorting and removing from smaller element after checking sum
module.exports = { 
    //param A : array of integers
    //return an integer
       maxArea : function(A){
   
           let duplicates = new Map();
   
           for ( let i = 0; i < A.length; i++ )
           {
               if ( duplicates.has(A[i]) )
               {
                   let indexes = [...duplicates.get(A[i])];
   
                   if ( indexes.length == 1 )
                   {
                       indexes.push(i)
                   }
                   else
                   {
                       indexes.pop();
                       indexes.push(i);
                   }
   
                   duplicates.set(A[i], indexes);
                   continue;
               }
   
               duplicates.set(A[i], [i]);
           }
   
           // console.log('duplicates', duplicates)
           
           A.sort((a, b) => {
               if ( a < b )
                   return 1;
   
               if ( a > b )
                   return -1;
   
               return 0;
           });
   
           // console.log(A);
           
           let maxArea = 0;
           // let 
           for ( let i = A.length - 1; i >= 0; i-- )
           {
               // console.log('--------------------')
               // console.log('length of array', A.length)
               // console.log(A[i])
   
               if ( duplicates.get(A[i]).length > 1 )
               {
                   let indexes = duplicates.get(A[i]);
                   maxArea = Math.max(maxArea, (indexes[1] - indexes[0]) * A[i]);
               }
               else {
                   maxArea = Math.max(maxArea, (A.length - 1)*A[i]);
               }
               // console.log('max', maxArea, A.length - 1*A[i]);
               A.pop();
               // console.log('new Array', A)
           }
   
           return maxArea;
       }
   };

