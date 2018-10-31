#!/usr/bin/env python3

"""
    This is a simple way how we could use GET, POST methods using Flask for building an API
    Author: Sadip Giri (sadipgiri@bennington.edu)
    Date: 3rd July, 2018
"""

"""
    Note: But for the large projects - this could be hard option to go for [Issue: Code Maintainibility, ]
            So we could use REST API using Flask_RESTful - Industry based and best practices in building API using Flask
"""

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        some_json = request.get_json()
        return jsonify({'you sent': some_json}), 201
    else:
        return jsonify({"about": "Hello World!"})

# endpoint that accepts the value
@app.route('/multi/<int:num>', methods=['GET'])
def get_multiply10(num):
    return jsonify({'result': num*10})

if __name__ == '__main__':
    app.run(debug=True)