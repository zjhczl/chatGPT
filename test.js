// const axios = require('axios');

// const postData = {
//     "model": "gpt-3.5-turbo",
//     "messages": [{ "role": "user", "content": "你好" }],
//     "temperature": 0.7
// };
// const config = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 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'
//     }
// };

// axios.post('https://api.openai.com/v1/chat/completions', postData, config)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// const axios = require('axios');
// const url = 'https://api.openai.com/v1/chat/completions';

// const config = {
//     headers: {
//         'content-type': 'application/json',
//         'Authorization': 'Bearer ' + "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",
//         'user-agent': 'PostmanRuntime/7.32.2',
//         accept: '*/*',
//         'postman-token': 'f746a838-7918-4f05-a1ca-e9c5ef4f1610',
//         connection: 'keep-alive',
//     }
// };

// const data = {
//     "model": "gpt-3.5-turbo",
//     "messages": [{ "role": "user", "content": "我是谁" }],
//     "temperature": 0.7
// };

// axios.post(url, data, config)
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// const axios = require('axios');

// axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         prompt: 'Translate the following English text to French: 你好',
//         max_tokens: 60
//     }, {
//         headers: {
//             'Authorization': 'Bearer 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',
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         console.log(response.data.choices[0].text.trim());
//     })
//     .catch(error => {
//         console.error(error);
//     });

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log(process.env.OPENAI_API_KEY)
async function tlak() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    });
    console.log(response)
    return response
}
console.log("--------")
tlak().then((data) => { console.log(data) })