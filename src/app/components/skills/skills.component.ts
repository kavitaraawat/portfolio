import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories = [
    {
      name: 'Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 93 }
      ]
    },
    {
      name: 'Web Tech',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 88 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Node.js', level: 90 }
      ]
    }
  ];

  skills = [
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Angular', icon: '⚙️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🏠' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🌿' },
    { name: 'Git', icon: '🔄' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'TypeScript', icon: '📘' }
  ];
}
