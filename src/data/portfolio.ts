import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ekteare Hossan Emon",
    initials: "EE",
    title: "CSE Student | Account Management | Student Leader | Aspiring Cybersecurity & Networking Professional",
    shortBio: "I am currently studying Computer Science and Engineering at United International University and preparing to continue my studies in Cybersecurity and Networks at the University of East London, subject to completing the admission and visa process. I have experience in account management and currently serve as a Running Executive of UIU Sports Club and a Senior Executive of UIU English Language Forum. These roles have strengthened my communication, leadership, coordination, and problem-solving skills while I work toward a career in cybersecurity and networking.",
    fullBio: "I am currently studying Computer Science and Engineering at United International University and preparing to continue my studies in Cybersecurity and Networks at the University of East London, subject to completing the admission and visa process. I have experience in account management and currently serve as a Running Executive of UIU Sports Club and a Senior Executive of UIU English Language Forum. These roles have strengthened my communication, leadership, coordination, and problem-solving skills while I work toward a career in cybersecurity and networking.",
    careerObjective: "Seeking cybersecurity, networking, or tech-adjacent account management internships and entry-level positions where I can apply network defense, risk analysis, and client-facing communication to protect systems and deliver client value.",
    philosophy: "Security is not just an technical layer—it is built on trust, clear communication, and disciplined operational protocols.",
    location: "Dhaka, Bangladesh",
    email: "ektearehossanemon@gmail.com",
    phone: "01790790782",
    availability: "Available for Internships, Entry-Level Roles & Collaborations",
    languages: ["English (Fluent / C1 Level)", "Bengali (Native)"],
    fieldOfStudy: "Computer Science and Engineering (CSE)",
    university: "United International University (UIU)",
    // Note: Users can replace this image path or URL in portfolio.ts
    portraitUrl: "https://i.ibb.co.com/7ddjbYF2/emon4.jpg",
    cvUrl: "#" // Configurable CV link
  },

  metrics: [
    {
      label: "Academic & Practical Areas",
      value: "04+",
      description: "Programming, algorithms, digital logic and web development"
    },
    {
      label: "Core Skills",
      value: "10+",
      description: "Across technology, communication, coordination and client relations"
    },
    {
      label: "Leadership Roles",
      value: "02",
      description: "Senior Executive at UIU ELF & Running Executive at UIU Sports Club"
    },
    {
      label: "Professional Experience",
      value: "01+ Years",
      description: "Account management, client communication and coordination"
    },
    {
      label: "Technical Development",
      value: "ONGOING",
      description: "Building skills through CSE studies and practical learning"
    }
  ],

  skills: [
    {
      id: "programming",
      title: "Programming & Computer Science",
      description: "Fundamental programming concepts, algorithmic logic, and digital system foundations.",
      iconName: "Code",
      skills: [
        { name: "C Programming", proficiency: "Working Knowledge", isKeySkill: true },
        { name: "Structured Programming", proficiency: "Working Knowledge", isKeySkill: true },
        { name: "Data Structures and Algorithms", proficiency: "Developing", isKeySkill: true },
        { name: "Digital Logic Design", proficiency: "Working Knowledge" },
        { name: "Computer Systems", proficiency: "Working Knowledge" },
        { name: "Problem-Solving", proficiency: "Working Knowledge", isKeySkill: true }
      ]
    },
    {
      id: "tools",
      title: "Technical Tools",
      description: "Development environments, office suites, version control, and web technologies.",
      iconName: "Terminal",
      skills: [
        { name: "Visual Studio Code", proficiency: "Working Knowledge" },
        { name: "Microsoft Office", proficiency: "Proficient", isKeySkill: true },
        { name: "Google Workspace", proficiency: "Proficient", isKeySkill: true },
        { name: "Google Docs", proficiency: "Proficient", isKeySkill: true },
        { name: "Google Sheets", proficiency: "Proficient", isKeySkill: true },
        { name: "Git and GitHub", proficiency: "Developing" },
        { name: "HTML and CSS", proficiency: "Developing" },
        { name: "Command-Line Basics", proficiency: "Familiar" }
      ]
    },
    {
      id: "business",
      title: "Business & Communication",
      description: "Account management, client communications, team coordination, and student leadership.",
      iconName: "Users",
      skills: [
        { name: "Account Management", proficiency: "Proficient", isKeySkill: true },
        { name: "Client Communication", proficiency: "Proficient", isKeySkill: true },
        { name: "Relationship Management", proficiency: "Proficient", isKeySkill: true },
        { name: "Team Coordination", proficiency: "Proficient", isKeySkill: true },
        { name: "Task and Follow-Up Management", proficiency: "Proficient" },
        { name: "Event Coordination", proficiency: "Working Knowledge" },
        { name: "Professional English Communication", proficiency: "Working Knowledge" },
        { name: "Public Speaking", proficiency: "Developing" },
        { name: "Student Leadership", proficiency: "Working Knowledge" }
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Account Manager",
      company: "Ashiyan Medical College & Hospital",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      period: "November 2024 – Present",
      startDate: "2024-11-01",
      endDate: "Present",
      isCurrent: true,
      summary: "Responsible for maintaining professional communication, understanding requirements, coordinating updates, and supporting smooth day-to-day account and operational activities.",
      responsibilities: [
        "Maintain clear and professional communication with clients and relevant stakeholders.",
        "Understand requirements and communicate them accurately to the appropriate departments.",
        "Coordinate progress updates, follow-ups, and ongoing account-related activities.",
        "Assist in resolving concerns through active listening, timely communication, and practical problem-solving.",
        "Collaborate with internal teams to support the timely completion of assigned tasks.",
        "Maintain organized records of communications, requests, and follow-up activities.",
        "Support positive professional relationships through responsible and consistent service."
      ],
      skillsUsed: [
        "Account Management",
        "Client Communication",
        "Relationship Management",
        "Team Coordination",
        "Problem-Solving",
        "Follow-Up Management",
        "Professional Communication"
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Personal Portfolio Website",
      category: "Web Development",
      badge: "In Progress",
      summary: "A responsive personal portfolio designed to present my academic background, account management experience, leadership roles, skills, and future career goals.",
      description: "A responsive personal portfolio designed to present my academic background, account management experience, leadership roles, skills, and future career goals in a clean, modern, high-contrast dark theme.",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      stack: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      keyContribution: "Planned the website structure, customized the content, and organized professional sections including education, experience, leadership, projects, and contact information.",
      featured: true,
      caseStudy: {
        overview: "A responsive personal portfolio designed to present my academic background, account management experience, leadership roles, skills, and future career goals.",
        problem: "Need for a unified digital platform to present academic achievements, student leadership, account management background, and technical development.",
        objectives: [
          "Organize academic coursework, student leadership, and professional skills into structured sections.",
          "Ensure full mobile and desktop responsiveness with clean typography and cyber-security aesthetic.",
          "Provide easy contact channels, direct CV viewing, and social profile connectivity."
        ],
        myRole: "Project Planner & Developer",
        architecture: "Single Page Application (SPA) built with React 18, TypeScript, and Tailwind CSS.",
        toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
        challenges: [
          "Balancing structured academic coursework presentation with student leadership achievements and account management experience."
        ],
        solutions: [
          "Designed modular section components with custom category tabs, status indicators, and clean typographic hierarchy."
        ],
        results: [
          "Successfully deployed responsive web portfolio providing clear overview of background and future goals."
        ],
        lessonsLearned: [
          "Effective information architecture and clean visual design significantly enhance personal presentation."
        ]
      }
    },
    {
      id: "proj-2",
      title: "Structured Programming Practice",
      category: "Programming",
      badge: "Academic Coursework",
      summary: "Completed programming exercises focused on structured programming, logical thinking, and fundamental problem-solving techniques.",
      description: "Core academic coursework covering structured programming paradigms, conditional logic, iteration loops, array manipulations, functions, and algorithmic problem solving in C.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      stack: ["C Programming", "Logic & Flowcharts", "Problem Solving"],
      keyContribution: "Practised core concepts: Variables & Data Types, Conditional Statements, Loops, Arrays, Functions, and Fundamental Problem Solving.",
      keyLearningAreas: [
        "Variables and data types",
        "Conditional statements",
        "Loops",
        "Arrays",
        "Functions",
        "Basic programming problems"
      ],
      featured: true,
      caseStudy: {
        overview: "Academic coursework and practical lab exercises establishing strong fundamental programming principles using C.",
        problem: "Developing structured logical thinking and memory management discipline required for higher-level computer science concepts.",
        objectives: [
          "Master variables, conditional branching, and loop control structures.",
          "Implement modular code using functions and procedural decomposition.",
          "Solve foundational mathematical and algorithmic problem sets."
        ],
        myRole: "Student & Programmer",
        architecture: "C Procedural Programs executed via standard compiler tools.",
        toolsUsed: ["C Language", "GCC Compiler", "Code::Blocks / VS Code"],
        challenges: [
          "Understanding memory addressing, scope rules, and array bounds safety."
        ],
        solutions: [
          "Systematically tested logic trace tables and step-by-step debugger executions."
        ],
        results: [
          "Successfully completed structured programming assignments and practical code implementations."
        ],
        lessonsLearned: [
          "Writing structured, clean code builds the discipline required for all future programming and system analysis."
        ]
      }
    },
    {
      id: "proj-3",
      title: "Data Structures and Algorithms Practice",
      category: "Algorithms",
      badge: "Academic Coursework",
      summary: "Practised foundational data structures and algorithms through coursework, coding exercises, and problem-solving tasks.",
      description: "Implementation and analysis of core data structures and sorting/searching algorithms, evaluating time and space complexity across linear and non-linear data structures.",
      imageUrl: "https://images.unsplash.com/photo-1516116211223-4258568f1040?w=800&auto=format&fit=crop&q=80",
      stack: ["C", "C++", "Data Structures", "Algorithms", "Time Complexity"],
      keyContribution: "Practised foundational structures & techniques: Arrays, Linked Lists, Stacks, Queues, Searching Techniques, Sorting Algorithms, and Time Complexity.",
      keyLearningAreas: [
        "Arrays",
        "Linked lists",
        "Stacks and queues",
        "Searching techniques",
        "Sorting algorithms",
        "Basic time-complexity concepts"
      ],
      featured: true,
      caseStudy: {
        overview: "Foundational computer science study on data organization, memory efficiency, and algorithmic performance.",
        problem: "Understanding how data representation in memory impacts execution speed and algorithm scalability.",
        objectives: [
          "Implement linear structures (Arrays, Linked Lists, Stacks, Queues) from scratch.",
          "Practice searching (Linear, Binary Search) and sorting algorithms (Bubble, Selection, Insertion).",
          "Analyze Big-O time and space complexity bounds."
        ],
        myRole: "Student & Programmer",
        architecture: "Data Structure and Algorithm implementations in C / C++.",
        toolsUsed: ["C++", "C", "G++ Compiler", "Problem-Solving Platforms"],
        challenges: [
          "Pointer manipulation in dynamically allocated linked lists and managing memory leaks."
        ],
        solutions: [
          "Drawn memory diagrams prior to coding pointer updates for node insertion and deletion."
        ],
        results: [
          "Built solid foundation in algorithmic reasoning and data structure selection."
        ],
        lessonsLearned: [
          "Choosing the correct data structure is key to building efficient software systems."
        ]
      }
    },
    {
      id: "proj-4",
      title: "Digital Logic Design Laboratory",
      category: "Digital Logic",
      badge: "Academic Laboratory Work",
      summary: "Completed laboratory activities involving digital circuits, logic operations, and fundamental digital-system concepts.",
      description: "Hands-on hardware laboratory exercises designing, simulating, and testing digital logic circuits, Boolean logic simplifications, and combinational/sequential logic modules.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      stack: ["Digital Logic", "Circuit Analysis", "Boolean Algebra", "Breadboard Labs"],
      keyContribution: "Explored fundamental digital systems: Logic Gates, Truth Tables, Boolean Algebra, Combinational Circuits, Sequential Circuits, and Digital Circuit Analysis.",
      keyLearningAreas: [
        "Logic gates",
        "Truth tables",
        "Boolean algebra",
        "Combinational circuits",
        "Basic sequential circuits",
        "Digital circuit analysis"
      ],
      featured: false,
      caseStudy: {
        overview: "Laboratory coursework exploring the hardware foundation of modern computing through digital logic circuitry.",
        problem: "Bridging mathematical Boolean logic theory with physical integrated circuit (IC) hardware implementation.",
        objectives: [
          "Design and verify truth tables for logic gates (AND, OR, NOT, NAND, NOR, XOR).",
          "Simplify Boolean expressions using K-maps and build combinational circuits.",
          "Analyze sequential logic elements including flip-flops and basic counters."
        ],
        myRole: "Lab Participant & Hardware Student",
        architecture: "Digital logic IC trainer boards, breadboards, logic gates, and digital multimeter equipment.",
        toolsUsed: ["Breadboard", "7400-Series ICs", "Logic Probes", "Circuit Simulators"],
        challenges: [
          "Debugging IC pin wiring on complex breadboard circuits."
        ],
        solutions: [
          "Systematic signal path tracing with logic probes and structured color-coded wiring."
        ],
        results: [
          "Successfully verified digital circuit outputs against theoretical truth tables."
        ],
        lessonsLearned: [
          "Digital logic provides the critical link between electronic hardware and computer architecture."
        ]
      }
    },
    {
      id: "proj-5",
      title: "Current Learning Direction",
      category: "Programming",
      badge: "Future Technical Development",
      summary: "Currently strengthening my core computer science knowledge while preparing to explore cybersecurity, computer networking, Linux, Cisco Packet Tracer, and network-analysis tools through future academic and personal projects.",
      description: "A forward-looking technical milestone roadmap focused on expanding foundational computer science knowledge into cybersecurity, computer networking, Linux administration, and network analysis tools.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
      stack: ["Linux", "Cisco Packet Tracer", "Cybersecurity Prep", "Computer Networking", "Wireshark"],
      keyContribution: "Preparing to explore cybersecurity, computer networking, Linux, Cisco Packet Tracer, and network-analysis tools through future academic and personal projects.",
      keyLearningAreas: [
        "Strengthening core CS knowledge",
        "Cybersecurity concepts & labs",
        "Computer networking fundamentals",
        "Linux CLI & environment",
        "Cisco Packet Tracer & Wireshark"
      ],
      featured: false
    }
  ],

  leadership: [
    {
      id: "lead-1",
      role: "Senior Executive",
      organization: "UIU English Language Forum",
      period: "2024 – Present",
      logoUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&auto=format&fit=crop&q=80",
      overview: "Serving as a Senior Executive at UIU English Language Forum, supporting activities that encourage professional English communication, public speaking, teamwork, and student participation.",
      responsibilities: [
        "Support the planning and execution of language-development programs, workshops, and student activities.",
        "Coordinate with executive members, participants, and university representatives.",
        "Assist with event communication, promotion, registration, and audience engagement.",
        "Encourage students to improve their public speaking, professional English, and communication skills.",
        "Contribute to team discussions, event preparation, and overall organizational activities."
      ],
      gallery: [
        {
          title: "UIU English Language Forum Activities",
          caption: "Coordinating language workshops, public speaking circles, and student engagement sessions.",
          imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80"
        },
        {
          title: "Public Speaking & Interactive Sessions",
          caption: "Encouraging interactive speaking practice and communication confidence building.",
          imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
        },
        {
          title: "Executive Team & Event Preparation",
          caption: "Planning and preparing campus events and student participation initiatives.",
          imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      id: "lead-2",
      role: "Running Executive",
      organization: "UIU Sports Club",
      period: "2026 – Present",
      logoUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&auto=format&fit=crop&q=80",
      overview: "Serving as a Running Executive at UIU Sports Club, contributing to sports events, student engagement, team coordination, and club operations.",
      responsibilities: [
        "Support the planning and execution of university sports events and tournaments.",
        "Coordinate with club members, participants, volunteers, and organizing teams.",
        "Assist with event logistics, communication, registration, and match-day activities.",
        "Promote student participation, teamwork, discipline, and sportsmanship.",
        "Contribute to the smooth operation of club programs and campus sports activities."
      ],
      gallery: [
        {
          title: "UIU Sports Event Coordination",
          caption: "Assisting with match-day logistics, participant registration, and sports activities.",
          imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80"
        },
        {
          title: "Inter-Department Tournament Support",
          caption: "Supporting campus sports tournaments, team coordination, and event execution.",
          imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80"
        },
        {
          title: "Sports Club Program Operations",
          caption: "Collaborating with club members and volunteers for smooth campus athletic operations.",
          imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?w=800&auto=format&fit=crop&q=80"
        }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Networking Foundations",
      issuer: "Academic Studies & Self-Learning",
      issueDate: "Ongoing",
      status: "Currently Learning",
      category: "Networking",
      skills: ["Computer Networks", "IP Addressing", "Subnetting", "Cisco Packet Tracer"]
    },
    {
      id: "cert-2",
      title: "Cybersecurity Foundations",
      issuer: "Academic Studies & Lab Exercises",
      issueDate: "Ongoing",
      status: "Currently Learning",
      category: "Cybersecurity",
      skills: ["Security Fundamentals", "Threat Awareness", "Access Control Concepts", "Network Security Basics"]
    },
    {
      id: "cert-3",
      title: "Technical Development",
      issuer: "Hands-On Practice & Self-Paced Learning",
      issueDate: "Ongoing",
      status: "Developing Skills",
      category: "Cybersecurity",
      skills: ["Linux Fundamentals", "Wireshark Basics", "Python Fundamentals", "Network Troubleshooting"]
    },
    {
      id: "cert-4",
      title: "Communication and Leadership",
      issuer: "Active Student Leadership & Professional Experience",
      issueDate: "Ongoing",
      status: "Active Leadership",
      category: "Communication",
      skills: ["Professional English", "Public Speaking", "Written Communication", "Team Coordination", "Event Management"],
      highlights: [
        "Senior Executive — UIU English Language Forum",
        "Executive Member — UIU Sports Club",
        "Account Management Experience"
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science and Engineering",
      major: "Computer Science & Engineering",
      institution: "United International University (UIU)",
      location: "Dhaka, Bangladesh",
      period: "2024 – Present",
      relevantCoursework: [
        "Structured Programming Language",
        "Data Structures and Algorithms I",
        "Introduction to Computer Systems",
        "Digital Logic Design",
        "Digital Logic Design Laboratory",
        "Discrete Mathematics",
        "Fundamental Calculus",
        "Calculus and Linear Algebra",
        "English I and English II",
        "History of the Emergence of Bangladesh"
      ],
      academicHighlights: [
        "Senior Executive, UIU English Language Forum",
        "Running Executive, UIU Sports Club",
        "Experience in account management, client communication, and coordination",
        "Developing communication, teamwork, leadership, and problem-solving skills",
        "Building a future career interest in cybersecurity and computer networking"
      ]
    },
    {
      id: "edu-2",
      degree: "Cybersecurity & Networks Higher Studies (Upcoming)",
      major: "Cybersecurity and Networks",
      institution: "University of East London (UEL)",
      location: "London, United Kingdom",
      period: "Upcoming Progression",
      relevantCoursework: [
        "Advanced Network Security",
        "Cyber Defense Protocols",
        "Information Security Risk Management",
        "Cloud & Infrastructure Security"
      ],
      academicHighlights: [
        "Preparing to continue studies in Cybersecurity and Networks at University of East London.",
        "Subject to completing admission and visa procedures."
      ]
    }
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ekteare-hossan-emon-undefined-aa5077364",
      icon: "Linkedin"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/dewan.h.emon",
      icon: "Facebook"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/awesome_me_emon",
      icon: "Instagram"
    },
    {
      name: "Email",
      url: "mailto:ektearehossanemon@gmail.com",
      icon: "Mail"
    }
  ]
};
