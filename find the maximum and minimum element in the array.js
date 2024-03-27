function findMaxMin(arr) {
    if (arr.length === 0) {
        return [null, null]; 
    }

    let maxNum = arr[0];
    let minNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        } else if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }

    return [maxNum, minNum];
}


const inputArr = [54, 546, 548, 60];
 [maxNum, minNum] = findMaxMin(inputArr);

console.log("max"+" " +maxNum, "min"+" " +minNum);
