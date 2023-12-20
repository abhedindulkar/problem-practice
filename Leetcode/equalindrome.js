/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    
    let avg = nums.reduce((sum, current) => current + sum, 0) / nums.length;
    
    // console.log('avg', avg)
    
    let palindromes = getAllPalindromes().sort((a, b) => {
        if ( a < b )
            return -1;

        if ( a > b )
            return 1;

        return 0;
    });
    
    let nearestPalindrome = getNearestPalindrome(palindromes, avg);
    // let nearestPalindrome =3;

    let ans = 0;

    // console.log('nearest palindrome', nearestPalindrome);

    for ( let i = 0; i < nums.length; i++ )
    {
        ans += Math.abs(nums[i] - nearestPalindrome);
    }

    console.log(ans);
};

function getNearestPalindrome(palindromes, avg)
{
    // console.log('innearestpalindrome');
    let palindromeSet = new Set([...palindromes]);
    let ceil  = Math.ceil(avg);
    let floor = Math.floor(avg);

    // console.log(palindromeSet)

    // console.log('ceil', ceil)
    // console.log('floor', floor)

    let diff = 0;

    while ( floor - diff >= 0 || ceil + diff <= 100000 )
    {
        let below = palindromeSet.has(floor - diff);
        let above = palindromeSet.has(ceil + diff);
        
        // console.log('floor - diff', floor - diff)
        // console.log('ceil + diff', ceil + diff)
        // console.log('diff', diff);
        // console.log('below', below)
        // console.log('above', above)

        if ( below !== false && above !== false )
        {
            if ( avg - below < above - avg )
                return ceil-diff;

            return ceil+diff;
        }

        if ( below !== false )
            return floor-diff;
        
        if ( above !== false )
            return ceil+diff;
        
        // return null;
        diff++;
    }

    return null;
}

function isPresent(needle, palindromes)
{
    if ( needle > 100000 || needle < 0 )
        return false;

    let lower = 0;
    let higher = palindromes.length - 1;

    while ( lower > higher )
    {
        let middleIndex = Math.floor(lower+(higher - lower) / 2);

        if ( needle < palindromes[middleIndex] )
        {
            higher = middleIndex;
            continue;
        }

        if ( needle > palindromes[middleIndex] )
        {
            lower = middleIndex;
            continue;
        }
        
        return needle;
    }

    return false
}

function getAllPalindromes() {

    let queue = [];
    let result = [];

    for ( let i = 1; i < 10; i++ )
    {
        queue.push(i)
        result.push(i)
    }

    while ( queue.length !== 0 )
    {
        let current = queue.shift();

        if ( current < 10 )
        {
            queue.push(current*11);
            result.push(current*11);
            continue;
        }

        if ( current < 100 )
        {
            let insert = 0;
            while (insert < 10)
            {
                let ans = new String(current).split('');

                queue.push(parseInt(ans[0] + insert + ans[1]));
                result.push(parseInt(ans[0] + insert + ans[1]));

                insert++;
            }
        }

        if ( current < 1000 )
        {
            let insert = 0;

            while ( insert < 10 )
            {
                let ans = new String(current).split('');

                queue.push(parseInt(ans[0] + insert + ans[1] + insert + ans[2]));
                result.push(parseInt(ans[0] + insert + ans[1] + insert + ans[2]));

                insert++;
            }
        }
    }

    return result;
}

minimumCost([4,2,1]);
