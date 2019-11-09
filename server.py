from http.server import BaseHTTPRequestHandler, HTTPServer
import words_api
import json
import random
import requests


class RequestHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        # this is for preflighted requests
        self.send_response(200)
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-type")
        self.end_headers()

    def do_GET(self):
        parts = self.path.split('/')[1:]
        collection = parts[0]
        if collection == "getWord":
            self.handleGetWord()
        else:
            self.handleNotFound()

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        # self.send_header("Access-Control-Allow-Credentials", "true")
        BaseHTTPRequestHandler.end_headers(self)

    def handleNotFound(self):
        self.send_response(404, "Can't find a word")
        self.send_header("Content-type", "text/plain")
        self.end_headers()

    def handleGetWord(self):
        word = self.getWordForClient()
        if word == None:
            self.send_response(404, "Not Found")
            self.send_header("Content-type", "text/plain")
            self.end_headers()
        else:
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(bytes(json.dumps(word), "utf-8"))

    def getWordForClient(self):
        words = []
        # read in from file into array
        fin = open("WordsWithImages.txt", "r")
        for line in fin:
            words.append(line.strip("\n"))
        fin.close()
        # select random index
        rand_index = random.randint(0, len(words))
        # request word from the owlbot api
        random_word = words[rand_index]
        response = requests.get(
            'https://owlbot.info/api/v3/dictionary/{}'.format(random_word),
            headers={'Authorization': 'Token 9eadc1086b6feb94c2ceded157e3cf25afd87bb1'},
        )
        json_response = response.json()
        word = {}
        word['word'] = random_word
        word['type'] = json_response['definitions'][0]['type']
        word['definition'] = json_response['definitions'][0]['definition']
        word['image_url'] = json_response['definitions'][0]['image_url']
        return word






def run():
    listen = ("127.0.0.1", 8080)
    #listen = ("144.38.184.107", 3410)
    server = HTTPServer(listen, RequestHandler)

    print("Listening...")
    server.serve_forever()

run()


