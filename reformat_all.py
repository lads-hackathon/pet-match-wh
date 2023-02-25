import json
from dataclasses import dataclass

@dataclass
class Pet:
    name: str
    id: int
    weight_low_lbs: int
    weight_high_lbs: int
    temperaments: list[str]
    description: str
    image: str
    life_span_low: int
    life_span_high: int
    type: str
    # https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg

all_data = []
cats = []
dogs: list[dict] = []
i = 0

def capitalize(l: list[str]):
    l2 = []

    for s in l:
        l2.append(s[0].upper() + s[1:])
    
    return l2
        

# Load
with open('cats.json', 'rt', encoding='utf-8') as file:
    cats = json.load(file)

with open('dogs.json', 'rt', encoding='utf-8') as file:
    dogs = json.load(file)

# Format
for cat in cats:
    weight = cat['weight']['imperial'].replace(' ', '').split('-')
    lf = cat['life_span'].replace(' ', '').split('-')

    if 'reference_image_id' not in cat:
        continue

    i += 1

    all_data.append(Pet(
        name=cat['name'],
        id=i,
        weight_low_lbs=int(weight[0]),
        weight_high_lbs=int(weight[1]),
        temperaments=capitalize(cat['temperament'].split(', ')),
        description=cat['description'],
        image=f'https://cdn2.thecatapi.com/images/{cat["reference_image_id"]}.jpg',
        life_span_low=int(lf[0]),
        life_span_high=int(lf[1]),
        type='cat'
    ).__dict__)

for dog in dogs:
    if '-' not in dog['life_span'] or '-' not in dog['weight']['imperial'] or 'temperament' not in dog:
        continue

    weight = dog['weight']['imperial'].replace(' ', '').split('-')
    
    if not weight[0].isdecimal() or not weight[1].isdecimal():
        continue

    lf = dog['life_span'].lower().replace(' ', '').replace('years', '').split('-')

    i += 1

    all_data.append(Pet(
        name=dog['name'],
        id=i,
        weight_low_lbs=float(weight[0]),
        weight_high_lbs=float(weight[1]),
        temperaments=capitalize(dog['temperament'].split(', ')),
        description=dog.get('description', '') + f'Bred for: {dog["bred_for"]}.' if 'bred_for' in dog else '',
        image=dog['image']['url'],
        life_span_low=int(lf[0]),
        life_span_high=int(lf[1]),
        type='dog'
    ).__dict__)

with open('pets.json', 'wt') as file:
    json.dump(all_data, file)