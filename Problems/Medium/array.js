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