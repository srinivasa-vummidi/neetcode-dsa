class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
         let res = 0;
         let cnt = 0;
         for(const num of nums){
            cnt = num === 1 ? ++cnt : 0;
            console.log(cnt);
            res = Math.max(res,cnt);
         }
         return res;
    }
}
