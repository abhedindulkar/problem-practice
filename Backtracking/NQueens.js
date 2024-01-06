let ans = [];

module.exports = { 
 //param A : integer
 //return a array of array of integers
	solveNQueens : function(A) {
        
        ans = [];
        let N = A;
        let blockedColumn         = new Array(N).fill(0);
        let blockedLeftToRightDia = new Array(2* N).fill(0);
        let blockedRightToLeftDia = new Array(2 * N).fill(0);
        let board                 = Array.from({length: N}, () => Array.from({length: N}, () => '.' ));

        nQueens(0, 0, blockedColumn, blockedLeftToRightDia, blockedRightToLeftDia, board, N);

        for ( let i = 0; i < ans.length; i++ )
        {
            for ( let j = 0; j < ans[0].length ; j++)
            {
                ans[i][j] = [...ans[i][j]].join("");
            }
        }
        return ans;
	}
};

// blockedLeftToRight [ N + i - j]
// blockedRightToLeft [ i + j]

function nQueens(row, column, blockedColumn, blockedLeftToRightDiag, blockedRightToLeftDiag, currentPlacedQueens, N) {
    
    if ( row === N )
    {
        ans.push(JSON.parse(JSON.stringify(currentPlacedQueens)));
        return;
    }

    for ( let j = N - 1; j >= 0; j-- )
    {
        if ( blockedColumn[j] === 1 || blockedLeftToRightDiag[N+row - j] === 1 || blockedRightToLeftDiag[row + j] === 1)
            continue;

        currentPlacedQueens[row][j] = "Q";
        blockedColumn[j] = 1;
        blockedLeftToRightDiag[N + row - j] = 1;
        blockedRightToLeftDiag[row + j] = 1;
        
        nQueens(row + 1, column, blockedColumn, blockedLeftToRightDiag, blockedRightToLeftDiag, currentPlacedQueens, N);

        currentPlacedQueens[row][j] = ".";
        blockedColumn[j] = 0;
        blockedLeftToRightDiag[N + row - j] = 0;
        blockedRightToLeftDiag[row + j] = 0;
    }

    return;
}

// let N = 4
// let blockedColumn = new Array(N).fill(0);
// let blockedLeftToRightDia = new Array(2* N).fill(0);
// let blockedRightToLeftDia = new Array(2 * N).fill(0);
// let board = Array.from({length: N}, () => Array.from({length: N}, () => "." ));


// nQueens(0, 0, blockedColumn, blockedLeftToRightDia, blockedRightToLeftDia, board, N);

// console.log('ans', ans);
























// let nq = nQueens(3);
// // nq[0][1] = 1;
// console.log(nq);









// ans = [];

// columnMap = new Map();

// let board = Array.from({length: A}, () => Array.from({length: A}, () => null ));

// let tempAns = [];

// let currentQueenCount = 0;

// for ( let firstColumn = A - 1; firstColumn >= 0; firstColumn++ )
// {
    
// }

// for ( let row = 0; row < A; row++ ) {
    
//     for ( let column = ; column < A; column++ ) {
        
//         if ( columnMap.has(column) )
//             continue;
        
//         // if ( board[row][column] == "." )
//         //     continue;
            
//         // check if both diagonals are free.

//         // set 
//     }

//     if ( currentQueenCount > A )
//     break;
// }