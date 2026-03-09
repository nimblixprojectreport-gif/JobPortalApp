from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):

    company_name = serializers.CharField(
        source='company.name',
        read_only=True
    )

    skills = serializers.SerializerMethodField()

    class Meta:
        model = Job
        fields = [
            'id',
            'title',
            'company_name',
            'location',
            'employment_type',
            'salary_min',
            'salary_max',
            'status',
            'is_active',
            'created_at',
            'skills'
        ]

    def get_skills(self, obj):
        skills = obj.jobskill_set.values_list(
            'skill__name',
            flat=True
        )
        return list(skills)