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
    axios.post('ssr2.zjhczl.xyz:80', {
            data: {
                // 请求 body 数据
            },
            headers: {
                // 请求头数据
            }
        })
        .then(response => {
            // 处理响应数据
            console.log("test.....")
        })
        .catch(error => {
            // 处理请求错误
            console.log("err.....")
        });
});




// 启动服务器
app.listen(80, () => {
    console.log('Server started on port 80');
});