let price = 19.5;

let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]

const money = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.10],
    ['NICKEL', 0.05],
    ['PENNY', 0.01]
];

let cash = 0;
const changeDue = document.getElementById("change-due")
const cashInput = document.getElementById("cash")
const totalElement = document.getElementById("total")
const changeDrawer = document.getElementById("change-drawer")
const purchaseBtn = document.getElementById("purchase-btn")

changeDrawer.innerHTML += `<li>${cid[0][0]}: $${cid[0][1]}</li>
<li>${cid[1][0]}: $${cid[1][1]}</li>
<li>${cid[2][0]}: $${cid[2][1]}</li>
<li>${cid[3][0]}: $${cid[3][1]}</li>
<li>${cid[4][0]}: $${cid[4][1]}</li>
<li>${cid[5][0]}: $${cid[5][1]}</li>
<li>${cid[6][0]}: $${cid[6][1]}</li>
<li>${cid[7][0]}: $${cid[7][1]}</li>
<li>${cid[8][0]}: $${cid[8][1]}</li>`

total.textContent = `Total: $${price}`


const purchase = () => {

    const sumChangeDrawer = cid.reduce(
        (sum, arr) => sum + arr[1], 0);
    let sumChangeDrawerRounded = Math.round(sumChangeDrawer * 100) / 100;

    let change = Math.round((cashInput.value - price) * 100) / 100

    if (cashInput.value < price) {
        alert("Customer does not have enough money to purchase the item")
    } else {
        if (sumChangeDrawerRounded < change) {
            changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
        } else if (change === 0) {
            changeDue.textContent = "No change due - customer paid with exact cash"
        } else if (change > 0 && sumChangeDrawerRounded >= change) {
            let changeString = ''
            let amount = 0

            money.forEach((arr) => {
                amount = 0

                let cidIndex = cid.findIndex((elem) => elem[0] === arr[0])
                let updatedCash = cid[cidIndex][1]
                while (change >= arr[1]) {
                    if (updatedCash <= 0) {
                        break
                    }

                    while (change >= arr[1] && updatedCash > 0) {

                        updatedCash -= arr[1]

                        amount = Math.round((amount + arr[1]) * 100) / 100;
                        change = Math.round((change - arr[1]) * 100) / 100;
                    }
                    changeString += `<li>${arr[0]}: $${amount}</li>`

                }
            });
            const cashMinusPrice = Math.round((cashInput.value - price) * 100) / 100
            console.log(cid[0][1], cashMinusPrice, amount)
            if (sumChangeDrawerRounded === cashMinusPrice) {
                changeDue.innerHTML = `Status: CLOSED </br> ${changeString}`
            }
            else if (cid[0][1] <= amount) {
                changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS </br>`
            } else {
                changeDue.innerHTML = `Status: OPEN </br> ${changeString}`
            }
        }
    }
    cashInput.value = ""
}
purchaseBtn.addEventListener("click", () => {
    purchase()
})