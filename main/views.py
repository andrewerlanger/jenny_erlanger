"""Views for poems"""

from django.shortcuts import render
from django.views import View
from django.views.generic import ListView
from django.views.generic.detail import DetailView

from .models import Poem

# Create your views here.


class HomeView(View):
    template_name = "pages/home.html"

    def get(self, request):
        featured_poems = Poem.objects.featured()[:3]
        return render(request, self.template_name, {"featured_poems": featured_poems})


class PoemListView(ListView):
    model = Poem
    template_name = "pages/list.html"


class PoemDetailView(DetailView):
    model = Poem
    template_name = "pages/detail.html"
