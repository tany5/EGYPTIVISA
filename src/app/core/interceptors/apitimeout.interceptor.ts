import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError, timeout } from 'rxjs';

export const apitimeoutInterceptor: HttpInterceptorFn = (req, next) => {
  const TIMEOUT: number = 60000;
  console.log(next)
  return next(req).pipe(timeout(TIMEOUT),catchError((error: HttpErrorResponse)=>{
    if (error) {
      console.log(error);
      // Handle the timeout error
      return throwError(() => new Error('Request timed out after 1 minute'));
    } else {
      // Handle other errors
      return throwError(() => error);
    }

  }));
};