var arr = ['A', 'B', 'C', 'D'];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr[2] = 3;

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push('E');

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
