import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employee-page',
  templateUrl: './manage-employee-page.component.html',
  styleUrls: ['./manage-employee-page.component.css']
})
export class ManageEmployeePageComponent {

  public employeeList:any=[];
  public isModalOpen = false;

  constructor(private http:HttpClient){
    this.loadTable();  
  }
  loadTable(){
    this.http.get("http://localhost:8080/employee/get-all").subscribe(data=>{
      console.log(data);
      this.employeeList=data;
    })
  }

  deleteEmployeeById(id:any){
    console.log(id);
    // this.http.delete(`http://localhost:8080/employee/delete-employee/${id}`).subscribe(data=>{
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.delete(`http://localhost:8080/employee/delete-employee/${id}`).subscribe(data=>{
            console.log(id);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.loadTable();
          })
          // this.loadTable();
        }
      });
        // this.loadTable();
    // })
  }
  public openModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
  }

  // public employeeTemp:any={}
  public employeeTemp: any = {};

  updateEmployee(employee:any){
    console.log(employee);
    // this.employeeTemp=employee;
    this.employeeTemp = { ...employee }; // Clone the selected employee data
    this.openModal();


  }

  // saveEmployee(){
  //   this.http.put("http://localhost:8080/employee/update-employee", this.employeeTemp).subscribe(data=>{
  //     Swal.fire({
  //       title: "Do you want to save the changes?",
  //       showDenyButton: true,
  //       showCancelButton: true,
  //       confirmButtonText: "Save",
  //       denyButtonText: `Don't save`
  //     }).then((result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         Swal.fire("Saved!", "", "success");
  //       } else if (result.isDenied) {
  //         Swal.fire("Changes are not saved", "", "info");
  //       }
  //     });
  //   })
  // }

  saveEmployee() {
    this.http.put("http://localhost:8080/employee/update-employee", this.employeeTemp).subscribe(
      data => {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "Employee details updated successfully.", "success");
            this.loadTable(); // Reload the employee list
            this.closeModal(); // Close the modal after saving
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            this.closeModal();
          }
        });
      },
      error => {
        Swal.fire("Error", "Could not update employee details. Please try again.", "error");
      }
    );
  }


}
