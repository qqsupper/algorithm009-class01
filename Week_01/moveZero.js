// 给定一个数组 nums， 编写一个函数将所有 0 移动到数组的末尾， 同时保持非零元素的相对顺序。

// 示例:

//  输入: [0, 1, 0, 3, 12]
// 输出: [1, 3, 12, 0, 0]
// 说明:

//  必须在原数组上操作， 不能拷贝额外的数组。
// 尽量减少操作次数。

// ###
// 解题思路
// 1. 从零开始遍历， 遇到0， 把它当前的位置删除
// 2. i--, 后面结束后会i++, 就是从之前它的位置重新开始遍历
// 3. 然后数组后面加0， 遍历次数需要--, 因为后面的0的位置不需要重新遍历了,
// 如果不减, 则会无限循环下去， 并且长度递增。

// // ### 代码

 ``
// javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
 var length = nums.length;
 for (let i = 0; i < length;i++){
      if(nums[i]===0){
       nums.splice(i,1);
       nums.push(0)
       i--;
       length--;
      }
    }

  return nums
};