// //OBJECTS IN JAVASCRIPT


// const object_name={
//     key1:value1,
//     key2:value2
// }

const person={
    firstName:"Elon",
    lastName:"musk",
    age:35,
    address:{
        street:"Agni Road",
        state:"Kerala",
        country:"India",
        Pincode:"123111"
    }
}

console.log(person.address.state);

//to see if property exisits in object use in oeprator

console.log("age" in person);
console.log("continent" in person);


console.log(person);
console.log(person.age); //#1st way of accessing using dot prints only age 
console.log(person["age"]); 
console.log(person["firstName"]); 
//#2 using brackets must add double or single quotes and square bracket
//update 1st name

person.firstName="Mr. Abdul";
person.lastName="Kalam"
console.log(person["firstName"]);
console.log(person["lastName"]);

//add new property
person.company="ISRO";

delete person.age;

console.log(person);


//For in loop
for(let prop in person){
    console.log(prop);
}
person["prop"]


//with new keyword
const personsci= new Object();
personsci.firstName="elon";
personsci.lastName="Musk";;

console.log(personsci);
