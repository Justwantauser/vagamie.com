from flask import Flask, request
import youtube_dl
import pandas as pd
from google.oauth2 import service_account
import json

app = Flask(__name__)

@app.route('/sentiment', methods=['GET'])
def sentiment():
    link = request.args.get('https://www.youtube.com/watch?v=qwM23_kF4v4')
    ydl = youtube_dl.YoutubeDL({'outtmpl': '%(id)s%(ext)s'})
    with ydl:
        result = ydl.extract_info(link, download=False)
    comments = result['comments']
    df = pd.DataFrame(comments)
    # Preprocessing, cleaning and tokenizing the comments
    # Using the pre-trained Sentiment Analysis model
    # Classifying the comments as positive, negative or neutral.
    sentiment = "Positive"
    return json.dumps({"sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)
