import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  activities = [
    { id: 1, title: 'Activity 1', description: 'Activity 1 description', date: 'Aug 2026', icon: '🏆' },
    { id: 2, title: 'Tech Speaker', description: 'Talk on AI and Data Analytics', date: 'Aug 2026', icon: '🎤' },
    { id: 3, title: 'Open Source', description: 'Contributed to projects', date: 'July 2026', icon: '💻' }
  ];
}
