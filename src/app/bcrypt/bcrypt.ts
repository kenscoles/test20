import { Component, signal } from '@angular/core';
import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-bcrypt',
  imports: [],
  templateUrl: './bcrypt.html',
  styleUrl: './bcrypt.css'
})
export class Bcrypt {
  
   saltRounds = 10; // Typically a value between 10 and 12
   userPassword = 'Tripod2025'; // Replace with actual pw
   result = ""
   myHash = signal("")
 
// (async  () => {
//     // Technique 1 (generate a salt and hash on separate function calls):
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.hash(userPassword, salt);
//     // Store hash in your password DB.

//     // Technique 2 (auto-gen a salt and hash):
//     const hash2 = await bcrypt.hash(userPassword, saltRounds);
//     // Store hash in your password DB.
// })();
 async test(){
 let result, result2 = false
 const salt = await bcrypt.genSalt(this.saltRounds);
 const hash = await bcrypt.hash(this.userPassword, salt);
 this.myHash.set(hash)
 console.log("Hash", hash) // $2b$10$ncUuI3KSx1NoosnSbq49Fe0joR7lKpHKe.TkI74H0tfy0W1HPNv6O
// Load hash from your password DB
result = await bcrypt.compare(this.userPassword, hash); // true
console.log("result:", result)
result2 = await bcrypt.compare("not_bacon", hash); // false
console.log("result2:", result2)
 }

 onSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.customerName.value);
    this.result = event.target.customerName.value
    this.userPassword = this.result
    this.test()
  }
}
