import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';

const routes: Routes = [
  {path : '', redirectTo : 'Home', pathMatch : 'full'}, 
  {path: 'Home', component : AppComponent}, 
  {path : 'Led', component : LedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
