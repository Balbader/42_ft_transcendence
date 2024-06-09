# Python has functions for creating, reading, updating, and deleting files.

# Open a file
myFile = open('myFile.txt', 'w')

# Get some info on the file
print('Name :', myFile.name)
print('Is Closed :', myFile.closed)
print('Opening Mode :', myFile.mode)

# Write to file
myFile.write('I love Python')
myFile.write(' and JavaScript')
myFile.close()

# Append to file: if we don't Append, it will overwrite what was written in the file previously
myFile = open('myFile.txt', 'a')
myFile.write('\nI also like C.')
myFile.close()

# Read from a file
myFile = open('myFile.txt', 'r+')
text = myFile.read(10) # takes in the number of characters to read
print(text)
