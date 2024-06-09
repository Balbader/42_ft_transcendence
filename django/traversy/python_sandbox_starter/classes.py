# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object

# Create Class
class User:
    # Constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

    def greeting(self):
        return f'My name is {self.name}, and I am {self.age} years old.'

    def birthday(self):
        self.age += 1
        return f'{self.age}'

# Init user object
basil = User('Basil Albader', 'basil@basil.com', 41)
mimi = User('Mimi Anderson', 'mimil@mimi.com', 38)

# Edit property
basil.age = 22
print(basil.age)

# call methods
print(mimi.greeting())
print(mimi.birthday())

# Class Customer Extend class User
class Customer(User):
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0

    def setBalance(self, balance):
        self.balance = balance

    def greeting(self):
        return f'My name is {self.name}, and I am {self.age} years old and I owe a balance of ${self.balance}.'


sam = Customer('Sam Anderson', 'sam@sam.com', 55)
sam.setBalance(44)

print(sam.greeting())
