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

axios.post('http://127.0.0.1:3000', postData, config)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });