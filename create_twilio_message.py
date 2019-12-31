from twilio.rest import Client
import os
from dotenv import load_dotenv

# Create auth and configure numbers
project_folder = os.path.expanduser('~/Google Drive/Programming/twilio-test')
load_dotenv(os.path.join(project_folder, '.env'))
account_sid = os.getenv('ACCOUNT_SID')
auth_token = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

from_number = os.getenv('FROM_NUMBER')

def create_twilio_message(body_message, to_number):
    message = client.messages \
                        .create(
                            body = body_message,
                            from_ = from_number,
                            to = to_number
                        ) 
    return(message)