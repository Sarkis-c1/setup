function reverse(string) {
    return string.split("").reverse().join("");
}

function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);

}