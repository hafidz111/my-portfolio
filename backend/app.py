import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app)

app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME=os.getenv('MAIL_USERNAME'),
    MAIL_PASSWORD=os.getenv('MAIL_PASSWORD')  
)

mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    msg = Message(
        subject=f"New contact from {name}",
        sender=app.config['MAIL_USERNAME'],
        recipients=['yourdestination@example.com'] 
    )
    msg.body = f"""
    You have a new message from your portfolio contact form:

    Name: {name}
    Email: {email}

    Message:
    {message}
    """
    mail.send(msg)
    return jsonify({"success": True}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)
