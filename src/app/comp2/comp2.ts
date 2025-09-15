import { Component, inject, signal } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as bcrypt from 'bcryptjs'
import { HttpClient, httpResource } from '@angular/common/http';

interface iLogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-comp2',
  imports: [MatButtonModule],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css'
})
export class Comp2 {
  private dialog = inject(Dialog);
  private http = inject(HttpClient)
  //reply = signal<iLogData>({ "email": "", "password": "" })
  reply = signal<Partial<iLogData>>({});
  //
test = httpResource<any>(() => ({
  url: 'https://node2-tjnl.onrender.com/user/80',
  //keepalive: true,
  timeout: 8000, // ms
  cache: 'no-cache',
  //priority: 'low',
  //credentials: 'omit',
  //mode: 'same-origin',
  //redirect: 'manual',
}));
 //
  //test = httpResource<any>(() => 'https://node2-tjnl.onrender.com/user/79');
  protected title = 'test20';
  protected username = signal('Ken');

  userPassword = "data" // get this from input !!
  hash = ""
  result = false
  outcome = "untested"
  myResult = signal<any>("")
  show = signal(false)
  myError = signal("")


  //flag = signal(1)
  flag2 = signal("kenscoles@mail.fr")
  lyra = signal("ken@lib.com")
  //
  openModal() {
    this.myError.set("")
    this.show.set(false)
    const dialogRef = this.dialog.open(LoginComponent, { disableClose: true })

    dialogRef.closed.subscribe(res => {
      { this.reply.set(res as iLogData) }
      //
      const myData = this.http.get(`https://node2-tjnl.onrender.com/email/${this.reply().email}`)
      myData.subscribe({
        next: res => { // if all ok
          this.myResult.set(res)
          console.log("res ",res);
          this.hash = this.myResult().phone;
          this.userPassword = this.reply().password!
          this.result = bcrypt.compareSync(this.userPassword, this.hash)// true
          this.show.set(this.result)
        },
        error: err => { // if any error
          console.log("error:", err.status)
          if (err.status == 400) {
            this.myError.set("Email address not found")
          }
          else this.myError.set("server error")
        }
      })
    });

  }
  test2() { // this is a dummy routine 
    this.http.get('/api/config').subscribe({
      next: config => {
        console.log('Config fetched successfully:', config);
      },
      error: err => {
        console.log("error:", err.status)
      }
    });
  }
}
