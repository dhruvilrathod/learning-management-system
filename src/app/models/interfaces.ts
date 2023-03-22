export interface Talent {
    personalDetails: {
        talentName: string,
        talentID: string,
        talentGender: string,
        countryOfResidence: string,
        birthDate: string,    
    }
    professionalDetails: {
        currentWorkingStatus: string,
        currentProfessionalStatus: string;
        typeOfIndustries: string [],
        yearsOfExperience: string,
        skills: any[],
        currentEmployer: string,
        linkedInProfileURL: string,
        recordedVideoURL: string,    
    }
    educationDetails: {
        nameOfDegree: string,
        nameOfUniversity: string,
        yearOfPassing: number
    }[],
    knownLanguages: string[],
    experienceInIT: string,
    experienceLevel: number,
    expectedSpecializations: string[],
    expectedSkill: string,
    profilePictureURL: string,
    username: string,
}

export interface Trainer {
    trainerName: string;
    trainerID: string;
    assignedProgramNames: string[],
    yearsOfExperience: number,
    emailOfTrainer: string,
    profilePicURL: string
}

export interface Grades {
    programID: string,
    overallGrades: string,
    gradeDetails: {
        mainSkillName: string,
        subSkills: {
            subskillName:string,
            subSkillScore: string 
        }[]
    }[]
}

export interface Program {
    programTitle: string,
    programID: string,
    trainers: string[],
    thumbnailImageURL: string,
    skillsList: string[],
    isPublished: boolean,
    isStarted: boolean,
    isEnded: boolean,
    startDate?: string,
    endDate?: string,
    duration?: string,
    programImageURL?: string,
    programDescription?: string,
    totalEnrolledStudent?: number,
    programOutcomes?: any[],
    overallGrades: string,
    isEnrolled?: boolean,
}
