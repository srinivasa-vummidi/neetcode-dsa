class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if(x < 0) return false;
        let num = x, rev = 0;
        while(x > 0){
            const rem = x % 10;
            rev = (rev*10)+rem;
            x = Math.floor(x/10);
        }

        return num === rev;
    }
}
