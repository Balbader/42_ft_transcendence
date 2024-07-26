from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User

def register(request):
    if request.method == 'POST':

        # NOTE : Get form values
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        # NOTE : Check if passwords match
        if password == password2:
            if User.objects.filter(username = username).exists():
                messages.error(request, 'User Name Already Taken!')
                return redirect('register')
            else:
                if User.objects.filter(email = email).exists():
                    messages.error(request, 'Email Already In Use!')
                    return redirect('register')
                else:
                    user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
                    # Option 1
                    # auth.login(request, user)
                    # messages.success(request, 'User Successfuly Created! Login Successful.')
                    # return redirect('index')
                    user.save()
                    messages.success(request, 'Registration Successful!')
                    return redirect('login')
        else:
            messages.error(request, 'Passwords Do Not Match!')
            return redirect('register')
    else:
        return render(request, 'accounts/register.html')

def login(request):
    if request.method == 'POST':

        # NOTE : Get form values
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            messages.success(request, 'Login Successful!')
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid Credentials!')
            return redirect('login')


    else:
        return render(request, 'accounts/login.html')

def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        messages.success(request, 'You Logged Out Successfuly!')
        return redirect('index')

def dashboard(request):
    return render(request, 'accounts/dashboard.html')
