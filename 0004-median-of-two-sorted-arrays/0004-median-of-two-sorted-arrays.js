/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    if(mergedArray.length%2==0)
    {
        return (mergedArray[mergedArray.length/2-1]+mergedArray[mergedArray.length/2])/2
    }
    else
    {
        return mergedArray[Math.floor(mergedArray.length/2)]
    }
};