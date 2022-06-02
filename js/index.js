
// async function getListOfSupportedLanguages(){
//     fetch("https://libretranslate.de/translate", {
//         method: "POST",
//         body: JSON.stringify({
//             q: "Hello! Welcome to Ibrahim's page",
//             source: "en",
//             target: "es",
//             format: "text"
//         }),
//         headers: { "Content-Type": "application/json" }
//     }).then((response) => {
        
//     }
// }

async function getGreeting(){
    return fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: "Hello! Welcome to Ibrahim's page",
            source: "en",
            target: "es",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    })
}


async function changeGreetingText(){
    // get supported languages
    // const supportedLanguages = [];
    // const supportedLanguagesResponse = await getListOfSupportedLanguages();
    // if(supportedLanguagesResponse == null){
    //     return;
    // } else {
    //     supportedLanguages = supportedLanguagesResponse.
    // }

    const getGreetingJSON = await getGreeting();
    getGreetingJSON.then((json) => {
        console.log(json.translatedText);
    })
    // if(greetingText != null){
    //     document.querySelector('#dynamic-greeting').textContent = greetingText;
    // }
}

changeGreetingText();

