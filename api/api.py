
from flask import Flask, request
import smtplib


OWN_EMAIL = 'skcjdev@gmail.com'
OWN_PASSWORD = '8754175920Sk'

app = Flask(__name__)


@app.route("/api/mail", methods=["POST"])
def contact():
    data = request.get_json()
    send_email(data["fname"], data["email"], data["msg"])
    return {"status": 200}


def send_email(name, email, message):
    email_message = f"Subject:New Message\n\nName: {name}\nEmail: {email}\nMessage:{message}"
    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(OWN_EMAIL, OWN_PASSWORD)
        connection.sendmail(OWN_EMAIL, "sunilskcj@gmail.com", email_message)

@app.route("/api/mail", methods=["GET"])
def test():
    return "Connected"




if __name__ = "__main__":
    app.run()
    