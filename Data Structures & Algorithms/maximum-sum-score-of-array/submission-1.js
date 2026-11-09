class Solution {
    maximumSumScore(nums) {
        const total = nums.reduce((a,b)=> { return a+b; },0);
        let prefix = 0, answer = total;

        for(const value of nums){
            answer = Math.max(answer, total - prefix);
            prefix += value;
            answer = Math.max(answer, prefix);
        }

        return answer;
    }
}
