import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { AddResource } from "./add-resource/add-resource";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, AddResource],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  //protected readonly title = signal('skillshare');
}
