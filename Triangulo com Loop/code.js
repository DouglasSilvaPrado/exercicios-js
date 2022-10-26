function loop() {
    // code
    let hash = '#'
    for (let index = 1; index <= 7; index++){
        console.log(hash);
        hash += '#'
    }
}

loop()

module.exports = loop