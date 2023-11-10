module.exports = {
  sortedArrayToBST: function (node) {
    
    return generateNextPointer(node);
  }, 
};

// Definition for a binary tree node 
function TreeNode(data){ 
    this.data = data 
    this.left = null 
    this.right = null 
}

let node = new TreeNode(3);

node.left = new TreeNode(2)
node.right = new TreeNode(4)
// node.right = new TreeNode(4)

console.log(generateNextPointer(node));

function generateNextPointer(node) {

    // if ( node === null )
        // re
    
    let array = [node, null];

    // console.log('node', array[0]);
    // return;
    
    for ( let i = 0; i < array.length; i++ )
    {
        if ( array[i] === null )
        {
            array.push(null)

            if ( array[i+1] === null )
                break;
            
            continue;
        }
        
        let leftNode = array[i].left;
        let rightNode = array[i].right;

        if ( leftNode !== null )
            array.push(leftNode)

        if ( rightNode !== null )
            array.push(rightNode)
    }

    for ( let i = 0; i < array.length - 1; i++ )
    {
        if ( array[i] === null )
            continue;

        array[i].next = array[i+1];
    }

    // console.log('array', array);

    return node;
}

// console.log(JSON.stringify(generateBBST([1, 2, 3,4,5,6,7, 8, 9, 10, 11], 0, 10)))