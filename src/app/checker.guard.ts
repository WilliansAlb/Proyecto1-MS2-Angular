import { CanActivateFn, Router } from '@angular/router';
import { CheckerService } from './checker.service';
import { inject } from '@angular/core';

export const checkerGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const servi = inject(CheckerService);
  servi.getAreas().subscribe(
    (response) => {
      if (Object(response)["areasNumber"]==0){
        router.navigate(['loader']);
      }
    },
    (error) => {
      console.error('Error sending data:', error);
      router.navigate(['loader']);
      return false;
    }
  );
  return true;
};
