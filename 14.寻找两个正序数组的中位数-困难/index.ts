// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2
// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
    let newarr = nums1.concat(nums2)
    if (newarr.length == 1) return newarr[0]

    let resArr = newarr.sort((a, b) => a - b)
    console.log(resArr)
    if (resArr.length % 2) {
        // 奇数个数
        return resArr[Math.floor(resArr.length / 2)]
    } else {
        const prevIdx = resArr.length / 2 - 1
        const nextIdx = resArr.length / 2
        console.log(prevIdx, nextIdx)
        return (resArr[prevIdx] + resArr[nextIdx]) / 2
    }
};

const nums1 = [1, 2]
const nums2 = [3, 4]

const findMedianSortedArrays2 = function (nums1: number[], nums2: number[]): number {
    // 用nums1做二分，保证nums1的长度是最小的
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length
    const n = nums2.length
    let low = 0
    let high = m
    while (low <= high) {
        const i = low + Math.floor((high - low) / 2)
        const j = Math.floor((m + n + 1) / 2) - i

        const maxLeftA = i === 0 ? -Infinity : nums1[i - 1]
        const minRightA = i === m ? Infinity : nums1[i]
        const maxLeftB = j === 0 ? -Infinity : nums2[j - 1]
        const minRightB = j === n ? Infinity : nums2[j]

        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
            return (m + n) % 2 === 1
                ? Math.max(maxLeftA, maxLeftB)
                : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        } else if (maxLeftA > minRightB) {
            high = i - 1
        } else {
            low = low + 1
        }
    }
}

console.log(findMedianSortedArrays2(nums1, nums2))