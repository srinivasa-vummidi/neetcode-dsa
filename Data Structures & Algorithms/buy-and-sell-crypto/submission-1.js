class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min, maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            if (i === 0) min = prices[i];
            else min = Math.min(min, prices[i]);
            maxProfit = Math.max(prices[i] - min, maxProfit);
        }
        console.log(maxProfit);
        return maxProfit;
    }
}
