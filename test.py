import requests  
import os
import sys
import openai
from flask import Flask, request, jsonify
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

def talk(message):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    r = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "user", "content": message}
        ]
    )
    print(r['choices'][0]['message']['content'])
message = sys.argv[1]
print(message)
talk(message)



# app = Flask(__name__)

# @app.route('/api', methods=['POST'])
# def api():
#     data = request.get_json() # 获取POST请求中的数据
#     # 在这里编写你的业务逻辑，处理数据
#     message = data["messages"][0]["content"]
#     response = {
#     "id": "chatcmpl-7M9toeq4Bip79S0Zw77EON5jjayry",
#     "object": "chat.completion",
#     "created": 1685515624,
#     "model": "gpt-3.5-turbo-0301",
#     "usage": {
#         "prompt_tokens": 12,
#         "completion_tokens": 27,
#         "total_tokens": 39
#     },
#     "choices": [
#         {
#             "message": {
#                 "role": "assistant",
#                 "content": message
#             },
#             "finish_reason": "stop",
#             "index": 0
#         }
#     ]
# } # 构建响应数据
#     return jsonify(response) # 返回响应数据

# if __name__ == '__main__':
#     app.run(debug=True)