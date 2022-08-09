const api = require("../lib/api");
const to_hayeren_word_dict = api.to_hayeren_word_dict;

test.each([
    ["", {}],
    ["Բարև Ձեզ։", {"Բարև": 1, "Ձեզ": 1}],
])("from %s to %s", (text, splitted) => {
    expect(to_hayeren_word_dict(text)).toStrictEqual(splitted);
});
