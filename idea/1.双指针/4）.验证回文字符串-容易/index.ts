
const deleteStr = (str: string, left: number, right: number): boolean => {
    while (left < right) {
        if (str[right] != str[left]) return false
        left++
        right--
    }
    return true
}

var validPalindrome = function (s: string): boolean {
    if (!s) return false
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) {
            return deleteStr(s, i, j - 1) || deleteStr(s, i + 1, j);
        }
    }
    return true;
};

console.log(validPalindrome('abca'))