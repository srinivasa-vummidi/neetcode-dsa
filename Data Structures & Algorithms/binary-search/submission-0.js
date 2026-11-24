class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length -1;

        while(right >= left){
           const middle = Math.floor((left+right)/2);
           if(target === nums[middle]) return middle;
           else if(target > nums[middle]) left = middle + 1;
           else right = middle -1;
        }

        return -1;
    }
}
