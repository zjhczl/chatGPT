const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const axios = require('axios');

// 定义路由和处理程序
// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });
app.use(express.json());
app.post('/', (req, res) => {
    res.send('Hello, Express!');
    console.log(req.headers)
    console.log(req.body)
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
});




// 启动服务器
app.listen(3000, () => {
    console.log('Server started on port 3000');
});