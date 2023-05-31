const express = require('express');
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// 定义路由和处理程序
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// 定义路由和处理程序
app.get('/test', (req, res) => {
    res.send('this is a test!');
});



app.post('/', (req, res) => {
    // res.send(req.headers);
    res.send(req.body);
});




// 启动服务器
app.listen(80, () => {
    console.log('Server started on port 80');
});