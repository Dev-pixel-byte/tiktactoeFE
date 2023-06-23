import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiktactoeBoardComponent } from './tiktactoe-board/tiktactoe-board.component';

const routes: Routes = [
{path:'tiktak' ,component: TiktactoeBoardComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
