import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { CapitalisePipe } from './capitalise.pipe';



@NgModule({
  declarations: [PipeComponent, CapitalisePipe],
  providers: [CapitalisePipe],
  imports: [CommonModule]
})
export class PipeModule { }
