#!/usr/bin/env python3

"""
    This is very simple way how we could use Flask for building an API
    Author: Sadip Giri (sadipgiri@bennington.edu)
    Date: 3rd July, 2018
"""

from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/") # endpoints  
def hello():
    # return "Hello World!"   # this will return html content when we curl so need to use jsonify to return in json format
    return jsonify({"about": "Hello Worl!"})

if __name__ == '__main__':
    app.run(debug=True)