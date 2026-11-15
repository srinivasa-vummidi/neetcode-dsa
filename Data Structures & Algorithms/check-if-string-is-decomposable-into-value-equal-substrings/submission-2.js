class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isDecomposable(s) {
        let pairs = 0, i = 0;
        while(i < s.length){
            let j = i + 1;
            while(j<s.length && s[j] === s[i]) j++;
            const remainder = (j - i) % 3;
            if(remainder === 1) return false;
            if(remainder === 2) pairs++;
            i = j;
        }
        return pairs === 1;
    }
}
