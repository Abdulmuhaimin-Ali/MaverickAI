from flask import Blueprint, request, jsonify
from supabase_client import supabase

data_blueprint = Blueprint('data', __name__)

@data_blueprint.route('/add-item', methods=['POST'])
def add_item():
    data = request.get_json()
    try:
        response = supabase.table('items').insert(data).execute()
        return jsonify({"message": "Item added successfully", "data": response.data}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@data_blueprint.route('/get-items', methods=['GET'])
def get_items():
    try:
        response = supabase.table('items').select('*').execute()
        return jsonify({"data": response.data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
