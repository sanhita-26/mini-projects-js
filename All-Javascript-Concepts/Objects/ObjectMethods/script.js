const person={
    firstName:"Elon",
    lastName:"Musk",
    greet: function greet(){
        console.log("Hello World"); //method greet
    },
    goodbye:function(){
        console.log("good bye");
    }
}
person.greet();
person.goodbye();

function greek(){
    console.log("hellllloooo");
}
person.greeting= greek;
person.greeting();
console.log(person);

//this keyword
// reference to object where this is used access properites
//doesnt work with arrow functions

const businessman={
    name:"Spongebob",
    favfood:"burgers",
    sayHello: function(){console.log("Hi  "+ this.name)},
    sayFavFood: function(){
        console.log("Your Fav food is  :"+ this.favfood)
    }
}


businessman.sayHello();
businessman.sayFavFood();

const manager={
    name:"Patrick",
    favfood:"Pizza",
    sayHello: function(){console.log("Hi  "+ this.name)},
    sayFavFood: function(){
        console.log("Your Fav food is  :"+ this.favfood)
    }
}
console.log(manager.favfood); 
manager.sayFavFood();
manager.sayHello();