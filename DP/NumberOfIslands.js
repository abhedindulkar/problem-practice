let visits = [];

let currentIsland = 0;

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    visits = Array.from({length: grid.length}, 
                        () => Array.from({length: grid[0].length}, () => null) );

    currentIsland = 0;
    for ( let row = 0; row < grid.length; row++ )
    {
        for ( let column = 0; column < grid[0].length; column++ )
        {
            if ( visits[row][column] !== null || grid[row][column] == 0 )
                continue;
            
            currentIsland++;
            visitIsland(grid, row, column);
        }
    }
    
    return currentIsland;
};

function visitIsland(grid, row, column) {

    if ( row >= grid.length || row < 0 || column >= grid[0].length || column < 0 )
        return;
    
    if ( grid[row][column] == 0 )
        return;

    if ( visits[row][column] !== null )
        return;

    visits[row][column] = true;

    visitIsland(grid, row + 1, column)
    visitIsland(grid, row - 1, column)
    visitIsland(grid, row, column + 1)
    visitIsland(grid, row, column - 1)

    return;
}