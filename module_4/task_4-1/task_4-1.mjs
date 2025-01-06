"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const AccountType = { Normal: "Brukskonto", Saving: "Sparekonto", Credit: "Kreditkonto", Pension: "Pensionskonto" };
printOut(AccountType.Normal + ", " + AccountType.Saving + ", " + AccountType.Credit + ", " + AccountType.Pension);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const CurrencyTypes = {
  NOK: { value: 1.0, name: "Norske Kroner", denomination: "Nkr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.058, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
};

class TAccount {
  constructor(type, balance = 0, currencyType = "NOK") {
    this.type = type;
    this.balance = balance;
    this.withdrawCount = 0;
    this.currencyType = CurrencyTypes.NOK;
  }

  /** Returns the accounts type as a string*/
  toString() {
    return "myAccount = " + this.type;
  }

  /**
   * Sets the myAccount type to the new value and prints out the change of the myAccount type
   * @param {aType} aType the myAccount type to set
   */
  setType(aType) {
    printOut("Account is changed from " + this.type + " to " + aType);
    this.type = aType;
    this.withdrawCount = 0;
  }

  /**
   * Returns the myAccount balance
   */
  getBalance() {
    return "My myAccount balance is " + this.balance;
  }

  /**
   * Increases the balance by a given amount and prints the amounts the new balance
   * @param {amount to increase} aAmount
   */
  deposit(aAmount, aType = CurrencyTypes.NOK) {
    const newAmount = aAmount / this.currencyConvert(aType);
    this.balance += newAmount;
    this.withdrawCount = 0;
    let text = "Deposit of " + aAmount + " " + aType.name;
    text += ", new balance is ";
    text += this.balance.toFixed(2) + this.currencyType.denomination;
    printOut(text);
  }

  /**
   * Decrease the balance by a given amount and prints the amount to the new balance
   * @param {amount to decrease} aAmount
   */
  withdraw(aAmount, aType = CurrencyTypes.NOK) {
    let canWithdraw = true;
    let text = "";
    const newAmount = aAmount / this.currencyConvert(aType);
    switch (this.type) {
      case AccountType.Saving:
        if (this.withdrawCount < 3) {
          this.withdrawCount++;
          canWithdraw = true;
        } else {
          canWithdraw = false;
          text = "Cannot withdraw more than 3 times from a " + this.type + " account.";
        }
        break;
      case AccountType.Pension:
        canWithdraw = false;
        text = "Cannot withdraw from a " + this.type + " account.";
        break;
    }

    if (canWithdraw) {
      this.balance -= newAmount;
      text = "Withdraw of " + aAmount + " " + aType.name + ", new balance is ";
      text += this.balance.toFixed(2) + this.currencyType.denomination;
    }
    printOut(text);
  }

  /**
   * Converts the currency
   * @param {the type to convert} aType
   * @returns
   */
  currencyConvert(aType) {
    return (CurrencyTypes.NOK.value / this.currencyType.value) * aType.value;
  }

  /**
   * Sets the currency type
   * @param {the currency to set} aCurrency
   */
  setCurrencyType(aCurrency) {
    if (this.currencyType != CurrencyTypes[aCurrency]) {
      this.balance = this.balance * this.currencyConvert(aCurrency);
      let text = "The account currency has been changed from ";
      text += this.currencyType.name + " to " + aCurrency.name;
      text += newLine + "New balance is ";
      text += this.balance.toFixed(2) + aCurrency.denomination;
      this.currencyType = aCurrency;
      printOut(text);
    } else {
      printOut("The myAccount already uses this currency");
    }
  }
}
const myAccount = new TAccount(AccountType.Normal);
printOut(myAccount.toString());
myAccount.setType(AccountType.Saving);
printOut(myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
myAccount.getBalance.toString;
printOut(myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(100.927, CurrencyTypes.SEK);

printOut(newLine);

