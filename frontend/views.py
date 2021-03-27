from django.shortcuts import render

# Create your views here.


def FrontEnd(request):
    template_name = "frontend/index.html"
    return render(request, template_name)
