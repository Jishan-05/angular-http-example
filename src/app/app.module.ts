import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { PostUserComponent } from './post-user/post-user.component';
import { PutUserComponent } from './put-user/put-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GetUsersComponent,
    PostUserComponent,
    PutUserComponent,
    DeleteUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule, // Add this



  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
