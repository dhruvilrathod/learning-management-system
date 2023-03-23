import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Grades } from 'src/app/models/interfaces';

@Component({
  selector: 'app-evaluation-sheet',
  templateUrl: './evaluation-sheet.component.html',
  styleUrls: ['./evaluation-sheet.component.css']})
export class EvaluationSheetComponent implements OnInit {

  public programID!: string;
  public emptyTable: boolean = false;
  private APIData!: Grades[];
  mainColumns: any[] = [];
  subColumns: any[] = [];
  subColCounts: number[] = [1];
  data: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumnsMain: string[] = [];
  displayedColumnsSub: string[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _http: HttpClient,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((d: any) => {
      this.programID = d.programID;
    })
    
    this._http.get('./assets/programs-with-grades.json').subscribe((d: any) => {
      console.log(this.programID);
      console.log(d);
      this.APIData = d;
      if (d.length == 0) this.emptyTable = false;
      else {

        this.mainColumns.push({
          name: 'Talent Name',
          id: 'talentName'
        });

        this.subColumns.push({
          name: '',
          id: 'talentName1'
        });

        for (var s in this.APIData[0].gradeDetails) {
          this.mainColumns.push({
            name: this.APIData[0].gradeDetails[s].mainSkillName,
            id: this.APIData[0].gradeDetails[s].mainSkillID
          });
        }

        console.log(this.mainColumns);

        for (var x in this.APIData[0].gradeDetails) {
          var count = 0;
          for (var i in this.APIData[0].gradeDetails[x].subSkills) {
            this.subColumns.push({
              id: this.APIData[0].gradeDetails[x].subSkills[i].subSkillID,
              name: this.APIData[0].gradeDetails[x].subSkills[i].subSkillName
            });
            count++;
          }
          this.subColCounts.push(count);
        }

        console.log(this.subColumns);
        this.mainColumns.map((d) => {
          this.displayedColumnsMain.push(d.id);
        })

        this.subColumns.map((d) => {
          this.displayedColumnsSub.push(d.id);
        })

        console.log(this.subColCounts);

        for (var x in this.APIData) {
          var temp: any = {
            talentName1: this.APIData[x].talentName,
            talentID: this.APIData[x].talentID
          };
          for (var i in this.APIData[x].gradeDetails) {
            for (var k in this.APIData[x].gradeDetails[i].subSkills) {
              temp[this.APIData[x].gradeDetails[i].subSkills[k].subSkillID] = this.APIData[x].gradeDetails[i].subSkills[k].subSkillScore;
            }
          }
          this.data.push(temp);
        }

        console.log(this.data);
        console.log(this.displayedColumnsMain);
        console.log(this.displayedColumnsSub);
        

        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  test(e:any, talentID:string) {
    console.log(e.target.value, talentID, this.programID);
  }
}
