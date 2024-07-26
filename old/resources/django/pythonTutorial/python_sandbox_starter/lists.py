# A List is a collection which is ordered and changeable. Allows duplicate members.
numbers = [1, 2, 3, 4, 5]
fruits = ['Apples', 'Oranges', 'Grapes', 'Pears']

# Get Value
print(fruits[1])

# Get len
print(len(fruits))

# Append
fruits.append('Mangos')
print(fruits)

# Removes
fruits.remove('Mangos')
print(fruits)

# Insert at a specific pos
fruits.insert(2, 'Cheese')
print(fruits)

# Removes at a specific pos
fruits.pop(2)
print(fruits)

# Sort
fruits.sort()
print(fruits)

fruits.sort(reverse=True)
print(fruits)