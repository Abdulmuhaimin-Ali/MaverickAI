from flask import Blueprint, request, jsonify
from supabase_client import supabase

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        response = supabase.auth.sign_up(email=email, password=password)
        return jsonify({"message": "User registered successfully", "user": response.user}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@auth_blueprint.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        response = supabase.auth.sign_in_with_password(email=email, password=password)
        return jsonify({"message": "Login successful", "user": response.user}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
