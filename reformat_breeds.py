import json

with open('frontend/public/breeds.json', 'rt') as file:
    j = json.load(file)
    new = []

    for breed in j:
        if 'temperament' in breed:
            # breed['temperament'] = breed['temperament'].split(', ')
            new.append(breed)

    with open('frontend/public/breeds-reformatted.json', 'wt') as file:
        json.dump(new, file)