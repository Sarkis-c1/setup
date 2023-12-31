module.exports = Phrase;

String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}



function reverse(string) {
    return string.split("").reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    


// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
}
this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }    

// Returns true if a palindrome, false otherwise
this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
}}

String.prototype.palindrome = function palindrome() {
    return new Phrase(this).palindrome();
}
