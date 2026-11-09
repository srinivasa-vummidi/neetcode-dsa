class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isConsecutive(nums) {
        let low = nums[0], high = nums[0];
        const seen = new Set();
        for(const num of nums){
            if(seen.has(num)) return false;
            seen.add(num);
            low = Math.min(low,num);
            high = Math.max(high, num);
        }
        return high - low + 1 === nums.length;
    }
}
