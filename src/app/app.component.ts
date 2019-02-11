import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color:dodgerblue;
  }
  h4{
    color:yellowgreen;
  }
  `]
})  // you can either have the styleURLS as an array for bigger projects or
 // you can have specified listed styles: h3 that will override the style urls.
export class AppComponent {
}
