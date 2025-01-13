from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase_client import supabase

app = Flask(__name__)
CORS(app)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data['email']
    password = data['password']
    response = supabase.auth.api.sign_up_with_email(email, password)
    if response.get('error'):
        return jsonify({'error': response['error'].message}), 400
    return jsonify({'message': 'User created successfully', 'user': response['user']}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    response = supabase.auth.api.sign_in_with_email(email, password)
    if response.get('error'):
        return jsonify({'error': response['error'].message}), 400
    return jsonify({'message': 'User logged in successfully', 'session': response['session']}), 200

@app.route('/users', methods=['GET'])
def get_users():
    response = supabase.table('users').select('*').execute()
    if response.get('error'):
        return jsonify({'error': response['error'].message}), 400
    return jsonify(response['data'])

if __name__ == '__main__':
    app.run(debug=True)