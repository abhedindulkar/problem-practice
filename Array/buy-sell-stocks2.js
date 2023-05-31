/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // done by myself
    
    let leftPointer = 0;
    let rightPointer = leftPointer + 1;
    let profit = 0;

    while ( rightPointer < prices.length )
    {
        if ( prices[leftPointer] < prices[rightPointer] )
        {
            profit += prices[rightPointer] - prices[leftPointer];
            leftPointer = rightPointer;
            rightPointer++;
            continue
        }

        if ( prices[leftPointer] > prices[rightPointer] )
        {
            leftPointer = rightPointer;
            rightPointer++;
            continue
        }

        rightPointer++
    }

    return profit;
};