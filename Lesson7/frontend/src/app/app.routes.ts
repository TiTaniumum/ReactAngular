import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'auth', loadChildren:()=>import('../features/auth/auth.module').then(m=>m.AuthModule)},
    {path: 'home', loadChildren:()=>import('../features/home/home.module').then(m=>m.HomeModule)}    
];
