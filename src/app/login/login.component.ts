import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
//import { delay } from '../util';


@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected dialogRef = inject(DialogRef, { optional: true });

  form: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';
  loading = false

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  get f() {
    return this.form.controls;
  }

  // async submit() {
  //   const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
  //   this.loading = true
  //   this.email = this.form.value.email;
  //   this.password = this.form.value.password;
  //   await delay(5000)
  //   this.loading = false
  //   this.router.navigate(['/menu'])

  // }
  protected closeModal() {
    this.dialogRef?.close();
  }
  onSubmit() {
   // console.log("Submitted:", this.form.value);
    this.dialogRef?.close(this.form.value);

  }

}

