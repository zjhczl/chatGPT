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

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-2Rtu2f0o58MCeWGZNfE2MpHw",
    apiKey: process.env.OPENAI_API_KEY,
});
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
console.log(configuration)