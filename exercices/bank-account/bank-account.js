//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  isClosed;
  Balance;

  constructor() {
    this.Balance = 0;
    this.isClosed = true;
  }

  open() {
    if (!this.isClosed) {
      throw new ValueError();
    } else {
      this.isClosed = false;
      this.Balance = 0;
    }
  }

  close() {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      this.isClosed = true;
    }
  }

  deposit(deposit) {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      if (deposit < 0) {
        throw new ValueError();
      } else {
        this.Balance += deposit;
      }
    }
  }

  withdraw(withdraw) {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      if (withdraw < 0 || this.balance < withdraw) {
        throw new ValueError();
      } else {
        this.Balance -= withdraw;
      }
    }
  }

  get balance() {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      return this.Balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
