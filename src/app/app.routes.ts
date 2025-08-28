   import { Routes } from '@angular/router';
   import { redirectGuard } from './redirect-guard';

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
            {
                path: 'comp2', title: 'comp2', // added KSC  
              loadComponent: () => import('./comp2/comp2').then(c => c.Comp2)
            },
            {
                path: 'comp3', title: 'comp3', // added KSC  
              loadComponent: () => import('./comp3/comp3').then(c => c.Comp3)
            },
            {
                path: 'crypto', title: 'crypto', canActivate:[redirectGuard], // added KSC  
              loadComponent: () => import('./crypto/crypto').then(c => c.Crypto)
            },
             {
                path: 'bcrypt', title: 'bcrypt',   
              loadComponent: () => import('./bcrypt/bcrypt').then(c => c.Bcrypt)
            },
         
        ]
    }

]