const api = require("../lib/api");
const to_hayeren_word_dict = api.to_hayeren_word_dict;

test.each([
    ["", {}],
    ["Բարև Ձեզ։", {"Բարև": 1, "Ձեզ": 1}],
    ["Բարև Ձեզ, Բարև ձեզ։", {"Բարև": 2, "Ձեզ": 1, "ձեզ": 1}],
])("from %s to %s", (text, word_dict) => {
    expect(to_hayeren_word_dict(text)).toStrictEqual(word_dict);
});
