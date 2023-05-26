import requests  

def chatGPT():
        url="https://api.openai.com/v1/chat/completions" 
       
        body={
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "你好" }],
    "temperature": 0.7
}
        headers ={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    }
       
        r=requests.post(url=url,data=body,headers=headers)
      
        print(r.text)

chatGPT()
