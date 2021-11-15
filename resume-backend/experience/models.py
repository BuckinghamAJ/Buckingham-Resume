from django.db import models
from PIL import Image
from django.db.models.fields.files import ImageField
# Create your models here.

class JobLocation(models.Model):
    city = models.CharField(max_length=50)
    stateAbbreviation = models.CharField(max_length=3)

    def __str__(self):
        return f"{self.city}, {self.stateAbbreviation}"


class Experience(models.Model):
    company = models.CharField(max_length=80)
    companyMission = models.TextField()
    companyLogo = models.ImageField(blank=True)
    location = models.ForeignKey(JobLocation,on_delete=models.CASCADE)


    title = models.CharField(max_length=50)
    summary = models.TextField()

    startYear = models.PositiveIntegerField()
    endYear = models.PositiveIntegerField()

    def save(self):
        super().save()

        img = Image.open(self.companyLogo)

        if img.height > 300 or img.width > 300:
            newSize = (300,300)
            img.thumbnail(newSize)
            img.save(self.companyLogo.path)
    
    def __str__(self):
        return f"{self.title} working at {self.company}"



class Accomplishments(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE, related_name="accomplishments")
    accomplishment = models.TextField()

    def __str__(self):
        return f"{self.accomplishment}"