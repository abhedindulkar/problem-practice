module.exports = { 
    //param A : string
    //param B : string
    //return an integer
    solve : function(A, B){

    }
};

// testCases 
// a-(b+c -(d + e - f + (g + h - i)));
// ans = a-b-c+d+e-f-g+h-i;
// a-b-c d + e - f + g + h - i
// a-b-c +d + e - f + g + h - i

//a-(b+c -(d + e - f - (g + h - i)))
// a-b-c +d + e - f - g + h - i

twoBracketExpression = (original, target) => {

    //! use every alphabet as two raise to some power start from 0 and use eval for both sides 
    
    let brackets = [];
    let result = '';
    let i = 0;

    while ( i < original.length ) {
        console.log('=============================================')
        console.log('i => ', i)
        console.log('charAt i', original.charAt(i))

        if ( brackets.length === 0 )
        {
            console.log('bracket = 0');
            if ( original.charAt(i) === "(" )
            {
                console.log('bracket ( insert in brackets')
                brackets.push(`${original.charAt(i-1)}${original.charAt(i)}`)
                i++;
                console.log('brackets', brackets)
                continue;
            }

            result = result + original.charAt(i);
            i++;
            console.log('result', result);
            continue;
        }

        if ( original.charAt(i) === "+" ) {
            
            console.log('1')
            //having number after +
            if ( original.charAt(i + 1) !== "(" && brackets[brackets.length - 1] !== '-(' )
            {
                console.log('2')
                result = result + original.charAt(i);
                result = result + original.charAt(i+1);
                i+=2;
                continue;
            }
            
            //having number after +
            if ( original.charAt(i + 1) !== "(" && brackets[brackets.length - 1] === '-(' )
            {
                console.log('3')
                result = result + "-";
                result = result + original.charAt(i+1);
                i+=2;
                continue;
            }

            if ( original.charAt(i + 1) === "(" )
            {
                if ( brackets[brackets.length - 1] !== '-(' )
                {
                    console.log('4')
                    result += "+"
                    brackets.push(`${original.charAt(i)}${original.charAt(i+1)}`);
                    i+=2;
                    continue;
                }
                else {

                    console.log('4.1');
                    brackets.push(`-${original.charAt(i+1)}`);
                    result += "-"
                    i+=2;
                    continue;
                }
            }

            console.log('5')

            console.log('something strange after + sign', original.charAt(i+1));
        }

        if ( original.charAt(i) === "-" ) {
            console.log('6')
            //having number after -
            if ( original.charAt(i + 1) !== "(" && brackets[brackets.length - 1] !== '-(' )
            {
                console.log('7')
                result = result + original.charAt(i);
                result = result + original.charAt(i+1);
                i+=2;
                continue;
            }
            
            //having number after -
            if ( original.charAt(i + 1) !== "(" && brackets[brackets.length - 1] === '-(' )
            {
                console.log('8')
                result = result + "+";
                result = result + original.charAt(i+1);
                i+=2;
                continue;
            }

            if ( original.charAt(i + 1) === "(" )
            {
                if ( brackets[brackets.length - 1] !== '-(' )
                {
                    console.log('4')
                    brackets.push(`${original.charAt(i)}${original.charAt(i+1)}`);
                    result += "-"
                    i+=2;
                    continue;
                }
                else {

                    console.log('4.1');
                    brackets.push(`+${original.charAt(i+1)}`);
                    result += "+"
                    i+=2;
                    continue;
                }

                console.log('9')
                brackets.push(`${original.charAt(i)}${original.charAt(i+1)}`);
                i+=2;
                continue;
            }
        }
        
        if ( original.charAt(i) === ")" )
        {
            console.log('10')
            brackets.pop();
            i++;
            continue;
        }

        if ( original.charAt(i) === "(" )
        {
            console.log('11')
            brackets.push(`${original.charAt(i-1)}${original.charAt(i)}`)
            i++;
            continue;
        }

        // if ( ! isNaN(original.charAt(i)) )
        // {
        // having char a, b, c ...
        result = result + "" + original.charAt(i);
        i++;
        console.log('12')
        continue;
        // }

        // console.log('something is wrong current Element => ', original.charAt(i));
    }

    return result;
}

console.log(twoBracketExpression('a-(b+c -(d + e - f - (g + h - i)))'));