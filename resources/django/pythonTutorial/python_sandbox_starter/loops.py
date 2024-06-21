# A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
people = ['Basil', 'Mimi', 'Faten', 'Sam']

# for loop
for person in people:
    print(person)
print('\n')

# Break out
print('------------------> break')

for person in people:
    print(person)
    if person == 'Mimi':
        break
print('\n')

# Continue
print('------------------> continue')

for person in people:
    if person == 'Faten':
        continue
    print(person)
print('\n')

# Range
print('------------------> range')
for i in range(len(people)):
    print(people[i])

for i in range(0, 11):
    print('i: ', i)


# While loops execute a set of statements as long as a condition is true.

count = 0
while count <= 10:
    print('Count: ', count)
    count += 1
