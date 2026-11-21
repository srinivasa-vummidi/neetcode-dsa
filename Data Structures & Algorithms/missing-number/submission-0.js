class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        const totalSum = n*(n+1)/2;
        let sum = 0;
        for(const num of nums){
            sum += num;
        }
        
        return totalSum - sum;
    }
}
