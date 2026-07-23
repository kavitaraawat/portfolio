import { Injectable } from '@angular/core';


export interface AssignmentDetail {
  title: string;
  description: string;
  image?: string;
  points?: string[];
}
export interface Assignment {
  id: number;
  title: string;
  description: string;
  date: string;
  grade: string;
  tech: string[];
  learnings?: string[];
  details?: AssignmentDetail[];
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
      title: 'Evolution of AI: From Early Symbolic Systems to Generative and Agentic AI',
      description: 'The evolution of AI reflects a progression from symbolic reasoning and handcrafted rules to machine learning, deep learning, and now generative and agentic AI.',
      date: 'July 2026',
      grade: '',
      tech: ['', '', ''],
      learnings: [
        'Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that normally require human intelligence, such as reasoning, learning, problem solving, language understanding, and decision-making. The evolution of AI has not been linear; rather, it has progressed through multiple phases marked by optimism, setbacks, and technological breakthroughs. From early rule-based systems in the 1950s to today’s generative and agentic AI systems, the field has continuously expanded in both capability and real-world impact. Understanding this evolution is important because it shows how AI moved from handcrafted logic to data-driven learning and now toward systems capable of autonomous action. <br><br> The foundations of AI were laid in the 1950s. In 1950, Alan Turing published Computing Machinery and Intelligence and proposed the Turing Test, which became a landmark concept for evaluating machine intelligence. In 1956, the Dartmouth Conference, organized by John McCarthy and other researchers, formally established AI as a field of study. Early AI systems were primarily symbolic and rule-based, meaning they relied on human-defined logic and explicit instructions. Programs such as Logic Theorist demonstrated that machines could solve problems using symbolic reasoning, but these systems were limited to narrow and highly controlled tasks. <br><br>During the 1960s and 1970s, AI research expanded into natural language processing, robotics, and knowledge-based systems. One early example was ELIZA (1966), a chatbot created by Joseph Weizenbaum that simulated conversation using pattern matching. Another milestone was the Perceptron, introduced by Frank Rosenblatt, which suggested that machines could learn simple patterns from data. However, AI systems of this period struggled with limited computing power, insufficient data, and unrealistic expectations. These issues contributed to the first AI Winter in the 1970s, when funding and enthusiasm declined. AI recovered in the 1980s with expert systems, which captured human expertise in the form of rules for tasks such as diagnosis and decision support. Although commercially useful, expert systems were expensive to maintain and difficult to scale.<br><br>The late 1980s and 1990s marked a transition from rule-based AI to machine learning, where systems learned from data instead of relying only on manually written rules. A major milestone was the revival of neural networks through backpropagation, popularized by Geoffrey Hinton, David Rumelhart, and Ronald Williams in 1986. At the same time, statistical techniques such as decision trees, Bayesian models, and support vector machines became widely used. A landmark public achievement occurred in 1997, when IBM’s Deep Blue defeated world chess champion Garry Kasparov, showing the growing strength of AI in specialized domains.<br><br>The modern AI revolution began in the 2010s with the rise of deep learning, driven by large datasets, improved algorithms, and powerful GPUs supported by cloud computing. In 2012, AlexNet dramatically improved image recognition performance and demonstrated the power of deep neural networks. This success accelerated progress in speech recognition, computer vision, and natural language processing. In 2016, AlphaGo defeated Lee Sedol, combining deep learning and reinforcement learning in a historic achievement. The next major breakthrough came in 2017 with the Transformer architecture, which became the foundation for modern large language models. This led to Generative AI, where systems such as GPT can create text, code, and images. More recently, AI has begun moving toward Agentic AI, in which systems can plan tasks, use tools, access information, and perform multi-step actions autonomously.<br><br>The evolution of AI reflects a progression from symbolic reasoning and handcrafted rules to machine learning, deep learning, and now generative and agentic AI. Each stage has expanded the scope of what machines can do, from solving predefined logical problems to generating content and performing complex tasks with increasing autonomy. As AI continues to evolve, its impact on business, education, healthcare, software engineering, and society will likely grow even further. Understanding its historical development helps explain both its current capabilities and its future direction.<br><br><button class="btn btn-primary btn-lg mt-4" onclick="window.open(\'https://brightspace.indwes.edu/d2l/le/307215/discussions/posts/20430716/ViewAttachment?fileId=36327336\', \'_blank\')">AI Timeline</button>'      
      ],
      details: [
        {
          title: 'XYZ Title',
          description: 'XYZ Desc Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that normally require human intelligence, such as reasoning, learning, problem solving, language understanding, and decision-making. The evolution of AI has not been linear; rather, it has progressed through multiple phases marked by optimism, setbacks, and technological breakthroughs. From early rule-based systems in the 1950s to today’s generative and agentic AI systems, the field has continuously expanded in both capability and real-world impact. Understanding this evolution is important because it shows how AI moved from handcrafted logic to data-driven learning and now toward systems capable of autonomous action.',
          image: '/assets/img/assignments/AI_Timeline.png',
          points: []
        },
        {
          title: 'Introduction',
          description: 'Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that normally require human intelligence, such as reasoning, learning, problem solving, language understanding, and decision-making. The evolution of AI has not been linear; rather, it has progressed through multiple phases marked by optimism, setbacks, and technological breakthroughs. From early rule-based systems in the 1950s to today’s generative and agentic AI systems, the field has continuously expanded in both capability and real-world impact. Understanding this evolution is important because it shows how AI moved from handcrafted logic to data-driven learning and now toward systems capable of autonomous action.',
          image: '/assets/img/assignments/AI_Timeline.png',
          points: []
        },
        {
          title: 'Evolution of AI',
          description: `'The foundations of AI were laid in the 1950s. In 1950, Alan Turing published Computing Machinery and Intelligence and proposed the Turing Test, which became a landmark concept for evaluating machine intelligence. In 1956, the Dartmouth Conference, organized by John McCarthy and other researchers, formally established AI as a field of study. Early AI systems were primarily symbolic and rule-based, meaning they relied on human-defined logic and explicit instructions. Programs such as Logic Theorist demonstrated that machines could solve problems using symbolic reasoning, but these systems were limited to narrow and highly controlled tasks.
During the 1960s and 1970s, AI research expanded into natural language processing, robotics, and knowledge-based systems. One early example was ELIZA (1966), a chatbot created by Joseph Weizenbaum that simulated conversation using pattern matching. Another milestone was the Perceptron, introduced by Frank Rosenblatt, which suggested that machines could learn simple patterns from data. However, AI systems of this period struggled with limited computing power, insufficient data, and unrealistic expectations. These issues contributed to the first AI Winter in the 1970s, when funding and enthusiasm declined. AI recovered in the 1980s with expert systems, which captured human expertise in the form of rules for tasks such as diagnosis and decision support. Although commercially useful, expert systems were expensive to maintain and difficult to scale.
The late 1980s and 1990s marked a transition from rule-based AI to machine learning, where systems learned from data instead of relying only on manually written rules. A major milestone was the revival of neural networks through backpropagation, popularized by Geoffrey Hinton, David Rumelhart, and Ronald Williams in 1986. At the same time, statistical techniques such as decision trees, Bayesian models, and support vector machines became widely used. A landmark public achievement occurred in 1997, when IBM’s Deep Blue defeated world chess champion Garry Kasparov, showing the growing strength of AI in specialized domains.
The modern AI revolution began in the 2010s with the rise of deep learning, driven by large datasets, improved algorithms, and powerful GPUs supported by cloud computing. In 2012, AlexNet dramatically improved image recognition performance and demonstrated the power of deep neural networks. This success accelerated progress in speech recognition, computer vision, and natural language processing. In 2016, AlphaGo defeated Lee Sedol, combining deep learning and reinforcement learning in a historic achievement. The next major breakthrough came in 2017 with the Transformer architecture, which became the foundation for modern large language models. This led to Generative AI, where systems such as GPT can create text, code, and images. More recently, AI has begun moving toward Agentic AI, in which systems can plan tasks, use tools, access information, and perform multi-step actions autonomously.'`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        },
        {
          title: 'Conclusion',
          description: `'The evolution of AI reflects a progression from symbolic reasoning and handcrafted rules to machine learning, deep learning, and now generative and agentic AI. Each stage has expanded the scope of what machines can do, from solving predefined logical problems to generating content and performing complex tasks with increasing autonomy. As AI continues to evolve, its impact on business, education, healthcare, software engineering, and society will likely grow even further. Understanding its historical development helps explain both its current capabilities and its future direction.'`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        }        
      ]      
    },
    {
      id: 2,
      title: 'Machine Learning Vs Deep Learning',
      description: 'Machine Learning and Deep Learning are two subsets of Artificial Intelligence (AI) that ...',
      date: 'July 2026',
      grade: '',
      tech: ['', '', ''],
      learnings: [
        'Artificial intelligence, is a field of computer science that aims to make machines that can perform tasks that require human intelligence. Machine learning is a subset of AI focusing on creating statistical models and algorithms that let computers learn from data. Deep learning is a subset of ML inspired by the human brain’s structure and function. It focuses on using artificial neural networks to model and solve complex tasks'      
      ],
      details: [
        {
          title: 'Machine Learning Vs Deep Learning',
          description: 'Artificial intelligence, is a field of computer science that aims to make machines that can perform tasks that require human intelligence. Machine learning is a subset of AI focusing on creating statistical models and algorithms that let computers learn from data. Deep learning is a subset of ML inspired by the human brain’s structure and function. It focuses on using artificial neural networks to model and solve complex tasks.',
          image: '/assets/img/assignments/AI_Timeline.png',
          points: []
        },
        {
          title: 'Machine Learning Example: Email Spam Detection',
          description: `'Example
Suppose we receive an email with following text:
Subject: Congratulations! You've won a free iPhone. Click here to claim your prize.
The machine learning model detects features such as promotional language ("Congratulations!", "free", "claim your prize"), suspicious links, and an unknown sender. Based on patterns learned from previously labeled emails, it classifies the message as spam and moves it to the Spam folder instead of your inbox.
This application demonstrates how machine learning helps protect millions of users every day by automatically filtering unwanted and potentially harmful emails.
How It Works
The machine learning model is trained on thousands of emails labeled as spam or not spam with the help of different algorithms like Logistic Regression or Decision Tree. It learns patterns based on features:
'`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        },
        {
          title: '',
          description: `'The machine learning model detects features such as promotional language ("Congratulations!", "free", "claim your prize"), suspicious links, and an unknown sender. Based on patterns learned from previously labeled emails, it classifies the message as spam and moves it to the Spam folder instead of your inbox.'`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        }        
      ]      
    },
    {
      id: 3,
      title: 'Adapting to Challenges',
      description: 'In our journey as leaders, adapting to challenges is a crucial skill. The Bible is filled with examples of leaders who faced tremendous challenges and adapted through faith, wisdom, and perseverance.',
      date: 'July 2026',
      grade: '',
      tech: ['', '', ''],
      learnings: [],
      details: [
        {
          title: 'Adapting to Challenges',
          description: 'One challenge currently faced in a leadership role is helping people embrace change, particularly when introducing AI or new technologies into existing workflows. Team members may be uncertain, resistant, or worried that these changes will replace their roles. This can make it difficult to build trust and maintain motivation during the transition.',
          image: '/assets/img/assignments/AI_Timeline.png',
          points: []
        },
        {
          title: '',
          description: `'Exodus 3:11–12 reminds us that effective leadership is not about relying solely on our own abilities but on trusting God's presence and wisdom. Like Moses, there are moments of uncertainty, yet God's promise, "I will be with you," provides confidence to move forward. Seeking God's wisdom through prayer, Scripture, and wise counsel helps leaders make thoughtful decisions and respond with patience and compassion. '`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        },
        {
          title: '',
          description: `'Adapting the leadership approach by listening carefully to team members' concerns, communicating the purpose behind the change, and providing support through training and encouragement can ease resistance and strengthen teamwork. By depending on God's guidance rather than focusing only on achieving results, leaders can navigate challenges with humility, inspire confidence, and create an environment where both people and the organization can grow together.'`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        },
        {
          title: '',
          description: `'A significant risk in a leadership role is making decisions that may initially be unpopular but are necessary for the long-term success of the team or organization. For example, leading the adoption of AI-driven processes may require changing established workflows, investing in employee training, or redefining responsibilities. While these changes can improve efficiency and innovation, they may also create uncertainty and resistance among team members.'`,
          image: 'https://via.placeholder.com/600x400?text=Technical+Stack',
          points: []
        }       
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
    //{ name: 'GitHub', icon: '🐙', url: 'https://github.com/kavitaraawat' },
    //{ name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/kavitaraawat' },
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
