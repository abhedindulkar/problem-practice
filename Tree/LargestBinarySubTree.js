let globalMax = 0;

// * Approach

// this is a bottom up approach
// for a valid bst the current node should contain values greater than max of left tree and lesser than min value from right sub tree
// and return [isBst, numberOfNodes, minTillNow, maxTillNow];
// if the first element of the array is false then all the parent nodes are not bst

module.exports = {
    //param A : root node of tree
    //return an integer
    solve: function (A) {
        globalMax = 0;

        travel(A);

        return globalMax;
    },
};

// [isBst, numberOfNodes, minTillNow, maxTillNow];

const travel = (node) => {
    if (node === null) {
        return [true, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    }

    let left = travel(node.left);

    if (!left[0]) {
        return [false, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    }

    let right = travel(node.right);

    if (!right[0]) {
        return [false, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    }

    if (node.data < left[3] || node.data > right[2]) {
        return [false, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    }

    globalMax = Math.max(globalMax, right[1] + left[1] + 1);

    return [
        true,
        right[1] + left[1] + 1,
        Math.min(node.data, left[2]),
        Math.max(node.data, right[3]),
    ];
};
