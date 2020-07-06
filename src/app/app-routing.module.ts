import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
    {
	path: '',
	component: HomeComponent
    },
    {
	path: 'cars',
	component: CarsComponent
    },
    {
	path: 'about',
	component: AboutComponent
    },
		{
	path: 'editor',
	component: EditorComponent
		}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
