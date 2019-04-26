import { Component } from '@angular/core';
import { Collegue } from './models/Collegue';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  astier: Collegue = new Collegue('142543543512154321324', 'Astier', 'Alexandre',
  'astier@bretagne.com', new Date('1994-10-10'), 'http://kaamelott.com/kaamelott.jpg');
  asterix: Collegue = collegueMock;
}
