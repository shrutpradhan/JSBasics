function add(a,b){
   let c=a+b;
   return  c
}
function fun(a,b,incoming_fun){
    return incoming_fun(a,b)
}
//function inside a function=>callback structure
//function is being treated as an argumnent=>first class citizen
let result=fun(3,4,add)
    console.log(result);


