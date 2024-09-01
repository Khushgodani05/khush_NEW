let upibalance=0;
// const upibalances=document.getElementById('upibalances');
let upi={
    transaction:[`UPI SLIP:
Transaction          Balance
`],
    showbalance:function showupibalance()
    {
        alert(`UPI balance is ${upibalance}`);
        this.transaction.push(`check balance             ${upibalance}
`);  
    },
    withdrawupimoney:function withdrawupimoney()
    {
        let wmoney=Number(prompt("Enter the amount to withdraw"));
        if(upibalance==0 || wmoney>upibalance)
            {
                alert("your balance is insufficient.");
            }
        else 
        {
            alert(`${wmoney} withdrawn successfully.`);
            upibalance-=wmoney;
            this.transaction.push(`${-wmoney}                 ${upibalance}
`);
        }
    },
    depositmoney:function depositmoney()
    {
        dmoney=Number(prompt("Enter amount to deposit."));
        if(dmoney==NaN || dmoney==0)
            {
                alert("Enter a valid amount");
            }
        else
        {
            alert(`${dmoney} deposited successfully.`);
            upibalance+=dmoney; 
            this.transaction.push(`+${+dmoney}                  ${upibalance}
`);  
        }
    },
    showslip:function(){
        this.transaction.forEach(function(value){
            console.log(value);
        })
        
            alert(this.transaction);
        

    }
};

// const withdrawmoney=document.getElementById('withdrawmoney');

let ccbalance=100000;
let itemamt=0;
let ccard={
    ctransaction:[`CREDIT CARD SLIP:
Transaction               Balance`],
    paybill:function(){
        if(itemamt==0 ||  itemamt==NaN){
            alert("You have no pending bill.")
        }
        else if(itemamt>ccbalance)
            {
                alert("Insufficient balance.")
            }
        else {
            alert(`${itemamt} paid successfully.`);
            ccbalance-=itemamt;
            this.ctransaction.push(`${-itemamt} paid                 ${ccbalance}`);
            // const element=document.getElementById("pendingbalance");
            // element.innerHTML( `Pending balance: ${ccbalance}`);
        }
    },
        buyitem:function(){
            itemamt=Number(prompt("Enter the amount of item you want to buy"));
            if(itemamt==0 ||itemamt==NaN ){
                alert("Purchase unsuccessful.");
            }
            else if(itemamt>ccbalance){
                alert("Insufficient balance.");
            }
            else{
                alert(`${itemamt} item purchased successfully.`);
                this.ctransaction.push(`Item purchased                 ${itemamt}`);
            }
        },
        checklimit:function checklimit(){
            alert(`Your current limit is 100000.`);
            this.ctransaction.push(`Check limit                 100000`);
        },
        showCCbalance:function showCCbalance()
        {
            alert(`Your current balance is ${ccbalance}`);
            this.ctransaction.push(`Remaining balance                ${ccbalance}`);
        },
        showccslip:function(){
            this.ctransaction.forEach(function(value){
            console.log(value);
        })
        for(let i=0;i<this.ctransaction.length;i++){
            alert(this.ctransaction[i]);
        }
    }
};

        




// const pendingbalance=document.createElementById('pendingbalance');
// function updatecpendingbalancedisplay(){
//     pendingbalance.textContent= `Pending balance: ${ccbalance}`;
// }