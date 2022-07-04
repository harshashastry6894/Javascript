// Valid Parentheses
// Input: s = "{[]}"
// Output: true
var isValid = function (s) {
    let left = {
        '(': 1,
        '{': 2,
        '[': 3
    }

    let right = {
        ')': 1,
        '}': 2,
        ']': 3
    }
    let res = []

    for (let i = 0; i < s.length; i++) {
        if (left[s[i]]) {
            res.push(left[s[i]])
        } else if (right[s[i]] !== parseInt(res.pop())) {
            return false
        }
    }
    return res.length === 0;

};

// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// https://leetcode.com/problems/make-the-string-great/
var makeGood = function(s) {
    const stack = ['']; //very important
    
    for(let c of s) {
        let top = stack[stack.length-1];
        if(top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop()
        else stack.push(c);
    }
    return stack.join('');
};