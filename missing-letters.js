function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let targetCharCode = str.charCodeAt(i);
        let nextCharCode = str.charCodeAt(i + 1);
        let alphabetDifference = targetCharCode - nextCharCode;
        if (alphabetDifference != -1) {
            return String.fromCharCode(targetCharCode + 1);
        }
    }
    // return undefined;
}

console.log(fearNotLetter("abce"));

console.log(fearNotLetter("bcd"));
// fearNotLetter("abce") should return "d". t

// fearNotLetter("abcdefghjklmno") should return "i".t

// fearNotLetter("bcd") should return undefined.
