import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { PostUserComponent } from './post-user/post-user.component';
import { PutUserComponent } from './put-user/put-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'get-users', pathMatch: 'full' },
  { path: 'get-users', component: GetUsersComponent},
  { path: 'post-user', component: PostUserComponent },
  { path: 'put-user', component: PutUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
