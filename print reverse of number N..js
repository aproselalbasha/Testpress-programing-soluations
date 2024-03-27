function revese(input){
if(input==="0"){
return "0"
}
else{
let  output=input.split('').reverse().join('');
return parseInt(output,10).toString()
 }
}
var input="100";
console.log(revese(input))
