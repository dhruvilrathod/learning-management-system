export interface Talent {
  personalDetails: {
    name: string;
    id?: string;
    gender: string;
    countryName: string;
    age: string;
  };
  professionalDetails: {
    currentProfessionalStatus: string;
    industryType: string;
    yearOfExperience: string;
    skills: any[];
    currentEmployerName: string;
    linkedInProfileLink: string;
    recordedVideoLink: string;
    experienceInIT: string;
    experienceLevel: number;
  };
  educationDetails: {
    nameOfDegree: string;
    nameOfUniversity: string;
    yearOfPassing: number;
  }[];
  knownLanguages: string[];
  fieldSpecialization: string[];
  skillSpecialization: string;
  profileImage: string;
  email: string;
  password: string;
}

export interface Trainer {
  name: string;
  id: string;
  programs: any[];
  yearOfExperience: string;
  email: string;
  profileImage: string;
}

export interface Grades {
  talentName: string;
  programName: string;
  talentID?: string;
  programID?: string;
  overallGrades: string;
  gradeDetails: {
    mainSkillName: string;
    mainSkillID: string;
    subSkills: {
      subSkillID: string;
      subSkillName: string;
      subSkillScore: string;
    }[];
  }[];
}

export interface Program {
  id: string;
  name: string;
  trainers: string[];
  thumbnailImageURL: string;
  skillsList: any[];
  programTracking: {
    isPublished: boolean;
    isStarted: boolean;
    isEnded: boolean;
    startDate?: string;
    endDate?: string;
  };
  duration?: string;
  image?: string;
  programOverview?: string;
  totalEnrolledStudent?: number;
  programOutcomes?: string;
  overallGrades: string;
  isEnrolled?: boolean;
  grades?: Grades;
}

export interface Assignees {
  id: string;
  name: string;
  role: string;
}
