const mortgageAmount = document.querySelector("#amount");
const mortgageTerm = document.querySelector("#term");
const interestRate = document.querySelector("#interest-rate");
const emptyResults = document.querySelector(".empty-results")
const resultsCalculation = document.querySelector(".results-calculation");
const errorMessage = document.querySelectorAll(".error-message");


const calculateButton = document.querySelector(".calculate-button");
calculateButton.addEventListener("click", () => {
    resultsCalculation.style.display = "block";
    emptyResults.style.display = "none";

    const calculationHTML = `
        <div class="your-results">
            <h3>Your results</h3>
            <p>Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.
            </p>
        </div>

        <div class="calculation">
            <div class="monthly-repayments">
                <p>Your monthly repayments</p>
                <h1>£ ${parseFloat((mortgageAmount.value * (interestRate.value / 1200) * (1 + interestRate.value / 1200) ** mortgageTerm.value * 12) / ((1 + interestRate.value / 1200 ) ** mortgageTerm.value * 12) - 1).toFixed(2)} </h1>
            </div>

            <hr>
            <div class="total-repayments">
                <p>Total you'll repay over the term</p>
                <h3>£539,322.94</h3>
            </div>
            
        </div>
`;
resultsCalculation.innerHTML = calculationHTML
})





// Clear all
const clearAll = document.querySelector(".clear-all")
clearAll.addEventListener("click", () => {
    location.reload(true)
})