from django.shortcuts import render, HttpResponse

def index(request):
    if request.method == 'POST':
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        std = request.POST.get('class')
        email = request.POST.get('email')
        mobno = request.POST.get('mobno')
        address = request.POST.get('address')
        return render(request, 'studentdetail.html', {'fname' : fname, 'lname' : lname, 'std' : std, 'email' : email, 'mobno' : mobno, 'address' : address})
    else:
        # If it's a GET request, just render the template with the form
        return render(request, 'student.html')
