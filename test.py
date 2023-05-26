import requests  

def chatGPT():
        url="http://127.0.0.1:3000" 
       
        body={
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "hello" }],
    "temperature": 0.7
}
        headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    }
       
        r=requests.post(url=url,data=body,headers=headers)
      
        print(r.text)

chatGPT()
