
let subsets = [];

module.exports = { 
 //param A : array of integers
 //return a array of array of integers
	subsets : function(A){

        subsets = [];

        let arr = [];

        generateSubsets(A, arr, 0);
        
        return subsets.sort();
	}
};

function generateSubsets(givenArr, result, index)
{
    if ( index >= givenArr.length )
    {
        console.log('pushing', result)
        subsets.push(result);
        console.log('newSubset', subsets)
        return;
    }
    
    // let newArr = result.slice();
    // console.log(newArr)
    let newResult = [...result];
    
    console.log('==========================')
    console.log('result', result)
    console.log('index', index);
    console.log('newResult', newResult);


    generateSubsets(givenArr, newResult, index + 1)
    newResult.push(givenArr[index]);
    console.log('pushed the index', index, 'into', newResult)
    generateSubsets(givenArr, newResult, index + 1)

    return;
    
}

subsets = [];

let arr = [];

generateSubsets([1, 2, 3], arr, 0);

console.log(subsets)