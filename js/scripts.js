//Business logic
function BankAccount (userName, balance) {
  this.userName = userName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(newDepositAmount) {
  this.balance += newDepositAmount;
}

BankAccount.prototype.withdrawal = function(newWithdrawal) {
  this.balance -= newWithdrawal;
}

//UI logic
$(document).ready(function() {
  $("#bank-form").submit(function(event) {
    event.preventDefault();
    var userName = $("input#account-name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());

    var newBankAccount = new BankAccount(userName, initialDeposit);

    $(".current-balance").append("$" + newBankAccount.balance);

    $("#deposit-balance").submit(function(event) {
      event.preventDefault();
      var newDepositAmount = parseInt($("#deposit-amount").val());
      newBankAccount.deposit(newDepositAmount);
      $(".current-balance").text("$" + newBankAccount.balance);
    });

    $("#withdrawal-balance").submit(function(event) {
      event.preventDefault();
      var newWithdrawal = parseInt($("#withdraw-amount").val());
      if (newWithdrawal > newBankAccount.balance) {
        alert("Your withdrawal request is greater than your balance.")
      } else {
        newBankAccount.withdrawal(newWithdrawal);
        $(".current-balance").text("$" + newBankAccount.balance);
      }
    });
  });
});
