
let ans = [];
let ansMap = [];

module.exports = { 
	//param A : array of array of integers
	//return nothing
	solveSudoku : solveSudoku
};

function generateSudoku(index, board, columnNumbers, rowNumbers, squareNumbers)
{
    if ( index == 81 )
    {
        ans = [...board];
        return;
    }

    if ( board[index] !== 0 )
    {
        generateSudoku(index + 1, board, columnNumbers, rowNumbers, squareNumbers)
        return;
    }

    for ( let i = 1; i <= 9; i++ )
    {
        if ( ansMap[index] = check(i, index, columnNumbers, rowNumbers, squareNumbers) )
            continue;
        
        let column = index % 9;
        let row = Math.floor(index / 9);
        let squareRow = Math.floor(Math.floor(index/9)/3);
        let squareCol = Math.floor((index%9)/3);

        let currentSetCol = columnNumbers[column];
        
            currentSetCol.set(i, 1);
            columnNumbers[column] = currentSetCol;
        
        let currentSetRow = rowNumbers[row];
        
            currentSetRow.set(i, 1);
            rowNumbers[row] = currentSetRow;
        
        let currentSetSquare = squareNumbers[squareRow][squareCol];
        
            currentSetSquare.set(i, 1);
            squareNumbers[squareRow][squareCol] = currentSetSquare;

        board[index] = i;

        generateSudoku(index + 1, board, columnNumbers, rowNumbers, squareNumbers)

        board[index] = 0;

        currentSetCol.delete(i);
        columnNumbers[column] = currentSetCol;

        currentSetRow.delete(i);
        rowNumbers[row] = currentSetRow;

        currentSetSquare.delete(i);
        squareNumbers[squareRow][squareCol] = currentSetSquare;
    }

    return;
}

function check(number, index, columnNumbers, rowNumbers, squareNumbers) {
    
    // * Make sure when you use divide to get row, use Math.floor for that.

    let columnSet = columnNumbers[index%9];
    let rowSet = rowNumbers[Math.floor(index/9)];
    let squareSet = squareNumbers[Math.floor(Math.floor(index/9)/3)][Math.floor((index%9)/3)];

    if ( columnSet.has(number) )
        return true;
    
    if ( rowSet.has(number) )
        return true;
    
    if (squareSet.has(number))
        return true

    return false;
}

function solveSudoku(A) {
        
    let board = [];
    
    for ( let i = 0; i < A.length; i++ )
    {
        let string = A[i][0];
        
        for ( let j = 0; j < 9; j++ )
        {
            if ( string.charAt(j) !== "." )
            {
                board.push(Number(string.charAt(j)));
                continue;
            }

            board.push(0);
        }
    }
    
    let columnNumbers = Array.from({length: 9}, () => new Map());
    
    for ( let i = 0; i < board.length; i++ )
    {
        if ( board[i] === "0" )
            continue;

        let currentSet = columnNumbers[i % 9];
        
        currentSet.set(board[i], 1);
        
        columnNumbers[i%9] = currentSet;
    }

    let rowNumbers = Array.from({length: 9}, () => new Map());

    for ( let i = 0; i < board.length; i++ )
    {
        if ( board[i] === "0" )
            continue;
        
        let currentSet = rowNumbers[Math.floor(i / 9)];
        
        currentSet.set(board[i], 1);
        rowNumbers[Math.floor(i/9)] = currentSet;
    }

    let squareNumbers = Array.from({length: 3}, () => Array.from({length: 3}, () => new Map()));
    
    for ( let i = 0; i < board.length; i++ )
    {
        if ( board[i] === "0" )
            continue;
        
        let currentSquareRow = Math.floor(Math.floor(i/9)/3)
        let currentSquareColumn = Math.floor((i%9)/3)
        
        let currentSet = squareNumbers[currentSquareRow][currentSquareColumn];
        
        currentSet.set(board[i], 1);
        
        squareNumbers[currentSquareRow][currentSquareColumn] = currentSet;
    }
    
    ans = [];
    
    generateSudoku(0, board, columnNumbers, rowNumbers, squareNumbers)
    
    return ans;
}

let givenBoard = [["53..7...."], ["6..195..."], [".98....6."], ["8...6...3"], ["4..8.3..1"], ["7...2...6"], [".6....28."], ["...419..5"], ["....8..79"]]

console.log(solveSudoku(givenBoard));
