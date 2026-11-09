class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];
        for(const operation of operations){
            if(operation === '+'){
                res.push(res[res.length - 1] + res[res.length - 2]);
            } else if(operation === "C"){
                res.pop();
            } else if(operation === "D"){
                res.push(2 * res[res.length-1]);
            } else {
                res.push(parseInt(operation));
            }
        }
        return res.reduce((sum,score) => sum + score,0);
    }
}
