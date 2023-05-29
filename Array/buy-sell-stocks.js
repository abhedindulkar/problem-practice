https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 * * Using two Pointers technique
 */
var maxProfit = function(prices) {
    
    let leftPointer  = 0;
    let maxProfit    = 0;
    let rightPointer = leftPointer + 1;
    
    while ( rightPointer < prices.length )
    {
        if ( prices[leftPointer] < prices[rightPointer] && prices[rightPointer] - prices[leftPointer] > maxProfit )
        {
            maxProfit = prices[rightPointer] - prices[leftPointer];
            rightPointer++;
            continue;
        }

        if ( prices[rightPointer] < prices[leftPointer] )
        {
            leftPointer = rightPointer;
            rightPointer++;
            continue;
        }
        
        rightPointer++;
    }
    
    return maxProfit;
};

//USING SPACE COMPLEXITY O(N) i.e maxFromRight carry forward technique

    let maxFromRight = [];
    let max = Number.MIN_SAFE_INTEGER;
    let maxProfit = 0;

    for ( let i = prices.length - 1; i >= 0; i-- )
    {
        if ( prices[i] > max )
            max = prices[i]

        maxFromRight[i] = max;
    }

    for ( let i = 0; i < prices.length; i++ )
    {
        if ( maxProfit < ( maxFromRight[i] - prices[i] ) )
            maxProfit = maxFromRight[i] - prices[i];
    }
    
    return maxProfit;