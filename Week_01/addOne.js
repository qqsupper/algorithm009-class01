
// 66. 加一

// 给定一个由整数组成的非空数组所表示的非负整数， 在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外， 这个整数不会以零开头。


/**方法一 */ 
var plusOne = function (digits) {
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]!==9){
            digits[i]++
            //循环递减检测，检测到其中一位不为0,则退出函数,返回结果
            return digits;
        }else{
            digits[i]=0
        }
    }
    //遍历完，则digits[0]=0,前面补一
    let result = [1, ...digits];

    return result
 }



var c=plusOne([9])



console.log(c)