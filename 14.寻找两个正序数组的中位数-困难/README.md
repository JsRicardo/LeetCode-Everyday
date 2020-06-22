
给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例

    nums1 = [1, 2]
    nums2 = [3, 4]
    则中位数是 (2 + 3)/2 = 2.5

难度：困难

解题思路

1. 暴力解法

中位数是一个有序数组里面处于中间的数，所以只需要将一个数组排序，按照偶数个数，和奇数个数，取出中位数即可

```ts
var findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
    let newarr = nums1.concat(nums2)
    let resArr = newarr.sort((a, b) => a - b)
    if (resArr.length % 2) {
        // 奇数个数
        return resArr[Math.floor(resArr.length / 2)]
    } else {
        const prevIdx = resArr.length / 2 - 1
        const nextIdx = resArr.length / 2
        return (resArr[prevIdx] + resArr[nextIdx]) / 2
    }
};
```

2. 