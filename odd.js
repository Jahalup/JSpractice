function odd(x,y) {
    for (let i=x; i<=y; i++) {
        if ((i%2) !== 0) {
            console.log(i + " is odd")
        }
        else {
            console.log(i +" is even")
        }
    }
}

console.log(odd(1, 100));