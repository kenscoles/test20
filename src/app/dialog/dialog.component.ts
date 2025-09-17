import {Component, input, model} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  isOpen = model(false);
  title = input("Title");

  closePopup(): void {
    this.isOpen.set(false);
  }
}
