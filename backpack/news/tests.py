from django.contrib.auth import get_user_model
from django.test import TestCase

from .models import Comment, Post


class PostPermissionsTests(TestCase):
    def setUp(self):
        user_model = get_user_model()
        self.author = user_model.objects.create_user('author', password='safe-password-123')
        self.other_user = user_model.objects.create_user('other', password='safe-password-123')
        self.post = Post.objects.create(name='Article', content='Body', author=self.author.username)

    def test_anonymous_user_cannot_create_post(self):
        response = self.client.post('/post/add_post', {'name': 'New', 'content': 'Text'})

        self.assertEqual(response.status_code, 302)
        self.assertEqual(Post.objects.count(), 1)

    def test_post_author_is_taken_from_authenticated_user(self):
        self.client.force_login(self.author)

        self.client.post(
            '/post/add_post',
            {'name': 'New', 'content': 'Text', 'author': self.other_user.username},
        )

        self.assertTrue(Post.objects.filter(name='New', author=self.author.username).exists())

    def test_other_user_cannot_update_post(self):
        self.client.force_login(self.other_user)

        response = self.client.post(
            f'/post/{self.post.pk}/update_post',
            {'name': 'Changed', 'content': 'Changed'},
        )

        self.assertEqual(response.status_code, 403)

    def test_comment_identity_and_post_cannot_be_forged(self):
        second_post = Post.objects.create(name='Second', content='Body', author='author')
        self.client.force_login(self.author)

        response = self.client.post(
            f'/post/{self.post.pk}',
            {
                'comment_text': 'Comment',
                'comment_author': 'forged',
                'post': second_post.pk,
            },
        )

        self.assertRedirects(response, f'/post/{self.post.pk}')
        comment = Comment.objects.get()
        self.assertEqual(comment.comment_author, self.author.username)
        self.assertEqual(comment.post, self.post)
