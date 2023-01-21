const api = require("../lib/api");
const toHayerenWordSet = api.toHayerenWordSet;

test.each([
    ["", new Set()],
    ["Բարև Ձեզ։", new Set(["Բարև", "Ձեզ"])],
    ["Բարև Ձեզ, Բարև ձեզ։", new Set(["Բարև", "Ձեզ", "ձեզ"])],
])("from %s to %s", (text, word_set) => {
    expect(toHayerenWordSet(text)).toStrictEqual(word_set);
});
