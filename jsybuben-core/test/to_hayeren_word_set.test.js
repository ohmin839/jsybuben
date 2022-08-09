const api = require("../lib/api");
const to_hayeren_word_set = api.to_hayeren_word_set;

test.each([
    ["", new Set()],
    ["Բարև Ձեզ։", new Set(["Բարև", "Ձեզ"])],
])("from %s to %s", (text, splitted) => {
    expect(to_hayeren_word_set(text)).toStrictEqual(splitted);
});
