from django.shortcuts import render, HttpResponse
from django.template import loader

def index(request):
    return HttpResponse("<h1>Hello</h1>")

def nwc(request):
    template = loader.get_template('nwc.html')
    return HttpResponse(template.render())
