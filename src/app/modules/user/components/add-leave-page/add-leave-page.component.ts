import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-leave-page',
  templateUrl: './add-leave-page.component.html',
  styleUrls: ['./add-leave-page.component.css']
})
export class AddLeavePageComponent {

  public leave:any={
    leaveName: "",
    leaveDate: ""
  }
  constructor(private http: HttpClient) {}

  public addLeave() {
    this.http.post("http://localhost:8080/leave/add-leave", this.leave).subscribe((data) => {
      // Show success alert with SweetAlert2
      Swal.fire({
        title: 'Success!',
        text: 'Leave added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // this.clearField();
    }, (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add Leave. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
  
}
