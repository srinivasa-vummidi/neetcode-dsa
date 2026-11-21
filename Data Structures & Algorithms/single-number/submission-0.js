class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const numsObj = {};

        for(const num of nums){
            if(numsObj[num]){
                numsObj[num] += 1;
            }else {
                numsObj[num] = 1;
            }
        }

        for(const [key,value] of Object.entries(numsObj)){
            if(numsObj[key] === 1){
                return key;
            }
        }
    }
}
