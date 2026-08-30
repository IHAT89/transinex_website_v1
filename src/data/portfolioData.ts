import { ProfileData } from '../types';

export const initialProfileData: ProfileData = {
  name: 'Ian Townrow',
  title: 'Senior Technology Leader & Principal Solutions Architect',
  tagline: 'Bridging engineering excellence, scalable cloud architecture, and high-impact product execution.',
  email: 'iantownrow@gmail.com',
  phone: '+1 (555) 234-5678',
  location: 'San Francisco Bay Area, CA (Open to Remote / Hybrid)',
  availability: 'Available for Strategic Leadership Roles & Advisory',
  executiveSummary:
    'Accomplished Technology Executive and Principal Engineer with 12+ years of experience spearheading distributed system architectures, leading multi-disciplinary engineering organizations, and scaling mission-critical web platforms. Recognized for transforming complex enterprise challenges into resilient, high-throughput software ecosystems while fostering a culture of technical rigor, rapid delivery, and empathetic mentorship.',
  strategicPillars: [
    {
      title: 'Enterprise Architecture & Cloud Modernization',
      description: 'Designing fault-tolerant, event-driven microservices, Kubernetes orchestrations, and multi-region cloud infrastructures serving millions of concurrent requests.',
      icon: 'Layers'
    },
    {
      title: 'Technical Leadership & Team Scaling',
      description: 'Scaling engineering teams from single squads to 40+ engineers across 4 time zones. Establishing agile best practices, engineering ladders, and continuous delivery pipelines.',
      icon: 'Users'
    },
    {
      title: 'Product Strategy & Rapid Delivery',
      description: 'Aligning business OKRs with iterative engineering roadmaps. Accelerating release cadence from monthly to continuous deployments with automated QA and observability.',
      icon: 'Zap'
    },
    {
      title: 'Performance & Systems Reliability',
      description: 'Driving sub-100ms latency, 99.99% uptime SLAs, proactive chaos testing, and enterprise-grade security compliance across distributed cloud estates.',
      icon: 'ShieldCheck'
    }
  ],
  metrics: [
    {
      label: 'Years of Experience',
      value: '12+',
      subtext: 'Building high-scale systems'
    },
    {
      label: 'Engineers Mentored & Led',
      value: '45+',
      subtext: 'Across global cross-functional squads'
    },
    {
      label: 'Global Uptime SLA',
      value: '99.99%',
      subtext: 'High-availability architectures'
    },
    {
      label: 'Scale Managed',
      value: '25M+',
      subtext: 'Daily transactions processed'
    }
  ],
  socialLinks: [
    {
      platform: 'Email',
      url: 'mailto:iantownrow@gmail.com',
      label: 'iantownrow@gmail.com',
      iconName: 'Mail'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/iantownrow',
      label: 'linkedin.com/in/iantownrow',
      iconName: 'Linkedin'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/iantownrow',
      label: 'github.com/iantownrow',
      iconName: 'Github'
    },
    {
      platform: 'Calendar',
      url: '#contact',
      label: 'Schedule a Discussion',
      iconName: 'Calendar'
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      company: 'Apex Cloud Systems',
      role: 'VP of Engineering & Principal Architect',
      location: 'San Francisco, CA',
      period: '2022 — Present',
      isCurrent: true,
      category: 'leadership',
      summary:
        'Directing a 38-person distributed engineering division across platform, backend, web, and SRE domains. Spearheaded the architecture redesign of enterprise multi-tenant SaaS platform.',
      responsibilities: [
        'Steer strategic technology vision, architectural governance, and quarterly OKR planning across 4 product verticals.',
        'Champion developer productivity initiatives, reducing average PR turnaround time by 52% and deployment failures by 80%.',
        'Direct multi-cloud migration (AWS to hybrid Kubernetes clusters) lowering infrastructure operational costs by $480K annually.',
        'Mentor engineering directors, staff engineers, and lead bi-weekly architectural RFC review committees.'
      ],
      keyAchievements: [
        'Architected high-throughput event processing pipeline handling 40,000+ events/sec with Apache Kafka and Go microservices.',
        'Maintained 99.99% service availability across 3 major product launches while scaling traffic 4x.',
        'Established comprehensive zero-trust IAM security framework, passing SOC-2 Type II audit with zero findings.'
      ],
      technologies: ['TypeScript', 'Go', 'React', 'Kubernetes', 'AWS', 'Kafka', 'GraphQL', 'Terraform', 'PostgreSQL', 'Datadog'],
      metrics: [
        { label: 'Cost Reduction', value: '$480K / yr' },
        { label: 'Latency Drop', value: '45%' }
      ]
    },
    {
      id: 'exp-2',
      company: 'Vanguard Digital Platforms',
      role: 'Staff Solutions Architect & Lead Engineer',
      location: 'San Francisco, CA',
      period: '2019 — 2022',
      category: 'architecture',
      summary:
        'Led core architecture for real-time collaborative workspace platform. Defined system design paradigms, API contracts, and full-stack performance optimization standards.',
      responsibilities: [
        'Designed real-time state synchronization engine supporting thousands of concurrent active collaborators per session using WebSockets and CRDTs.',
        'Led full-stack engineering team of 14, driving architectural standards, code review excellence, and continuous integration workflows.',
        'Partnered with C-suite and Product management to translate complex business needs into modular technical specifications.',
        'Engineered decoupled micro-frontend architecture enabling independent squad deployments without monolithic dependencies.'
      ],
      keyAchievements: [
        'Boosted client-side interaction performance by 65% via virtualized DOM rendering and Web Worker multi-threading.',
        'Reduced customer onboarding friction by 40% through unified single-sign-on (SSO) and automated workspace provisioning.',
        'Authored foundational engineering handbook and security protocol guidelines adopted company-wide.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Redis', 'Docker', 'PostgreSQL', 'GraphQL', 'AWS ECS'],
      metrics: [
        { label: 'Throughput Increase', value: '3.2x' },
        { label: 'Squad Deployment Velocity', value: '+75%' }
      ]
    },
    {
      id: 'exp-3',
      company: 'Horizon Interactive Labs',
      role: 'Lead Full-Stack Software Engineer',
      location: 'New York, NY / Remote',
      period: '2016 — 2019',
      category: 'fullstack',
      summary:
        'Built and delivered high-performance consumer web applications and analytics dashboards for Fortune 500 clients with strict SLA and security mandates.',
      responsibilities: [
        'Architected full-stack enterprise web portals utilizing modern React, Node.js, and distributed relational databases.',
        'Implemented end-to-end automated testing suites (unit, integration, and E2E) elevating test coverage from 45% to 92%.',
        'Engineered responsive, accessible (WCAG 2.1 AA) design system utilized across 6 client enterprise web products.',
        'Trained junior and mid-level developers through structured code katas, pair programming, and architecture reviews.'
      ],
      keyAchievements: [
        'Delivered flagship client financial dashboard 3 weeks ahead of schedule, generating $1.8M in first-quarter renewals.',
        'Optimized core database queries and indexing strategy, slashing 95th-percentile response time from 1.4s to 120ms.'
      ],
      technologies: ['JavaScript/ES6+', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Jest', 'Webpack', 'SASS/CSS3'],
      metrics: [
        { label: 'Query Speedup', value: '11x faster' },
        { label: 'Code Coverage', value: '92%' }
      ]
    },
    {
      id: 'exp-4',
      company: 'Starlight Tech Solutions',
      role: 'Senior Software Engineer & Systems Consultant',
      location: 'Boston, MA',
      period: '2013 — 2016',
      category: 'cloud',
      summary:
        'Developed RESTful API services, automated ETL pipelines, and modernized legacy codebases for healthcare and fintech clients.',
      responsibilities: [
        'Modernized legacy monolithic PHP/MySQL system into decoupled RESTful services with Node.js and PostgreSQL.',
        'Configured CI/CD automated build and deploy pipelines using Jenkins and Docker containers.',
        'Collaborated with UX research teams to build rapid interactive prototypes and conduct usability testing.'
      ],
      keyAchievements: [
        'Migrated 1.2M historical medical and financial records with zero data loss and under 15 minutes of scheduled downtime.',
        'Received Engineering Excellence Award for delivering robust cryptographic data-at-rest encryption modules.'
      ],
      technologies: ['JavaScript', 'Node.js', 'Python', 'MySQL', 'MongoDB', 'Docker', 'Linux', 'REST APIs', 'Jenkins'],
      metrics: [
        { label: 'Zero-Downtime Migration', value: '1.2M records' }
      ]
    }
  ],
  skillCategories: [
    {
      id: 'architecture-leadership',
      title: 'Strategic Architecture & Leadership',
      iconName: 'Cpu',
      description: 'System design, technical roadmapping, organization building, and architectural governance.',
      skills: [
        { name: 'Distributed Systems & Microservices', level: 98, years: '10+ yrs', highlight: true, tags: ['Architecture', 'Core'] },
        { name: 'Engineering Leadership & Mentorship', level: 95, years: '8+ yrs', highlight: true, tags: ['Leadership', 'People'] },
        { name: 'System Design & RFC Governance', level: 96, years: '10+ yrs', highlight: true, tags: ['Architecture'] },
        { name: 'Agile & OKR Execution', level: 92, years: '9+ yrs', tags: ['Management'] },
        { name: 'Zero-Trust Security & SOC-2 Compliance', level: 90, years: '7+ yrs', tags: ['Security'] },
        { name: 'Cost Optimization (FinOps)', level: 88, years: '6+ yrs', tags: ['Cloud', 'Strategy'] }
      ]
    },
    {
      id: 'backend-cloud',
      title: 'Backend, Cloud & Infrastructure',
      iconName: 'Server',
      description: 'High-throughput backend engines, event-driven pipelines, and cloud automation.',
      skills: [
        { name: 'Go (Golang)', level: 92, years: '6+ yrs', highlight: true, tags: ['Backend', 'Microservices'] },
        { name: 'Node.js & TypeScript', level: 98, years: '11+ yrs', highlight: true, tags: ['Backend', 'API'] },
        { name: 'Kubernetes & Docker', level: 94, years: '8+ yrs', highlight: true, tags: ['DevOps', 'Containers'] },
        { name: 'AWS & GCP Cloud Ecosystems', level: 95, years: '9+ yrs', highlight: true, tags: ['Cloud'] },
        { name: 'Apache Kafka & Event-Driven MQ', level: 90, years: '6+ yrs', tags: ['Streaming', 'Data'] },
        { name: 'PostgreSQL & Distributed SQL', level: 94, years: '11+ yrs', highlight: true, tags: ['Databases'] },
        { name: 'GraphQL & gRPC APIs', level: 92, years: '7+ yrs', tags: ['Protocols'] },
        { name: 'Terraform & Infrastructure as Code', level: 89, years: '6+ yrs', tags: ['DevOps'] }
      ]
    },
    {
      id: 'frontend-platforms',
      title: 'Frontend & Modern Web Platforms',
      iconName: 'Layout',
      description: 'High-performance interactive interfaces, component design systems, and responsive web apps.',
      skills: [
        { name: 'React & Next.js Ecosystem', level: 98, years: '10+ yrs', highlight: true, tags: ['Frontend', 'UI'] },
        { name: 'TypeScript & JavaScript (ESNext)', level: 98, years: '12+ yrs', highlight: true, tags: ['Language', 'Core'] },
        { name: 'Tailwind CSS & Modern Styling', level: 95, years: '7+ yrs', tags: ['CSS', 'Design'] },
        { name: 'State Management & WebSockets', level: 94, years: '9+ yrs', tags: ['Architecture'] },
        { name: 'Performance Optimization (Core Web Vitals)', level: 93, years: '8+ yrs', tags: ['Web Perf'] },
        { name: 'Design Systems & Component Libraries', level: 92, years: '7+ yrs', tags: ['UI/UX'] }
      ]
    },
    {
      id: 'data-ai-tools',
      title: 'Data, AI & Observability',
      iconName: 'Sparkles',
      description: 'Real-time telemetry, monitoring, and intelligent workflow automation integrations.',
      skills: [
        { name: 'Datadog & OpenTelemetry Observability', level: 91, years: '7+ yrs', tags: ['Observability'] },
        { name: 'Redis & Distributed Caching', level: 95, years: '9+ yrs', tags: ['Databases'] },
        { name: 'Gemini & LLM API Integrations', level: 90, years: '3+ yrs', highlight: true, tags: ['AI', 'APIs'] },
        { name: 'Vector Search & Embeddings', level: 86, years: '3+ yrs', tags: ['AI', 'Data'] },
        { name: 'CI/CD Pipelines (GitHub Actions / GitLab)', level: 94, years: '8+ yrs', tags: ['DevOps'] }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'PulseStream Enterprise Broker',
      subtitle: 'High-Throughput Real-Time Event Aggregation Engine',
      category: 'Cloud & Distributed Systems',
      featured: true,
      statBadge: '40K+ events/sec @ 18ms p99',
      problem:
        'Legacy monolithic system struggled with peak streaming workloads, causing latency spikes over 3 seconds and frequent out-of-memory crashes during traffic surges.',
      solution:
        'Architected a distributed event-driven broker using Go, Apache Kafka, and Kubernetes autoscalers with custom partitioning and backpressure mitigation.',
      architecture: [
        'Kafka cluster with partitioned consumer groups across 3 availability zones',
        'Go-based lightweight workers processing payload validation and stream enrichment',
        'Redis Cluster caching layer with sub-millisecond retrieval for hot tenant keys',
        'Prometheus & Grafana custom metrics scraping for adaptive queue backpressure'
      ],
      results: [
        'Handled 40,000+ events per second with sustained p99 latency under 18ms.',
        'Slashed cloud compute expenditure by 42% through efficient memory footprint.',
        'Zero outages across 18 consecutive months of production operation.'
      ],
      techStack: ['Go', 'Kafka', 'Kubernetes', 'Redis', 'Docker', 'AWS EKS', 'Prometheus'],
      githubUrl: 'https://github.com/iantownrow',
      liveUrl: 'https://example.com/case-study-pulsestream'
    },
    {
      id: 'proj-2',
      title: 'OmniSync Collaborative Canvas',
      subtitle: 'Real-Time CRDT-Driven Collaborative Workspace Engine',
      category: 'Full-Stack & Web Architecture',
      featured: true,
      statBadge: 'Zero-Conflict 10K+ Concurrent Users',
      problem:
        'Remote teams required instant document co-editing without race conditions, desynchronization, or high network bandwidth consumption.',
      solution:
        'Engineered an ultra-fast conflict-free replicated data type (CRDT) synchronization engine over WebSockets with delta compression and optimistic UI reconciliation.',
      architecture: [
        'React + TypeScript dynamic canvas with hardware-accelerated WebGL rendering',
        'Yjs/CRDT state reconciliation with compact binary diff broadcasting over WebSockets',
        'Node.js cluster with distributed Pub/Sub powered by Redis Streams',
        'Offline-first IndexedDB persistence with automatic background re-sync'
      ],
      results: [
        'Achieved sub-50ms peer-to-peer visual cursor updates globally.',
        'Decreased payload size by 78% via binary delta protocol.',
        'Scaled to 10,000+ simultaneous collaborative rooms without dropped packets.'
      ],
      techStack: ['TypeScript', 'React', 'WebSockets', 'Node.js', 'Redis Streams', 'Tailwind CSS', 'IndexedDB'],
      githubUrl: 'https://github.com/iantownrow',
      liveUrl: 'https://example.com/case-study-omnisync'
    },
    {
      id: 'proj-3',
      title: 'Nexus Enterprise Design System',
      subtitle: 'Accessible Multi-Platform UI Framework & Token Engine',
      category: 'Frontend & UI Engineering',
      featured: true,
      statBadge: '100% WCAG 2.1 AA Compliance',
      problem:
        'Fragmented UI implementations across 6 product teams resulted in inconsistent user experience, duplicated engineering effort, and accessibility compliance issues.',
      solution:
        'Designed and published a unified, tokenized design system with 50+ accessible React components, automated visual regression tests, and zero-runtime CSS tokens.',
      architecture: [
        'Figma Design Tokens synchronized automatically via GitHub Actions pipelines',
        'Radix UI primitives wrapped in customized Tailwind design tokens',
        'Comprehensive Storybook documentation with interactive accessibility checkers',
        'npm package distribution with tree-shaking and full TypeScript typings'
      ],
      results: [
        'Accelerated new feature frontend development velocity by 60%.',
        'Reduced UI-related bug tickets by 72% across all 6 applications.',
        'Achieved 100% WCAG 2.1 AA accessibility score across enterprise audit.'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Vite', 'Jest'],
      githubUrl: 'https://github.com/iantownrow',
      liveUrl: 'https://example.com/case-study-nexus'
    },
    {
      id: 'proj-4',
      title: 'Aegis Intelligent Ops Assistant',
      subtitle: 'Automated Infrastructure Diagnostics & Root-Cause Triage',
      category: 'AI & Cloud Automation',
      featured: false,
      statBadge: 'MTTR Reduced by 68%',
      problem:
        'Engineering on-call engineers spent 35+ minutes analyzing disparate logs, traces, and metrics during production incidents.',
      solution:
        'Built an intelligent telemetry triage agent that ingests Datadog alerts, correlates error stack traces, and synthesizes root-cause summaries with remedial runbooks.',
      architecture: [
        'Webhook ingestion service collecting OpenTelemetry traces and alerts',
        'Vector database embedding historical incident resolutions and architectural RFCs',
        'Gemini API processing structured context to formulate actionable diagnostics',
        'Slack Bot & PagerDuty integration for automated interactive incident channels'
      ],
      results: [
        'Reduced Mean Time to Resolution (MTTR) by 68% for recurring platform alerts.',
        'Automated initial triage for 85% of tier-1 production alerts.',
        'Saved on-call engineers an estimated 220+ hours of manual debugging per quarter.'
      ],
      techStack: ['Python', 'FastAPI', 'Gemini API', 'PostgreSQL', 'Datadog API', 'Docker', 'Slack SDK'],
      githubUrl: 'https://github.com/iantownrow',
      liveUrl: 'https://example.com/case-study-aegis'
    }
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science (B.S.)',
      field: 'Computer Science & Engineering',
      period: '2009 — 2013',
      location: 'Berkeley, CA',
      honors: 'Magna Cum Laude',
      highlights: [
        'Specialization in Distributed Systems, Operating Systems, and Algorithm Complexity.',
        'President of IEEE Student Branch; Undergraduate Research Assistant in Cloud Computing Lab.',
        'Dean’s Honors List (all 8 semesters).'
      ]
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect — Professional',
      issuer: 'Amazon Web Services',
      issueDate: '2023 — 2026',
      credentialId: 'AWS-SAP-89214710',
      skills: ['Multi-Region Architecture', 'Cloud Migration', 'Cost Optimization', 'High Availability']
    },
    {
      id: 'cert-2',
      name: 'Google Cloud Certified Professional Cloud Architect',
      issuer: 'Google Cloud',
      issueDate: '2024 — 2027',
      credentialId: 'GCP-PCA-41908234',
      skills: ['GCP Infrastructure', 'Kubernetes GKE', 'BigQuery', 'IAM & Cloud Security']
    },
    {
      id: 'cert-3',
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation (CNCF)',
      issueDate: '2023 — 2026',
      credentialId: 'CKA-9018247-LF',
      skills: ['Cluster Management', 'Networking & Ingress', 'Storage & StatefulSets', 'Security']
    },
    {
      id: 'cert-4',
      name: 'Certified Scrum Master & Agile Leader (CSM)',
      issuer: 'Scrum Alliance',
      issueDate: '2021 — Active',
      skills: ['Sprint Planning', 'Engineering Scaling', 'Continuous Improvement', 'Cross-Squad Delivery']
    }
  ]
};
