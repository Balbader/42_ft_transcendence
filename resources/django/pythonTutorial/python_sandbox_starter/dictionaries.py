# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.

# Create a simple Dictionary
person = {
    'first_name': 'Basil',
    'last_name': 'Alba',
    'age': 41,
}

print(person)

# Access a single value
print(person['last_name'])
print(person.get('age'))

# Add key value to obj
person['phone'] = '111-222-3333'
print(person)

# Get Items
print(person.items())

# Get keys
print(person.keys())

# Get Values
print(person.values())

# Make Copy
person_2 = person.copy()
person_2['city'] = 'Paris'
# print(person_2)

# Remove Item
del(person['age'])
person.pop('first_name')
print(person)

# Clear
person.clear()
print(person)

# Get length
print(len(person_2))

# List of Dictionaries
people = [
    {
        'first_name': 'Faten',
        'last_name': 'Issa',
        'age': 69,
    },
    {
        'first_name': 'Mimi',
        'last_name': 'Anderson',
        'age': 38,
    },
    {
        'first_name': 'Balou',
        'last_name': 'Alba',
        'age': 41,
    },
]

print(people)
print(people[1]['first_name'])
