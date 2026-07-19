import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'E-Commerce',
      description: 'Full-stack platform with Angular & Node.js',
      image: '/assets/img/projects/ecommerce.png',
      tech: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Real-time task management app',
      image: '/assets/img/projects/ecommerce.png',
      tech: ['Angular', 'Firebase']
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather with OpenWeatherMap API',
      image: '/assets/img/projects/ecommerce.png',
      tech: ['Angular', 'API']
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Full blogging platform with comments',
      image: 'https://via.placeholder.com/350x200?text=Blog',
      tech: ['React', 'Node.js']
    },
    {
      id: 5,
      title: 'Chat App',
      description: 'Real-time chat with WebSocket',
      image: 'https://via.placeholder.com/350x200?text=Chat',
      tech: ['Angular', 'Socket.io']
    },
    {
      id: 6,
      title: 'Portfolio',
      description: 'Modern portfolio with animations',
      image: 'https://via.placeholder.com/350x200?text=Portfolio',
      tech: ['Angular', 'SCSS']
    }
  ];
}
