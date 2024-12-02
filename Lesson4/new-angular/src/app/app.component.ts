import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeModule } from '../pipe/pipe.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-angular';
}
