import { Injectable } from '@angular/core';

export interface Assignment {
  id: number;
  title: string;
  description: string;
  date: string;
  grade: string;
  tech: string[];
  learnings?: string[];
  details?: AssignmentDetail[];
  reference: string;
  image?: string;
}

export interface AssignmentDetail {
  title: string;
  description: string;
  image?: string;
  references?: string[];
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
      date: 'Artifact 1',
      grade: '',
      tech: ['', '', ''],
      learnings: [
        'Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that normally require human intelligence, such as reasoning, learning, problem solving, language understanding, and decision-making. The evolution of AI has not been linear; rather, it has progressed through multiple phases marked by optimism, setbacks, and technological breakthroughs. From early rule-based systems in the 1950s to today’s generative and agentic AI systems, the field has continuously expanded in both capability and real-world impact. Understanding this evolution is important because it shows how AI moved from handcrafted logic to data-driven learning and now toward systems capable of autonomous action. <br><br> The foundations of AI were laid in the 1950s. In 1950, Alan Turing published Computing Machinery and Intelligence and proposed the Turing Test, which became a landmark concept for evaluating machine intelligence. In 1956, the Dartmouth Conference, organized by John McCarthy and other researchers, formally established AI as a field of study. Early AI systems were primarily symbolic and rule-based, meaning they relied on human-defined logic and explicit instructions. Programs such as Logic Theorist demonstrated that machines could solve problems using symbolic reasoning, but these systems were limited to narrow and highly controlled tasks. <br><br>During the 1960s and 1970s, AI research expanded into natural language processing, robotics, and knowledge-based systems. One early example was ELIZA (1966), a chatbot created by Joseph Weizenbaum that simulated conversation using pattern matching. Another milestone was the Perceptron, introduced by Frank Rosenblatt, which suggested that machines could learn simple patterns from data. However, AI systems of this period struggled with limited computing power, insufficient data, and unrealistic expectations. These issues contributed to the first AI Winter in the 1970s, when funding and enthusiasm declined. AI recovered in the 1980s with expert systems, which captured human expertise in the form of rules for tasks such as diagnosis and decision support. Although commercially useful, expert systems were expensive to maintain and difficult to scale.<br><br>The late 1980s and 1990s marked a transition from rule-based AI to machine learning, where systems learned from data instead of relying only on manually written rules. A major milestone was the revival of neural networks through backpropagation, popularized by Geoffrey Hinton, David Rumelhart, and Ronald Williams in 1986. At the same time, statistical techniques such as decision trees, Bayesian models, and support vector machines became widely used. A landmark public achievement occurred in 1997, when IBM’s Deep Blue defeated world chess champion Garry Kasparov, showing the growing strength of AI in specialized domains.<br><br>The modern AI revolution began in the 2010s with the rise of deep learning, driven by large datasets, improved algorithms, and powerful GPUs supported by cloud computing. In 2012, AlexNet dramatically improved image recognition performance and demonstrated the power of deep neural networks. This success accelerated progress in speech recognition, computer vision, and natural language processing. In 2016, AlphaGo defeated Lee Sedol, combining deep learning and reinforcement learning in a historic achievement. The next major breakthrough came in 2017 with the Transformer architecture, which became the foundation for modern large language models. This led to Generative AI, where systems such as GPT can create text, code, and images. More recently, AI has begun moving toward Agentic AI, in which systems can plan tasks, use tools, access information, and perform multi-step actions autonomously.<br><br>The evolution of AI reflects a progression from symbolic reasoning and handcrafted rules to machine learning, deep learning, and now generative and agentic AI. Each stage has expanded the scope of what machines can do, from solving predefined logical problems to generating content and performing complex tasks with increasing autonomy. As AI continues to evolve, its impact on business, education, healthcare, software engineering, and society will likely grow even further. Understanding its historical development helps explain both its current capabilities and its future direction.<br><br><button class="btn btn-primary btn-lg mt-4" onclick="window.open(\'https://brightspace.indwes.edu/d2l/le/307215/discussions/posts/20430716/ViewAttachment?fileId=36327336\', \'_blank\')">AI Timeline</button>'      
      ],
      details: [
        {
          title: 'Title',
          description: 'The Evolution of Artificial Intelligence: From Foundations to Generative and Agentic AI',          
          image: '',
          references: []
        },
        {
          title: 'Objective',
          description: 'To explain how AI evolved from symbolic, rule-based systems to machine learning, deep learning, generative AI, and agentic AI.',
          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'The document follows a chronological approach, highlighting major milestones, breakthroughs, challenges, key people, and technologies from 1950 to 2026.',
          image: '',
          references: []
        },
        {
          title: 'Tools',
          description: 'Scholar Papers, AI Assistants (ChatGPT, Gemini, Claude).',
          image: '',
          references: []
        },
        {
          title: 'Value Proposition',
          description: 'Provides historical context for understanding AI\'s rapid development, current capabilities, and increasing impact across business, education, healthcare, software engineering, and society.',
          image: '',
          references: []
        },
        {
          title: 'Relevance',
          description: 'The topic is highly relevant for understanding today\'s generative and agentic AI landscape and preparing professionals for AI\'s growing influence and future direction.',
          image: '',
          references: []
        },
        {
          title: 'References',
          description: '',
          image: '',
          references: [
            `<a href="https://brightspace.indwes.edu/d2l/le/307215/discussions/threads/7005985/View" target="_blank">Discussion Thread</a></br>
            <a href="https://brightspace.indwes.edu/d2l/le/307215/discussions/posts/20430716/ViewAttachment?fileId=36327336" target="_blank">AI Timeline</a>`
          ]
        }
      ],
      reference: `       
        <img src="/assets/img/assignments/AI_Timeline.png" alt="Assignment Preview" class="img-fluid rounded my-2">
      `      
    },
    {
      id: 2,
      title: 'Machine Learning Vs Deep Learning',
      description: 'Machine Learning and Deep Learning are two subsets of Artificial Intelligence (AI) that ...',
      date: 'Artifact 2',
      grade: '',
      tech: ['', '', ''],
      learnings: [
        'Artificial intelligence, is a field of computer science that aims to make machines that can perform tasks that require human intelligence. Machine learning is a subset of AI focusing on creating statistical models and algorithms that let computers learn from data. Deep learning is a subset of ML inspired by the human brain’s structure and function. It focuses on using artificial neural networks to model and solve complex tasks'      
      ],
      details: [
        {
          title: 'Title',
          description: 'Machine Learning Vs Deep Learning',
          image: '',
          references: []
        },
        {
          title: 'Objective',
          description: 'To explain the differences among AI, ML, and DL and demonstrate their appropriate applications through email spam detection and autonomous vehicle object detection.',
          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'Compare AI, ML, and DL based on learning approach, data dependency, feature extraction, data requirements, and use cases; then explain how ML classifies spam emails and how DL processes complex visual information for self-driving cars.',
          image: '',
          references: []
        },
        {
          title: 'Tools',
          description: 'Scholar Papers, AI Assistants (ChatGPT, Gemini, Claude).',
          image: '',
          references: []
        },
        {
          title: 'Value Proposition',
          description: 'The document demonstrates that selecting the right technology improves efficiency and effectiveness: ML provides interpretable and computationally efficient spam detection, while DL handles complex, high-dimensional visual data required for autonomous driving.',
          image: '',
          references: []
        },
        {
          title: 'Relevance',
          description: 'The topic is relevant for understanding how AI technologies can be matched to real-world problems based on data complexity, computational requirements, accuracy, interpretability, and application needs.',
          image: '',
          references: []
        },
        {
          title: 'References',
          description: '',
          image: '',
          references: [
            `<a href="/assets/document/assignments/artifact2/2.3.pdf" target="_blank">View Document</a>`
          ]
        }
      ],
      reference: `       
        <img src="/assets/img/assignments/AI-ML-DL.png" alt="Assignment Preview" class="img-fluid rounded my-2">
      `     
    },
    {
      id: 3,
      title: 'Adapting to Challenges',
      description: 'In our journey as leaders, adapting to challenges is a crucial skill. The Bible is filled with examples of leaders who faced tremendous challenges and adapted through faith, wisdom, and perseverance.',
      date: 'Artifact 3',
      grade: '',
      tech: ['', '', ''],
      learnings: [],
      details: [
        {
          title: 'Title',
          description: 'Adapting to Challenges',
          image: '',
          references: []
        },
        {
          title: 'Objective',
          description: 'To reflect on how leaders can use faith, wisdom, communication, and courage to manage resistance and make difficult decisions during AI and technology adoption.',
          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'Identify leadership challenges, seek God\'s guidance through prayer and Scripture, listen to stakeholders, communicate the purpose of change, provide training, evaluate risks, and develop thoughtful action plans',
          image: '',
          references: []
        },
        {
          title: 'Tools',
          description: 'Scholar Papers, AI Assistants (ChatGPT, Gemini, Claude).',
          image: '',
          references: []
        },
		    {
          title: 'Value Proposition',
          description: 'Builds trust, reduces resistance, strengthens teamwork, supports thoughtful decision-making, and helps organizations navigate AI-driven transformation while maintaining humility, compassion, and confidence.',
          image: '',
          references: []
        },
		    {
          title: 'Relevance',
          description: 'Highly relevant to leaders managing AI adoption because successful transformation requires both technological implementation and attention to employee concerns, trust, uncertainty, and organizational readiness.',
          image: '',
          references: []
        },		
        {
          title: 'References',
          description: '',
          image: '',
          references: [
            `<a href="/assets/document/assignments/artifact3/3.1.pdf" target="_blank">View Document</a>`
          ]
        }
      ],
      reference: ``     
    },
    {
      id: 4,
      title: 'Navigating Human Bias as a Business Analyst',
      description: 'Navigating Human Bias as a Business Analyst',
      date: 'Artifact 4',
      grade: '',
      tech: ['', '', ''],
      learnings: [],
      details: [
        {
          title: 'Title',
          description: 'Navigating Human Bias as a Business Analyst',
          image: '',
          references: []
        },
        {
          title: 'Objective',
          description: 'To ensure business decisions and transformation efforts are based on objective data, genuine user needs, diverse stakeholder perspectives, and sustainable business value.',
          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'Gather requirements from multiple perspectives, validate processes using data and observation, conduct root-cause analysis, and present transparent, data-backed trade-offs.',
          image: '',
          references: []
        },
        {
          title: 'Tools',
          description: 'Scholar Papers, AI Assistants (ChatGPT, Gemini, Claude).',
          image: '',
          references: []
        },
		    {
          title: 'Value Proposition',
          description: 'Reduces cognitive and organizational bias, improves decision quality, strengthens stakeholder inclusion, and prevents organizations from automating inefficient processes.',
          image: '',
          references: []
        },
		    {
          title: 'Relevance',
          description: 'Highly relevant to business analysts because requirements can be influenced by confirmation bias, departmental silos, status quo bias, and political incentives.',
          image: '',
          references: []
        },
        {
          title: 'References',
          description: '',
          image: '',
          references: [
            `<a href="https://brightspace.indwes.edu/d2l/le/307215/discussions/threads/7064602/View" target="_blank">Discussion Thread</a>`
          ]
        }        	
      ],
      reference: ``   
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
