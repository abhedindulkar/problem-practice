module.exports = { 
    //param A : array of array of integers
    //return an integer
    solve : function(A){
        
        let totalZeroCount = 0;
        let startingRow = null;
        let startingColumn = null;
        let endingRow = null;
        let endingColumn = null;

        for ( let row = 0; row < A.length; row++ )
        {
            for ( let column = 0; column < A[0].length; column++ )
            {
                if ( A[row][column] === 1)
                {
                    startingColumn = column;
                    startingRow = row;
                    continue;
                }

                if ( A[row][column] === 2)
                {
                    endingColumn = column;
                    endingRow = row;
                    continue;
                }

                if ( A[row][column] === 0 )
                {
                    totalZeroCount++;
                    continue;
                }
            }
        }
        
        // A[row][column] = null;
        return totalPaths(A, startingRow, startingColumn, 0, totalZeroCount);
    }
};

// [[1, 0, 0, 0]
//  [0, 0, 0, 0]
//  [0, 0, 2, -1]]
   
function totalPaths(givenArr, row, column, currentZeroCount, totalZeroCount) {
    
    if ( row >= givenArr.length || column >= givenArr[0].length || row < 0 || column < 0 )
        return 0;

    if ( totalZeroCount < currentZeroCount )
        return 0;

    
    if ( totalZeroCount === currentZeroCount && givenArr[row][column] === 2 )
    {
        // console.log('for ending')
        // console.log('row', row, 'column', column);
        
        return 1;
    }
    
    if ( givenArr[row][column] === 2 )
    {
        // console.log('at 2, currentzerocount', currentZeroCount)
        return 0;
    }

    if ( givenArr[row][column] == -1 || givenArr[row][column] === null )
        return 0;
    
    let temp = givenArr[row][column];
    
    
    // console.log('recursing at', row, column)
    
    let tempCurrentZeroCount = givenArr[row][column] == 0 ? currentZeroCount + 1 : currentZeroCount;
    
    givenArr[row][column] = null;
    
    let sum = totalPaths(givenArr, row + 1, column, tempCurrentZeroCount, totalZeroCount)
              + totalPaths(givenArr, row - 1, column, tempCurrentZeroCount, totalZeroCount)
              + totalPaths(givenArr, row, column + 1, tempCurrentZeroCount, totalZeroCount)
              + totalPaths(givenArr, row, column - 1, tempCurrentZeroCount, totalZeroCount)
    
    givenArr[row][column] = temp;
    
    sums[row][column] = sum;
    
    return sum;
}

        let A = [[1, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 2, -1]];
        // let A = [   [0, 1],
        //             [2, 0]    ];

        let sums = Array.from({length: A.length}, () => Array.from({length: A[0].length}, () => null));
        // console.log('sum', sums)
        let totalZeroCount = 0;
        let startingRow = null;
        let startingColumn = null;
        let endingRow = null;
        let endingColumn = null;

        for ( let row = 0; row < A.length; row++ )
        {
            for ( let column = 0; column < A[0].length; column++ )
            {
                if ( A[row][column] === 1)
                {
                    startingColumn = column;
                    startingRow = row;
                    continue;
                }

                if ( A[row][column] === 2)
                {
                    endingColumn = column;
                    endingRow = row;
                    continue;
                }

                if ( A[row][column] === 0 )
                {
                    totalZeroCount++;
                    continue;
                }
            }
        }
        
        // A[row][column] = null;
        // return totalPaths(A, startingRow, startingColumn, 0, totalZeroCount);
        
        // console.log('startingRow and colu', startingRow, startingColumn);
        // console.log('totaZeroCount', totalZeroCount)

        console.log(totalPaths(A, startingRow, startingColumn, 0, totalZeroCount));

        // console.log(A)
        // console.log('sums', sums)