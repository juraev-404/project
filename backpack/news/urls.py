from django.urls import path
from . import views

urlpatterns = [
    path('all', views.posts, name = 'posts'),
    path('<int:pk>', views.PostDetailView.as_view(), name = 'post'),
    path('add_post', views.PostAdd.as_view(), name = 'add_post'),
    path('<int:pk>/update_post', views.PostUpdateView.as_view(), name = 'update')
]