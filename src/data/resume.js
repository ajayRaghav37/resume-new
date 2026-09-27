// Single source of truth for the resume. Edit facts here only.
//
// Text supports **bold** and *italic*.
//
// Bullets are either a plain string (shown in the detailed resume only) or an
// object { text, brief } where `brief` is `true` (same text in both resumes)
// or a shorter string used in the brief resume. Numbers live in `text` once.

const resume = {
  name: 'Ajay Singh Raghav',
  headline: 'Pre-Sales Advisory Solutions Architect',
  lastUpdated: 'September 27, 2026',
  site: 'https://ajayraghav37.vercel.app',
  location: 'Gurugram/Delhi NCR, India',
  contact: {
    email: 'ajay.raghav@hotmail.com',
    phones: ['+91 9643899538', '+91 9660991612'],
    links: [
      { label: 'LinkedIn', text: 'linkedin.com/in/ajayRaghav37', url: 'https://www.linkedin.com/in/ajayRaghav37', icon: 'linkedin.ico' },
      { label: 'GitHub', text: 'github.com/ajayRaghav37', url: 'https://www.github.com/ajayRaghav37', icon: 'github.ico' },
    ],
    social: [
      { label: 'Chess.com', url: 'https://www.chess.com/member/ajayRaghav37', icon: 'chess.webp' },
      { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/1171792/ajay-raghav', icon: 'stackoverflow.ico' },
      { label: 'Facebook', url: 'https://www.facebook.com/ajayRaghav037', icon: 'facebook.png' },
      { label: 'Twitter', url: 'https://www.twitter.com/ajayRaghav37', icon: 'twitter.ico' },
      { label: 'Instagram', url: 'https://www.instagram.com/ajayRaghav37', icon: 'instagram.ico' },
    ],
    socialHandle: '@ajayRaghav37',
  },

  // Aggregates below are derived from the MongoDB segments: NARR 4.3 + 2.2 + 4.7,
  // opportunities 37 + 32 + 73, largest team led at Sopra Steria = 25.
  summary:
    'Pre-sales Solutions Architect with 12+ years in software, including nearly five at MongoDB serving enterprise and digital-native accounts in India. Contributed to **$11.2M NARR** across 140+ opportunities, with aligned AEs attaining **196–248%** of quota, and prevented **$3.1M+** in churn. Previously led teams of up to 25 developers at Sopra Steria building a **€10M+** AI/ML product suite. MongoDB, AWS and GCP certified.',

  experience: [
    {
      company: 'MongoDB',
      logo: 'mdb.ico',
      title: 'Pre-Sales Advisory Solutions Architect',
      start: 'Nov 2021',
      end: 'Present',
      awards: 'Excellence Club | 5x Quarterly SA Award | Global Hackathon Runners-up',
      titles: [
        { title: 'Advisory Solutions Architect', start: 'Aug 2025', end: 'Present' },
        { title: 'Senior Solutions Architect', start: 'Feb 2024', end: 'Jul 2025' },
        { title: 'Solutions Architect', start: 'Nov 2021', end: 'Jan 2024' },
      ],
      summary:
        'Partner with sales to win complex opportunities through technical discovery, tailored demos and high-impact POCs; design scalable deployments and translate technical complexity into business value for executives. Drive demand through community engagement, mentor SAs, build reusable assets and feed field insight back to Product Management, ensuring a seamless hand-off from sale to implementation.',
      responsibilitiesIntro: 'Roles and responsibilities:',
      responsibilities: [
        'Lead technical discovery, tailored demonstrations and high-impact POCs for complex opportunities.',
        'Design scalable MongoDB architectures and advise on performance across diverse projects; run feasibility workshops and deep dives to validate solutions and align engineering stakeholders.',
        'Communicate business value to executives through TCO estimation, pricing models and value-based consulting.',
        'Drive demand through industry events, CXO roundtables and developer sessions; cultivate internal champions who advocate for the solution and streamline procurement.',
        'Build reusable technical assets that standardize and accelerate the global pre-sales lifecycle.',
        'Serve as the feedback loop between the field and Product Management so market trends inform the roadmap.',
        'Mentor team members and share best practices; define project scope and consulting requirements for seamless hand-offs to post-sales.',
      ],
      responsibilitiesOutro: '**Results by segment, most recent first.**',
      sectors: ['Finance', 'Retail', 'Gaming', 'Media', 'Travel (airline)', 'Energy', 'Education', 'Telco', 'Insurance'],
      segments: [
        {
          name: 'Enterprise (Growth)',
          start: 'May 2025',
          end: 'Present',
          role: 'Advisory Solutions Architect (since Aug 2025)',
          tools: 'MongoDB Atlas and EA, SFDC, Tableau, Google Workspace, AI tools for dev & research',
          bullets: [
            { text: 'Aligned to 1 AE; **196% attainment over 5 quarters** (FY26 Q2 – FY27 Q2).', brief: true },
            { text: "**$4.3M NARR** from 37 opportunities across 27 accounts; became the team's Retail SME.", brief: true },
            {
              text: 'Prevented **$3.1M+ churn** in crucial accounts against Firestore, Percona and MongoDB Community, averting cascading losses.',
              brief: 'Prevented **$3.1M+ churn** against Firestore, Percona and MongoDB Community.',
            },
            {
              text: 'Displaced DynamoDB, CosmosDB and AstraDB as primary databases; migrated customers from Elasticsearch to Atlas Search, one now the second-largest Atlas Search customer in APAC.',
              brief: "Displaced DynamoDB, CosmosDB, AstraDB and Elasticsearch; drove APAC's first Atlas Stream Processing and Voyage AI adoptions.",
            },
            "Drove APAC's first adoptions of Atlas Stream Processing and the Voyage AI integration.",
            { text: 'Built reusable assets for competitive comparison, sales forecasting, account intelligence and live-transcription-based discovery suggestions.', brief: true },
          ],
        },
        {
          name: 'Enterprise (Acquisition)',
          start: 'Oct 2023',
          end: 'Apr 2025',
          role: 'Senior Solutions Architect (Feb 2024 – Jul 2025)',
          tools: 'MongoDB Atlas and EA, SFDC, Tableau, Google Workspace, MERN',
          bullets: [
            { text: 'Aligned to 2 AEs; **248% average attainment over 6 quarters** (FY24 Q4 – FY26 Q1).', brief: true },
            { text: '**$2.2M NARR** from 32 new logos across 71 accounts, including two $700K+ deals in one year; most workloads closed in APAC (54).', brief: true },
            {
              text: 'Won mostly new-application launches alongside migrations from DocumentDB, MongoDB Community and CosmosDB; replaced MySQL in a market-intelligence platform.',
              brief: 'Won new-application launches and migrations from DocumentDB, MongoDB Community, CosmosDB and MySQL.',
            },
            { text: 'Became the Media SME after closing four deals in Indian print and digital media.', brief: 'Became the Media SME.' },
            {
              text: 'Built champions in almost every account; created reusable assets for cost optimization, sizing, pricing, TCO estimation, competition and integrations.',
              brief: 'Built reusable assets for cost optimization, sizing, pricing, TCO estimation, competition and integrations.',
            },
          ],
        },
        {
          name: 'Digital Native (Hybrid)',
          start: 'Nov 2021',
          end: 'Sep 2023',
          role: 'Solutions Architect (Nov 2021 – Jan 2024)',
          tools: 'MongoDB Atlas, SFDC, Tableau, Google Workspace, MERN',
          bullets: [
            { text: 'Aligned to 5–8 AEs; **240% average attainment over 8 quarters** (FY22 Q4 – FY24 Q3).', brief: true },
            { text: '**$4.7M NARR** from 73 opportunities across 200+ accounts.', brief: true },
            { text: 'Became the Gaming SME by closing two major gaming deals.', brief: 'Became the Gaming SME.' },
            { text: 'Closed 20 acquisition deals of $50K+ across industries; eight have since grown into $600K+ accounts.', brief: true },
            'Built strong champions by drawing on an application-development background.',
          ],
        },
      ],
    },
    {
      company: 'Sopra Steria',
      logo: 'soprasteria.ico',
      title: 'Lead Developer and Architect',
      start: 'Jul 2014',
      end: 'Nov 2021',
      awards: '5x Star of Sopra Steria | 3x Einstein Award | Code Ninja',
      titles: [
        { title: 'Architect', start: 'Jan 2021', end: 'Nov 2021' },
        { title: 'Senior Product Analyst', start: 'Jan 2019', end: 'Jan 2021' },
        { title: 'Product Analyst', start: 'Jan 2018', end: 'Jan 2019' },
        { title: 'Senior Software Engineer', start: 'Jan 2017', end: 'Jan 2018' },
        { title: 'Software Engineer', start: 'Jul 2015', end: 'Jan 2017' },
        { title: 'Software Engineer Trainee', start: 'Jul 2014', end: 'Jul 2015' },
      ],
      notes: ['Delivered 17 projects over 7.5 years, many in parallel, across the Digital Transformation practice and a European airline account.'],
      projectsLeadIn: '**Projects worked on, most recent first.**',
      // Brief resume groups projects by client and stream. A project belongs to
      // a stream via `stream`, or directly to a client via `client`.
      clients: [
        {
          name: 'Digital Transformation',
          streams: [
            {
              name: 'AI/ML Stream',
              start: 'Mar 2017',
              end: 'Nov 2021',
              role: 'Architect | Technical Lead | Algorithm Specialist | UI/UX Expert',
              tools: 'Node.js, React.js, MongoDB, Python, GitLab, OpenShift, Azure, Keycloak, Angular',
              summary:
                'Led 14 developers to architect and build a **€10M+** AI ecosystem that automates bot creation, document intelligence and predictive support for end-to-end contact-center operations.',
            },
            {
              name: 'Mobility Stream',
              start: 'Jan 2015',
              end: 'May 2017',
              role: 'App Developer and Azure Administrator',
              tools: 'C#, WPF, App Services, Notification Hub, MSSQL, JavaScript, HTML, CSS, Apache Cordova',
            },
          ],
        },
        { name: 'European Airline', streams: [] },
      ],
      // Every project. `brief` is the one-line highlight used by the brief resume.
      projects: [
        {
          name: 'Alive Intelligence',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Jul 2019',
          end: 'Nov 2021',
          role: 'Architect | UI/UX Expert',
          tools: 'Node.js, React.js, MongoDB, Express.js, Microservices, GitLab, OpenShift',
          brief: 'Unified 7 AI assets into one contact-center SaaS; **5M+ users**, **€10M+** won; led 12 developers.',
          summary:
            'Unified the AI/ML assets (Masterbot, Botify.kit, Smart Search, Ticket Prediction, Ontofy, Live Chat, Automatic Test) into one SaaS platform powering AI-enabled contact centers. **5M+ users**; won **€10M+** for Sopra Steria.',
          bullets: [
            'Led 12 developers; designed the RESTful APIs that integrate the microservices.',
            'Cut deployment requirements and built demo environments for finance, airline, medical and telecom.',
            'Shipped to 2 production customers (1 on-premise); demonstrated to 30+ prospects.',
          ],
        },
        {
          name: 'Smart Search',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Jan 2019',
          end: 'Nov 2021',
          role: 'Architect | Algorithm Specialist | Development Lead',
          tools: 'Python, Node.js, React.js, MongoDB, Express.js, GitLab, Keycloak, OpenShift, JMeter',
          brief: 'BERT-based enterprise search answering in **under 1s**; 5 customers, 45K employees; led 25 developers.',
          summary:
            'Enterprise search across large document corpora with smart suggestions, FastText paragraph extraction and BERT short answers; sources included SharePoint, JIVE, JIRA and local repositories. Returned relevant documents and paragraphs in **under 1 second** at ~100 concurrent users.',
          bullets: [
            'Led 25 developers; architected the database, microservice APIs and source adapters for SharePoint, JIVE and JIRA.',
            'Benchmarked BERT models, designed the *Discriminator* algorithm for smart document filtering and implemented WebSockets.',
            'Deployed to 5 customers (2 on-premise) and 45,000 internal Sopra Steria employees.',
          ],
        },
        {
          name: 'Live Chat',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Mar 2019',
          end: 'Nov 2021',
          role: 'Architect | Development Lead',
          tools: 'Node.js, React.js, MySQL, PHP, GitLab, Keycloak, OpenShift',
          brief: 'Bot-to-operator hand-off with WebRTC cobrowsing; PHP/MySQL → Node.js/MongoDB; led 8 developers.',
          summary:
            'Cross-platform operator hand-off for chatbot users, with seamless bot integration, cobrowsing, fair queue management and context carry-over.',
          bullets: [
            'Led 8 developers; migrated PHP → Node.js and MySQL → MongoDB.',
            'Architected the WebRTC-based cobrowsing solution and integrated it with Botify.kit.',
          ],
        },
        {
          name: 'Azure Subscription',
          client: 'Digital Transformation',
          start: 'May 2015',
          end: 'Nov 2021',
          role: 'Subscription Owner | Configuration Manager',
          tools: 'PowerShell',
          brief: "Owned the team's Azure subscription; led 3 DevOps engineers; provisioned 60+ VMs in COVID.",
          summary: "Owned the Digital team's Azure subscription for VMs, app services, cognitive services and other resources.",
          bullets: [
            'Led 3 DevOps engineers managing the infrastructure.',
            'Provisioned VMs for 60+ team members during COVID; tightened security and cut cost through JIT access and resource clean-up.',
          ],
        },
        {
          name: 'AFC Sandbox',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Jun 2021',
          end: 'Nov 2021',
          role: 'Architect | Development Lead | UI/UX Expert | Product Owner',
          tools: 'Python, Angular, Vue.js, Bokeh, Leaflet, GitLab, OpenShift',
          brief: "Anti-financial-crime dashboard charting a bank's transaction-monitoring alerts; led 3 developers.",
          summary:
            "Anti-Financial-Crime dashboard that monitors transactions and customer behaviour for suspicious activity, charting a bank's transaction-monitoring systems (customers, accounts and transactions under watch, indicator hits, alerts) and plotting alerts on a map.",
          bullets: [
            'Led 3 developers; rewrote the APIs and frontend to support unlimited graphs with no added effort per graph.',
            'Wrote complex Bokeh dataframe queries for transaction-monitoring visualizations.',
          ],
        },
        {
          name: 'Global Assets Showcase',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Dec 2020',
          end: 'Mar 2021',
          role: 'Architect | Individual Contributor | UI/UX Expert',
          tools: 'Azure Functions, React.js, Cosmos DB, Azure Storage, GitLab, Keycloak',
          brief: 'Solo-built serverless SaaS showcase for 32 AI/ML, Blockchain and IoT assets.',
          summary: 'Low-cost SaaS showcase for the AI/ML, Blockchain and IoT product portfolio.',
          bullets: ['Solo-built the platform and onboarded 32 assets with database design and technical documentation.'],
        },
        {
          name: 'Unified Billing Portal',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Jun 2020',
          end: 'Aug 2020',
          role: 'Architect | UI/UX Expert | Development Lead | Product Owner',
          tools: 'Node.js, React.js, MongoDB, Express.js, Microservices, GitLab, Keycloak, OpenShift',
          brief: 'Multitenant billing portal with a rules engine for all internal assets; led 3 developers.',
          summary: 'Multitenant billing portal for all internal assets, with a rules engine for complex billing and invoicing.',
          bullets: [
            'Led 3 developers; architected the platform and rules engine.',
            'Designed the database and microservice APIs; integrated the Document Reader asset.',
          ],
        },
        {
          name: 'SSO Digital',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Apr 2020',
          end: 'Apr 2020',
          role: 'Architect | Configuration Manager | Individual Contributor',
          tools: 'Keycloak, OpenShift',
          brief: 'Keycloak-based single sign-on adopted by every product in the team.',
          summary: 'Keycloak-based single sign-on adopted by every product in the team.',
          bullets: [],
        },
        {
          name: 'Ontofy 2.0',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Mar 2020',
          end: 'Oct 2020',
          role: 'Architect | Algorithm Specialist | UI/UX Expert | Product Owner',
          tools: 'Python, Java, Node.js, React.js, MongoDB, Express.js, GitLab, Keycloak, OpenShift',
          brief: 'Ontology tool: **80%** less manual effort, **1400%** better quality, **6–550%** ahead of Cogito and IBM Watson.',
          summary:
            'Rebuilt the semi-automatic ontology tool with knowledge-graph support, cutting manual effort by **80%** and improving quality **1400%**.',
          bullets: [
            'Led 5 developers; designed the Disambiguator, nGrammer and knowledge-graph seeder; migrated Java → Node.js.',
            'Benchmarked **6–550% better** than Cogito Studio, OntoText and IBM Watson; wrote Python guidelines for a 100+ person team.',
          ],
        },
        {
          name: 'Live Speech Translation',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Oct 2019',
          end: 'Jan 2020',
          role: 'Consultant | Developer',
          tools: 'Azure Speech to Text, Azure Translator, Node.js, React.js, MongoDB, GitLab, OpenShift',
          brief: 'Real-time multilingual speech rooms via WebSockets and Azure Speech/Translator.',
          summary:
            'Let geographically distributed teams speak, hear and read in their own language while others use a different one.',
          bullets: ['Implemented WebSocket rooms for real-time translation and cut cost by using browser APIs.'],
        },
        {
          name: 'Automatic Test',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Dec 2018',
          end: 'Sep 2019',
          role: 'Architect | Developer | UI/UX Expert | Product Owner',
          tools: 'Node.js, React.js, MongoDB, GitLab, Keycloak, OpenShift',
          brief: 'Chatbot test automation, **22x** less effort; template reused by 8+ assets; led 12 developers.',
          summary:
            'Cross-platform chatbot test automation that detects classifier regressions, records test cases and generates them from conversation trees, cutting manual effort **22x**.',
          bullets: [
            'Led 12 developers on the multitenant platform.',
            'Created the Next.js template (auth, i18n, multitenancy, data table) reused by 8+ assets, and contributor guidelines for 100+ developers.',
          ],
        },
        {
          name: 'Botify.kit',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Oct 2017',
          end: 'Jan 2018',
          role: 'Development Lead | UI/UX Expert',
          tools: 'Node.js, React.js, MongoDB, GitLab',
          brief: 'Integrated Botify with the IK Bot assistant; **20% better** than LivingActor and Recast.ai; led 5 developers.',
          summary: 'Integrated Botify with IK Bot, a French-built virtual-assistant tool supporting complex conversation trees.',
          bullets: [
            'Led 5 developers; migrated MSSQL → MongoDB and implemented cross-origin communication.',
            'Wrote the conversation-tree algorithms; benchmarked **20% better** than LivingActor and Recast.ai.',
          ],
        },
        {
          name: 'Botify',
          client: 'Digital Transformation',
          stream: 'AI/ML Stream',
          start: 'Feb 2017',
          end: 'Sep 2017',
          role: 'Architect | Algorithm Expert | Developer | UI/UX Expert | Product Owner',
          tools: 'Node.js, Lync SDK, MSSQL, IBM Bluemix, Elastic Search, HTML, JavaScript, CSS, VSTS',
          brief: 'Turned documents into FAQ bots, cutting SME effort up to **80%** vs IBM Watson Assistant; led 6 developers.',
          summary: 'Converted documents into FAQ bots, cutting SME effort by up to **80%** versus IBM Watson Assistant.',
          bullets: [
            'Led 6 developers; designed the database, UI and text-mining algorithms for intent, entity and answer detection.',
            'Demonstrated to 10+ customers; deployed to 3 internal customers.',
          ],
        },
        {
          name: 'Project Ekho',
          client: 'Digital Transformation',
          stream: 'Mobility Stream',
          start: 'Oct 2016',
          end: 'May 2017',
          role: 'Developer',
          tools: 'Apache Cordova, HTML, JavaScript, CSS, Azure Notification Hub',
          brief: 'Cross-platform barcode scanning and push notifications for a telco field-technician app.',
          summary: 'Cross-platform barcode scanning and push notifications for a telco job-management site used by on-site technicians.',
          bullets: [
            'Implemented scanning (Quagga.js) and notifications (Firebase, Azure Notification Hub).',
            'Delivered the customer demo and knowledge transfer.',
          ],
        },
        {
          name: 'Future Commercial Platform',
          client: 'European Airline',
          start: 'Jan 2016',
          end: 'Apr 2016',
          role: 'Business Analyst',
          tools: 'Visio, Draw.io, MSSQL',
          brief: "Analyzed and documented the airline's booking, cancellation and invoicing systems.",
          summary:
            "Modernization programme for a European airline whose outsourced legacy systems lacked documentation; produced the technical documentation of the current systems.",
          bullets: ['Analyzed the booking, cancellation and invoicing systems and documented them.'],
        },
        {
          name: 'Sopra Steria Events',
          client: 'Digital Transformation',
          stream: 'Mobility Stream',
          start: 'Jan 2015',
          end: 'Feb 2017',
          role: 'Developer | UI/UX Expert | Individual Contributor',
          tools: 'WPF, C#, Azure App Services, MSSQL, JavaScript, HTML, CSS, VSTS',
          brief: 'Windows Phone/UWP and hybrid event-management app with alerts and geofencing.',
          summary: 'Enterprise event-management app with attendee lists, schedules, activity alerts and geofencing.',
          bullets: [
            'Built the Windows Phone/UWP app with session management.',
            'Built hybrid components (attendee list, quiz) to reduce cross-platform effort.',
          ],
        },
        {
          name: 'VAT Invoicing',
          client: 'European Airline',
          start: 'Sep 2014',
          end: 'Dec 2015',
          role: 'Developer | Business Analyst',
          tools: 'C#, Windows Service, MSSQL, Visual Studio, Agile, TFS, VSTS',
          brief: 'Tax invoices for billions of bookings; **99.2% accuracy at 10ms/booking** vs SLAs of 98% and 150ms.',
          summary:
            'Reverse-engineered invoices for billions of bookings across countries to ensure tax compliance for a European airline. Delivered **99.2% accuracy at 10ms/booking** against SLAs of 98% and 150ms.',
          bullets: [
            'Analyzed charge codes for tax compliance and built the processing engine.',
            'Created an automated unit-test tool using randomized booking data.',
          ],
        },
      ],
    },
  ],

  education: [
    {
      institution: 'Rajasthan Technical University',
      logo: 'rtu.png',
      detail: 'Global Institute of Technology, Jaipur',
      start: 'Sep 2010',
      end: 'Oct 2014',
      summary: 'B.Tech in Information Technology, 66.25%.',
    },
    {
      institution: 'Central Board of Secondary Education',
      logo: 'cbse.png',
      detail: 'Kendriya Vidyalaya, Jaipur and New Delhi',
      start: 'Mar 1997',
      end: 'May 2009',
      summary: 'Class 12 (Science & Math), 73.2%, May 2009; Class 10, 83.4%, May 2007.',
    },
  ],

  certifications: [
    { name: 'MongoDB Certified Developer and DBA', logo: 'mdbuniv.png', start: 'Apr 2022', end: 'Present', detail: 'Associate level' },
    { name: 'AWS Certified Solutions Architect – Associate', logo: 'aws.png', start: 'Dec 2023', end: 'Present', detail: 'Credential ID 2W7C1JEBSMF11FKH' },
    { name: 'Google Cloud Professional Cloud Architect', logo: 'gcp.png', start: 'Dec 2023', end: 'Present', detail: 'Credential ID 90962143' },
    {
      name: 'Microsoft Certified Solutions Developer',
      logo: 'mcsd.png',
      start: 'Mar 2013',
      end: 'Mar 2015',
      detail:
        'Windows Store Apps using HTML5, Charter Member (E223-0215). Also Microsoft Certified Professional and Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3 (Mar 2013).',
    },
  ],

  research: {
    title: 'Research Work (Unpublished)',
    items: [
      '**Discriminating concepts** — the most relevant next question in progressive search over a large corpus.',
      '**AURAmarker** — colored bitmaps that store more data than QR codes, with auto-correction bits.',
      '**Cheerleader algorithm** — winners from a large pool of unrated players with the fewest matches.',
      '**Fantasy advisor** — optimal fantasy line-ups from tournament schedule and team strengths.',
      '**Disambiguator** — types, synonyms and relationships of keywords via correlation.',
      '**nGrammer** — keyword extraction using an inverse global-frequency corpus and TF-IDF.',
      '**Vocabulary learning** — new words and their relationships through graph models and image mnemonics.',
    ],
  },

  // The brief resume lists every entry as a one-liner; the detailed resume uses full entries.
  learning: {
    title: 'Learning Experience',
    subtitle: '(Unpaid and non-profit)',
    items: [
      {
        name: 'Anico.in',
        brief: 'Built 40+ apps in internet security, media and enterprise feedback management; OpenSoft finalist, Kshitij IIT Kharagpur 2011. Skills: Visual Basic, VB.NET, VB Script, C, Microsoft Office.',
        logo: 'anico.in.png',
        role: 'Cofounder and Open Source Evangelist',
        start: 'Feb 2009',
        end: 'Jun 2014',
        summary:
          'Built 40+ applications spanning internet security, media management and enterprise feedback management. OpenSoft finalist at Kshitij, IIT Kharagpur, 2011. Strong competency in **Visual Basic**, **VB.NET**, **VB Script**, **C** and **Microsoft Office**.',
      },
      {
        name: 'Microsoft',
        brief: 'Campus evangelist, built Windows 8 apps; **ranked #1 globally** in round 1 of Imagine Cup 2012.',
        logo: 'microsoft.png',
        role: 'Student Partner',
        start: 'Dec 2012',
        end: 'Jun 2014',
        summary:
          'Evangelized Microsoft technologies on campus through presentations and sessions; built Windows 8 apps. **Ranked #1 globally** in round 1 of Microsoft Imagine Cup 2012.',
      },
      {
        name: 'Augpace',
        brief: 'Invented AURAmarker, an augmented-reality marker storing far more data than QR codes.',
        logo: 'augpace.png',
        role: 'Cofounder and CTO',
        start: 'Jun 2012',
        end: 'Aug 2012',
        summary: 'Invented AURAmarker, an augmented-reality marker that stores far more information than QR codes.',
      },
      {
        name: 'Chessamo',
        brief: 'Designed and programmed an online chess website.',
        logo: 'chessamo.png',
        role: 'Cofounder',
        start: 'Jun 2013',
        end: 'Dec 2013',
        summary: 'Designed and programmed an online chess website.',
      },
      {
        name: 'nanoWE',
        brief: 'Metro app prototype; pitched at the Global Entrepreneurship Summit, IIT Kharagpur, 2012.',
        logo: 'nanowe.png',
        role: 'Developer and Social Media Manager',
        start: 'Jan 2012',
        end: 'Jun 2012',
        summary: 'Prototyped a Metro app for commercializing nanotechnology; pitched at the Global Entrepreneurship Summit, IIT Kharagpur, 2012.',
      },
      {
        name: 'SWAT',
        brief: 'Students Working for Advanced Technology, a college community for technical competency.',
        logo: 'swat.png',
        role: 'Cofounder and President',
        start: 'May 2013',
        end: 'Jun 2014',
        summary: 'Students Working for Advanced Technology, a college community for building technical competency.',
      },
      {
        name: 'C.E.O',
        brief: "Led 30 colleagues in the creativity department of the college's entrepreneurship cell.",
        logo: 'ceo.png',
        role: 'Vice President',
        start: 'Aug 2011',
        end: 'Aug 2012',
        summary: "Led 30 colleagues in the creativity department of the college's Centre for Entrepreneurial Opportunities (e-cell).",
      },
    ],
  },

  scores: [
    { exam: 'GRE', score: '327/340', note: 'section-wise best', details: [['Quantitative', '169/170'], ['Verbal', '158/170'], ['Analytical writing', '4.5/6']] },
    { exam: 'TOEFL', score: '113/120', details: [['Listening', '30/30'], ['Speaking', '29/30'], ['Reading', '29/30'], ['Writing', '25/30']] },
    { exam: 'IELTS', score: '7.5/9', details: [['Listening', '8.5/9'], ['Speaking', '7.5/9'], ['Reading', '7.5/9'], ['Writing', '7/9']] },
    { exam: 'CAT', score: '96.2 percentile', details: [['Quantitative', '93.96'], ['Verbal', '94.27']] },
    { exam: 'eLitmus', score: 'percentiles', details: [['Quantitative', '99.37'], ['Problem solving', '99.36'], ['Verbal', '87.71']] },
  ],

  personal: [
    { label: 'Languages', value: 'Fluent in Hindi and English' },
    { label: 'Hobbies', value: 'Recreational mathematics, cricket, table tennis, travelling, programming, chess and music.' },
    { label: 'Active visas', value: 'USA R B1/B2 (exp. 2028), Singapore MJV (exp. 2028)' },
    { label: 'Past visas', value: "Schengen Type C (France, Finland), UK Type C, Ireland Short Stay 'C' (Business)" },
  ],
};

export default resume;
