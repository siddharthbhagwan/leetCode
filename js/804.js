/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let alphabet = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..'
    ];

    let codeList = {};
    words.forEach(word => {
        let morseCode = '';
        word.split('').forEach(letter => {
            morseCode += alphabet[letter.toUpperCase().charCodeAt() - 64 - 1];
        });
        if (!codeList[morseCode]) codeList[morseCode] = 1;
    });
    return Object.keys(codeList).length;
};
