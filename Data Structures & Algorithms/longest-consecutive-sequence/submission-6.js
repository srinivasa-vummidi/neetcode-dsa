class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        let res = 0;
        for(let num of nums){
            if(!map.has(num)){
                const left = map.get(num - 1) || 0;
                const right = map.get(num + 1) || 0;
                const length = left + right + 1;
                map.set(num, length);
                map.set(num - left, length);
                map.set(num + right, length);
                res = Math.max(res, length);
            }
        }

        return res;
    }
}
