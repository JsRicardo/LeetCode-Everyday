var findKthLargest = function (nums, k) {
    nums.sort(function (a, b) { return b - a; });
    return nums[k - 1];
};
var nums = [3, 2, 1, 5, 6, 4], k = 2;
console.log(findKthLargest(nums, k));
