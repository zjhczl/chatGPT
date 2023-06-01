const express = require('express');
const cors = require("cors");
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");


const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    // apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function tlak() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    });
    return response
}








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

    var data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": "你是谁" }] //messages就是你发的消息是数组形式
    });
    var config = {
        method: 'post',
        url: 'https://api.openai.com/v1/chat/completions',
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
});







// 启动服务器
app.listen(80, () => {
    console.log('Server started on port 80');
});