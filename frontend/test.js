

setTimeout(() => {
    console.log("time");
}, 1000);



const promise = new Promise((resuve, reject) => {
    if (true) {
        resuve();
    } else {
        reject();
    }
})

console.log("after time out");