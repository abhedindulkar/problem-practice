/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // ideal solution

    // let i = m - 1;
    // let j = n - 1;
    // let k = m + n - 1;
    
    // while (j >= 0) {
    //     if (i >= 0 && nums1[i] > nums2[j]) {
    //         nums1[k--] = nums1[i--];
    //     } else {
    //         nums1[k--] = nums2[j--];
    //     }
    // }

    let leftPointer  = m - 1;
    let rightPointer = n - 1;
    let zeroIndex    = nums1.length - 1;

    // console.log('leftPointer', leftPointer, 'rp', rightPointer, 'zi', zeroIndex);
    // return;
    
    if ( rightPointer < 0 )
    {
        return;

        // [1, 2, 3] []
        // []
        

        return;
    }

    if ( leftPointer < 0 )
    {
        // console.log('inside lp')
        // nums1 = nums2;

        for ( let i = 0; i < nums1.length; i++ )
        {
            nums1[i] = nums2[i]
        }

        return;
    }

    // let index = nums1.length - 1 >= 0 ? nums1.length - 1 : 0;
        
    // while ( nums2.length > 0 )
    // {
    //     nums1[index] = nums2.pop()
    //     index--;
    // }

    // return;

    // if ( rightPointer < 0 )
    // {
    //     // for ( let i = nums1.length - 1; i > nums2.length - 1; i-- )
    //     // {
    //     //     nums1[i] = nums2.pop()
    //     // }
        
    //     // let index = nums1.length - 1;

    //     // while ( nums2.length > 0 )
    //     // {
    //     //     nums1[index] = nums2.pop()
    //     //     index--;
    //     // }

    //     nums1[nums1.length - 1] = nums2.pop()
    //     return;
    // }

    // return;

    while ( rightPointer >= 0 && leftPointer >= 0 ) {

        if ( nums1[leftPointer] < nums2[rightPointer] || nums1[leftPointer] === nums2[rightPointer] )
        {
            nums1[zeroIndex] = nums2[rightPointer];
            // nums1[zeroIndex] = nums2.pop();
            nums2.pop()
            rightPointer--;
            zeroIndex--;
            continue;
        }

        if ( nums1[leftPointer] > nums2[rightPointer] )
        {
            //swapping()
            let temp = nums1[leftPointer];
            nums1[leftPointer] = nums1[zeroIndex];
            nums1[zeroIndex] = temp

            zeroIndex--;
            leftPointer--;
            continue;
        }

        // if ( nums1[leftPointer] === nums2[rightPointer] )
    } 

    if ( leftPointer < 0 && nums2.length > 0)
    {
        // nums1[0] = nums2.pop()
        while ( nums2.length > 0 )
        {
            nums1[nums2.length - 1] = nums2.pop()
        }
    }


    // console.log('leftp', leftPointer);

    return;

    // console.log(nums1)
};