import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
})
export class PostUserComponent {
  user = { name: '', email: '' };

  constructor(private userService: UserService) {}

  addUser(): void {
    this.userService.postUser(this.user).subscribe(response => {
      alert('User added!');
      console.log(response);
      // After adding the user, fetch the updated list
      this.userService.getUsers().subscribe((users) => {
        console.log('Updated Users:', users);
    });
  },
  (error) => {
    console.error('Error adding user', error);
  }
);
}
}


