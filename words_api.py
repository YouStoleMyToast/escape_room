import random
import requests

all_words = {}
words_with_images = {}

def read_words_from_file(file_name):
    fin = open(file_name, "r")
    for line in fin:
        all_words[line.strip("\n")] = line.strip("\n")
    fin.close()

def filter_words_without_images():
    for word in all_words:
        response = requests.get(
            'https://owlbot.info/api/v3/dictionary/{}'.format(word),
            headers={'Authorization': 'Token 9eadc1086b6feb94c2ceded157e3cf25afd87bb1'},
        )
        json_response = response.json()
        if ( len(json_response) == 3 ):
            print(json_response)
            if ( json_response['definitions'][0]['image_url'] != None ):
                words_with_images[word] = word
    add_text_file(words_with_images)

def add_text_file(words):
    fout = open("WordsWithImages.txt", "a")
    for word in words:
        fout.write(word + "\n")
    fout.close()

def main():
    read_words_from_file("easy_words.txt")
    filter_words_without_images()

#main()


