import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FORMERR } from 'dns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstproject';
  constructor(){
    console.log(this.title)
  
  }
}

