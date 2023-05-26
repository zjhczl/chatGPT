import requests   #导包

def chatGPT():
        url="https://api.openai.com/v1/chat/completions" #拼接地址
        #参数
        body={
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "你好" }],
    "temperature": 0.7
}
        headers ={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    }
        #发送请求
        r=requests.post(url=url,data=body,headers=headers)
        #输出返回
        print(r.text)
# print(getIp())
chatGPT()
