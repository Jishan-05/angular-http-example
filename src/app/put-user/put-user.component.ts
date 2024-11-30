import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-put-user',
  templateUrl: './put-user.component.html',
})
export class PutUserComponent {
  userId!: number;
  user = { name: '', email: '' };

  constructor(private userService: UserService) {}

  updateUser(): void {
    this.userService.putUser(this.userId, this.user).subscribe(response => {
      alert('User updated!');
      console.log(response);
    });
  }
}
