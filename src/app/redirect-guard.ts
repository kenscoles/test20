import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const redirectGuard: CanActivateFn = () => {
  const myRouter = inject(Router)
  if (sessionStorage.getItem('canView') === 'true') {
    sessionStorage.removeItem('canView')
    return true;
  }
  //console.log("True")
  else {
    myRouter.navigate(['/menu']); // Replace '/menu' with your menu route
    console.log("False")
    return false; // Prevent navigation to the current route
  }
};
