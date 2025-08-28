import { AfterViewInit, Component, effect, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Category {
  value: string;
  viewValue: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule, MatFormFieldModule, MatSelectModule, FormsModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements AfterViewInit {
 mySel = viewChild<ElementRef<HTMLSelectElement>>('mySelect');
//mySel = viewChild<any>('mySelect')
  constructor(){
sessionStorage.setItem('canView','true')
    effect(() => {
        // this.searchForm().searchField()?.nativeElement.focus();
       // this.mySel()?.nativeElement.open())
      
    });
  }
  ngAfterViewInit(): void {
   // this.mySelect.open();
  }
@ViewChild('mySelect') mySelect: any;

  selectedValue = signal<string>("6");



    categories: Category[] = [
    {value: '1', viewValue: 'Laravel', image: 'https://www.itsolutionstuff.com/category-images/laravel.svg'},
    {value: '2', viewValue: 'Angular', image: 'https://www.itsolutionstuff.com/category-images/angular.svg'},
    {value: '3', viewValue: 'Bootstrap', image: 'https://www.itsolutionstuff.com/category-images/bootstrap.svg'},
    {value: '4', viewValue: 'JS', image: 'https://www.itsolutionstuff.com/category-images/javascript.svg'},
    {value: '5', viewValue: 'Git', image: 'https://www.itsolutionstuff.com/category-images/git.png'},
    {value: '6', viewValue: 'Ken', image: 'IMG-20250510-WA0009.jpg'},
  ];
getStyle() {
    if (this.selectedValue()=='1') {
      return 'background:rgb(221, 47, 47)';
    }
     if (this.selectedValue()=='2') {
      return 'background:rgb(31, 206, 147);';
    }
     if (this.selectedValue()=='3') {
      return 'background:rgb(208, 221, 32);';
    }
     if (this.selectedValue()=='4') {
      return 'background:rgb(196, 28, 196);';
    }
     if (this.selectedValue()=='5') {
      return 'background:rgb(221, 78, 21)';
    }
    else return 'background:rgb(14, 27, 211)';
  }
test()
{
  this.mySel()?.nativeElement?.click()
}}
// IMG-20250510-WA0009.jpg
