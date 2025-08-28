import { ChangeDetectionStrategy, Component, input, model, output } from "@angular/core";

@Component({
  selector: 'app-username-field',
  imports: [],
  templateUrl: './username-field.html',
  styleUrl: './username-field.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsernameField {

  username = model('');

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.username.set(value);
  }

}
