function largernumber(num){
num=num.map(function(e){
   return e.toString()
})
.sort(function(a,b){
if(a+b>b+a){
    return-1
}
else{
    return 1
}
})
   
   return num.join('')

}

var num=[54, 546, 548, 60];
 console.log(largernumber(num))
