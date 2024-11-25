const mortgageAmount = document.querySelector("#amount");
const mortgageTerm = document.querySelector("#term");
const interestRate = document.querySelector("#interest-rate");
const emptyResults = document.querySelector(".empty-results")
const resultsCalculation = document.querySelector(".results-calculation");
const errorMessage = document.querySelectorAll(".error-message");


const repaymentDiv = document.querySelector(".repayment");
const interestOnlyDiv = document.querySelector(".interest-only");
const repaymentRadio = document.querySelector(".repayment-radio");
const interestRadio = document.querySelector(".interest-radio");


const calculateButton = document.querySelector(".calculate-button");
calculateButton.addEventListener("click", () => {
    resultsCalculation.style.display = "block";
    emptyResults.style.display = "none";

    const amountSpan = document.querySelector(".amount-span");
    const rateSpan = document.querySelector(".rate-span");
    const termSpan = document.querySelector(".term-span");

    if(mortgageAmount.value === ""){
        showError("mortgage-amount-error","This field is required");
        amountSpan.style.color = "white";
        amountSpan.style.backgroundColor = "hsl(4, 69%, 50%)";
        mortgageAmount.style.borderColor ="hsl(4, 69%, 50%)";

    }

    if (mortgageTerm.value === ""){
        showError("mortgage-term-error","This field is required");
        termSpan.style.color = "white";
        termSpan.style.backgroundColor = "hsl(4, 69%, 50%)";
        mortgageTerm.style.borderColor ="hsl(4, 69%, 50%)";

    }
    
    if (interestRate.value === ""){
        showError("interest-rate-error","This field is required");
        rateSpan.style.color = "white";
        rateSpan.style.backgroundColor = "hsl(4, 69%, 50%)";
        interestRate.style.borderColor ="hsl(4, 69%, 50%)";
    }

    if(!repaymentRadio.checked && !interestRadio.checked){
        showError("mortgage-type-error", "This field is required")
    }

    
});

// Calculations if user clicks repayment div
const totalPayments = document.querySelector(".js-total-payment")
const monthlyPayment = document.querySelector(".js-monthly-payment");
repaymentDiv.addEventListener("click", () => {

    monthlyPayment.innerHTML = parseFloat(
    (mortgageAmount.value * (interestRate.value / 1200) * (1 + (interestRate.value / 1200)) ** (mortgageTerm.value * 12)) / 
    ((1 + interestRate.value / 1200 ) ** (mortgageTerm.value * 12) - 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    totalPayments.innerHTML = parseFloat(
        ((mortgageAmount.value * (interestRate.value / 1200) * (1 + (interestRate.value / 1200)) ** (mortgageTerm.value * 12)) / 
        ((1 + interestRate.value / 1200 ) ** (mortgageTerm.value * 12) - 1)) * mortgageTerm.value * 12).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
});

interestOnlyDiv.addEventListener("click", () => {
    monthlyPayment.innerHTML = "Stick"
})






//  Checking Radio Boxes when divs are clicked

function checkRadio(){
    repaymentDiv.addEventListener("click", () => {
        repaymentRadio.checked = true
    })
    
    interestOnlyDiv.addEventListener("click", () => {
        interestRadio.checked = true
    })
}
checkRadio()


//  Function to show error messages
function showError(inputId, message){
    document.getElementById(inputId).textContent = message;
    resultsCalculation.style.display = "none";
    emptyResults.style.display = "block";   
}


// Clear all inputs
const clearAll = document.querySelector(".clear-all")
clearAll.addEventListener("click", () => {
    mortgageAmount.value = ""
    mortgageTerm.value = ""
    interestRate.value = ""
})