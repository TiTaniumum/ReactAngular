import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoreService } from '../../shared/core.service';

@Component({
  selector: 'app-paintings',
  imports: [CommonModule],
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.scss'
})
export class PaintingsComponent {
  constructor(private core: CoreService){

  }
  Paintings(){
    return this.core.paintings
  }
}
