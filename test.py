import requests  

def chatGPT():
        url="https://api.openai.com/v1/chat/completions" 
       
        body={
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "hello" }],
    "temperature": 0.7
}
        headers ={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    }
       
        r=requests.post(url=url,data=body,headers=headers)
      
        print(r.text)

chatGPT()
