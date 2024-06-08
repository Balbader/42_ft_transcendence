# A function is a block of code which only runs when it is called. In Python, we do not use parentheses and curly brackets, we use indentation with tabs or spaces

# Create function
def sayHello(name='Mimi'):
    """
    Prints Hello and then name.
    """
    print('Hello ' + name)
    

sayHello('Balou')
sayHello()

# Return Value
def getSum(a, b):
    tot = a + b
    return tot

num = getSum(3, 5)
print(num)


def addOneToNum(num):
    num += 1
    return num

print(addOneToNum(10))



# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression. Very similar to JS arrow functions

getTot = lambda a, b : a + b

print(getTot(1, 1))

