给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

`给定 nums = [2, 7, 11, 15], target = 9`

`因为 nums[0] + nums[1] = 2 + 7 = 9`

`所以返回 [0, 1]`

解题思路：

1. 暴力解法
- 两层for循环，数组的第一个值与第二，三，四...个值相加判断是否等于目标值，由于每个值只能使用一次，所以内存for起始值为 `i + 1`

```ts
var twoSum = function (nums: number[], target: number): number[] {
    if (nums.length < 2) return []
    
    if (nums.length === 2){
        if (nums[0] + nums[1] === target) return [0, 1]
        return []
    }

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};

 console.log(twoSum([2, 7], 9))
```

2. 哈希表解法
- 利用对象存储已经循环过的值，比较目标值和当前正在循环的值的差值，如果差值正好在对象中，则找到了两个值

```ts
var towSumHash = function (nums: number[], target: number): number[] {
    if (nums.length < 2) return []

    if (nums.length === 2) {
        if (nums[0] + nums[1] === target) return [0, 1]
        return []
    }

    var map = {} // key： 数字  value：index
    var loop = 0 // 循环次数
    var dis = 0 // 差值
    var len = nums.length

    while (loop < len) {
        dis = target - nums[loop]

        if (map[dis] != undefined) {
            return [map[dis], loop]
        }
        map[nums[loop]] = loop
        loop++
    }

    return []
}

console.log(towSumHash([2, 7, 122, 123, 23], 129))
```