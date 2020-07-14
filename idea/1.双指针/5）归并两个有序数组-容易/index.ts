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

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))