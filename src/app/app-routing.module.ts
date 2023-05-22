import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatentsComponent } from './components/patents/patents.component';

const routes: Routes = [
  { path: '', redirectTo: 'patents', pathMatch: 'full' },
  { path: 'patents', component: PatentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
