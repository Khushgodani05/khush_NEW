// class Bank {

//     isDepositing = false;
//     balance = 0;
//     //balance = 0; // class fields

//     constructor() {
//         console.log('init');
//     }

//     // method
//     deposit(amount) {
//         this.isDepositing = true;
//         this.balance += amount;

//         this.isDepositing = false;

//         console.log('New balance', this.balance);
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(amount) {
//         console.log('modify balance', amount)
//         if (this.isDepositing === false) {
//             return;
//         }

//         this._balance = amount;
//     }


// }

// class Upi extends Bank {
//     deposit() {
//         console.warn('not allowed');
//     }
// }

// let bankObj = new Bank();
// bankObj.deposit();

// bankObj.balance = 100000;
// bankObj.deposit(100);
// console.log(bankObj.balance);

// try {
//     console.log(rrr);
// } catch(e) {
//     console.log('something went wrong')
//     console.log(e)
// }