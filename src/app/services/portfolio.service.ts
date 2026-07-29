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
          description: 'The objective is to explain the historical evolution of artificial intelligence and highlight the major technological milestones that have shaped its development. The document demonstrates how AI progressed from handcrafted rules and symbolic reasoning to data-driven machine learning, deep learning, generative AI, and increasingly autonomous agentic AI systems.',
          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'The document uses a chronological and milestone-based approach to explain AI\'s evolution. It begins with foundational developments such as Alan Turing\'s work in 1950 and the 1956 Dartmouth Conference. It then discusses symbolic AI, expert systems, machine learning, neural networks, deep learning, transformers, generative AI, and agentic AI. A timeline reinforces the discussion by connecting important years with key people, companies, milestones, and their significance.',
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
          description: 'The primary value proposition is that understanding AI\'s evolution helps organizations and professionals recognize how AI capabilities have expanded and how these technologies can create future opportunities. AI has progressed from solving narrow, predefined problems to generating content and performing increasingly complex, multi-step tasks. This evolution creates opportunities across business, education, healthcare, software engineering, and society.',
          image: '',
          references: []
        },
        {
          title: 'Relevance',
          description: 'The topic is highly relevant because AI is rapidly becoming an important part of modern organizations and professional work. Understanding the transition from traditional AI to generative and agentic AI helps professionals better prepare for technological change. The document\'s discussion of agentic AI is particularly relevant because these systems can plan tasks, use tools, access information, and perform multi-step actions with increasing autonomy.',
          image: '',
          references: []
        },
        {
          title: 'References',
          description: `
            <ul>
              <li>Bhat , A. K. (2025, March 11). The Evolution of AI: From Foundations to Future Prospects. Retrieved from IEEE Computer Society: https://www.computer.org/publications/tech-news/research/evolution-of-ai</li>
              <li>Putchuon. (2024, May 30). The Entire History of Artificial Intelligence (Last 100 Years). Retrieved from YouTube: https://www.youtube.com/watch?v=mSd9nmPM7Vg</li>
              <li>Roser, M. (2022, December 6). The brief history of artificial intelligence: the world has changed fast-what might be next? Retrieved from Our World in Data: https://ourworldindata.org/brief-history-of-ai</li>
            </ul>
			    `,
          image: '',
          references: [
            `<a href="https://brightspace.indwes.edu/d2l/le/307215/discussions/threads/7005985/View" target="_blank">Discussion Thread</a></br>
            <a href="https://brightspace.indwes.edu/d2l/le/307215/discussions/posts/20430716/ViewAttachment?fileId=36327336" target="_blank">AI Timeline</a>`
          ]
        }
      ],
      reference: `       
        <img src="assets/img/assignments/AI_Timeline.png" alt="Assignment Preview" class="img-fluid rounded my-2">
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
          description: 'The objective is to explain the relationship and differences between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) and demonstrate how each technology is suited to different types of problems. The document uses email spam detection as an example of a practical machine learning application and self-driving car object detection as an example of deep learning. It also explains why traditional ML may be more appropriate for structured problems, while DL is better suited to complex, unstructured data such as images and video.',
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
          description: 'The key value proposition is matching the right AI technology to the right problem. Machine learning can provide efficient, interpretable, and relatively cost-effective solutions for structured tasks such as spam detection. Deep learning delivers strong performance for complex, high-dimensional, unstructured data such as images and video, making it valuable for applications such as autonomous vehicles. The document emphasizes that using deep learning for a simple problem can be unnecessary and computationally expensive, while traditional ML may struggle with complex visual environments.',
          image: '',
          references: []
        },
        {
          title: 'Relevance',
          description: 'This topic is highly relevant because AI technologies are becoming integral to modern business and society. Understanding the differences between AI, ML, and DL helps professionals select appropriate solutions for real-world problems rather than applying advanced techniques unnecessarily. The examples of spam detection and self-driving vehicles illustrate how different AI methods address different types of challenges based on data complexity, computational requirements, and desired outcomes. This knowledge is valuable across industries such as cybersecurity, healthcare, finance, manufacturing, and transportation.',
          image: '',
          references: []
        },
        {
          title: 'References',
          description: `
            <ul>
              <li>Artificial intelligence vs Machine Learning vs Deep Learning. (2025, September 12). Retrieved from Geeks for Geeks: https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligence-vs-machine-learning-vs-deep-learning/</li>
              <li>IBM Data and AI Team. (n.d.). AI vs. machine learning vs. deep learning vs. neural networks: What’s the difference? Retrieved from IBM: https://www.ibm.com/think/topics/ai-vs-machine-learning-vs-deep-learning-vs-neural-networks</li>
            </ul>
			    `,
          image: '',
          references: [
            `<a href="assets/document/assignments/artifact2/2.3.pdf" target="_blank">View Document</a>`
          ]
        }
      ],
      reference: `       
        <img src="assets/img/assignments/AI-ML-DL.png" alt="Assignment Preview" class="img-fluid rounded my-2">
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
          description: 'The objective is to explore how leaders can effectively manage resistance to AI and technology-driven change while maintaining trust, motivation, and teamwork. The document emphasizes relying on God\'s wisdom, prayer, Scripture, and wise counsel when facing uncertainty. It also examines how leaders can approach significant risks and unpopular decisions with courage, strategic thinking, patience, and faith.',
          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'An effective leadership approach to AI-driven change begins with recognizing that employees may feel uncertain or fear that new technologies could affect their roles. Leaders can navigate these challenges by seeking God\'s wisdom through prayer, Scripture, and trusted counsel while listening carefully to employees\' concerns. Clearly communicating the purpose and benefits of change helps build trust and reduce resistance. Providing training, encouragement, and ongoing support enables teams to adapt with confidence. Before making major decisions, leaders should thoughtfully evaluate risks, develop a strategic plan, and build stakeholder support. Acting with courage, humility, and faith strengthens teamwork and promotes successful organizational transformation.',
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
          description: 'The document demonstrates that successful AI adoption depends not only on technology but also on leadership. Leaders who seek wisdom, communicate openly, address concerns with empathy, and prepare employees through training can reduce resistance and build trust. Combining faith-based leadership with thoughtful change management creates an environment where innovation, teamwork, and organizational growth can flourish while maintaining integrity and compassion.',
          image: '',
          references: []
        },
		    {
          title: 'Relevance',
          description: 'This reflection is highly relevant to modern organizations implementing AI and digital transformation. New technologies often create uncertainty among employees regarding changing responsibilities and job security. The document shows that effective leadership requires balancing technological advancement with empathy, transparent communication, workforce development, and ethical decision-making. It also illustrates how biblical leadership principles can guide leaders through periods of uncertainty and organizational change.',
          image: '',
          references: []
        },		
        {
          title: 'References',
          description: `
            <ul>
              <li>Chan, N. (2021, September 21). 5 people in the Bible who got through tough times (and how!). Retrieved from Thirst: https://thirst.sg/5-people-in-the-bible-who-got-through-tough-times-and-how</li>
              <li>Horikoshi, K. (2023). The positive psychology of challenge: Towards interdisciplinary studies of activities and processes involving challenges. Front Psychol, 13. doi:10.3389/fpsyg.2022.1090069</li>
            </ul>
			    `,
          image: '',
          references: [
            `<a href="assets/document/assignments/artifact3/3.1.pdf" target="_blank">View Document</a>`
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
          description: 'The objective is to explain how a Business Analyst can identify and reduce human bias in business requirements, stakeholder decisions, and organizational transformation. The approach emphasizes objective data, inclusive stakeholder dialogue, genuine user needs, and integrity to ensure that business solutions create sustainable value rather than simply automating existing inefficiencies.',

          image: '',
          references: []
        },
        {
          title: 'Process',
          description: 'The process begins by gathering requirements from stakeholders across all organizational levels to ensure diverse perspectives are considered. Anonymous surveys, structured interviews, and blind prioritization help minimize the influence of hierarchy and personal bias. Business processes and stakeholder claims are then validated through objective data analysis, direct observation, and process auditing. Root causes are identified using techniques such as the 5 Whys and fishbone diagrams to address underlying issues rather than symptoms. Finally, decision-makers are presented with transparent, data-backed alternatives that outline benefits, risks, and trade-offs, enabling objective, value-driven decisions that prioritize genuine business and user needs.',
          image: '',
          references: []
        },
        {
          title: 'Tools',
          description: 'AI Assistants (ChatGPT, Gemini, Claude).',
          image: '',
          references: []
        },
		    {
          title: 'Value Proposition',
          description: 'To ensure that business decisions and transformation initiatives are based on objective evidence and genuine stakeholder needs rather than cognitive biases, organizational politics, or executive preferences. This approach can improve the quality of requirements, reduce the risk of implementing ineffective solutions, ensure diverse operational perspectives are considered, and help organizations achieve sustainable business value.',
          image: '',
          references: []
        },
		    {
          title: 'Relevance',
          description: 'Highly relevant to business analysts because requirements and business decisions can be influenced by confirmation bias, departmental silos, status differences, and political incentives. By using structured methods and data-driven validation, Business Analysts can act as objective bridges between organizational strategy and operational reality. This is particularly important during digital transformation, process improvement, and technology implementation projects, where biased requirements could lead to ineffective solutions or simply automate existing inefficiencies.',
          image: '',
          references: []
        },
        {
          title: 'References',
          description: `AI Assistants (ChatGPT, Gemini, Claude)`,
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
      name: 'Dont Use this section',
      title: 'AI & Data Analytics Graduate Student',
      bio: 'Welcome to my learning portfolio! I am passionate about learning AI and data analytics and improving skills for my career growth. This portfolio showcases my academic journey and related work. This portfolio is designed for educators, industry professionals, technical recruiters, students and potential collaborators who are interested in understanding how AI/ML students are developing both technical skills and ethical awareness.',
      profileImage: 'assets/img/portfolio/profile.png',
      stats: {
        projects: 25,
        assignments: 15,
        skills: 10
      }
    };
  }
}
