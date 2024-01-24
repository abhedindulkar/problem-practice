


let dp;

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	coinchange2 : function(A, B){

        let sum = A.reduce((sum, current) => current+sum, 0);

        dp = Array.from({length: A.length}, () => Array.from({length: sum}, ()=> null))
        getCombinations(A.length -1, 0, A, B)
        return;
        // return getCombinations(A.length -1, 0, A, B);
	}
};

function coinchange2(A, B) {

    let sum = A.reduce((sum, current) => current+sum, 0);

    dp = Array.from({length: A.length + 1}, () => Array.from({length: B + 1}, () => null))
    // getCombinations(A.length -1, A, B)
    // console.log(dp);
    // return;
    return getCombinations(A.length - 1, A, B) % 1000007;
}

function getCombinationsOld(currentIndex, coins, targetTotal)
{
    if ( targetTotal === 0 ) //!check
        return 1;

    if ( currentIndex < 0 )
        return 0;

    if ( currentSum < targetTotal )
        return 0;

    if (dp[currentIndex][currentSum] === undefined)
    {
        console.log(dp[currentIndex])
        console.log('undefined', currentIndex, currentSum);
    }

    if (dp[currentIndex][currentSum] !== null)
        return dp[currentIndex][currentSum];

    if ( currentSum - coins[currentIndex] < targetTotal )
    {
        dp[currentIndex][currentSum] = getCombinations(currentIndex - 1,coins, currentSum) % 1000007;
        
        return dp[currentIndex][currentSum];
    }
    
    dp[currentIndex][currentSum] = (getCombinations(currentIndex, coins, targetTotal, currentSum - coins[currentIndex]) % 1000007
                                   + getCombinations(currentIndex - 1, coins, targetTotal, currentSum) % 1000007) % 1000007;
    
    return dp[currentIndex][currentSum];
}

function getCombinations(currentIndex, coins, targetTotal)
{
    if ( targetTotal === 0 )
    {
        // console.log()
        return 1;
    }

    if ( currentIndex < 0 )
        return 0;

    if ( targetTotal < 0 )
        return 0;

    if (dp[currentIndex][targetTotal] === undefined)
    {
        console.log(dp[currentIndex])
        console.log('undefined', currentIndex, targetTotal);
    }

    if (dp[currentIndex][targetTotal] !== null)
        return dp[currentIndex][targetTotal];

    if ( targetTotal - coins[currentIndex] < 0 )
    {
        dp[currentIndex][targetTotal] = getCombinations(currentIndex - 1,coins, targetTotal) % 1000007;
        
        return dp[currentIndex][targetTotal];
    }
    
    dp[currentIndex][targetTotal] = (getCombinations(currentIndex, coins, targetTotal - coins[currentIndex]) % 1000007
                                   + getCombinations(currentIndex - 1, coins, targetTotal) % 1000007) % 1000007;
    
    return dp[currentIndex][targetTotal];
}


console.log(coinchange2([10], 10));
// console.log(coinchange2([1, 2, 3], 4));