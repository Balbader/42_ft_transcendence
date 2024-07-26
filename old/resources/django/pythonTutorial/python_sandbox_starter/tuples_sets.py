# A Tuple is a collection which is ordered and unchangeable. Allows duplicate members.

# Simple tuple
fruit_tuple = ('Apple', 'Orange', 'Mango')
# print(fruit_tuple)

# Get a single value
# print(fruit_tuple[1])

# Tuples with one value should have a trailing comma
fruit_tuple2 = ('Apple',)
# print(fruit_tuple2)

# Get tuple length
# print(len(fruit_tuple))



# A Set is a collection which is unordered and unindexed. No duplicate members.

# Create Set
fruit_set = {'Apple', 'Orange', 'Mango'}
print(fruit_set)

# Check if in Set
print('Apple' in fruit_set)
print('Apples' in fruit_set)

# Add to set
fruit_set.add('Grape')
print(fruit_set)

# Remove from set
fruit_set.remove('Grape')
print(fruit_set)

# Clear the set
fruit_set.clear()
print(fruit_set)

# Delete the set
del fruit_set
print(fruit_set)