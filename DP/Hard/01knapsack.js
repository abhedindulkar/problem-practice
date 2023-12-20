let dp;

module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //param C : integer
 //return an integer
	solve : function(values, weights, totalWeight) {

        dp =  Array.from({ length: values.length }, () => Array.from({ length: totalWeight }, () => null));

        return getMaxValue(0, values.length -1,  totalWeight, values, weights);
	}
};

function getMaxValue(currentWeight, currentIndex, totalWeight, values, weights)
{
    
    if ( currentWeight >= totalWeight )
        return 0;

    if ( currentIndex < 0 )
        return 0;

    if ( dp[currentIndex] === undefined )
    {
        console.log('currentIndex', currentIndex)
        return 0;
    }
    
    if ( dp[currentIndex][currentWeight] !== null )
        return dp[currentIndex][currentWeight];

    if ( currentWeight + weights[currentIndex] > totalWeight )
    {
        dp[currentIndex][currentWeight] = getMaxValue(currentWeight, currentIndex - 1, totalWeight, values, weights)
        return dp[currentIndex][currentWeight];
    }

    dp[currentIndex][currentWeight] = Math.max(getMaxValue(currentWeight, currentIndex - 1, totalWeight, values, weights),
                                               getMaxValue(currentWeight + weights[currentIndex], currentIndex - 1, totalWeight, values, weights) + values[currentIndex]);
    
    return dp[currentIndex][currentWeight];
}
