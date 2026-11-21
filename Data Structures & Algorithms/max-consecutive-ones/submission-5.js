class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMaxConsecutiveOnes(nums) {
        let count = 0, maxConsecutiveOnes = 0;
        for(let i = 0;i<nums.length;i++){
            if(nums[i] === 1){
                count++;
            }else {
                count = 0;
            }
            if(count > maxConsecutiveOnes){
                maxConsecutiveOnes = count;
            }
        }
        return maxConsecutiveOnes;
    }
}
