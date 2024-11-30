import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
})
export class DeleteUserComponent {
  userId!: number;

  constructor(private userService: UserService) {}

  deleteUser(): void {
    this.userService.deleteUser(this.userId).subscribe(() => {
      alert('User deleted!');
    });
  }
}
