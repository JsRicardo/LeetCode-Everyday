# 合并两个有序数组

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:

    输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6]

难易度： 容易

解题思路

既然两个数组是有序数组，那么就利用两个指针，分别指向两个数组，比较两个指针对应的数值

这里采用指针指向最后一个数字的方法，因为顺序遍历的话不好处理nums1的指针变化

比较的结果就是把两个指针指向的更大的数  往 nums1 数组的后面填充

```ts
var merge = function(nums1: number[], m:number, nums2: number[], n:number): number[] {
    let i = m - 1, j = n - 1
    let maxIdx = m + n - 1
    while(i >= 0 || j >= 0) {
        if(nums1[i] < nums2[j]) {
            nums1[maxIdx--] = nums2[j--]
        } else if (nums1[i] > nums2[j])  {
           nums1[maxIdx--] = nums1[i--]
           // 两个数组长度不同的情况，有可能已经遍历完一个数组
        } else if (i < 0) {  // nums2 更长
            nums1[maxIdx--] = nums2[j--]
        } else { // num1 更长
            nums1[maxIdx--] = nums1[i--]
        }
    }
    return nums1
};
```