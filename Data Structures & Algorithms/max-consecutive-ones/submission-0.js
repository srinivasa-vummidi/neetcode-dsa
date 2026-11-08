class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
         let res = 0;
         let cnt = 0;
         for(const num of nums){
            if(num === 1){
                cnt = cnt + 1;
            } else {
                cnt = 0;
            }
            res = Math.max(res,cnt);
         }
         return res;
    }
}
