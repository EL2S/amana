
from django.urls import include, path

urlpatterns = [
    path('', include('amana.urls')),
]
handler403 = 'amana.views.error'