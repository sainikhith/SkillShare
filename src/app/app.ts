import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddResource } from "./add-resource/add-resource";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddResource],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //protected readonly title = signal('skillshare');
}
