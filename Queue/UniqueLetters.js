module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
           
           let uniqueQueue = [];
           let frontIndex = 0;
           let charMap = new Map();
           let ans = "";
   
           for ( let i = 0; i < A.length; i++ )
           {
                let currentChar = A.charAt(i);
                
                // repeatedChar
                if ( charMap.has(currentChar) )
                {
                    charMap.set(currentChar, charMap.get(currentChar) + 1);
                    
                    while ( uniqueQueue[frontIndex]!== undefined && charMap.get(uniqueQueue[frontIndex]) > 1 ) {
                        
                        frontIndex++;
                    }
                    
                    if ( uniqueQueue[frontIndex] === undefined ) {

                        ans = ans + "#";
                        continue;
                    }
                    
                    ans = ans + uniqueQueue[frontIndex];
                    continue;
                }

                if ( ! charMap.has(currentChar) )
                {
                    uniqueQueue.push(currentChar);
                    ans = ans + uniqueQueue[frontIndex];
                    charMap.set(currentChar, 1);
                    continue;
                }
                
                ans = ans + uniqueQueue[frontIndex];
           }
        
           return ans;
       }
   };
   
uniqueLetters = (A) => {
       
    let uniqueQueue = [];
    let frontIndex = 0;
    let charMap = new Map();
    let ans = "";

    for ( let i = 0; i < A.length; i++ )
    {
         let currentChar = A.charAt(i);
         
         // repeatedChar
         if ( charMap.has(currentChar) )
         {
             charMap.set(currentChar, charMap.get(currentChar) + 1);
             
             while ( uniqueQueue[frontIndex]!== undefined && charMap.get(uniqueQueue[frontIndex]) > 1 ) {
                 
                 frontIndex++;
             }
             
             if ( uniqueQueue[frontIndex] === undefined ) {

                 ans = ans + "#";
                 continue;
             }
             
             ans = ans + uniqueQueue[frontIndex];
             continue;
         }

         if ( ! charMap.has(currentChar) )
         {
             uniqueQueue.push(currentChar);
             ans = ans + uniqueQueue[frontIndex];
             charMap.set(currentChar, 1);
             continue;
         }
         
         ans = ans + uniqueQueue[frontIndex];
    }
 
    return ans;
}

// console.log(uniqueLetters('abadbc'))
console.log(uniqueLetters('abcabc'))