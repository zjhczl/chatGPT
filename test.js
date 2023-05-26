const axios = require('axios');

const postData = {
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "你好" }],
    "temperature": 0.7
};
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    }
};

axios.post('https://api.openai.com/v1/chat/completions', postData, config)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });