function updateTotalBalance() {}

// calculate total
// calculate total
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const foodExpense = document.getElementById("food-exp").value;
    const rentExpense = document.getElementById("rent-exp").value;
    const clothExpense = document.getElementById("cloth-exp").value;
    const calculateTotal =
      parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);

    // total exp
    // total exp
    const totalExpense = document.getElementById("total-expense");

    const totalExpenseValue = parseInt(totalExpense.innerText);
    totalExpense.innerText = calculateTotal;

    // total earning
    // total earning
    const inputIncome = document.getElementById("input-income");
    const inputIncomeValue = parseInt(inputIncome.value);

    // total balance
    // total balance
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceValue = parseInt(totalBalance.innerText);
    const newTotalBalance = inputIncomeValue - totalExpenseValue;

    totalBalance.innerText = newTotalBalance;
  });

//   saving part
//   saving part

document.getElementById("saving-btn").addEventListener("click", function () {
  // total earning
  const inputIncome = document.getElementById("input-income");
  const inputIncomeValue = parseInt(inputIncome.value);

  // saving-persentence
  const savingPersentence = document.getElementById("saving-persentence");
  const savingPersentenceValue = parseInt(savingPersentence.value);
  const newTotalSaving = (inputIncomeValue * savingPersentenceValue) / 100;
  // saving Balance
  const savingBalance = document.getElementById("saving-balance");
  const savingBalanceValue = parseInt(savingBalance.innerText);
  savingBalance.innerText = newTotalSaving;

  // total balance
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceValue = parseInt(totalBalance.innerText);
  const remaningValue = totalBalanceValue - savingBalanceValue;

  //   Remaining Balance
  const remainingBalace = document.getElementById("remaining-balance");
  const remainingBalaceValue = parseInt(remainingBalace.innerText);

  remainingBalace.innerText = remaningValue;
});
