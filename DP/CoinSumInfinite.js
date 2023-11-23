
function add(arr, index, currentTotal, total)
{
    if ( index >= arr.length )
        return 0; 
    
    if ( arr[index] + currentTotal > total )
        return 0;

    if ( arr[index] + currentTotal === total )
        return 1;
    
    let currentSum = 0;

    // console.log('currentIndex', index, 'value', arr[index])

    for ( let i = index; i < arr.length; i++ )
    {
        currentSum += add(arr, i, currentTotal + arr[i], total)
    }

    return currentSum;
}

function getSum(arr, total)
{
    let currentSum = 0;

    console.log(add(arr, 0, arr[0], total))

    return;
    
    for ( let i = 0; i < arr.length; i++ )
    {
        if ( arr[i] === total )
        {
            currentSum += 1;
            continue;
        }

        console.log('adding for ', arr[i], '-> ',  add(arr, 1, arr[i], total));
        currentSum += add(arr, 1, arr[i], total)
    }
    
    return currentSum;
}

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	coinchange2 : function(A, B){
        
        return getSum(A, B);
	}
};


console.log(getSum([1, 2, 3], 4));