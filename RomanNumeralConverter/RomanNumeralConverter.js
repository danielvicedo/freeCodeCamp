const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const resultDiv = document.getElementById("output-div");
const errorText = document.getElementById("error-text");
const errorDiv = document.getElementById("error-div");

const romanToDecimal = (input) => {

    let output = ""

    const values = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    for (const { value, symbol } of values) {
        while (input >= value) {
            output += symbol
            input -= value
        }

    }

    result.innerText = output
    resultDiv.style.display = "block"
    result.style.display = "block"
}

const isValidNumber = () => {
    const inputInt = parseInt(numberInput.value)

    if (!numberInput.value || isNaN(inputInt)) {
        errorDiv.style.display = "block"
        errorText.style.display = "block"
        errorText.innerText = "Please enter a valid number"
        return false;
    } else if (inputInt <= 0) {
        errorDiv.style.display = "block"
        errorText.style.display = "block"
        errorText.innerText = "Please enter a number greater than or equal to 1"
        return false;
    } else if (inputInt >= 4000) {
        errorDiv.style.display = "block"
        errorText.style.display = "block"
        errorText.innerText = "Please enter a number less than or equal to 3999"
        return false;
    }
}

const clearTexts = (() => {
    result.innerText = ""
    errorText.innerText = ""
})

convertBtn.addEventListener("click", () => {
    clearTexts();
    if (isValidNumber() !== false) {
        romanToDecimal(parseInt(numberInput.value))
    }
})  