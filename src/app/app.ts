import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { AddResource } from "./add-resource/add-resource";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, MatFormFieldModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  //protected readonly title = signal('skillshare');
}
