class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMaxConsecutiveOnes(nums) {
        let count = 0, maxConsecutiveOnes = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                count = 0;
            } else {
                count++;
            }

            if (count > maxConsecutiveOnes) {
                maxConsecutiveOnes = count;
            }

        }
        return maxConsecutiveOnes;
    }
}
