
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
            q: "Hello! Welcome to Ibrahim's page",
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
    let upper = languages.length + 1;
    let randomIndex = Math.floor(Math.random() * upper)
    return languages[randomIndex].code;
}
async function changeGreetingText(){
    //get languages
    let languages = await getListOfSupportedLanguages()
    let randomLanguageCode = findRandomLanguageCode(languages);

    // get greeting text
    let greetingText = await getGreeting(randomLanguageCode);
    document.querySelector('#dynamic-greeting').textContent = greetingText;
}

function changeGreetingProcess(delay){
    const loopFunc = () => {
        changeGreetingText();
        setTimeout(loopFunc, delay);
    }
    loopFunc();
}

changeGreetingProcess(5000)

