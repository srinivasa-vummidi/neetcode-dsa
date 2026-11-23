class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfFour(n) {
        return n > 0 && (Math.log(n) / Math.log(4)) % 1 === 0;
    }
}
