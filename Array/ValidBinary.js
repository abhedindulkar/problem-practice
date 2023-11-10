// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

function getMin(node)
{

}

function getMax(node)
{

}

function leftAndRightCheck(leftTree, rightTree)
{
    if ( leftTree === null && rightTree === null)
    {
        return 1;    
    }
    
    if ( leftTree === null )
    {
        if ( rightTree.data > A.data )
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    if ( rightTree === null )
    {
        if ( leftTree.data > A.data )
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}

function checkTree(node)
{
    if ( node === null )
        return []

    if ( ! leftAndRightCheck(node.left, node.right) )
        return false;
    
    let leftData = checkTree(node.left)
    let rightData = checkTree(node.right)


    if ( leftData === false || rightData === false )
        return false;

    if ( (leftMax !== null && leftMax < node.data ) || ( rightMin !== null && rightMin > node.data ) )
        return 
}

function checkBinary(node)
{
    if ( node === null )
        return 1;
    
    if ( (node.left !== null && node.left.data > node.data ) || (node.right !== null && node.right.data < node.data))
        return 0;
    
    return checkBinary(node.left) && checkBinary(node.right)
}

module.exports = { 
 //param A : root node of tree
 //return an integer
	isValidBST : function(A) {
        
        return checkBinary(A.left) && checkBinary(A.right)
	}
};

// use Number.min and Number.max;
