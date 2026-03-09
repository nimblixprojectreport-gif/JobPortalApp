from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer


# Add Job
@api_view(['POST'])
def add_job(request):

    serializer = JobSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Job Added Successfully"})

    return Response(serializer.errors)


# Get All Jobs
@api_view(['GET'])
def job_list(request):

    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)

    return Response(serializer.data)


# Job Detail
@api_view(['GET'])
def job_detail(request, id):

    job = Job.objects.get(id=id)
    serializer = JobSerializer(job)

    return Response(serializer.data)


# Update Job
@api_view(['PUT'])
def update_job(request, id):

    job = Job.objects.get(id=id)

    serializer = JobSerializer(job, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Job Updated Successfully"})

    return Response(serializer.errors)


# Delete Job
@api_view(['DELETE'])
def delete_job(request, id):

    job = Job.objects.get(id=id)
    job.delete()

    return Response({"message": "Job Deleted Successfully"})