
//* need to add conditions to return for numrow 1 and 2.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let result = [[1]];

    if ( numRows === 1 )
        return result;
    
    let currentNumRow = 2;
    
    while ( currentNumRow <= numRows )
    {
        let lastArr    = result[result.length - 1];
        let currentArr = [];
        
        currentArr[0] = 1;
        currentArr[lastArr.length] = 1;
        
        if ( currentNumRow === 2 )
        {
            result.push(currentArr);
            currentNumRow++;
            continue;
            // return result;
        }
        
        let left  = 0;
        let right = 1;

        while ( right < lastArr.length )
        {
            currentArr[right] = lastArr[left] + lastArr[right];
            left++;
            right++;
        }

        currentNumRow++;

        result.push(currentArr)
    }
    
    return result;
};


//* Ideal solution

var generate = function(numRows) {
    var i = 0;
    var j = 0;
    // Create an array list to store the output result...
    var res = [];
    // For generating each row of the triangle...
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
        for (j = 0; j <= i; j++) {
            // Primary...
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res;      // Return the output list of pascal values...
};