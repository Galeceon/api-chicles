import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GumService } from '../../services/gum.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-gums',
  templateUrl: './gums.html',
  styleUrls: ['./gums.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class GumsComponent implements OnInit {
  gums: any[] = [];
  error = '';
  showAddForm = false;
  isAdmin = false;
  newGum = { name: '', description: '' };

  constructor(
    private gumService: GumService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.getGums();
  }

  getGums(): void {
    this.gumService.getAll().subscribe({
      next: (data) => this.gums = data,
      error: () => this.error = 'Error al cargar chicles'
    });
  }

  addGum(): void {
    this.gumService.create(this.newGum).subscribe({
      next: () => {
        this.getGums(); // Recargar la lista
        this.cancelAdd();
        this.error = '';
      },
      error: () => {
        this.error = 'Error al agregar chicle';
      }
    });
  }

  deleteGum(gumId: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este chicle?')) {
      this.gumService.delete(gumId).subscribe({
        next: () => {
          this.getGums(); // Recargar la lista
          this.error = '';
        },
        error: (error) => {
          console.error('Error al eliminar chicle:', error);
          this.error = error.error?.message || 'Error al eliminar chicle';
        }
      });
    }
  }

  cancelAdd(): void {
    this.showAddForm = false;
    this.newGum = { name: '', description: '' };
  }
}
