import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  })
  isLoginError = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private localStorageService: LocalStorageService,
    private router: Router) { }

  userConnected?: User;
  isSubmit = false;

  onSubmit() {

    if (this.loginForm.valid) {
      // request login
      this.authService.logIn(this.loginForm.value).subscribe(
        (response: any) => {
          this.localStorageService.setLocalStorage("token", JSON.stringify(response.token));
          this.localStorageService.setLocalStorage("current_data", JSON.stringify(response.data));
          this.router.navigate(['dashboard-vendor']);
        },
        error => {
          this.isLoginError = true;
          console.log(`Error ${error}`)
        }
      );

    }
  }

  ngOnInit(): void {
    
  }

}
