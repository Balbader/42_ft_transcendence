# JSON is commonly used with data APIS. Here how we can parse JSON into a Python dictionary

import json

#sample JSON
userJSON = '{"first_name": "Basil", "last_name": "Albader", "age": 41}'

# Parse to a dictionary
# .load() is equivalent to .parse in js
user = json.loads(userJSON)

print(user)
print(user['first_name'])

car = {
    'make': 'Ford',
    'model': 'Mustang',
    'year': 1984,
    'color': 'Black',
    'Mileage': '178993',
}

# Parse a dictionary to JSON
# .dumps() is equivalent to .stringigy
carJSON = json.dumps(car)
print(carJSON)
