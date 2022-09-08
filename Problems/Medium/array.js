// Input: box = [["#",".","*","."],
//               ["#","#","*","."]]
// Output: [["#","."],
//          ["#","#"],
//          ["*","*"],
//          [".","."]]
// https://leetcode.com/problems/rotating-the-box/

var rotateTheBox = function(box) {
	//befor rotation => stones shoud go as right as possible
    for (let i = 0 ;i< box.length;i++) {
        let empty = box[0].length - 1
		// "empty" record the next possible position for stone to fill in
        for (let j = box[0].length - 1; j >= 0 ;j--) {
            if(box[i][j] === "*")empty = j - 1// *  obstacle
            if(box[i][j] === "#"){// # stone
                box[i][j] ="."
                box[i][empty] = "#"
                empty--
            }
        }
    }
	//rotate the  box after rearrangement of stones
    let rotate90box = new Array(box[0].length).fill(0).map(x=>new Array(box.length))
    for (let i = 0 ;i< rotate90box.length;i++) {
        for (let j = 0; j < rotate90box[0].length;j++) {
            rotate90box[i][j] = box[j][i]
        }
        rotate90box[i].reverse()
    }
    return rotate90box
};


// Maximum Product of Word Lengths
// https://leetcode.com/problems/maximum-product-of-word-lengths/
// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.
// Example 1:
// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".

const areStringsUnique = (a, b) => {
  for (let i = 0; i < a.length; i++){
    if ( b.includes(a[i]) ){
       return false;
    }
  } 
  return true;
};

const maxProduct = function(words) {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const a = words[i];
      const b = words[j];
      let unique = true;

      // compare wordz
      if ( areStringsUnique(words[i], words[j]) ) {
        max = Math.max( max, (words[i].length * words[j].length) )
      }
      
    }
  }

  return max;
};  
