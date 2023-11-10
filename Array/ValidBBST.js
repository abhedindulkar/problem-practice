// Definition for a binary tree node 
function TreeNode(data){ 
    this.data = data 
    this.left = null 
    this.right = null 
}

function generateBBST(nums, start, end) {

    if ( nums.length === 0 )
        return null;

    if ( start > end )
        return null;

    let middle = Math.floor(start + (end - start)/2);
    
    let root = new TreeNode(nums[middle]);
    
    root.left = generateBBST(nums, start, middle - 1)
    root.right = generateBBST(nums, middle + 1, end)

    return root;
}

module.exports = {
  sortedArrayToBST: function (nums) {
    
    return generateBBST(nums, 0, nums.length - 1)
  }, 
};

console.log(JSON.stringify(generateBBST([1, 2, 3,4,5,6,7, 8, 9, 10, 11], 0, 10)))