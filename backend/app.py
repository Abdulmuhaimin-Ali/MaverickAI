from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, MaverickAI!"

@app.route('/api/data', methods=['GET'])
def get_data():
    sample_data = {
        "key1": "value1",
        "key2": "value2"
    }
    return jsonify(sample_data)

if __name__ == '__main__':
    app.run(debug=True)