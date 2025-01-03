import { Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { Error404Component } from './components/error-404/error-404.component';
import { PicksComponent } from './components/picks/picks.component';
import { TobeComponent } from './components/tobe/tobe.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LibraryModule } from './components/library/library.module';
import { FormComponent } from '../form/form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { PipeComponent } from '../pipe/pipe.component';

export const routes: Routes = [
    {path: 'hello', component: HelloWorldComponent},
    {path: '404', component: Error404Component},
    {path: 'picks', component: PicksComponent},
    {path: 'tobe', component: TobeComponent},
    {path: 'resume',component: ResumeComponent},
    {path: 'library', loadChildren: ()=>import('./components/library/library.module').then(m=>m.LibraryModule)},
    {path: 'store', loadChildren: ()=>import('./components/store/store.module').then(m=>m.StoreModule)},
    {path: 'form', component: FormComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'pipe', component: PipeComponent},
    {path: '', redirectTo: '/404', pathMatch: 'full'},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}
];
