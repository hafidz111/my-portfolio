from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutViewSet, EducationViewSet, SkillViewSet, ProjectViewSet

router = DefaultRouter()
router.register('about', AboutViewSet)
router.register('education', EducationViewSet)
router.register('skills', SkillViewSet)
router.register('projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
