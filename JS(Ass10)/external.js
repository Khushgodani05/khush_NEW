let upibalance=0;
// const upibalances=document.getElementById('upibalances');
function showupibalance()
{
    alert(`UPI balance is ${upibalance}`);
}
// const withdrawmoney=document.getElementById('withdrawmoney');
function withdrawupimoney()
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
    }
}
function depositmoney()
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
    }
}

let ccbalance=100000;
let itemamt=0;
let paybill=function(){
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
        const element=document.getElementById("pendingbalance");
        element.innerHTML( `Pending balance: ${ccbalance}`);
    }
}

let buyitem= () => {
    itemamt=Number(prompt("Enter the amount of item you want to buy"));
    if(itemamt==0 ||itemamt==NaN ){
        alert("Purchase unsuccessful.");
    }
    else if(itemamt>ccbalance){
        alert("Insufficient balance.");
    }
    else{
        alert(`${itemamt} item purchased successfully.`);
    }
}

function checklimit(){
    alert(`Your current limit is 100000.`);
}

function showCCbalance()
{
    alert(`Your current balance is ${ccbalance}`);
}
// const pendingbalance=document.createElementById('pendingbalance');
// function updatecpendingbalancedisplay(){
//     pendingbalance.textContent= `Pending balance: ${ccbalance}`;
// }