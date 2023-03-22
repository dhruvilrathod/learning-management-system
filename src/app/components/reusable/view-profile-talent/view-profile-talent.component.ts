import { Component } from '@angular/core';

const talentData = {
  "fullName":"Danya Garcia",
  "username": "dgarcia",
  "email": "dgarcia@asite.com",
  "gender":"Female",
  "age":25,
  "country": "Australia",
  "currentStatus": "On a break",
  "professionalBackground":"working in a corporate",
  "industry": "IT",
  "yearsOfExperience":"0-3 years",
  "skills":{
    "technical":["Angular","NodeJs", "NextJs"],
    "nonTechnical":["Leadership", "Team-player", "Management", "Public speaking"]
  },
  "currentEmployer":"Asite Solutions",
  "linkedin":"linkedin.com",
  "recordedVideo":"recorded-video",
  "degree":"Bsc",
  "university":"Cambridge University",
  "yearOfPassing": 2017
};

@Component({
  selector: 'app-view-profile-talent',
  templateUrl: './view-profile-talent.component.html',
  styleUrls: ['./view-profile-talent.component.css']
})


export class ViewProfileTalentComponent {
  talentData = talentData;
}
