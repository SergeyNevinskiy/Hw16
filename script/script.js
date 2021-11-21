const arr = [1, 2, 3, -1, -2, -3];

function positive(arr) {
    const arrNew = [];

if (arr.length === 0) {
    return alert("Array is empty");
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
    arrNew.push(arr[i]);
} 
}
if (arrNew.length === 0) {
    return null;
}
    return arrNew;
}

console.log(positive (arr));