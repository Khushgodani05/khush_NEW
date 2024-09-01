let bankInfra = {
    balance: 0,
    showBalance: function() {
        console.log(this.balance);
    },
    addMoney: function() {
        const input = prompt('Add Amount');

        this.balance += parseFloat(input);

        this.showBalance();
    }
};

let upi = new Object({...bankInfra});
upi.balance = 100;
upi.showBalance();

let cc = new Object({...bankInfra});
delete cc.addMoney;
cc.showBalance();

function addMoney() {
    upi.showBalance();
}