import { Component, effect, inject, signal } from '@angular/core';
import { UsernameField } from '../username-field/username-field';
import { AESEncryptDecryptService } from '../aesencrypt-decrypt-service';

@Component({
  selector: 'app-crypto',
  imports: [UsernameField],
  templateUrl: './crypto.html',
  styleUrl: './crypto.css'
})
export class Crypto {

crypt = inject(AESEncryptDecryptService)  
 protected secret = signal('Danny');

plainText = "password"
secretKey = "ourSecret"
encryptedText  =""
decryptedText = ""

 constructor() {
    effect(() => {
      this.encryptedText = this.crypt.encrypt(this.plainText, this.secret());
      this.decryptedText = this.crypt.decrypt(this.encryptedText, this.secret());
    });
  }
}
