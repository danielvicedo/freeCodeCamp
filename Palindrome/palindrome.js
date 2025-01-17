const textInput = document.getElementById('text-input');
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const getLetters = (str) => {
    const regex = /[^a-zA-Z0-9]+/g;
    return str.toLowerCase().replace(regex, '')
}

const isPalindrome = () => {
    const allLetters = getLetters(textInput.value);
    if (allLetters.length === 0) {
        alert("Please input a value.");
        return;
    } else {
        for (let i = 0; i < (Math.floor(allLetters.length / 2)); i++) {
            const lastLetter = allLetters.length - 1;
            if (allLetters.charAt(i) !== allLetters.charAt(lastLetter - i)) {
                resultText.style.display = "block";
                resultText.innerText = `${textInput.value} is not a palindrome.`;
                return;
            }
        }
    }
    resultText.style.display = "block";
    resultText.innerText = `${textInput.value} is a palindrome.`;
}
checkButton.addEventListener("click", isPalindrome);
