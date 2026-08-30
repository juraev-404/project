from django.contrib.auth import get_user_model
from django.test import TestCase


class LogoutTests(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user('member', password='safe-password-123')
        self.client.force_login(self.user)

    def test_logout_rejects_get(self):
        self.assertEqual(self.client.get('/user/logout/').status_code, 405)

    def test_logout_accepts_post(self):
        response = self.client.post('/user/logout/')

        self.assertRedirects(response, '/')
