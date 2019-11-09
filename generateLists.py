import requests
from bs4 import BeautifulSoup
import words_api


def getWords(url):
    all_words = []
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'lxml' )
    for i in soup.select('.wordlist-item'):
        all_words.append(i.text)
    write_to_file(all_words)

def write_to_file(all_words):
    fout = open("easy_words.txt", "w")
    for word in all_words:
        if "-" not in word and "(" not in word and ")" and "," not in word:
            fout.write(word + "\n")
    fout.close()
    words_api.main()



url = "https://www.enchantedlearning.com/wordlist/animal.shtml"
getWords(url)
