module.exports = {
 //param A : array of array of integers
 //return an integer
	adjacent : function(A) {
        
        // return Math.max(getMaximum(A, 1, 0), getMaximum(A, 0, 0), getMaximum(A, 1, 1), getMaximum(A, 0, 1));

        let maxElements = [];

        for ( let i = 0; i < A[0].length; i++ )
        {
            maxElements.push(Math.max(A[0][i], A[1][i]));
        }

        for ( let i = 0; i < maxElements.length; i++ )
        {
            // let prevMax = i > 1 ? maxElements[i - 2] : 0;

            maxElements[i] = Math.max(maxElements[i] + (i - 2 < 0 ? 0 : maxElements[i - 2]), i - 1 < 0 ? 0 : maxElements[i - 1] );
        }

        return maxElements.pop();
	}
};

// Problem statement.
// find out the sum by accepting numbers greater than adjacent numbers.