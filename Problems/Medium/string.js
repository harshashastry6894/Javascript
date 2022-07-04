// Input: text = "nlaebolko"
// Output: 1
// Maximum Number of Balloons
// https://leetcode.com/problems/maximum-number-of-balloons/
const maxNumberOfBalloons = text => {
    let obj = {}, balloonCount = 0;
    for (let el of text) {
      obj[el] = (obj[el] || 0) + 1;
    }
    while (obj['a'] > 0 && obj['b'] >0 && obj['l']>1 && obj['n']>0 && obj['o']>1) {
      balloonCount++;
      obj['a']--;
      obj['b']--;
      obj['l'] -= 2;
      obj['n']--;
      obj['o'] -= 2;
    }
    return balloonCount;
  }

// Input: words = ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
// Output: 3
// Explanation: 
// One group is ["abcd", "cdab", "cbad"], 
// since they are all pairwise special equivalent, and none of the other strings is all pairwise special equivalent to these.
// The other two groups are ["xyzz", "zzxy"] and ["zzyx"].
// Note that in particular, "zzxy" is not special equivalent to "zzyx".
//   https://leetcode.com/problems/groups-of-special-equivalent-strings/submissions/
  var numSpecialEquivGroups = function(A) {
    const groupSet = new Set();
    A.forEach(a => groupSet.add(transform(a)));
    return groupSet.size;
  };
  
  const transform = S => {
    const even = S.split('').filter((_, i) => i % 2 === 0);
    const odd = S.split('').filter((_, i) => i % 2 === 1);
    even.sort();
    odd.sort();
    return `${even.join('')}${odd.join('')}`;
  };

// Input: keyboard = 'abcdefghijklmnopqrstuvwxyz' word = 'cba'
// Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'

const calculateTime = (keyboard, str) => {
    let time = 0, fromIndex = 0
    for(let char of str) {
        const index = keyboard.indexOf(char)
        time += (Math.abs(fromIndex-index))
        fromIndex = index       
    }
    return time
}

// Input: keyboard = 'abcdefghijklmnopqrstuvwxyz'
// Output: 'pqrstvwxyzbcdfghjklmn'
const removeVowels = str => {
    const vowels = 'aeiou'
    let newStr = ''
    for (let char of str) {
        if(!vowels.includes(char)) {
            newStr = newStr + char
        }
    }
    return newStr
}

// Input: n = 1234
// Output: "1.234"
// https://leetcode.com/problems/thousand-separator/
var thousandSeparator = function(n) {
    let str = n.toString(), res = '',counter = 0
    for(let i=str.length-1;i>=0;i--){
        if(counter == 3){
            res = '.'+res
            counter = 0
        }
        counter++
        res = str.charAt(i) + res
    }
    return res
};

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
const removeOccurrences = (str, part) => {
    while(str.includes(part)) {
        str = str.replace(part, '');
    }
    return str;
}

// Input: s = "?zs"
// Output: "azs"
// Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters i
const modifyString = function(s) {
    let res = [...s];
    
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== "?") continue;
      if (res[i-1] !== "a" && res[i+1] !== "a") { res[i] = "a"; continue; }
      if (res[i-1] !== "b" && res[i+1] !== "b") { res[i] = "b"; continue; }
      res[i] = "c";
    }
    
    return res.join("");
  };


var maxLengthBetweenEqualCharacters = function (s) {
    let maxLen = -1;
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        const lastIndex = s.lastIndexOf(c)
        if (lastIndex !== i) {
            maxLen = Math.max(maxLen, lastIndex - i - 1)
        }
    }
    return maxLen;
};
// Input: sentence1 = "My name is Haley", sentence2 = "My Haley"
// Output: true
// Explanation: sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".
// https://leetcode.com/problems/sentence-similarity-iii/
var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence1===sentence2) return true;
    if(sentence2.length>sentence1.length) [sentence1, sentence2] = [sentence2, sentence1];
    let long = sentence1.split(" ");
    let short = sentence2.split(" ");
    while(long[0]===short[0]) long.shift(), short.shift();
    while(long[long.length-1]===short[short.length-1]) long.pop(), short.pop();
    return short.length===0;
};

// One array (l2r) records the number of unique chars between [0, i];
// The other (r2l) records the number of unique chars between [i, L-1].

// If l2r[i-1] == r2l[i], it means both are good substrings.

var numSplits = function(s) {
    let set = new Set();
    let l2r = new Array(s.length), r2l = new Array(s.length);
    
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
        l2r[i] = set.size;
    }
    
    set = new Set();
    for (let i = s.length-1; i >= 0; i--) {
        set.add(s[i]);
        r2l[i] = set.size;
    }
    
    let res = 0;
    for (let i = 1; i < s.length; i++) {
        if (l2r[i-1] == r2l[i])
            res++;
    }
    return res;
};


// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
var suggestedProducts = function(P, S) {
    P.sort()
    let ans = [], left = 0, right = P.length - 1
    for (let i = 0; i < S.length; i++) {
        let c = S.charAt(i), res = []
        while (P[left]?.charAt(i) < c) left++
        while (P[right]?.charAt(i) > c) right--
        for (let j = 0; j < 3 && left + j <= right; j++)
            res.push(P[left+j])
        ans.push(res)
    }
    return ans
};


