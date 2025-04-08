import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss'
})
export class TeamMemberComponent {
  teamMembers = [
    { name: 'Chase Hope', position: 'Product Manager', progress: 50, avatar: 'path/to/avatar.jpg' },
    { name: 'Ruth Ravis', position: 'Software Developer', progress: 60, avatar: 'path/to/avatar.jpg' },
    // Add more members here
  ];
}
