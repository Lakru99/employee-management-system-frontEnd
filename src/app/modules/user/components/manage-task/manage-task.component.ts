import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.css']
})
export class ManageTaskComponent {

  public taskList:any=[];
  public isModalOpen = false;

  constructor(private http:HttpClient){
    this.loadTable();  
  }
  loadTable(){
    this.http.get("http://localhost:8080/task/get-all").subscribe(data=>{
      console.log(data);
      this.taskList=data;
    })
  }

  deleteTaskById(id:any){
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
          this.http.delete(`http://localhost:8080/task/delete-task/${id}`).subscribe(data=>{
            console.log(id);
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
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
  public taskTemp: any = {};

  updateTask(task:any){
    console.log(task);
    this.taskTemp = { ...task };
    this.openModal();


  }
  saveTask() {
    this.http.put("http://localhost:8080/task/update-task", this.taskTemp).subscribe(
      data => {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "Task details updated successfully.", "success");
            this.loadTable(); 
            this.closeModal();
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            this.closeModal();
          }
        });
      },
      error => {
        Swal.fire("Error", "Could not update Task details. Please try again.", "error");
      }
    );
  }



}
