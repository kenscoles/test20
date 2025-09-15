import { Component, signal } from '@angular/core';
import { Debounce } from '../debounce';


@Component({
  selector: 'app-debouncing',
  imports: [Debounce],
  template: `
  <div class="centre">
    <h3><a target="_blank" href="https://medium.com/@groupp/effective-debouncing-in-angular-keep-signals-pure-703eb105a495">Effective Debouncing in Angular: Keep Signals Pure
      </a></h3>
  </div>
    <div class="case1 centre">
      <h2>As an input</h2>  
      <input type="search" name="q" debounceTime="2000" [(value)]="$query" />
      <h3>Result: {{$query()}}</h3>
    </div>
    <div class="case2 centre">
      <h2>As a debounced button</h2>
      <p><button [debounceTime]="2000" (debounceClick)="test()">button</button>
      <h3>Message: {{message()}}</h3>
    </div>
    <div class="centre">
    <p>  
    <button (click)="reset()">reset</button>
    </div>
  `,
  styles: `
  .case1 {
    background-color: rgba(116, 210, 226, 1);
    padding: 10px;
    width: 50%;
  }
  .case2 {
    background-color: rgba(216, 138, 183, 1);
    padding: 10px;
    width: 50%;
  }
  .centre {
width: 70%;
text-align:justify;
margin-right: auto;
margin-left: auto;
}
  
  `
})
export class Debouncing {
  $query = signal('');
  message = signal<string>("")

  test() {
    this.message.set("yes it works")
  }

  reset(){
    this.message.set("")
    this.$query.set("")
  }
}
