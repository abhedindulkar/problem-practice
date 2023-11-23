let map = new Map();

module.exports = { 
    //param A : integer
    //param B : integer
    //return an integer
       solve : function(A, B){
            
            let total = 0;
            for ( let i = 1; i <= 9; i++ )
            {
                total += getNdigit(A - 1, B - i) % 1000000007
            }

            return total % 1000000007;
       }
};
   
function getNdigit(digitsRemaining, currentTotal) {
    
    let total = 0;

    if ( digitsRemaining === 0 && currentTotal === 0 )
        return 1;
    
    if ( digitsRemaining <= 0 )
        return 0;
    
    if ( currentTotal < 0 )
        return 0;
    
    
    for ( let i = 0; i <= 9; i++ )
    {
        if ( map.has(`${digitsRemaining - 1}_${currentTotal - i}`) )
        {
            total += map.get(`${digitsRemaining - 1}_${currentTotal - i}`) % 1000000007;
            continue;
        }

        let currentNdigit = getNdigit(digitsRemaining - 1, currentTotal - i) % 1000000007;
        
        total += currentNdigit % 1000000007;

        map.set(`${digitsRemaining - 1}_${currentTotal - i}`, currentNdigit % 1000000007);

        //  for ( let i = 0; i <= 9; i++ )
        // {
        //     total += getNdigit(digitsRemaining - 1, currentTotal - i)
        // }
    }
    
    return total % 1000000007;
}

let A = 75;
let B = 22;
let total = 0;
for ( let i = 1; i <= 9; i++ )
{
    total += getNdigit(A - 1, B - i) % 1000000007
}

console.log(total % 1000000007);


// A = 2
// B = 4
// {22, 31, 13, 40}