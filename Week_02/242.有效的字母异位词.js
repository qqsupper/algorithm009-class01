/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

 
 /**
  * 思路
  * 1.遍历第一个字符串的元素，保存在一个map里，并字母出现记录次数
  * 2.
  * 
  */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   

     function setMap(str){
       let map = new Map()
      for (let i of str) {
       if (!map.has(i)) {
        map.set(i, 1)
       } else {
        let value = map.get(i) + 1;
        map.set(i, value)
       }
      }
      return map
     }
     

     let s_map = setMap(s);
     let t_map=setMap(t);

     if (s_map.size !== t_map.size){
      return false
     }

     for (let key of t_map.keys()){
      var t_key=t_map.get(key);


      if (s_map.get(key) !== t_key){
       return false
      }
      
     }

     return true 

};

var s = "anagram",
 t = "nagaram"

 var result=isAnagram(s,t)

 console.log(result)

// @lc code=end



