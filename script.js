//With rest parameter
function rest(...Name){
    console.log(Name);
}
rest("Rakib", "Akib", "Siam", "Rabby");

// Without rest parameter
function name(...number){
    console.log(number);
}
name(1,2,3,4,5,6,7,8,9,10);


function rest1(a,b,...rakib){
    console.log(a,b,rakib);
}
rest1(1,2,3,4,5,6,7,8,9);