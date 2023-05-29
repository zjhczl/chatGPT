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
openai.organization = "org-2Rtu2f0o58MCeWGZNfE2MpHw"
openai.api_key = os.getenv("OPENAI_API_KEY")
ms =openai.Model.list()
print(ms)