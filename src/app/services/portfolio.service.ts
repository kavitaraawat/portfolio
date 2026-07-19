import { Injectable } from '@angular/core';

export interface Assignment {
  id: number;
  title: string;
  description: string;
  date: string;
  grade: string;
  tech: string[];
  learnings?: string[];
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private assignments: Assignment[] = [
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

  private activities: Activity[] = [
    { id: 1, title: 'Activity 1', description: 'Activity 1 description', date: 'Aug 2026', icon: '🏆' },
    { id: 2, title: 'Tech Speaker', description: 'Talk on AI and Data Analytics', date: 'Aug 2026', icon: '🎤' },
    { id: 3, title: 'Open Source', description: 'Contributed to projects', date: 'July 2026', icon: '💻' }
  ];

  private socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/kavita-rawat-271a38422' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/kavitaraawat' },
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/kavitaraawat' },
    { name: 'Email', icon: '📧', url: 'mailto:kavita.rawat@myemail.indwes.edu' }
  ];

  private projects: Project[] = [
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

  private skillCategories: SkillCategory[] = [
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

  private skillBadges: Skill[] = [
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

  constructor() { }

  // Assignment methods
  getAssignments(): Assignment[] {
    return this.assignments;
  }

  getAssignmentById(id: number): Assignment | undefined {
    return this.assignments.find(a => a.id === id);
  }

  addAssignment(assignment: Assignment): void {
    assignment.id = Math.max(...this.assignments.map(a => a.id), 0) + 1;
    this.assignments.push(assignment);
  }

  updateAssignment(assignment: Assignment): void {
    const index = this.assignments.findIndex(a => a.id === assignment.id);
    if (index !== -1) {
      this.assignments[index] = assignment;
    }
  }

  deleteAssignment(id: number): void {
    this.assignments = this.assignments.filter(a => a.id !== id);
  }

  // Activity methods
  getActivities(): Activity[] {
    return this.activities;
  }

  getActivityById(id: number): Activity | undefined {
    return this.activities.find(a => a.id === id);
  }

  addActivity(activity: Activity): void {
    activity.id = Math.max(...this.activities.map(a => a.id), 0) + 1;
    this.activities.push(activity);
  }

  updateActivity(activity: Activity): void {
    const index = this.activities.findIndex(a => a.id === activity.id);
    if (index !== -1) {
      this.activities[index] = activity;
    }
  }

  deleteActivity(id: number): void {
    this.activities = this.activities.filter(a => a.id !== id);
  }

  // Social Links methods
  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }

  // Project methods
  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  addProject(project: Project): void {
    project.id = Math.max(...this.projects.map(p => p.id), 0) + 1;
    this.projects.push(project);
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      this.projects[index] = project;
    }
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(p => p.id !== id);
  }

  // Skill methods
  getSkillCategories(): SkillCategory[] {
    return this.skillCategories;
  }

  getSkillBadges(): Skill[] {
    return this.skillBadges;
  }

  // Profile data - could be expanded with API call later
  getProfileData() {
    return {
      name: 'Kavita Rawat',
      title: 'AI & Data Analytics Graduate Student',
      bio: 'Welcome to my portfolio! I\'m passionate about artificial intelligence and data analytics. This portfolio showcases my academic work and personal projects.',
      profileImage: 'assets/img/portfolio/profile.png',
      stats: {
        projects: 25,
        assignments: 15,
        skills: 10
      }
    };
  }
}
