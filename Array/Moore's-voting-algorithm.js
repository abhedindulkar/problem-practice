/**
 * @param {number[]} nums
 * @return {number}
 */
// Moore's voting algorithm.
// take variable and start counting its occurence if another different value 
// comes across decrease the count or null it or else increase the count if found similar integer
var majorityElement = function(nums) {

    let count = 1;
    let majorityElement = nums[0];

    for ( let i = 1; i < nums.length; i++ )
    {
        if ( majorityElement === null )
        {
            majorityElement = nums[i]
            count = 1;
            continue;
        }

        if ( nums[i] === majorityElement )
        {
            count++
            continue;
        }
        
        if ( count === 0 )
        {
            majorityElement = nums[i]
            count++;
            continue
        }

        count--;
        if ( count === 0 )
        {
            majorityElement = null
        }
    }

    return majorityElement;
    // let hashMap = new Map();
    
    // for ( let i = 0; i < nums.length; i++ )
    // {
    //     if ( hashMap.has(nums[i]) )
    //     {
    //         hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    //         continue;
    //     }
        
    //     hashMap.set(nums[i], 1);
    // }
    // let majorityCount = Math.ceil(nums.length / 2)
    
    // // console.log('hashmap', hashMap)
    // // console.log('majority count', majorityCount)

    // for ( let num of hashMap.entries() )
    // {
    //     // console.log('num', num)
    //     if ( num[1] >= majorityCount )
    //         return num[0]
    // } 

    // return;
};