var findKthLargest = function (nums: number[], k: number): number {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
};

const nums: number[] = [3, 2, 1, 5, 6, 4], k = 2

console.log(findKthLargest(nums, k))