import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export function TokenInterceptor(
  request: HttpRequest<unknown>, 
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  console.log('=== INTERCEPTOR DEBUG ===');
  console.log('URL:', request.url);
  console.log('Método:', request.method);
  
  const token = localStorage.getItem('accessToken');
  console.log('Token encontrado:', !!token);
  
  if (token) {
    console.log('Token:', token.substring(0, 20) + '...');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Headers finales:', request.headers);
  } else {
    console.log('NO HAY TOKEN - No se agregaron headers');
  }
  
  return next(request);
}
