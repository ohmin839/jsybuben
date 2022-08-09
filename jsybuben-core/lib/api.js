const to_aybuben =  require("./converter").parse
const to_hayeren_words =  require("./collector").parse

function to_hayeren_word_set(text) {
    var word_set = new Set();
    for (let line of text.split(/\r?\n/)) {
        var words = to_hayeren_words(line);
        for (let word of words) {
            word_set.add(word)
        }
    }
    return word_set;
}

function to_hayeren_word_dict(text) {
    var word_dict = {}
    for (let line of text.split(/\r?\n/)) {
        var words = to_hayeren_words(line);
        for (let word of words) {
            if (word_dict[word]) {
                word_dict[word] += 1
            } else {
                word_dict[word] = 1
            }
        }
    }
    return word_dict;
}

var api = {
    to_aybuben: to_aybuben,
    to_hayeren_words: to_hayeren_words,
    to_hayeren_word_set: to_hayeren_word_set,
    to_hayeren_word_dict: to_hayeren_word_dict
};

module.exports = api;
