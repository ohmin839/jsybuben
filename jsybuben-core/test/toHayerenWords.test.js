const api = require("../lib/api");
const toHayerenWords = api.toHayerenWords;

test.each([
    ["", []],
    ["Բարև Ձեզ։", ["Բարև", "Ձեզ"]],
])("from %s to %s", (text, words) => {
    expect(toHayerenWords(text)).toStrictEqual(words);
});
