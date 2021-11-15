from rest_framework import fields, serializers
from .models import Experience, Accomplishments, JobLocation

class JobLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobLocation
        fields = ("city", "stateAbbreviation")


class AccomplishmentSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Accomplishments
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):

    location = JobLocationSerializer()
    accomplishments = AccomplishmentSerializer(many=True)

    class Meta:
        model = Experience
        fields = ("company","companyMission","companyLogo", "location","title","summary","accomplishments", "startYear","endYear")


    