/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 方法1：
 * 1.for循环i=0，到数组length-1
 * 2.嵌套里面for j=i+1,可以到length
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
      for(let j=i+1;j<nums.length;j++){
       if(nums[i]+nums[j]===target){
        return [i,j]
       }
      }
    }
};
// @lc code=end

