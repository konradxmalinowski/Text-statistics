// counter section
const textarea = document.getElementById('user-text');
const words = document.querySelector('.counter-text-words');
const chars = document.querySelector('.counter-text-chars');
const sentences = document.querySelector('.counter-text-sentences');
const consonants = document.querySelector('.counter-text-consonants');
const vowels = document.querySelector('.counter-text-vowels');

function onChange() {
    let text = textarea.value;
    sentences.textContent = text.split('. ').length;
    chars.textContent = text.replaceAll(/[\r\n]/g, ' ').split('').length;
    words.textContent = text.split(' ').length;
    consonants.textContent = calculateNumberOfChars(text, 'consonants');
    vowels.textContent = calculateNumberOfChars(text, 'vowels');
}

function calculateNumberOfChars(text, type) {
    const consonantsChars = 'aąeęioóuy';
    const vowelsChars = 'bcćdfghjklłmnńpqrstvwxzźż';
    let result = '';

    for (let char of text) {
        if (type === 'consonants' && consonantsChars.includes(char)) {
            result += char;
        }
        else if (type === 'vowels' && vowelsChars.includes(char)) {
            result += char;
        }
    }
    return result.length;
}

textarea.addEventListener('input', onChange);

// refresh button
const refreshBtn = document.querySelector('#refresh-button');

refreshBtn.addEventListener("click", () => {
    window.location.reload();
});