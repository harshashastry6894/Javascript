// reverse string seperated by . operator
// i.like.this.program.very.much -> much.very.program.this.like.i
function reverse(str) {
    return str.split('.').reverse().join('.');
}

// Anagram (number of characters should be same)
// aaba -> baaa 
const AnaGram = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }
    let fc = {};
    Array.from(first).forEach(ele => fc[ele] = (fc[ele] || 0) + 1);
    Array.from(second).forEach(ele => {
        if (!fc[ele]) {
            return false;
        } else {
            fc[ele]--;
        }
    });
    return true;
}

// reverse a string
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
function reverseString(s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join('');
}
// reverse an integer
// Input: x = 123
// Output: 321
var reverse = function (x) {
    if (x < 0) {
        return parseInt('-' + x.toString().split('').reverse().join(''));
    } else {
        return parseInt(x.toString().split('').reverse().join(''));
    }
};

var reverse = function (x) {
    const max = Math.pow(2, 31);
    let r = 0;
    while (x !== 0) {
        r = r * 10 + x % 10;
        if (r > max || r < -max) return 0;
        x = (x / 10) << 0;
    }
    return r;
};
//First Unique Character in a String
// Input: s = "leetcode"
// Output: 0

var firstUniqChar = function (s) {
    for (i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

// valid palindrome 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
var isPalindrome = function (s) {
    s = s.replace(/[^0-9a-zA-Z]/g, "");
    s = s.toLowerCase();
    return s === s.split('').reverse().join('');
};

// Longest Common Prefix
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let r = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return r;
        }
        r += strs[0][i];
    }
    return r;
};

// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
     if (!s || s.length === 0) {
    return 0;
  }

 let map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

  let i = s.length - 1;
  let result = map[s[i]];

  while (i > 0) {
    const curr = map[s[i]];
    const prev = map[s[i - 1]];

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};

// Find Resultant Array After Removing Anagrams
// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
function removeAnagrams(words) {
    const newWords = [];
    let prevSortedWord = '';
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (sortedWord === prevSortedWord) continue;
        
        prevSortedWord = sortedWord;
        newWords.push(word);
    }
    return newWords;
};

// Count Prefixes of a Given String 
// https://leetcode.com/problems/count-prefixes-of-a-given-string/
var countPrefixes = function(words, s) {
    if(!words.length) return 0
    let count = 0
    for(let word of words) {
        const len = word.length
        const subString = s.slice(0, len)
        if(word === subString) count ++
    }
    return count
};
