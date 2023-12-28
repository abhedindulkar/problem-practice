module.exports = { 
    //param A : array of strings
    //return an integer
       evalRPN : function(A){
           
            // test cases 
            // ["2", "1", "+", "3", "*"]
            //["4", "13", "5", "/", "+"] 

            let stack = [];
            let i = 0;

            while ( i < A.length )
            {
                if ( ! isNaN(parseInt(A[i])) )
                {
                    stack.push(A[i]);
                    i++;
                    continue;
                }

                if ( A[i] == '+' )
                {
                    stack[stack.length - 2] = stack[stack.length - 2] + stack[stack.length - 1];
                    stack.pop();
                    i++;
                    continue;
                }
                if ( A[i] == '/' )
                {
                    stack[stack.length - 2] = Number(stack[stack.length - 2] / stack[stack.length - 1]);
                    stack.pop();
                    i++;
                    continue;
                }
                if ( A[i] == '*' )
                {
                    stack[stack.length - 2] = stack[stack.length - 2] * stack[stack.length - 1];
                    stack.pop();
                    i++;
                    continue;
                }

                if ( A[i] == '-' )
                {
                    stack[stack.length - 2] = stack[stack.length - 2] - stack[stack.length - 1];
                    stack.pop();
                    i++;
                    continue;
                }
            }

            return stack[0];
       }
   };
   
function rpn(A) {
    let stack = [];
    let i = 0;

    while ( i < A.length )
    {
        if ( ! isNaN(parseInt(A[i])) )
        {
            stack.push(A[i]);
            i++;
            continue;
        }

        // return stack;
        
        if ( A[i] == '+' )
        {
            stack[stack.length - 2] = Number(stack[stack.length - 2]) + Number(stack[stack.length - 1]);
            stack.pop();
            i++;
            // return stack;
            continue;
        }

        if ( A[i] == '/' )
        {
            stack[stack.length - 2] = Math.floor(stack[stack.length - 2] / stack[stack.length - 1]);
            stack.pop();
            i++;
            continue;
        }

        if ( A[i] == '*' )
        {
            stack[stack.length - 2] = stack[stack.length - 2] * stack[stack.length - 1];
            stack.pop();
            i++;
            continue;
        }

        if ( A[i] == '-' )
        {
            stack[stack.length - 2] = stack[stack.length - 2] - stack[stack.length - 1];
            stack.pop();
            i++;
            continue;
        }
    }
    
    return stack[0];
}

console.log(rpn(["4", "13", "5", "/", "+"] ));
// console.log(rpn(["2", "1", "+", "3", "*"]));