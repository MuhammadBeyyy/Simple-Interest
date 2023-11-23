//Simple Intererst
document.getElementById('calculate-button').addEventListener('click' , function()
 {
    const principal = parseFloat(document.getElementById('principal').value)
    const rate = parseFloat(document.getElementById('rate').value)
    const time =parseFloat(document.getElementById('time').value)


if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert('PLEASE ENTER VALID NUMBERS FOR ALL FIELDS.')
}

const interest = (principal * rate * time) / 100

document.getElementById('result').innerText =`The simple interst is :$${interest.toFixed(2)}`
})
