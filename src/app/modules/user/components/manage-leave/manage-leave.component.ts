import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.css']
})
export class ManageLeaveComponent {

  public leaveList:any=[];
  public isModalOpen = false;

  constructor(private http:HttpClient){
    this.loadTable();  
  }
  loadTable(){
    this.http.get("http://localhost:8080/leave/get-all").subscribe(data=>{
      console.log(data);
      this.leaveList=data;
    })
  }

  deleteLeaveById(id:any){
    console.log(id);
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
          this.http.delete(`http://localhost:8080/leave/delete-leave/${id}`).subscribe(data=>{
            console.log(id);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.loadTable();
          })
        }
      });
  }
  public openModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
  }
  public leaveTemp: any = {};

  updateLeave(leave:any){
    console.log(leave);
    this.leaveTemp = { ...leave };
    this.openModal();


  }
  saveLeave() {
    this.http.put("http://localhost:8080/leave/update-leave", this.leaveTemp).subscribe(
      data => {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "Leave details updated successfully.", "success");
            this.loadTable(); 
            this.closeModal();
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            this.closeModal();
          }
        });
      },
      error => {
        Swal.fire("Error", "Could not update Leave details. Please try again.", "error");
      }
    );
  }

}
