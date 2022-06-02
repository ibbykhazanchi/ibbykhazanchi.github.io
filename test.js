function loopFunction(delay){
    const loop = () => {
        console.log("poti")
        setTimeout(loop, delay);
    }
    loop()
}

loopFunction(1000)