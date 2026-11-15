class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 0 || s.length > 1000) return false
        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const revStr = str.split('').reverse().join('');
        return str === revStr;
    }
}
