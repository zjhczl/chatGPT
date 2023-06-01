const express = require('express');
const cors = require("cors");
// const bodyParser = require('body-parser');


const app = express();
app.use(cors());

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// 定义路由和处理程序
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// 定义路由和处理程序
app.get('/test', (req, res) => {
    res.send('this is a test!');
});

app.post('/test', (req, res) => {

    res.send(req)

});


app.post('/', (req, res) => {
    // res.send(req.headers);
    res.send(req.body);
});


app.post('/chat', (req, res) => {
    bdy = req.body
    if ("message" in bdy) {
        content = bdy["message"]
        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: content }],
        }).then((completion) => {
            m = completion.data.choices[0].message;
            res.send(m["content"])
        });
    } else {

        res.send(req)
    }



});

app.get('/chat', (req, res) => {

    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "你是谁" }],
    }).then((completion) => {
        m = completion.data.choices[0].message;
        res.send(m["content"])
    });


});


// 启动服务器
app.listen(80, () => {
    console.log('Server started on port 80');
});