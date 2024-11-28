import { Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HelloWorldNewComponent } from './components/hello-world-new/hello-world-new.component';
import { Error404Component } from './components/error-404/error-404.component';
import { PicksComponent } from './components/picks/picks.component';
import { TobeComponent } from './components/tobe/tobe.component';

export const routes: Routes = [
    {path: 'hello', component: HelloWorldComponent},
    {path: 'hello-new', component: HelloWorldNewComponent},
    {path: '404', component: Error404Component},
    {path: 'picks', component: PicksComponent},
    {path: 'tobe', component: TobeComponent},
    {path: '', redirectTo: '/404', pathMatch: 'full'},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}
];
