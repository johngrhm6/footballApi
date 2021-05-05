from django.db import models

# Create your models here.
class Match(models.Model):
    matchId = models.IntegerField(max_length=50)

    def __str__(self):
        return self.matchId