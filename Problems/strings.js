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