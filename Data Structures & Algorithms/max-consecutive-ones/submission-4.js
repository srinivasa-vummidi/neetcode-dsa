class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currentCount = 0;
        for (const num of nums) {
            if (num === 1) {
                currentCount++;
            } else {
                currentCount = 0;
            }
            maxCount = Math.max(maxCount,currentCount);
        }
        return maxCount;

    }
}
