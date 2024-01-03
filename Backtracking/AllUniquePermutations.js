const AllPermutations = require("./AllPermutations");

    
let permutationsMap = new Map();
let permutations = [];

module.exports = { 
 //param A : array of integers
 //return a array of array of integers
	permute : function(A){

		permutationsMap = new Map();
        permutations    = [];
        
        generateAllPermutations(A, 0);

		return permutations;
	}
};

function generateAllPermutations(givenArr, index) {
    
    if ( index >= givenArr.length )
    {
        let toBeCheckedString = "";
        
        for( let i = 0; i < givenArr.length; i++ )
        {
            toBeCheckedString += givenArr[i];
        }
        
        if ( permutationsMap.has(toBeCheckedString) )
            return;
        
        permutationsMap.set(toBeCheckedString, permutationsMap.size);
        permutations.push(givenArr);

        return;
    }
    
    for ( let i = index; i < givenArr.length; i++ )
    {
        let temp = givenArr[index];

        givenArr[index] = givenArr[i];

        givenArr[i] = temp;

        generateAllPermutations([...givenArr], index + 1)

        temp = givenArr[index];

        givenArr[index] = givenArr[i];

        givenArr[i] = temp;
    }

    return;
}

let A = [1, 1, 2];

generateAllPermutations(A, 0);

console.log('permutationsmap', permutationsMap)
console.log('permutations', permutations);