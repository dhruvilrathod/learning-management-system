import { Component, OnInit, NgModule } from '@angular/core';
import { Program } from "../../../models/interfaces"; 

@Component({
  selector: 'app-program-activation',
  templateUrl: './program-activation.component.html',
  styleUrls: ['./program-activation.component.css'],
  providers: []
})
export class ProgramActivationComponent implements OnInit{
  isPublished: boolean = true;
  program = [{}];



  constructor(){
    
    
  }
  
  ngOnInit() {
    
    
  }


  
  public Programs : Program[] = [
    {programID: "1", 
    programTitle: "UI Development", 
    trainers: ["sonal patel"], 
    thumbnailImageURL: "https://cdn-icons-png.flaticon.com/128/6188/6188922.png",
    skillsList: ["js"],
    startDate: "12-2-23",
    endDate: "12-3-23",
    duration: "2months",
    programImageURL: "string",
    programDescription: "string",
    totalEnrolledStudent: 50,
    programOutcomes: [1,2,3],
    overallGrades: "A",
    isPublished: true},

    {programID: "2", 
    programTitle: "Java Development", 
    trainers: ["sonal patel"], 
    thumbnailImageURL: "https://cdn-icons-png.flaticon.com/128/6188/6188922.png",
    skillsList: ["js"],
    startDate: "12-2-23",
    endDate: "12-3-23",
    duration: "2months",
    programImageURL: "string",
    programDescription: "string",
    totalEnrolledStudent: 50,
    programOutcomes: [1,2,3],
    overallGrades: "A",
    isPublished: true},

    {programID: "3", 
    programTitle: "Java Development", 
    trainers: ["sonal patel"], 
    thumbnailImageURL: "https://cdn-icons-png.flaticon.com/128/6188/6188922.png",
    skillsList: ["js"],
    startDate: "12-2-23",
    endDate: "12-3-23",
    duration: "2months",
    programImageURL: "string",
    programDescription: "string",
    totalEnrolledStudent: 50,
    programOutcomes: [1,2,3],
    overallGrades: "A",
    isPublished: false},

    {programID: "4", 
    programTitle: "Java Development", 
    trainers: ["sonal patel"], 
    thumbnailImageURL: "https://cdn-icons-png.flaticon.com/128/6188/6188922.png",
    skillsList: ["js"],
    startDate: "12-2-23",
    endDate: "12-3-23",
    duration: "2months",
    programImageURL: "string",
    programDescription: "string",
    totalEnrolledStudent: 50,
    programOutcomes: [1,2,3],
    overallGrades: "A",
    isPublished: false},

    {programID: "5", 
    programTitle: "Java Development", 
    trainers: ["sonal patel"], 
    thumbnailImageURL: "https://cdn-icons-png.flaticon.com/128/6188/6188922.png",
    skillsList: ["js"],
    startDate: "12-2-23",
    endDate: "12-3-23",
    duration: "2months",
    programImageURL: "string",
    programDescription: "string",
    totalEnrolledStudent: 50,
    programOutcomes: [1,2,3],
    overallGrades: "A",
    isPublished: true}
  ]
  
}

