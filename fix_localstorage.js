const fs = require('fs');
const path = require('path');

const dir = 'c:\\Vs codes\\speakora';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const prefixExpr = '(localStorage.getItem("userId") || localStorage.getItem("currentUser") || "anonymous") + "_" + ';

const keys = [
    '"highestScore_writing"',
    '"highestScore_vocab"',
    '"highestScore_sentence"',
    '"highestScore_listening"',
    '"highestScore_grammar"',
    '"highestScore_speak"',
    '"completedLessons"',
    '"completedMaterials"',
    '"learningData"',
    "'learningData'"
];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    keys.forEach(key => {
        // Replace getItem
        const getRegex = new RegExp(`localStorage\\.getItem\\(\\s*${key}\\s*\\)`, 'g');
        content = content.replace(getRegex, `localStorage.getItem(${prefixExpr}${key})`);

        // Replace setItem
        const setRegex = new RegExp(`localStorage\\.setItem\\(\\s*${key}\\s*,`, 'g');
        content = content.replace(setRegex, `localStorage.setItem(${prefixExpr}${key},`);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    }
});
