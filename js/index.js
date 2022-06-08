
async function getListOfSupportedLanguages(){
    let result =  await fetch("https://libretranslate.de/languages", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => response.json())
    .then((data) => {return data})
    return result;
}

async function getGreeting(languageCode){
    let result = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: "Hi!",
            source: "en",
            target: languageCode,
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => response.json())
    .then((data) => {return data.translatedText})
    return result;
}

function findRandomLanguageCode(languages){
    let upper = languages.length;
    let randomIndex = Math.floor(Math.random() * upper)
    return languages[randomIndex].code;
}

function typeWriterEffect(greeting, action){
    if(action === "type"){
        type(0, greeting);
    }
}

async function type(i, greeting){
    let prom = await new Promise((resolve, reject) => {
        const loop = () => {
            if(i < greeting.length){
                document.querySelector('#dynamic-greeting').textContent += greeting.charAt(i);
                i++;
                setTimeout(loop, 150);
            } else {
                resolve("done");
            }
        }
        loop()
    })
    setTimeout(() => {
        backspace(i, greeting)
    }, 4000)
}

function backspace(i, greeting){
    const loop = () => {
        if(i >= 0){
            document.querySelector('#dynamic-greeting').textContent = greeting.substring(0, i);
            i--;
            setTimeout(loop, 150);
        }
    }
    loop()
}



async function changeGreetingText(){
    //get languages
    let languages = await getListOfSupportedLanguages()
    let randomLanguageCode = findRandomLanguageCode(languages);

    // get greeting text
    let greetingText = await getGreeting(randomLanguageCode);
    type(0, greetingText);
}

function changeGreetingProcess(delay){
    const loopFunc = () => {
        changeGreetingText();
        setTimeout(loopFunc, delay);
    }
    loopFunc();
}

changeGreetingProcess(7000);



