import { inject, Injectable } from '@angular/core';
import * as crypt from 'crypto-ts'


@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptService {
//crypt = inject(crypto)
  secretKey = "YourSecretKeyForEncryption&Descryption";
  constructor() { }

  encrypt(value : string, secretKey: string) : string{
    return crypt.AES.encrypt(value, secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string, secretKey: string){
    return crypt.AES.decrypt(textToDecrypt, secretKey.trim()).toString(crypt.enc.Utf8);
  }
}
