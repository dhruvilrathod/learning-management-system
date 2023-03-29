export interface TalentPersonalDetails {
    name: string,
    id?: string,
    gender: string,
    countryName: string,
    age: number
}

export interface TalentProfessionalDetails {
    currentProfessionalStatus: string;
    industryType: string,
    yearOfExperience: string,
    skills: any[],
    currentEmployerName: string,
    linkedInProfileLink: string,
    recordedVideoLink: string,
    experienceInIT: string,
    experienceLevel: number
}

export interface TalentEducationalDetails {
    nameOfDegree: string,
    nameOfUniversity: string,
    yearOfPassing: number
}

export interface TalentOtherDetails {
    knownLanguages: string[],
    fieldSpecialization: string[],
    skillSpecialization: string,
    profileImage: string,
}

export interface TalentCredentialInterface {
    email: string,
    password?: string    
}

export interface Talent {
    personalDetails: TalentPersonalDetails
    professionalDetails: TalentProfessionalDetails
    educationDetails: TalentEducationalDetails[],
    otherDetails?: TalentOtherDetails,
    credentials?: TalentCredentialInterface,
    enrolledPrograms: Program[]
}

export interface Trainer {
    name: string;
    id: string;
    programs: any[],
    yearOfExperience: string,
    email: string,
    profileImage: string
}

export interface Skills {
    mainSkillName: string,
    mainSkillID: string,
    subSkills: {
        subSkillID: string,
        subSkillName: string,
        subSkillScore?: string
    }[]
}

export interface Grades {
    talentName: string,
    programName: string,
    talentID?: string,
    programID?: string,
    overallGrades: string,
    gradeDetails: Skills[]
}

export interface Program {
    id: string,
    name: string,
    trainers: string[],
    thumbnailImageURL: string,
    skillsList: Skills[],
    programTracking: {
        isPublished: boolean,
        isStarted: boolean,
        startDate?: string,
        endDate?: string
    }
    duration?: string,
    image?: string,
    programOverview?: string,
    totalEnrolledStudent?: number,
    programOutcomes?: string,
    overallGrades: string,
    isEnrolled?: boolean,
    grades?: Grades
}