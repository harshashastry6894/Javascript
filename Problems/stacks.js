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