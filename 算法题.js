// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。算法应该具有线性时间复杂度
function singleNumber(nums) {
  return nums.reduce((total, currentValue) => {
    return total ^ currentValue
  })
}

console.log(singleNumber([2, 2, 1, 4, 4, 5, 5, 1, 8])) // 8
