const api = require("../lib/api");
const toHayerenWordDict = api.toHayerenWordDict;

test.each([
    ["", {}],
    ["Բարև Ձեզ։", {"Բարև": 1, "Ձեզ": 1}],
    ["Բարև Ձեզ, Բարև ձեզ։", {"Բարև": 2, "Ձեզ": 1, "ձեզ": 1}],
])("from %s to %s", (text, word_dict) => {
    expect(toHayerenWordDict(text)).toStrictEqual(word_dict);
});
