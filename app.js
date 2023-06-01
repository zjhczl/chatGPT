const express = require('express');
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    // apiKey: "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",
});



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


app.post('/test', async(req, res) => {

    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: "Hello world" }],
    // });
    // console.log(completion.data.choices[0].message);

    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
    }).then((completion) => { console.log(completion.data.choices[0].message); });


});



// 启动服务器
app.listen(80, () => {
    console.log('Server started on port 80');
});