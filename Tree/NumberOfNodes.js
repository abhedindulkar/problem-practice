// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

let numberOfNode = 0;

module.exports = {
    //param A : root node of tree
    //param B : integer
    //param C : integer
    //return an integer
    solve: function (A, B, C) {},
};

const findNumberOfNodes = (currentNode, low, high) => {
    if (currentNode === null) return;

    if (currentNode.data >= low && currentNode <= high) numberOfNode++;

    findNumberOfNodes(currentNode.right, low, high);
    findNumberOfNodes(currentNode.left, low, high);

    return;
};
