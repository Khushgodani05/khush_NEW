let upibalance=0;
const thist=document.querySelector("#thist");
thist.style.color="green";
thist.style.fontSize="22px";
thist.style.fontWeight="solid";
let showbalance=document.querySelector("#upibalance");
let transaction=[`UPI SLIP:
    `];
let dval=document.querySelector("#player");
let dmoneys=document.querySelector("#deposit");
dval.addEventListener("click",function(){
    let dmoney=parseFloat(dmoneys.value);
    if(dmoney===0)
        {
            document.querySelector(".error1").classList.add("hide");
        }
        else if(dmoney===NaN){
            document.querySelector(".error1").classList.add("hide");
        }
    else
    {
        upibalance+=dmoney; 
        document.querySelector(".error1").classList.remove("hide");
        showbalance.innerHTML=`Balance:${upibalance}`
        transaction.push(`
+${+dmoney} Deposited Successfully                 Remaining Balance ${upibalance}
`);
       thist.innerHTML=transaction;  
       dmoneys.value==='';
    }
}
);

let wval=document.querySelector("#play");
let wmoneys=document.querySelector("#with");
wval.addEventListener("click",function(){
    let wmoneys=document.querySelector("#with");
    let wmoney=parseFloat(wmoneys.value);
     if(upibalance===0 || wmoney>upibalance)
         { 
            document.querySelector(".error").innerHTML="Balance is insufficient!!!";
            document.querySelector(".error").classList.add("hide");
         }
    else if(wmoney===NaN || upibalance===0 ||wmoney===0){
        document.querySelector(".error").innerHTML;
        document.querySelector(".error").classList.add("hide");
    }
     else 
     {
         upibalance-=wmoney;
         document.querySelector(".error").classList.remove ("hide");
         showbalance.innerHTML=`Balance:${upibalance}`
         transaction.push(`
${-wmoney} Withdrawn Successfully              Remaining Balance  ${upibalance}
`);
         thist.innerHTML=transaction; 
         wmoneys.value==='';
     }
 });


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
       let wmoneys=document.querySelector("#with");
       wmoney=parseFloat(wmoneys.value);
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
        let dmoneys=document.querySelector("#deposit");
        dmoney=parseFloat(dmoneys.value);
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



// wval.addEventListener("click",upi.withdrawupimoney());




// const withdrawmoney=document.getElementById('withdrawmoney');

let ccbalance=100000;
let itemamt=0;
let buyitem=0;
let ccbalances=document.querySelector("#ccbalances");
const ccthist=document.querySelector("#ccthist");
ccthist.style.color="green";
ccthist.style.fontSize="22px";
thist.style.fontWeight="solid";
let ctransaction=[`CREDIT CARD SLIP:
    Transaction               Balance`]
let ccplayer=document.querySelector("#ccplayer");
let ccbuy=document.querySelector("#ccbuy");
ccplayer.addEventListener("click",function(){
    {
        itemamt=parseFloat(ccbuy.value);
        if(itemamt==0 ||itemamt==NaN ){
            document.querySelector(".error4").classList.add("hide");
        }
        else if(itemamt>ccbalance){
            document.querySelector(".error4").classList.add("hide");
        }
        else{
            ctransaction.push(`Item purchased successfully                ${itemamt}`);
            buyitem=itemamt;
            ccthist.innerHTML=ctransaction;
            document.querySelector(".error4").classList.remove("hide");            
        }
    }
});

//paybill
let ccplay=document.querySelector("#ccplay");
let ccpay=document.querySelector("#ccpay");
ccplay.addEventListener("click",function(){
   
        itemamt=parseFloat(ccpay.value);
        if(itemamt==0 ||  itemamt==NaN ||buyitem===0 ){
            document.querySelector(".error3").classList.add("hide");
        }
        else if(itemamt>ccbalance ||ccbalance===0)
            {
                document.querySelector(".error3").innerHTML="Balance is insufficient";
                document.querySelector(".error3").classList.add("hide");
            }
        else {
            ccbalance-=itemamt;
            buyitem-=itemamt;
            ctransaction.push(`${-itemamt} paid                 ${ccbalance}`);
            ccthist.innerHTML= ctransaction;
            ccbalances.innerHTML=`Balance: ${ccbalance}`;
            document.querySelector(".error3").classList.remove("hide");
    }

});






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