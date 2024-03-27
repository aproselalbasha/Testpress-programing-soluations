function isPrime(n){
if(n<2){
return `${n} NO`
}
for(let i=2;i<n;i++){
if(n%i===0)
{
return `${n} NO`
}
}
return `${n} YES`}
console.log(isPrime(2))
