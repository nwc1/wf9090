from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('success')
        else:
            user = User.objects.create_user(username=username, password=password)
            login(request, user)
            return redirect('success')
    return render(request, 'login.html')

def success(request):
    return render(request, 'success.html')
