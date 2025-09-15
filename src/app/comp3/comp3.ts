import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { httpResource } from '@angular/common/http';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const RESOURCE_URL = 'https://node2-tjnl.onrender.com/user/';

@Component({
  selector: 'app-comp3',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './comp3.html',
  styleUrl: './comp3.css'
})
export class Comp3 {
  id = signal(77);
  test = httpResource<any>(() => 'https://node2-tjnl.onrender.com/user/79');
  // Convert the signal into an observable and apply debounceTime
  idQuery$ = toObservable(this.id).pipe(debounceTime(5000));

  // Convert the observable back to a signal
  query = toSignal(this.idQuery$);

  // Use the query signal inside httpResource to fetch data
  myResource = httpResource<any>(() => `${RESOURCE_URL}${this.query()}`
    // This is triggered only after the debounce
  );

}
