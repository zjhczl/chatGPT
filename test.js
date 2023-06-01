const express = require('express');
const cors = require("cors");
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");


const app = express();
app.use(cors());
app.use(express.json());


app.post("/chart", async(req, res) => {
    // console.log('=================== req', req.body)
    var data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": "你好" //messages就是你发的消息是数组形式
    });
    var config = {
        method: 'post',
        url: 'https://api.openai-proxy.com/v1/chat/completions',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json',
        },
        data: data
    };
    axios(config)
        .then(function(response) {
            // console.log(JSON.stringify(response.data));
            res.send({ code: 200, msg: response.data })
        })
        .catch(function(error) {
            console.log(error);
        });
})