import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-dashboard-page',
  templateUrl: './main-dashboard-page.component.html',
  styleUrls: ['./main-dashboard-page.component.css']
})
export class MainDashboardPageComponent {
  public employeeList:any=[];
  constructor(private http:HttpClient){
    this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/employee/get-all").subscribe(data=>{
      console.log(data);
      this.employeeList=data;
    })
  }
}
