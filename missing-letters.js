function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i));
    }
}

console.log(fearNotLetter("abce"));

// fearNotLetter("abce") should return "d".

// logs
// 97
// 98
// 99
// 101
