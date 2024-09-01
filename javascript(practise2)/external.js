alert("Welcome to our restaurant !!!!");
let entry=prompt(`1.Display menu
2.Order`);
if(entry==1) {
    menu();
}
else if(entry==2) 
{
    alert("Taking order:)");
    menu();
}
else 
{
    prompt("Exiting......");
}

function menu()
{
let choice=    prompt(`1.Idli             $0.5
2.medu vada        $0.5
3.Dosa             $0.5
4.Biryani          $1
Press 1 for odering or 2 for exiting.....`);
}