#pip install eel
from operator import inv
from pickle import TRUE
from unittest import result
import eel

data = {
    "Sandell": "Sandello54",
    "Flory": "Paola234",
}

sign = "isfalse"


@eel.expose
def login(un,pw):
    global sign
    acess = False
    print(acess)
    while acess == False:
        if un in data:
            password = data[un[0:]]
            print("Username found")
            if pw == password:
                print("signed in")
                sign = "istrue"
                acess = True
                print(sign)
            else:
                print("wrong password")
                break
        else:
            print("Username not found")
            break

@eel.expose
def validation(l):
    if sign == "istrue":
        l = "isstrue"
        return l
    else:
        l =  "issfalse"
        return l


@eel.expose
def searchbar(inp):
    if inp in data:
        inp = "Found U"
        return inp
    else:
        inp = "Not here"
        return inp






eel.init('GUI')
eel.start('index.html', mode='default')


@eel.expose
def profile(username,loginname):
    username = loginname
    return username and loginname
    