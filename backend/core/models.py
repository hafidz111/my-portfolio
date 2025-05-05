from django.db import models

class About(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    description = models.TextField()
    github = models.URLField()
    linkedin = models.URLField()
    email = models.EmailField()

    def __str__(self):
        return self.name

class Education(models.Model):
    school = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    year = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.degree} at {self.school}"

class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.title
