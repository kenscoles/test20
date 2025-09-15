import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SignUpForm } from '../sign-up-form/sign-up-form';
import { MatButtonModule } from '@angular/material/button';
import { UsernameField } from '../username-field/username-field';

interface iSignUpData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-comp1',
  imports: [MatButtonModule, UsernameField],
  templateUrl: './comp1.html',
  styleUrl: './comp1.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1 {
  private dialog = inject(Dialog);
  protected reply = signal<iSignUpData>({ "name": "", "email": "" })
  protected username = signal('Ken');
  
  openModal() {
    const dialogRef = this.dialog.open(SignUpForm, { disableClose: true });
    dialogRef.closed.subscribe(res => this.reply.set(res as iSignUpData))
  }
}
