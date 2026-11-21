class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let n1Copy = nums1.slice(0, m), p1 = 0, p2 = 0;
        for (let i = 0; i < m + n; i++) {
            if (p2 >= n || (p1 < m && n1Copy[p1] < nums2[p2])) {
                nums1[i] = n1Copy[p1];
                p1++;
            } else {
                nums1[i] = nums2[p2];
                p2++;
            }
        }
    }
}
