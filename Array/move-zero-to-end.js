/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let zeroCount = 0;
    
    for ( let i = 0; i < nums.length; i++ )
    {
        if ( nums[i] === 0 )
        {
            zeroCount++
        }
        else {
            let temp = nums[i - zeroCount]
            nums[i - zeroCount] = nums[i]
            nums[i] = temp
        }
    }

    // Mistake
    // Used the two pointer technique but calculating zeroIndex and numberedIndex all the time
    // Solution approach
    // 

    
    // let zeroIndex   = 0;
    // let numberIndex = 0;

    // [zeroIndex, numberIndex] = getIndexes(zeroIndex, nums)
    
    // console.log('zeroIndex', zeroIndex, 'numberIndex', numberIndex);
    // // //swapping zero with number
    // while ( numberIndex < nums.length && zeroIndex < nums.length )
    // {
    //     let temp          = nums[zeroIndex];
    //     nums[zeroIndex]   = nums[numberIndex];
    //     nums[numberIndex] = temp;
        
    //     [numberIndex, zeroIndex] = getIndexes(zeroIndex + 1, nums)
    // }

    // return;

    // // while (  )

    // // console.log(getIndexes(0, nums));
};

//get NumberIndex and zeroIndex
function getIndexes(zeroIndex, nums) {
    
    // let numberIndex = index;
    // if ( numberIndex < zeroIndex )
    // {
    //     numberIndex = zeroIndex
    // }
    let numberIndex = zeroIndex;

    while ( zeroIndex < nums.length ) {
        
        if ( nums[zeroIndex] === 0 )
        {
            while ( numberIndex < nums.length )
            {
                if ( nums[numberIndex] !== 0 )
                    break;

                numberIndex++
            }
            break;
        }
        else {
            zeroIndex++;
        }
        // break;

        // zeroIndex++;
    }
    
    return [zeroIndex, numberIndex]
}