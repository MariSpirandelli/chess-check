import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { AppComponent } from '../app.component';

const APP_ROUTES: Routes = [
    {
        path: 'chess',
        redirectTo: 'chess/board',
        pathMatch: 'prefix'
    },
    {
        path: 'chess/board',
        component: AppComponent
    },
    {path: '', redirectTo: 'chess/board', pathMatch: 'prefix'},
    {path: '**', redirectTo: 'chess/board', pathMatch: 'prefix'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules})
    ]
})
export class AppRoutesModule {
}
