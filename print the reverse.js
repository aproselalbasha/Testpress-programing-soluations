
  var inputStr="code";

if (inputStr.length >= 1 && inputStr.length <= 100 && /^[a-z]+$/.test(inputStr)) {
   
    var output=inputStr.split('').reverse().join('')
    console.log(output)
}
 else {
    console.log("Input string doesn't meet the constraints.");
}
