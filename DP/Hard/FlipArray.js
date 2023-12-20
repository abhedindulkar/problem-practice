let dp = [];
let min = Number.MAX_SAFE_INTEGER;
let dpMin = new Map();

module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
        
        let sum = A.reduce((partialSum, a) => partialSum + a, 0);
        
        
        dp    = Array.from({length:A.length}, () => Array.from({length:sum + 1}, () => null));
        dpMin = Array.from({length:A.length}, () => Array.from({length:sum + 1}, () => null));
        
        min = getMinimumSum(sum/2, arr, A.length - 1, sum)

        return min;

        return getMin(A.length - 1, Math.floor(sum / 2), A);
	}
};

function solve(A) {
    
    let sum = A.reduce((partialSum, a) => partialSum + a, 0);
        
    min = getMinimumSum(Math.floor(sum/2), A, A.length - 1, sum)

    return min;

    dp    = Array.from({length:A.length}, () => Array.from({length:sum + 1}, () => null));
    dpMin = Array.from({length:A.length}, () => Array.from({length:sum + 1}, () => null));

    return getMin(A.length - 1, Math.floor(sum / 2), A);
}

function solve2(A) {
    
    let sum = A.reduce((partialSum, a) => partialSum + a, 0);
        
    // min = getMinimumSum(sum/2, arr, A.length - 1, 0)

    // console.log('sum', sum)
    // console.log('half sum', Math.floor(sum / 2))

    dp    = Array.from({length:A.length}, () => Array.from({length:sum + 1}, () => null));
    // dpMin = Array.from({length:A.length}, () => Array.from({length:sum + 1}, () => null));

    // getMin(A.length - 1, Math.floor(sum / 2), A)
    // console.log(JSON.stringify(dp))
    // return;
    return getMin(A.length - 1, Math.floor(sum / 2), A).flips;
}

function getMinimumSum(halfSum, arr, currentIndex, currentSum)
{
    if ( currentSum <= halfSum )
        return currentSum;

     if ( currentIndex < 0 )
        return currentSum;

    if ( dpMin[currentIndex][currentSum] !== null )
        return dpMin[currentIndex][currentSum];

    min = Math.min(currentSum, min);

    if ( currentSum - arr[currentIndex] < halfSum )
    {
        dpMin[currentIndex][currentSum] = getMinimumSum(currentIndex - 1, currentSum, arr)

        return dpMin[currentIndex][currentSum];
    }

    dpMin[currentIndex][currentSum] = Math.min(getMinimumSum(currentIndex - 1, currentSum - arr[currentIndex], arr) + 1,
                                               getMinimumSum(currentIndex - 1, currentSum, arr))

    return dpMin[currentIndex][currentSum];
}

function getMin(currentIndex, currentSum, arr) 
{
    if ( currentIndex < 0 )
        return {sum: currentSum, flips: 0, coins: []};

    if ( currentSum < 0 )
        return { sum: Math.MAX_SAFE_INTEGER, flips: 0, coins: [] };

    if (dp[currentIndex][currentSum] !== null)
        return dp[currentIndex][currentSum];

    if ( currentSum - arr[currentIndex] < 0 )
    {
        dp[currentIndex][currentSum] = getMin(currentIndex - 1, currentSum, arr)

        return dp[currentIndex][currentSum];
    }
     
    let choosen    = JSON.parse(JSON.stringify(getMin(currentIndex - 1, currentSum - arr[currentIndex], arr)));
    let notChoosen = JSON.parse(JSON.stringify(getMin(currentIndex - 1, currentSum, arr)));
    
    if ( choosen.sum < notChoosen.sum )
    {
        choosen.flips = choosen.flips + 1;
        choosen.coins.push(arr[currentIndex]);
        dp[currentIndex][currentSum] = JSON.parse(JSON.stringify(choosen));
    }
    else if ( choosen.sum === notChoosen.sum && choosen.sum !== Math.MAX_SAFE_INTEGER ) {
        
        if ( choosen.flips < notChoosen.flips )
        {
            choosen.flips = choosen.flips + 1;
            choosen.coins.push(arr[currentIndex]);
            dp[currentIndex][currentSum] = JSON.parse(JSON.stringify(choosen));
        }
        else
        {
            // notChoosen.flips = notChoosen.flips;
            dp[currentIndex][currentSum] = JSON.parse(JSON.stringify(notChoosen));
        }
    }
    else {
        // notChoosen.flips = notChoosen.flips;
        dp[currentIndex][currentSum] = JSON.parse(JSON.stringify(notChoosen));
    }
    
    // dp[currentIndex][currentSum] = Math.max(getMin(currentIndex - 1, currentSum - arr[currentIndex], arr),
    //                                         getMin(currentIndex - 1, currentSum, arr))

    return dp[currentIndex][currentSum];
}


// console.log(solve2([14, 10, 4]));
console.log(solve2([5,4,6,8,7,2,3]));
// console.log(solve2([11,10,8,6,8,11,1,10,2,3,8,3,8,12,11,1,7,5,5,12,9,4,10,3,3,3,8,8,8,6,7,7,7,6,4,2,5,8,11,10,10,10,12,9,2,3,9,12,7,6,11,8,9,9,10,3,3,5,2,10,10,9,4,9,6,11,10,2,6,1,4,7,10,3,4,3,9,4,3,8,1,1,3]));

