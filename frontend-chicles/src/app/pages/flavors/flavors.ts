import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlavorService } from '../../services/flavor.service';
import { GumService } from '../../services/gum.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.html',
  styleUrls: ['./flavors.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class FlavorsComponent implements OnInit {
  flavors: any[] = [];
  gums: any[] = [];
  error = '';
  showAddForm = false;
  isAdmin = false;
  newFlavor = { name: '', gumId: null };

  constructor(
    private flavorService: FlavorService,
    private gumService: GumService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.getFlavors();
    this.getGums();
  }

  getFlavors(): void {
    this.flavorService.getAll().subscribe({
      next: (data) => this.flavors = data,
      error: () => this.error = 'Error al cargar sabores'
    });
  }

  getGums(): void {
    this.gumService.getAll().subscribe({
      next: (data) => this.gums = data,
      error: () => console.error('Error al cargar chicles')
    });
  }

  addFlavor(): void {
    // Si no hay gumId seleccionado, usar el primer chicle disponible
    if (!this.newFlavor.gumId && this.gums.length > 0) {
      this.newFlavor.gumId = this.gums[0].id;
    }

    this.flavorService.create(this.newFlavor).subscribe({
      next: (response) => {
        this.getFlavors();
        this.cancelAdd();
        this.error = '';
      },
      error: (error) => {
        console.error('Error completo:', error);
        this.error = error.error?.message || 'Error al agregar sabor';
      }
    });
  }

  deleteFlavor(flavorId: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este sabor?')) {
      this.flavorService.delete(flavorId).subscribe({
        next: () => {
          this.getFlavors(); // Recargar la lista
          this.error = '';
        },
        error: (error) => {
          console.error('Error al eliminar sabor:', error);
          this.error = error.error?.message || 'Error al eliminar sabor';
        }
      });
    }
  }

  cancelAdd(): void {
    this.showAddForm = false;
    this.newFlavor = { name: '', gumId: null };
  }
}
