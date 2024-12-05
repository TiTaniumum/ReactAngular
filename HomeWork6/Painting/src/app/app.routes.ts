import { Routes } from '@angular/router';
import { PaintingComponent } from '../components/painting/painting.component';
import { PaintingsComponent } from '../components/paintings/paintings.component';

export const routes: Routes = [
    {path: 'painting/:id',component: PaintingComponent},
    {path: 'paintings',component: PaintingsComponent}
];
