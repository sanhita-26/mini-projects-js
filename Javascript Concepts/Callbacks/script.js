//callback is a function thats passed as an argument to another function

//asynchronous programming 

hello(goodbye);
wait(leave);


function hello(callback){
    console.log("Hello");
    callback();
}

function wait(callback){
    console.log("Wait");
    callback();
}

function leave(){
    console.log("Leave");
}

function goodbye(){
    console.log("Goodbye!");
}


//Example 2

sum (displayonscreen,2,6777);

function sum(callback,c,d){
     let result=c+d;
     callback(result);
 }

 function dispConsole(result){
     console.log(result);
 }

 function displayonscreen(result){
    document.getElementById("myH1").textContent = result;
    
 }


//example 3

function hi (x,callback){
    let ans= x**x;
    callback(ans);
}

hi(3,dispConsole)

function dispConsole(ans){
    console.log(ans);
}

//anonymous functions
let y= function(p,q){
    return p-q;
}
console.log(y(90,70));  //store in variable then call variable 
console.log(y(60,12));


setTimeout(function(){
    console.log("Hello San");
},2000)


//Recursive Functions

//Syntax
// function myfn(){
//     if(conditon){ prevents recusrive function running infinitely 
//     myfn();}
//     else{
//         //stop
//     }
// }
// myfn();

function countDown(num){
    console.log(num);
    num--
    if(num>=0){
        countDown(num);
    }

}
countDown(5);