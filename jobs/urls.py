from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    JobViewSet,
    add_job,
    job_list,
    job_detail,
    update_job,
    delete_job
)

router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='jobs')

urlpatterns = [

    # Router APIs
    path('', include(router.urls)),

    # Function APIs
    path('add-job/', add_job),
    path('job-list/', job_list),
    path('job-detail/<int:id>/', job_detail),
    path('update-job/<int:id>/', update_job),
    path('delete-job/<int:id>/', delete_job),

]