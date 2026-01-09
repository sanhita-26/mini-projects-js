const Checkbox=document.getElementById("mycheck");
const Visa=document.getElementById("visa");
const Mastercard=document.getElementById("mastercard");
const Paypal=document.getElementById("paypal");
const Submit=document.getElementById("mySubmit");
const Message= document.getElementById("message");
const messageTwo=document.getElementById("messagetwo");
const messageThree=document.getElementById("messageThree");

mySubmit.onclick = function(){
    if(mycheck.checked){
        Message.textContent=`You are Subbed`;
    }
    else{
        Message.textContent=`You are NOT Subbed`;
    }
    if(Visa.checked){
        messageTwo.textContent=`You are paying with Visa`;
    }
    if(Mastercard.checked){
        messageTwo.textContent=`You are paying with Mastercard`;
    }
    if(Paypal.checked){
        messageTwo.textContent=`You are paying with Paypal`;
    }
    else{
        messageThree.textContent=`select something mad`;
    }
}
