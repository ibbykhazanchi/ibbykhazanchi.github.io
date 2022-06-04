let i = 0
async function stuff(){
    let prom = await new Promise((resolve, reject) => {
        const loop = () => {
            if(i < 5){
                i++;
                console.log("thinking")
                setTimeout(loop, 500)
            } else {
                resolve("done")
                // return
            }
        }
        loop();
    })
    // await prom
    console.log("balle")
}
stuff()