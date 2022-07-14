start = letters

letters = ls:letter* {
    return ls.join("")
}

letter
    = largeA
    / largeB
    / largeC
    / largeD
    / largeE
    / largeF
    / largeG
    / largeH
    / largeI
    / largeJ
    / largeK
    / largeL
    / largeM
    / largeN
    / largeO
    / largeP
    / largeQ
    / largeR
    / largeS
    / largeT
    / largeU
    / largeV
    / largeW
    / largeX
    / largeY
    / largeZ
    / smallA
    / smallB
    / smallC
    / smallD
    / smallE
    / smallF
    / smallG
    / smallH
    / smallI
    / smallJ
    / smallK
    / smallL
    / smallM
    / smallN
    / smallO
    / smallP
    / smallQ
    / smallR
    / smallS
    / smallT
    / smallU
    / smallV
    / smallW
    / smallX
    / smallY
    / smallZ
    / dollar
    / digits
    / comma
    / period
    / backquote
    / colon
    / hyphen
    / leftParenthesis
    / rightParenthesis
    / leftGuillemets
    / rightGuillemets
    / question
    / exclamation
    / space
    / newline
    / anychar

largeA = "A" {
    return "\u0531";
}

largeB = "B" {
    return "\u0532";
}

largeC = "C" suffix :[h']? {
    switch (suffix ) {
        case "h":
            return "\u0549";
        case "'":
            return "\u053E";
        default:
            return "\u0551";
    }
}

largeD = "D" suffix :"z"? {
    switch (suffix ) {
        case "z":
            return "\u0541";
        default:
            return "\u0534";
    }
}

largeE = "E" suffix :"'"? {
    switch (suffix ) {
        case "'":
            return "\u0537";
        default:
            return "\u0535";
    }
}

largeF = "F" {
    return "\u0556";
}

largeG = "G" suffix :"h"? {
    switch (suffix ) {
        case "h":
            return "\u0542";
        default:
            return "\u0533";
    }
}

largeH = "H" {
    return "\u0540";
}

largeI = "I" {
    return "\u053B";
}

largeJ = "J" {
    return "\u054B";
}

largeK = "K" {
    return "\u053F";
}

largeL = "L" {
    return "\u053C";
}

largeM = "M" {
    return "\u0544";
}

largeN = "N" {
    return "\u0546";
}

largeO = "O" {
    return "\u0555";
}

largeP = "P" suffix :"'"? {
    switch (suffix ) {
        case "'":
            return "\u0553";
        default:
            return "\u054A";
    }
}

largeQ = "Q" {
    return "\u0554";
}

largeR = "R" suffix :"r"? {
    switch (suffix ) {
        case "r":
            return "\u054C";
        default:
            return "\u0550";
    }
}

largeS = "S" suffix :"h"? {
    switch (suffix ) {
        case "h":
            return "\u0547";
        default:
            return "\u054D";
    }
}

largeT = "T" suffix :[w']? {
    switch (suffix ) {
        case "w":
            return "\u0543";
        case "'":
            return "\u0539";
        default:
            return "\u054F";
    }
}

largeU = "U" {
    return "\u0548\u0582";
}

largeV = "V" suffix :"o"? {
    switch (suffix ) {
        case "o":
            return "\u0548";
        default:
            return "\u054E";
    }
}

largeW = "W" {
    return "\u0552";
}

largeX = "X" {
    return "\u053D";
}

largeY = "Y" suffix :"'"? {
    switch (suffix ) {
        case "'":
            return "\u0538";
        default:
            return "\u0545";
    }
}

largeZ = "Z" suffix :"h"? {
    switch (suffix ) {
        case "h":
            return "\u053A";
        default:
            return "\u0536";
    }
}

// FIXME

smallA = "a" {
    return "\u0561";
}

smallB = "b" {
    return "\u0562";
}

smallC = "c" suffix :[h']? {

    switch (suffix ) {
        case "h":
            return "\u0579";
        case "'":
            return "\u056E";
        default:
            return "\u0581";
    }
}

smallD = "d" suffix :"z"? {
    switch (suffix ) {
        case "z":
            return "\u0571";
        default:
            return "\u0564";
    }
}

smallE = "e" suffix :[v']? {
    switch (suffix ) {
        case "v":
            return "\u0587";
        case "'":
            return "\u0567";
        default:
            return "\u0565";
    }
}

smallF = "f" {
    return "\u0586";
}

smallG = "g" suffix :"h"? {
    switch (suffix ) {
        case "h":
            return "\u0572";
        default:
            return "\u0563";
    }
}

smallH = "h" {
    return "\u0570";
}

smallI = "i" {
    return "\u056B";
}

smallJ = "j" {
    return "\u057B";
}

smallK = "k" {
    return "\u056F";
}

smallL = "l" {
    return "\u056C";
}

smallM = "m" {
    return "\u0574";
}

smallN = "n" {
    return "\u0576";
}

smallO = "o" {
    return "\u0585";
}

smallP = "p" suffix :"'"? {
    switch (suffix ) {
        case "'":
            return "\u0583";
        default:
            return "\u057A";
    }
}

smallQ = "q" {
    return "\u0584";
}

smallR = "r" suffix :"r"? {
    switch (suffix ) {
        case "r":
            return "\u057C";
        default:
            return "\u0580";
    }
}

smallS = "s" suffix :"h"? {
    switch (suffix ) {
        case "h":
            return "\u0577";
        default:
            return "\u057D";
    }
}

smallT = "t" suffix :[w']? {
    switch (suffix ) {
        case "w":
            return "\u0573";
        case "'":
            return "\u0569";
        default:
            return "\u057F";
    }
}

smallU = "u" {
    return "\u0578\u0582";
}

smallV = "v" suffix :"o"? {
    switch (suffix ) {
        case "o":
            return "\u0578";
        default:
            return "\u057E";
    }
}

smallW = "w" {
    return "\u0582";
}

smallX = "x" {
    return "\u056D";
}

smallY = "y" suffix :"'"? {
    switch (suffix ) {
        case "'":
            return "\u0568";
        default:
            return "\u0575";
    }
}

smallZ = "z" suffix :"h"? {
    switch (suffix ) {
        case "h":
            return "\u056A";
        default:
            return "\u0566";
    }
}

dollar = "$" {
    return "\u058F";
}

digits = text: [0-9]+ {
    return text.join("");
}

comma = text: "," {
    return text;
}

period = text: "." {
    return text;
}

backquote = "`" {
    return "\u055D";
}

colon = ":" {
    return "\u0589";
}

hyphen = text: "-" {
    return text;
}

leftParenthesis = text: "(" {
    return text;
}

rightParenthesis = text: ")" {
    return text;
}

leftGuillemets = "<<" {
    return "\u00AB";
}

rightGuillemets = ">>" {
    return "\u00BB";
}

question = "?" {
    return "\u055E";
}

exclamation = "!" suffix: "~"? {
    switch (suffix) {
        case "~":
            return "\u055C";
        default:
            return "\u055B";
    }
}

space = text: [ \t] {
    return text;
}

newline = r: "\r"? n: "\n" {
    if (r) {
        return r + n;
    } else {
        return n;
    }
}

anychar = text: . {
    return text;
}

