const passwordBox= document.getElementById("Password");
const length= 12;
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%&*()^{}><_=";

const allChars= upperCase+lowerCase+numbers+symbols;

function createPassword(){
    let Password="";
    Password += upperCase[Math.floor(Math.random()* upperCase.length)];
    Password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    Password += numbers[Math.floor(Math.random()* numbers.length)];
    Password += symbols[Math.floor(Math.random()* symbols.length)];
    while(length>Password.length){
        Password+= allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = Password;
}


async function copy() {
  const tip = document.getElementById("copyTip");

  await navigator.clipboard.writeText(passwordBox.value);

  tip.classList.add("show");
  setTimeout(() => tip.classList.remove("show"), 1000);
}
