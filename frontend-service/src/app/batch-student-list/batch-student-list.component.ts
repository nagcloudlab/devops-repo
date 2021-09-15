import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-student-list',
  templateUrl: './batch-student-list.component.html',
  styleUrls: ['./batch-student-list.component.css']
})
export class BatchStudentListComponent implements OnInit {

  batchStudents:Array<any>=[]

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  handleBatchChange(event:any){
    const batchId=event.target.value;
    this.httpClient.get(`http://localhost:8080/api/batch/${batchId}/students`)
    .subscribe((students:any)=>{
      this.batchStudents=students
    })
  }
}
