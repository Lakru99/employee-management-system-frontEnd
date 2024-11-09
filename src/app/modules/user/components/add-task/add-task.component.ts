import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  public task:any={
    taskName: "",
    taskDescription: "",
    taskStates:""
  }
  constructor(private http: HttpClient) {}
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public addTask() {
    this.http.post("http://localhost:8080/task/add-task", this.task).subscribe((data) => {
      Swal.fire({
        title: 'Success!',
        text: 'Task added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // this.clearField();
    }, (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add Task. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
}
