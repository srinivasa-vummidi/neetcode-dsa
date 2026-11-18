class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let num = x, limit = Math.pow(2,31), rev = 0;
        x = Math.abs(x);
        while (x > 0) {
            let lastDigit = x % 10;
            rev = (rev * 10) + lastDigit;
            x = Math.floor(x / 10);
        }
        rev = num < 0 ? -rev : rev;

        if (rev < -limit || rev > limit - 1) { return 0; }
        return rev;
    }
}
