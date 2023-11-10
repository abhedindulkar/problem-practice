https://leetcode.com/problems/squares-of-a-sorted-array/description/

// * since the array is sorted i can use two pointer and start adding it to 
// * the new array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let result = [];
    let right = nums.length - 1;
    let left = 0;
    let count = nums.length - 1;

    while ( count >= 0 )
    {
        let rightSquare = Math.pow(nums[right], 2);
        let leftSquare  = Math.pow(nums[left], 2);

        if ( rightSquare >= leftSquare )
        {
            result[count] = rightSquare;
            count--;
            right--;
            continue;
        }

        result[count] = leftSquare;
        count--;
        left++;
    }
    
    return result;
};

//* using two pointer and swapping.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let left  = 0;
    let right = nums.length -1;
    // let firstEle

    let lowest = Math.abs(nums[0]);

    for ( let i = 0; i < nums.length; i++ )
    {
        if ( Math.abs(nums[i]) < lowest )
            lowest = Math.abs(nums[i]);
    }



    while ( left !== right )
    {
        let leftSquare = Math.pow(nums[left], 2);
        let rightSquare = Math.pow(nums[right], 2);

        if ( rightSquare > leftSquare )
        {
            nums[right] = rightSquare;
            right--;
            continue;
        }
        
        if ( rightSquare === leftSquare )
        {
            nums[right] = rightSquare;
            right--;
            continue;
        }

        if ( rightSquare < leftSquare )
        {
            let temp = nums[right];
            nums[right] = leftSquare;
            nums[left] = temp;
            right--;
        }
    }

    if ( lowest === Math.abs(nums[0]) )
    {
        nums[0] = Math.pow(nums[0], 2);
    }

    return nums;
};