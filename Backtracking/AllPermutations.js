let permutations = [];

module.exports = { 
 //param A : array of integers
 //return a array of array of integers
	permute : function(A){
        
        permutations = [];
        generatePermutations(A, 0);
        return permutations;
	}
};

function generatePermutations(givenArr, index) {
    
    if ( index >= givenArr.length )
    {
        permutations.push([...givenArr]);
    }
    
    for ( let i = index; i < givenArr.length; i++ )
    {
        let newArray = givenArr.slice();

        let temp = newArray[i];
        
        newArray[i] = newArray[index]
        newArray[index] = temp;
        
        // console.log('index', index)
        // console.log('generate permutations of newArray', newArray)

        generatePermutations(newArray, index+ 1)
    }

    return;
}

// permutations = [];
generatePermutations([1, 2, 3], 0);
console.log(permutations);