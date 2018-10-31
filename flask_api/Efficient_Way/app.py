#!/usr/bin/env python3

"""
    Using flask_restful package which is scalable and amintainable in long run then previous ways of doing!!
    Industry_Based Practices building rest_ful api
    Author: Sadip Giri (sadipgiri@bennington.edu)
    Created: 5th July, 2018
"""
from flask import Flask, request
from flask_restful import Resource, Api # using built-in flask restful package for creating api

"""
    Note: Need to handle authentication, exceptional handling - important components of Rest_ful API
"""

app = Flask(__name__)
api = Api(app) # api built on top of app

class HelloWorld(Resource):
    def get(self):
        return {'about': "Hello World!"}

    def post(self):
        some_json = request.get_json()
        return {'you sent': some_json}, 201
    
    # or we'd add delete or put here too!
    # def delete():
    #     pass
    # def put():
    #     pass

class Multi(Resource):
    def get(self, num):
        return {'result': num*10}

api.add_resource(HelloWorld, '/')
api.add_resource(Multi, '/multi/<int:num>') # much cleaner since we don't have to specify certain routes...


if __name__ == '__main__':
    app.run(debug=True)