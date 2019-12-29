from flask import Flask, request
from twilio.rest import Client
import os
from dotenv import load_dotenv
from twilio.twiml.messaging_response import MessagingResponse
import json

# Set up authentication
project_folder = os.path.expanduser('~/Google Drive/Programming/twilio-test')
load_dotenv(os.path.join(project_folder, '.env'))
account_sid = os.getenv('ACCOUNT_SID')
auth_token = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

# Define the app
app = Flask(__name__)

@app.route("/", methods = ['GET'])
def home():
    return "Go to /sms-steve to send Steve an SMS."

# Send a message to Steve
@app.route("/sms-steve", methods = ['GET', 'POST'])
def sms_steve():
    custom = False

    # Handle the input and configure the message
    try:
        request_data = json.loads(request.data)
        data = request_data['message']
        message = data
        custom = True
    except Exception:
        message = "Someone sent an SMS, but there was no custom message."

    # Phone number variables
    from_number = os.getenv('FROM_NUMBER')
    to_number = os.getenv('TO_NUMBER')

    # Send the message
    try:
        message = client.messages \
                        .create(
                            body = message,
                            from_ = from_number,
                            to = to_number
                        )    

        print(message.sid)

        if custom:
            return "Custom message sent to Steve."
        else:
            return "Default message sent to Steve."
    
    except Exception as e:
        return e

# Reply to inbound messages
@app.route("/sms", methods = ['GET', 'POST'])
def reply_to_sms():
    resp = MessagingResponse()

    resp.message("Steve got this SMS. Did he read it? Who knows?")

    return str(resp)

if __name__ == "__main__":
    app.run(debug = True)