const toAybuben =  require("./converter").parse;
const toHayerenWords =  require("./collector").parse;

function toHayerenWordSet(text) {
    var word_set = new Set();
    for (let line of text.split(/\r?\n/)) {
        var words = toHayerenWords(line);
        for (let word of words) {
            word_set.add(word);
        }
    }
    return word_set;
}

function toHayerenWordDict(text) {
    var word_dict = {};
    for (let line of text.split(/\r?\n/)) {
        var words = toHayerenWords(line);
        for (let word of words) {
            if (word_dict[word]) {
                word_dict[word] += 1;
            } else {
                word_dict[word] = 1;
            }
        }
    }
    return word_dict;
}

var api = {
    toAybuben: toAybuben,
    toHayerenWords: toHayerenWords,
    toHayerenWordSet: toHayerenWordSet,
    toHayerenWordDict: toHayerenWordDict
};

module.exports = api;
