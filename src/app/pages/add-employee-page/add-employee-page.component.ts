import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.css']
})
export class AddEmployeePageComponent {
  public employee: any = {
    employeeName: "",
    employeeAddress: "",
    employeeEmail: ""
  };

  constructor(private http: HttpClient) {}

  clearField(){
    this.employee = {
      employeeName: "",
      employeeAddress: "",
      employeeEmail: ""
    };
  }

  public addEmployee() {
    this.http.post("http://localhost:8080/employee/add-employee", this.employee).subscribe((data) => {
      // Show success alert with SweetAlert2
      Swal.fire({
        title: 'Success!',
        text: 'Employee added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.clearField();
    }, (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add employee. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
}
