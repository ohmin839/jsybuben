const api = require("../lib/api");
const to_hayeren_words = api.to_hayeren_words;

test.each([
    ["", []],
    ["Բարև Ձեզ։", ["Բարև", "Ձեզ"]],
])("from %s to %s", (text, words) => {
    expect(to_hayeren_words(text)).toStrictEqual(words);
});
