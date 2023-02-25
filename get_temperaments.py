import json

temps = []

with open('pets.json', 'rt') as file:
    j = json.load(file)

    for breed in j:

        if 'temperaments' in breed:
            temps.extend(breed['temperaments'])

with open('temperaments.json', 'wt') as file:
    l = list(set(temps))
    l.sort()
    json.dump(l, file)