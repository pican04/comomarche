import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ValidatorFn, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MarchandService } from 'src/app/services/marchand.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formRegister!: FormGroup;
   // notification empty
   isOk = -1;

  constructor(private router: Router, private fb: FormBuilder, private serviceMarchand: MarchandService) { }

  ngOnInit(): void {

    // Init form
    this.formRegister = this.fb.group({
      username: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      commune: ['', Validators.required],
      password: ['', Validators.required],
      details: ['', Validators.required],
      telephone: ['', Validators.required ],
    });
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  submitForm() {    
    
    if (this.formRegister.valid) {
      // request create
      this.serviceMarchand.createMarchand(this.formRegister.value).subscribe(
        (response: any) => {
          // if created = 1 or If error error = 0
          this.isOk = response.code == 200 ? 1 : 0;
          if (this.isOk) {
            this.formRegister.reset(); // form.reset();
          }
        },
        error => console.log(`Error ${error}`)
      );
    }
  }

}
