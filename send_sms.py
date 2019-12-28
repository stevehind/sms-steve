# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import os
from dotenv import load_dotenv

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure

project_folder = os.path.expanduser('~/Google Drive/Programming/twilio-test')
load_dotenv(os.path.join(project_folder, '.env'))

# Set up authentication
account_sid = os.getenv('ACCOUNT_SID')
auth_token = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

# Phone number variables
from_number = os.getenv('FROM_NUMBER')
to_number = os.getenv('TO_NUMBER')

# Configure the message
message = "Enjoy this text message"

# Send the message
message = client.messages \
                .create(
                     body = message,
                     from_ = from_number,
                     to = to_number
                 )

print(message.sid)
