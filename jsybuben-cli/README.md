# jsybuben-cli
`jsybuben-cli` provides miscellaneous CLIs.

## Conversion CLI

`jsybubenconv` is a command to convert text from standard input in ASCII into Aybuben in Unicode.

```bash
$ echo 'Barev Dzez:' | jsybubenconv
Բարև Ձեզ։

$ cat anthem_ascii.txt | jsybubenconv
Մեր Հայրենիք, ազատ անկախ,
Որ ապրել է դարեդար
Յուր որդիքյ արդ կանչում են
Ազատ, անկախ Հայաստան։
...
```

## Collection CLI

`jsybubencoll` is a command to list words uniquely from text written in Armenian.

```bash
$ cat anthem_ascii.txt | jsybubenconv | jsybubencoll
Մեր
Հայրենիք
ազատ
անկախ
...
```
