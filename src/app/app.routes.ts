   import { Routes } from '@angular/router';

export const routes: Routes =[
    {
        path: '',
        children: [
   {
                path: 'menu', title: 'menu', // added KSC  
              loadComponent: () => import('./menu/menu').then(c => c.Menu)
            },
             {
                path: 'comp1', title: 'comp1', // added KSC  
              loadComponent: () => import('./comp1/comp1').then(c => c.Comp1)
            },
         
        ]
    }

]