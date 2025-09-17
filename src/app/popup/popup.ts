import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-popup',
  imports: [DialogComponent],
  template: `
    <p>
     <h1>Dialog demo</h1>
     showDialog : {{showDialog}}
    <button (click)="showDialog = true">Open dialog</button>
    <app-dialog title="Test dialog" [(isOpen)]="showDialog">
        This dialog is great  
        <h1>Does this get included?</h1>
    </app-dialog>

  `,
  styleUrl: './popup.css'
})
export class Popup {
  showDialog = false;

}
