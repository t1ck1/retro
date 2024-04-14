from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')

def buy(request):
    return render(request, 'main/buy.html')

def text(request):
    return render(request, 'main/text.html')

def bace(request):
    return render(request, 'main/bace.html')