import requests  

# def chatGPT():
#         url="http://127.0.0.1:3000" 
       
#         body={
#     "model": "gpt-3.5-turbo",
#     "messages": [{ "role": "user", "content": "hello" }],
#     "temperature": 0.7
# }
#         headers = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
#         'Content-Type': 'application/json',
#         'Authorization': 'Bearer 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'
#     }
       
#         r=requests.post(url=url,data=body,headers=headers)
      
#         print(r.text)

# chatGPT()
import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")
r = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"}
    ]
)
print(r)