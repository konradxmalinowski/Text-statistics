// counter section
const textarea = document.getElementById('user-text');
const words = document.querySelector('.counter-text-words');
const chars = document.querySelector('.counter-text-chars');
const sentences = document.querySelector('.counter-text-sentences');

function onChange() {
    let text = textarea.value;
    sentences.textContent = text.split('. ').length;
    chars.textContent = text.replaceAll(/[\r\n]/g, ' ').split('').length;
    words.textContent = text.split(' ').length;
}

textarea.addEventListener('input', onChange);


// refresh button
const refreshBtn = document.querySelector('#refresh-button');

refreshBtn.addEventListener("click", () => {
    window.location.reload();
});