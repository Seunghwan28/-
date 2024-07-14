document.addEventListener('DOMContentLoaded', function() {
    const wordInput = document.getElementById('wordInput');
    const submitButton = document.getElementById('submitButton');
    const resetButton = document.getElementById('resetButton');
    const wordList = document.getElementById('wordList');
    const warningMessage = document.getElementById('warningMessage');

    function addWord() {
        const newWord = wordInput.value.trim();
        if (newWord === "") {
            return;
        }

        const lastWordItem = wordList.lastElementChild;
        if (lastWordItem) {
            const lastWord = lastWordItem.textContent;
            const lastChar = lastWord[lastWord.length - 1];
            const firstChar = newWord[0];

            if (lastChar !== firstChar) {
                warningMessage.classList.remove('hidden');
                return;
            } else {
                warningMessage.classList.add('hidden');
            }
        }

        const newListItem = document.createElement('li');
        newListItem.textContent = newWord;
        wordList.appendChild(newListItem);

        wordInput.value = '';
        wordInput.focus(); // 단어 추가 후 입력 필드에 포커스 유지
    }

    function resetGame() {
        wordList.innerHTML = '';
        warningMessage.classList.add('hidden');
        wordInput.value = '';
        wordInput.focus();
    }

    submitButton.addEventListener('click', addWord);
    resetButton.addEventListener('click', resetGame);

    wordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addWord();
        }
    });
});
