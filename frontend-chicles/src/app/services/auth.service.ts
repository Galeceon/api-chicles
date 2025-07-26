import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  login(data: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  register(data: { username: string, password: string, role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken });
  }

  // Nuevo método para obtener el rol del usuario
  getUserRole(): string | null {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        // Decodificar el JWT para obtener el payload
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role || null;
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  // Método para verificar si es admin
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  // Método para logout
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
