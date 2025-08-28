import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogRef } from '@angular/cdk/dialog';

interface iSignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-sign-up-form',
  imports: [ ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpForm {

 protected signUpForm = new FormGroup<iSignUpForm>({
    name: new FormControl<string>('', { 
      nonNullable: true, 
      validators: Validators.required
    }),
    email: new FormControl<string>('', {
      nonNullable: true, 
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });

  protected dialogRef = inject(DialogRef, { optional: true });
  protected closeModal() {
    this.dialogRef?.close(this.signUpForm.value);
  }
  onSubmit() {
console.log("Submitted:", this.signUpForm.value);
this.closeModal();
}
}
