from django.contrib.auth import get_user_model
from django.test import TestCase


class PersonalAreaTests(TestCase):
    def test_anonymous_user_is_redirected_to_login(self):
        response = self.client.get('/personal_area')

        self.assertRedirects(
            response,
            '/user/login/?next=/personal_area',
            fetch_redirect_response=False,
        )

    def test_authenticated_user_can_open_personal_area(self):
        user = get_user_model().objects.create_user('reader', password='safe-password-123')
        self.client.force_login(user)

        response = self.client.get('/personal_area')

        self.assertEqual(response.status_code, 200)
