const api = require("../lib/api");
const to_hayeren_word_set = api.to_hayeren_word_set;

test.each([
    ["", new Set()],
    ["Բարև Ձեզ։", new Set(["Բարև", "Ձեզ"])],
    ["Բարև Ձեզ։ Բարև ձեզ։", new Set(["Բարև", "Ձեզ", "ձեզ"])],
])("from %s to %s", (text, splitted) => {
    expect(to_hayeren_word_set(text)).toStrictEqual(splitted);
});
