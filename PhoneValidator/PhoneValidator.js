const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const results = document.getElementById("results-div")

const prefixNoParenthesis = /^1\s\d{3}-\d{3}-\d{4}$/
const prefixWithParenthesis = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/
const prefixWithParenthesisNoSpace = /^1\(\d{3}\)\d{3}-\d{4}$/
const prefixNoParenthesisNoHyphen = /^1\s\d{3}\s\d{3}\s\d{4}$/
const noPrefixNoHyphen = /^\d{10}$/
const noPrefixWithHyphen = /^\d{3}-\d{3}-\d{4}$/
const noPrefixWithParenthesisAndHyphen = /^\(\d{3}\)\d{3}-\d{4}$/

const validTelephoneList = [prefixNoParenthesis, prefixWithParenthesis, prefixWithParenthesisNoSpace, prefixNoParenthesisNoHyphen, noPrefixNoHyphen, noPrefixWithHyphen, noPrefixWithParenthesisAndHyphen];

const telephoneValidator = (msg) => validTelephoneList.some((regex) => regex.test(msg));


const clearResults = (() => {
    results.innerText = ""
    userInput.reset()
})

checkButton.addEventListener("click", () => {

    if (userInput.value === "") {
        alert("Please provide a phone number")
        return;
    }

    results.textContent = telephoneValidator(userInput.value)
        ? `Valid US number: 
        ${userInput.value}`
        : `Invalid US number: 
        ${userInput.value}`
    userInput.value = ""
})

clearButton.addEventListener("click", () => {
    clearResults();
})