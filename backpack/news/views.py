from django.shortcuts import render, redirect
from .models import Post
from django.http import HttpResponse
from django.views.generic import DetailView, CreateView, UpdateView
from .forms import PostForm, CommentForm
from django.urls import reverse, reverse_lazy
from django.views.generic.edit import FormMixin
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.views import redirect_to_login

def posts(request):
    posts = Post.objects.order_by('-date')[:50]
    return render(request, 'main/index_4.html', {'posts': posts})

class PostDetailView(FormMixin, DetailView):
    model = Post
    template_name = 'main/index_6.html'
    context_object_name = 'post'
    form_class = CommentForm

    def comment_def(pk):
        a = Post.objects.get(id = pk)
        b = a.comment_set.order_by('-date_add')
        return render(request, 'main/index_6.html', { 'comment_sort': b})

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect_to_login(request.get_full_path())

        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = self.object
            comment.comment_author = request.user.username
            comment.save()
            return redirect('post', pk=self.object.pk)
        return self.form_invalid(form)



class PostAdd(LoginRequiredMixin, CreateView):
    form_class = PostForm
    template_name = 'main/index_7.html'
    success_url = reverse_lazy('posts')

    def form_valid(self, form):
        form.instance.author = self.request.user.username
        return super().form_valid(form)

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    template_name = 'main/index_7.html'
    fields = ['name', 'content']
    success_url = reverse_lazy('personal_area')

    def test_func(self):
        return self.get_object().author == self.request.user.username
