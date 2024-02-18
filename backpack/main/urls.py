from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name = 'home'),
    path('<int:pk>', views.FormulaDetail.as_view(), name = 'formula'),
    path('personal_area', views.personal_area, name = 'personal_area'),
    path('forum', views.forum, name = 'forum')
]

