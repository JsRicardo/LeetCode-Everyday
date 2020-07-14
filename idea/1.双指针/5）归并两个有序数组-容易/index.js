var merge = function (nums1, m, nums2, n) {
    var i = m - 1, j = n - 1;
    var maxIdx = m + n - 1;
    while (i >= 0 || j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[maxIdx--] = nums2[j--];
        }
        else if (nums1[i] > nums2[j]) {
            nums1[maxIdx--] = nums1[i--];
        }
        else if (i < 0) {
            nums1[maxIdx--] = nums2[j--];
        }
        else {
            nums1[maxIdx--] = nums1[i--];
        }
    }
    return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
