function updateBalance(inputId) {
  document.getElementById(inputId).addEventListener("click", function () {
    const foodExpense = document.getElementById("food-exp").value;
    const rentExpense = document.getElementById("rent-exp").value;
    const clothExpense = document.getElementById("cloth-exp").value;
    const calculateTotal =
      parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);

    // added expenses error
    // added expenses error
    if (isNaN(calculateTotal) || calculateTotal < 0) {
      return (document.getElementById("expenses-error").style.display =
        "block");
    } else {
      calculateTotal.value = calculateTotal;
      document.getElementById("expenses-error").style.display = "none";
    }

    // total income
    // total income

    const inputIncome = document.getElementById("input-income");
    const inputIncomeValue = parseInt(inputIncome.value);

    // total expenses
    // total expenses
    const totalExpense = document.getElementById("total-expense");
    const totalExpenseValue = parseInt(totalExpense.innerText);

    // added error into total expenses part
    // added error into total expenses part

    if (calculateTotal < inputIncomeValue) {
      totalExpense.innerText = calculateTotal;
      document.getElementById("total-expenses-error").style.display = "none";
    } else {
      return (document.getElementById("total-expenses-error").style.display =
        "block");
    }

    // total balance
    // total balance
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceValue = parseInt(totalBalance.innerText);
    const newTotalBalance = inputIncomeValue - calculateTotal;
    totalBalance.innerText = newTotalBalance;
  });

  //   saving balance part
  //   saving balance part
  //   saving balance part

  document.getElementById(inputId).addEventListener("click", function () {
    // total earning
    // total earning
    const inputIncome = document.getElementById("input-income");
    const inputIncomeValue = parseInt(inputIncome.value);

    // saving-persentence
    // saving-persentence
    const savingPersentence = document.getElementById("saving-persentence");
    const savingPersentenceValue = parseInt(savingPersentence.value);
    const newTotalSaving = (inputIncomeValue * savingPersentenceValue) / 100;

    // total balance
    // total balance
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceValue = parseInt(totalBalance.innerText);

    // saving Balance
    // saving Balance
    const savingBalance = document.getElementById("saving-amount");
    const savingBalanceValue = parseInt(savingBalance.innerText);

    // added error saving amount
    // added error saving amount
    if (newTotalSaving > totalBalanceValue) {
      return (document.getElementById("saving-error").style.display = "block");
    } else {
      savingBalance.innerText = newTotalSaving;
      document.getElementById("saving-error").style.display = "none";
    }

    //   Remaining Balance
    //   Remaining Balance
    const remainingBalace = document.getElementById("remaining-balance");
    const remainingBalaceValue = parseInt(remainingBalace.innerText);
    const remaningValue = totalBalanceValue - newTotalSaving;
    remainingBalace.innerText = remaningValue;
  });
}
// function calling
// function calling

updateBalance("calculate-total");
updateBalance("saving-btn");

//// =========The End=========////
//// ============The End===================////
//// ================The End=============================////
