import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true, // Since you're using standalone components, this tells Angular this is a standalone component
  imports: [
    RouterOutlet, // Router outlet to load routed views
    HeaderComponent, // Your header component
    FooterComponent, // Your footer component
    CommonModule, // Import the common module for Angular features like ngIf, ngFor, etc.
    HttpClientModule, // Import HttpClientModule to make HTTP requests
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'fju-vibe';
}
