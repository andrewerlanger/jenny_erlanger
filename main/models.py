from django.db import models
from cloudinary.models import CloudinaryField


class FeaturedManager(models.Manager):

    use_for_related_fields = True

    def featured(self, **kwargs):
        return self.filter(featured=True, **kwargs)


class Poem(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = CloudinaryField("image")
    category = models.CharField(max_length=255, blank=True)
    featured = models.BooleanField()

    # Custom model manager
    objects = FeaturedManager()

    def __str__(self):
        return self.title
