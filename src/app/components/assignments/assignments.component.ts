import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent {
  selectedAssignment: any = null;

  assignments = [
    {
      id: 1,
      title: 'Foundations of Data Analytics (DTAN-500)',
      description: 'Introduction to data analytics concepts and techniques',
      date: 'July 2026',
      grade: 'A+',
      tech: ['Tableau', 'Python', 'R'],
      learnings: [
        'Learned and Mastered core data analytics concepts: data cleaning, data visualization, and statistical analysis',
        'Gained hands-on experience with Tableau for creating interactive dashboards and visualizations',
        'Developed proficiency in Python and R for data manipulation, analysis, and visualization',
        'Applied data analytics techniques to real-world datasets and projects, enhancing problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals (AIML-500)',
      description: 'Introduction to machine learning algorithms and applications',
      date: 'July 2026',
      grade: 'A',
      tech: ['Python', 'Scikit-learn', 'TensorFlow'],
      learnings: [
        'Learned and Mastered core machine learning concepts: supervised learning, unsupervised learning, and reinforcement learning',
        'Gained hands-on experience with Scikit-learn for implementing machine learning algorithms and models',
        'Explored deep learning techniques with TensorFlow',
        'Applied machine learning techniques to real-world datasets and projects, enhancing problem-solving skills'
      ]
    }
  ];

  openModal(assignment: any) {
    this.selectedAssignment = assignment;
  }

  closeModal() {
    this.selectedAssignment = null;
  }
}
