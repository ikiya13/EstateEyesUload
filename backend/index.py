from flask import Flask, request

api = Flask(__name__)


@api.route("/")
def hello():
    return "Hello World!"



if __name__ == "__main__":
    api.run(port=5000, ssl_context="adhoc", debug=True)