class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const newArr = Array.from(new Set(nums)).sort((a, b) => a - b);
        let res = 0, curr = newArr[0], streak = 0, i = 0;
        while(i < newArr.length){
            if(curr !== newArr[i]){
                curr = newArr[i];
                streak = 0;
            }
            streak++;
            curr++;
            i++;
            res = Math.max(res, streak);
        }

        return res;
    }
}
