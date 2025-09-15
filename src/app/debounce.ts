import { Directive, effect, input, model, numberAttribute, output } from '@angular/core';
@Directive({
  selector: '[debounceTime]',
  host: {
    '(input)': 'handleInput($event)',
    '(click)': 'handleClick()',
  },
})
export class Debounce {
  #debounceTimer?: ReturnType<typeof setTimeout>;
  readonly debounceTime = input(0, { transform: numberAttribute });
  readonly value = model<string>();
  readonly debounceClick = output<any>();

  constructor() {
    effect(() => {
      console.log(this.value());
      console.log(this.debounceTime());
    });
  }
  handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    clearTimeout(this.#debounceTimer);
    if (!value || !this.debounceTime()) {
      this.value.set(value);
    } else {
      this.#debounceTimer = setTimeout(
        () => this.value.set(value),
        this.debounceTime()
      );
    }
  }
  handleClick = () => {
    clearTimeout(this.#debounceTimer);
    this.#debounceTimer = setTimeout(
      () => {
        this.debounceClick.emit("")
      },
      this.debounceTime()
    );
  }
}

