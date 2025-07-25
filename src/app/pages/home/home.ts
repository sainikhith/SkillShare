import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  resources = [
    'banana object 1',
    'banana object 2',
    'banana object 3',
    'banana object 4',
    'banana object 5',
  ];
}
