
let choice,result;
let a= parseInt(prompt("Enter first number:"));
let b= parseInt(prompt("Enter second number:"));
let operation=parseInt(prompt(`Enter the operation:
    1.addition
    2.subraction
    3.multiplication
    4.division`));

switch(operation)
{
    case 1 :
       if(operation==1) {
        choice=confirm(a +  "+" + b);
        if(choice==true) {
         result=a+b;
         alert(result);  
        }
        else 
            alert("EXITING........");
        break;
       }
     
     case 2:if(operation==2) {
        choice=confirm(a + "-"+ b);
        if(choice==true) {
        result=a-b;
      alert(result);
        }
      else 
            alert("EXITING........");  
     
     break;
     }
     case 3:if(operation== 3) {
    choice=confirm(a + "*" +b);
     if(choice==true) {
      result=a*b;
      alert(result);  
     }
     else 
            alert("EXITING........");
     break;
     }
     case 4:if(operation==4) {
        choice=confirm(a + "/" +b);
     if(choice==true) {
      result=a/b;
      alert(result);  
     }
     else 
            alert("EXITING........");
     break;
    }
     default :
     prompt("invalid selection:(((");
     break;
  

}
