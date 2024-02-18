from django.shortcuts import render, redirect
from .models import Post
from django.http import HttpResponse
from django.views.generic import DetailView, CreateView, UpdateView
from .forms import PostForm, CommentForm
from django.urls import reverse, reverse_lazy
from django.views.generic.edit import FormMixin

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
        form = self.get_form()
        eror = ''
        if form.is_valid():
            form = CommentForm(request.POST)
            form.save()
            post = request.POST.get('post')
            return redirect('/post/' + str(post))
        else:
            error = 'Вы не загегестрировани!'
            return HttpResponse(error)



class PostAdd(CreateView):
    form_class = PostForm
    template_name = 'main/index_7.html'
    success_url = reverse_lazy('posts')

class PostUpdateView(UpdateView):
    model = Post
    template_name = 'main/index_7.html'
    fields = ['name', 'content', 'author']
    success_url = reverse_lazy('personal_area')
