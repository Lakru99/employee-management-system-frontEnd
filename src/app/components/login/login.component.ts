import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin/home']);
    }
  }

  // onSubmit(){
  //   if (this.loginForm.valid) {
  //     this.auth.login(this.loginForm.value).subscribe(
  //       (result) => {
  //         console.log(result);
  //         this.router.navigate(['/admin/home']);
  //       },
  //       (err: Error) => {
  //         // alert(err.message);
  //         Swal.fire({
  //           title: "Invalid Email or Password",
  //           text: "Please check your email or password",
  //           icon: "error"
  //         });
  //       }
  //     );
  //   }
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
  
          // Check the user's role and navigate accordingly
          if (result.role === 'admin') {
            this.router.navigate(['/admin/home']);
          } else if (result.role === 'user') {
            this.router.navigate(['/user/home']);
          }
        },
        (err: Error) => {
          // Display error alert
          Swal.fire({
            title: "Invalid Email or Password",
            text: "Please check your email or password",
            icon: "error"
          });
        }
      );
    }
  }
  

}
