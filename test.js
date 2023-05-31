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
const axios = require('axios');
const url = 'https://api.openai.com/v1/chat/completions';

const config = {
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + "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",
        'user-agent': 'PostmanRuntime/7.32.2',
        accept: '*/*',
        'postman-token': 'f746a838-7918-4f05-a1ca-e9c5ef4f1610',
        connection: 'keep-alive',
    }
};

const data = {
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "我是谁" }],
    "temperature": 0.7
};

axios.post(url, data, config)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });