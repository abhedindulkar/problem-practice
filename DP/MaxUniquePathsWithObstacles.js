module.exports = { 
    //param A : array of array of integers
    //return an integer
    uniquePathsWithObstacles : function(A){
        return getUniquePath(A, 0, 0)
    }
};
  
// let A = [
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0]
//  ];

let A = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]

function getUniquePath(A, x, y) {
    
    if ( x >= A.length || y >= A[0].length )
        return 0;

    if ( A[x][y] === 1 )
        return 0;
    
    if ( x === A.length - 1 && y === A[0].length - 1 )
        return 1;
    
    return getUniquePath(A, x + 1, y) + getUniquePath(A, x, y + 1);
}

console.log(getUniquePath(A, 0, 0))