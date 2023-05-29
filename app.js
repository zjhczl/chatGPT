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
});




// 启动服务器
app.listen(80, () => {
    console.log('Server started on port 80');
});