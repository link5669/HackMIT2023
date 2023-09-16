import requests
import time

API_URL = "https://api-inference.huggingface.co/models/jonatasgrosman/wav2vec2-large-xlsr-53-english"
headers = {"Authorization": "Bearer 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"}

def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

output = query("short_lecture.mp3")
print(output)

# import requests
# import asyncio

# API_URL = "https://api-inference.huggingface.co/models/jonatasgrosman/wav2vec2-large-xlsr-53-english"
# headers = {"Authorization": "Bearer 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"}

# async def query(filename):
#     with open(filename, "rb") as f:
#         data = f.read()
#     response = requests.post(API_URL, headers=headers, data=data)
#     return await response.json()

# async def transcribe(filename):
#   output = await query(filename)
#   print(output)

# if __name__ == "__main__":
#     try:
#       asyncio.run(transcribe("practice.mp3"))
#     except :
#         pass
    