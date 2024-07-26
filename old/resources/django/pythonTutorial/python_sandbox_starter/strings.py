# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods
name = 'basil'
age = 41

# String Concatenation
print('Hello my name is ' + name + ' and I am ' + str(age))


# String Formatting

# Arguments by position
print('{}, {}, {}'.format('a', 'b', 'c'))
print('{1}, {2}, {0}'.format('a', 'b', 'c'))

# Arguments by name
print('Hello my name is {name} and I am {age}'.format(name='mimi', age='37'))
print('Hello my name is {name} and I am {age}'.format(name=name, age=age))

# F-strings
print(f'My name is {name} and I am {age}')

# String Methods
s = 'hello there world'
splitStr = s.split(' ')
newStr = []
for word in splitStr:
    newStr.append(word.capitalize())
print(newStr)
print(s.lower())
# print(s.swapcase())
print(s.upper())
print(len(s))

# Replace
print(s.replace('world', 'everyone'))