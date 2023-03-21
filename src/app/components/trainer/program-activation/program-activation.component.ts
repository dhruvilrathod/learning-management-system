import { Component, OnInit } from '@angular/core';
import { DropdownService } from 'src/app/services/dropdown.service';
import { Program } from "../../../models/interfaces"; 

@Component({
  selector: 'app-program-activation',
  templateUrl: './program-activation.component.html',
  styleUrls: ['./program-activation.component.css'],
  providers: [DropdownService]
})
export class ProgramActivationComponent implements OnInit{
  monthwise = [{}];
  yearwise = [{}]
  isChecked: boolean = false;


  constructor(private dropdownService: DropdownService){
    
    
  }
  
  ngOnInit() {
    this.monthwise = this.dropdownService.monthwise;
    this.yearwise = this.dropdownService.yearwise;
    
  }
  setToggleActive(value: boolean) {
    this.isChecked = value;
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
    overallGrades: "A"},

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
    overallGrades: "A"},

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
    overallGrades: "A"},

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
    overallGrades: "A"},

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
    overallGrades: "A"}
  ]
}
