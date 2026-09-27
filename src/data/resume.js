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
    youtube: { label: 'YouTube', text: 'PerfectMusicMismatch', url: 'https://www.youtube.com/PerfectMusicMismatch', icon: 'youtube.ico' },
  },

  // Optional. When omitted, the Skills section is derived from every `tools`
  // field below (deduplicated, in order of appearance).
  // skills: ['MongoDB Atlas', 'Node.js', ...],

  experience: [
    {
      company: 'MongoDB',
      logo: 'mdb.png',
      title: 'Pre-Sales Advisory Solutions Architect',
      start: 'Nov 2021',
      end: 'Present',
      awards: 'Excellence Club | 5x Quarterly SA Award',
      titles: [
        { title: 'Advisory Solutions Architect', start: 'Aug 2025', end: 'Present' },
        { title: 'Senior Solutions Architect', start: 'Feb 2024', end: 'Jul 2025' },
        { title: 'Solutions Architect', start: 'Nov 2021', end: 'Jan 2024' },
      ],
      summary:
        'As a Presales Solutions Architect, I collaborated with the sales teams to win complex opportunities through technical discovery, tailored demos, and high-impact POCs. Designed scalable deployments, translating technical complexity into tangible business value for executives. Drove demand through community engagement, mentored team members, created reusable assets, and provided a critical feedback loop to Product Management, while also ensuring a seamless hand-off from the sales cycle to implementation.',
      responsibilitiesIntro: 'As a Presales Solutions Architect, my roles and responsibilities are as follows:',
      responsibilities: [
        'Collaborating with sales teams to lead technical discovery, deliver tailored demonstrations, and manage high-impact Proof of Concepts (POCs) for complex opportunities.',
        'Designing scalable MongoDB infrastructure and provide strategic advisory to optimize performance across diverse software development projects.',
        'Executing feasibility workshops and deep dives to validate solution viability and build consensus among engineering stakeholders.',
        'Communicating technical benefits to executives using TCO estimation, pricing models, and value-based consulting.',
        'Driving engagement through industry events, CXO roundtables, and developer sessions to expand the MongoDB community.',
        'Cultivating internal "Champions" within customer organizations to advocate for solutions and streamline procurement.',
        'Creating reusable technical assets to standardize and accelerate the global pre-sales lifecycle.',
        'Serving as a feedback loop between the field and Product Management, ensuring market trends directly inform the product roadmap.',
        'Supporting team members by sharing best practices and fostering a culture of technical excellence.',
        'Defining project scopes and consulting requirements to ensure seamless hand-offs to post-sales teams.',
      ],
      responsibilitiesOutro: 'Detailed work experience is provided below, categorized by segments worked in:',
      segments: [
        {
          name: 'Enterprise (Growth)',
          start: 'May 2025',
          end: 'Present',
          role: 'Advisory Solutions Architect (since Aug 2025)',
          tools: 'MongoDB Atlas and EA, SFDC, Tableau, Google Workspace, AI tools for dev & research',
          bullets: [
            { text: 'Worked with 1 AE. **Attainment of aligned AE in 5 Quarters** (FY26 Q2 to FY27 Q2): **196%**.', brief: true },
            { text: '**$4.3M NARR** across 37 opportunities while working on 27 accounts. Became a Retail SME.', brief: true },
            "Prevented churn of over $3.1M in crucial accounts against Firestore, Percona and MongoDB Community, that could've led to further cascading churn.",
            'Replaced DynamoDB, CosmosDB and AstraDB in accounts where they were the primary databases.',
            'Replaced customers from ElasticSearch to Atlas Search, one of them is now its second largest customer in APAC.',
            'First adoption of Atlas Stream Processing and Voyage AI Atlas integration in APAC.',
            { text: 'Created multiple re-usable assets for competitive comparison, sales forecasting, account intelligence, and live transcription-based automatic suggestions for discovery.', brief: true },
          ],
        },
        {
          name: 'Enterprise (Acquisition)',
          start: 'Oct 2023',
          end: 'Apr 2025',
          role: 'Senior Solutions Architect (Feb 2024 – Jul 2025)',
          tools: 'MongoDB Atlas and EA, SFDC, Tableau, Google Workspace, MERN',
          bullets: [
            { text: 'Worked with 2 AEs. **Average attainment of aligned AEs in 6 Quarters** (FY24 Q4 to FY26 Q1): **248%**.', brief: true },
            { text: '**$2.2M NARR** across 32 new logos while working in 71 accounts. Landed two $700K+ deals in the same year.', brief: true },
            'While launch of new applications was most prominent, migration from DocumentDB, MongoDB Community and CosmosDB was also significant. Replaced MySQL in a market intelligence platform.',
            { text: 'Created multiple re-usable assets for cost optimization, sizing, pricing, TCO estimation, competition, integrations, etc.', brief: true },
            { text: 'Became a Media SME after closing four deals in Indian print and digital Media.', brief: 'Became a Media SME.' },
            'Built strong champions in almost all accounts.',
            'Maximum number of workloads closed in APAC (54).',
            { text: 'Runners-up in global hackathon on AI.', brief: true },
          ],
        },
        {
          name: 'Digital Native (Hybrid)',
          start: 'Nov 2021',
          end: 'Sep 2023',
          role: 'Solutions Architect (Nov 2021 – Jan 2024)',
          tools: 'MongoDB Atlas, SFDC, Tableau, Google Workspace, MERN',
          bullets: [
            { text: 'Worked with 5-8 AEs. **Average attainment of aligned AEs in 8 Quarters** (FY22 Q4 to FY24 Q3): **240%**.', brief: true },
            { text: '**$4.7M NARR** across 73 opportunities while working in 200+ accounts.', brief: true },
            { text: 'Became a Gaming SME by closing two major deals in the gaming sector.', brief: 'Became a Gaming SME.' },
            'Closed 20 acquisition deals of $50K+ across various industries. Eight of them are now $600K+ accounts.',
            'Built strong champions with the help of my background in application development.',
          ],
        },
      ],
    },
    {
      company: 'Sopra Steria',
      logo: 'soprasteria.png',
      title: 'Architect',
      start: 'Jul 2014',
      end: 'Nov 2021',
      awards: '5x Star of Sopra Steria | 3x Einstein Award | Code Ninja | 5 promotions in 6.5 years',
      titles: [
        { title: 'Architect', start: 'Jan 2021', end: 'Nov 2021' },
        { title: 'Senior Product Analyst', start: 'Jan 2019', end: 'Jan 2021' },
        { title: 'Product Analyst', start: 'Jan 2018', end: 'Jan 2019' },
        { title: 'Senior Software Engineer', start: 'Jan 2017', end: 'Jan 2018' },
        { title: 'Software Engineer', start: 'Jul 2015', end: 'Jan 2017' },
        { title: 'Software Engineer Trainee', start: 'Jul 2014', end: 'Jul 2015' },
      ],
      notes: [
        '**Promotions:** Architect in Jan 2021, Senior Product Analyst in Jan 2019, Product Analyst in Jan 2018, Senior Software Engineer in Jan 2017, Software Engineer in Jul 2015. Started as Software Engineer Trainee in Jul 2014.',
        '**Projects:** Worked on 16 different projects over a span of 7.5 years, many of them were done parallely.',
      ],
      // Brief resume: streams grouped by client.
      groups: [
        {
          name: 'Digital Transformation',
          items: [
            {
              name: 'AI/ML Stream',
              start: 'Mar 2017',
              end: 'Nov 2022',
              role: 'Architect | Technical Lead | Algorithm Specialist | UI/UX Expert',
              tools: 'Node.js, React.js, MongoDB, Python, GitLab, OpenShift, Azure, Keycloak, Angular',
              summary:
                'Led a team of 14 developers, architected and developed a €10M+ AI-driven enterprise ecosystem that automates bot creation, document intelligence, and predictive support to streamline end-to-end contact center operations.',
            },
            {
              name: 'Mobility Stream',
              start: 'Jan 2015',
              end: 'May 2017',
              role: 'App Developer and Azure Administrator',
              tools: 'C#, WPF, App Services, Notification Hub, MSSQL, JavaScript, HTML, CSS, Apache Cordova',
              summary:
                'Developed enterprise-scale Windows Phone and hybrid applications for event management and field technician job tracking, featuring integrated barcode scanning and push notification solutions.',
            },
          ],
        },
        {
          name: 'European Airline',
          items: [
            {
              name: 'Future Commercial Platform',
              start: 'Jan 2016',
              end: 'Apr 2016',
              role: 'Business System Analyst',
              tools: 'Visio, Draw.io, MSSQL',
              summary: "Performed technical and functional analysis of business systems in a European Airline's transformation project.",
            },
            {
              name: 'VAT Invoicing',
              start: 'Sep 2014',
              end: 'Dec 2015',
              role: 'Development Engineer and Business Analyst',
              tools: 'C#, Windows Service, MSSQL, Visual Studio, Agile, TFS',
              summary:
                'Developed a solution to reverse engineer invoices of billions of bookings across various countries to ensure compliance. Accuracy and performance SLAs were 98% and 150ms/booking. Results were 99.2% and 10ms/booking respectively.',
            },
          ],
        },
      ],
      // Detailed resume: every project.
      projects: [
        {
          name: 'Alive Intelligence',
          start: 'Jul 2019',
          end: 'Nov 2021',
          role: 'Architect | UI/UX Expert',
          tools: 'Node.js, React.js, MongoDB, Express.js, Microservices, GitLab, OpenShift',
          summary:
            'Integrated different assets created in AI/ML stream into one SaaS product. Alive Intelligence powered an AI-enabled enterprise grade contact center ecosystem. Alive Intelligence is a combination of Masterbot, Botify.kit, Smart Search, Ticket Prediction, Ontofy, Live Chat and Automatic Test. With more than **5 million users**, it won **€10M+** for Sopra Steria.',
          bullets: [
            'Led team of 12 developers; designed RESTful APIs for microservices integration.',
            'Optimized deployment requirements and created demo environments for Finance/Airline/Medical/Telecom domains.',
            'Delivered product to 2 production customers (1 on-premise); demonstrated to 30+ customers.',
          ],
        },
        {
          name: 'Smart Search',
          start: 'Jan 2019',
          end: 'Nov 2021',
          role: 'Architect | Algorithm Specialist | Development Lead',
          tools: 'Python, Node.js, React.js, MongoDB, Express.js, GitLab, Keycloak, OpenShift, JMeter',
          summary:
            'Created an enterprise search solution for searching across a large number of documents with smart suggestions, Fasttext based paragraph extraction and BERT based short answers. Supported various sources of documents like SharePoint, JIVE, JIRA, local repositories, etc. Smart Search had the ability to fetch relevant documents and paragraphs in less than 1 second for a given query with ~100 simultaneous user load.',
          bullets: [
            'Led 25 developers; architected database, microservices APIs, and adapters for SharePoint/JIVE/JIRA sources.',
            'Benchmarked BERT models; designed *Discriminator* algorithm for smart document filtering; implemented WebSockets.',
            'Deployed to 5 customers (2 on-premise) + 45,000 internal Sopra Steria employees.',
          ],
        },
        {
          name: 'Live Chat',
          start: 'Mar 2019',
          end: 'Nov 2021',
          role: 'Architect | Development Lead',
          tools: 'Node.js, React.js, MySQL, PHP, GitLab, Keycloak, OpenShift',
          summary:
            'Live Chat is a cross-platform operator assistance solution for end-users who are using a chatbot. It provides seamless integration with the chatbot and has features like cobrowsing, fair queue management, context carry-over, etc.',
          bullets: [
            'Led 8 developers; migrated PHP → Node.js and MySQL → MongoDB.',
            'Architected WebRTC-based cobrowsing solution; integrated with Botify.kit.',
          ],
        },
        {
          name: 'Azure Subscription',
          start: 'May 2015',
          end: 'Nov 2021',
          role: 'Subscription Owner | Configuration Manager',
          tools: 'PowerShell',
          summary:
            'Digital team in Sopra Steria have been using an Azure subscription for creating various resources like virtual machines, app services, cognitive services, etc.',
          bullets: [
            'Led 3 DevOps engineers managing Azure infrastructure and resources.',
            'Enabled 60+ team members with VMs during COVID; optimized security and cost via JIT and resource cleanup.',
          ],
        },
        {
          name: 'AFC Sandbox',
          start: 'Jun 2021',
          end: 'Nov 2021',
          role: 'Architect | Development Lead | UI/UX Expert | Product Owner',
          tools: 'Python, Angular, Vue.js, Bokeh, Leaflet, GitLab, OpenShift',
          summary:
            "Anti Financial Crime is a tool to monitor transactions and customer behaviours to identify suspicious activities. On the dashboard, multiple graphs are plotted to have an overview about the bank's respective Transaction Monitoring systems, including information like: number of customers/accounts/transactions in monitoring, number of indicator hits, number of alerts, etc. The alerts could also be visualized on a map.",
          bullets: [
            'Led 3 developers; rewrote APIs and frontend to support infinite graphs with zero effort overhead.',
            'Created complex Bokeh dataframe queries for transaction monitoring visualizations.',
          ],
        },
        {
          name: 'Global Assets Showcase',
          start: 'Dec 2020',
          end: 'Mar 2021',
          role: 'Architect | Individual Contributor | UI/UX Expert',
          tools: 'Azure Functions, React.js, Cosmos DB, Azure Storage, GitLab, Keycloak',
          summary: 'Global Assets Showcase is an extremely cost effective solution for showcasing various products of AI/ML, Blockchain and IoT.',
          bullets: [
            'Solo-developed cost-effective SaaS product showcase for AI/ML, Blockchain, IoT.',
            'Added 32 assets with database design and technical documentation.',
          ],
        },
        {
          name: 'Unified Billing Portal',
          start: 'Jun 2020',
          end: 'Aug 2020',
          role: 'Architect | UI/UX Expert | Development Lead | Product Owner',
          tools: 'Node.js, React.js, MongoDB, Express.js, Microservices, GitLab, Keycloak, OpenShift',
          summary: 'Created a multitenant portal for billing of all our internal assets with support for writing complex billing and invoicing rules.',
          bullets: [
            'Led 3 developers; architected multitenant billing platform with complex rules engine.',
            'Designed database, microservices APIs, and integrated with Document Reader asset.',
          ],
        },
        {
          name: 'SSO Digital',
          start: 'Apr 2020',
          end: 'Apr 2020',
          role: 'Architect | Configuration Manager | Individual Contributor',
          tools: 'Keycloak, OpenShift',
          summary: 'Created a KeyCloak based single sign-on application that was later used by all products developed in the team.',
          bullets: ['Implemented KeyCloak-based SSO used across all team products.'],
        },
        {
          name: 'Ontofy 2.0',
          start: 'Mar 2020',
          end: 'Oct 2020',
          role: 'Architect | Algorithm Specialist | UI/UX Expert | Product Owner',
          tools: 'Python, Java, Node.js, React.js, MongoDB, Express.js, GitLab, Keycloak, OpenShift',
          summary:
            'Ontofy was a tool for creating semi-automatic ontologies. It was rebooted and revamped to increase quality and intelligence in different services. Improvements made in the revamp resulted in a **reduction of 80% manual effort** and a massive **1400% quality** boost. Support for knowledge graph was also added during the revamp.',
          bullets: [
            'Led 5 developers; architected ontology revamp achieving **80% effort reduction, 1400% quality boost**.',
            'Designed Disambiguator, nGrammer, knowledge graph seeder; migrated Java → Node.js.',
            'Benchmarked vs. Cogito Studio, OntoText, IBM Watson—**6-550% better**; created Python guidelines for 100+ team.',
          ],
        },
        {
          name: 'Live Speech Translation',
          start: 'Oct 2019',
          end: 'Jan 2020',
          role: 'Consultant | Developer',
          tools: 'Azure Speech to Text, Azure Translator, Node.js, React.js, MongoDB, GitLab, OpenShift',
          summary:
            'Live Speech Translation was created to enable people working in different geographies to work together. All users could speak, hear and read in their choice of language even if other users are speaking a different language.',
          bullets: ['Optimized cost using browser APIs; implemented WebSocket-based rooms for real-time translation.'],
        },
        {
          name: 'Automatic Test',
          start: 'Dec 2018',
          end: 'Sep 2019',
          role: 'Architect | Developer | UI/UX Expert | Product Owner',
          tools: 'Node.js, React.js, MongoDB, GitLab, Keycloak, OpenShift',
          summary:
            'Automatic Test is a cross-platform application created for automation testing of chatbots. It can detect regressions in the classifier and can also record test cases. Most powerful feature of Automatic Test is that it can automatically create test cases based on conversation trees created in the chatbot. Reduced the manual effort by **22 times**.',
          bullets: [
            'Led 12 developers; architected multitenant chatbot automation testing platform reducing effort **22x**.',
            'Created Next.js template with auth, i18n, multitenancy, data table (used by 8+ assets).',
            'Created contributor guidelines for 100+ developers.',
          ],
        },
        {
          name: 'Botify.kit',
          start: 'Oct 2017',
          end: 'Jan 2018',
          role: 'Development Lead | UI/UX Expert',
          tools: 'Node.js, React.js, MongoDB, GitLab',
          summary:
            'Botify.kit was integration of IK Bot and Botify. IK Bot was a virtual assistant creation tool created by French counterparts. It supported complex conversation trees.',
          bullets: [
            'Led 5 developers; migrated MSSQL → MongoDB; implemented cross-origin communication.',
            'Wrote conversation tree algorithms; benchmarked vs. LivingActor, Recast.ai—**20% better**.',
          ],
        },
        {
          name: 'Botify',
          start: 'Feb 2017',
          end: 'Sep 2017',
          role: 'Architect | Algorithm Expert | Developer | UI/UX Expert | Product Owner',
          tools: 'Node.js, Lync SDK, MSSQL, IBM Bluemix, Elastic Search, HTML, JavaScript, CSS, VSTS',
          summary: 'Botify was created to convert documents into FAQ bots **reducing SME efforts by up to 80%** compared to IBM Watson Assistant.',
          bullets: [
            'Led 6 developers on document-to-FAQ bot converter, **reducing SME effort 80%** vs. IBM Watson.',
            'Designed database, UI, text mining algorithms for intent/entity/answer detection.',
            'Demonstrated to 10+ customers; deployed to 3 internal customers.',
          ],
        },
        {
          name: 'Project Ekho',
          start: 'Oct 2016',
          end: 'May 2017',
          role: 'Developer',
          tools: 'Apache Cordova, HTML, JavaScript, CSS, Azure Notification Hub',
          summary:
            'Project Ekho was a solution for cross-platform barcode scanning and push notifications in a Telco Services website created for job management of on-site technicians.',
          bullets: [
            'Implemented barcode scanning (Quagga.js) and push notifications (Firebase, Azure Hub).',
            'Delivered customer demo and knowledge transfer to Telco Services company.',
          ],
        },
        {
          name: 'Future Commercial Platform',
          start: 'Jan 2016',
          end: 'Apr 2016',
          role: 'Business Analyst',
          tools: 'Visio, Draw.io, MSSQL',
          summary:
            'FCP was a revamp project of a European Airline. They were using age-old technologies and techniques in their systems. They wanted to move to latest technology. Because almost all the work was outsourced by them to various consultancies, they wanted technical documentation of their current systems.',
          bullets: ['Analyzed complex booking, cancellation, invoicing systems; created technical documentation.'],
        },
        {
          name: 'Sopra Steria Events',
          start: 'Jan 2015',
          end: 'Feb 2017',
          role: 'Developer | UI/UX Expert | Individual Contributor',
          tools: 'WPF, C#, Azure App Services, MSSQL, JavaScript, HTML, CSS, VSTS',
          summary:
            'Sopra Steria Events app was an enterprise-scale event management application. It had features like attendees list, schedule, activity alerts, geofencing, etc.',
          bullets: [
            'Created Windows Phone/UWP application with session management.',
            'Built hybrid components (attendees list, quiz) reducing cross-platform effort.',
          ],
        },
        {
          name: 'VAT Invoicing',
          start: 'Sep 2014',
          end: 'Dec 2015',
          role: 'Developer | Business Analyst',
          tools: 'C#, Windows Service, MSSQL, VSTS',
          summary:
            'Developed a solution to reverse engineer invoices of billions of bookings across various countries to ensure compliance for a European Airline. **Accuracy and performance SLAs were 98% and 150ms/booking. Results were 99.2% and 10ms/booking respectively**.',
          bullets: [
            'Analyzed charge codes for tax compliance; built processors achieving **99.2% accuracy, 10ms/booking** (vs. SLA 98%, 150ms).',
            'Created automated unit test tool with random booking data.',
          ],
        },
      ],
    },
  ],

  education: [
    {
      institution: 'Rajasthan Technical University',
      logo: 'rtu.png',
      detail: 'Global Institute of Technology | Jaipur',
      start: 'Sep 2010',
      end: 'Oct 2014',
      summary: 'Completed Bachelor of Technology in Information Technology with 66.25%.',
    },
    {
      institution: 'Central Board of Secondary Education',
      logo: 'cbse.png',
      detail: 'Kendriya Vidyalaya | Jaipur and New Delhi',
      start: 'Mar 1997',
      end: 'May 2009',
      summary: 'Completed class 10th in May 2007 with 83.4% and class 12th in May 2009 with 73.2% in Science & Math Stream.',
    },
  ],

  certifications: [
    { name: 'MongoDB Certified Developer and DBA', logo: 'mdbuniv.png', start: 'Apr 2022', end: 'Present', detail: 'Associate Level' },
    { name: 'AWS Associate Solutions Architect', logo: 'aws.png', start: 'Dec 2023', end: 'Present', detail: 'Credential ID 2W7C1JEBSMF11FKH' },
    { name: 'GCP Professional Cloud Architect', logo: 'gcp.png', start: 'Dec 2023', end: 'Present', detail: 'Credential ID 90962143' },
    { name: 'Microsoft Certified Solutions Developer', logo: 'mcsd.png', start: 'Mar 2013', end: 'Mar 2015', detail: 'Windows Store Apps using HTML5 | Charter Member | E223-0215' },
  ],

  research: {
    title: 'Research Work (Unpublished)',
    items: [
      'Discriminating concepts - Find the most relevant question to ask in progressive search on large corpus.',
      'AURAmarker - Using colored bitmaps to store more data compared to QR codes with auto-correction bits.',
      'Cheerleader algorithm - Find winners in large pool of unrated players with minimum matches played.',
      'Fantasy advisor - Find optimal fantasy combinations based on tournament schedule and team strengths.',
      'Disambiguator - Find the types, synonyms and relationships of keywords by disambiguating through corelation.',
      'nGrammer - Extract keywords from documents using inverse global frequency corpus and TFIDF.',
      'Vocabulary learning - Learning new words and their relationships through graph models and image mnemonics.',
    ],
  },

  // `brief: true` entries also appear in the brief resume.
  learning: {
    title: 'Learning Experience',
    subtitle: '(Unpaid and non-profit)',
    items: [
      {
        name: 'Anico.in',
        logo: 'anico.in.png',
        role: 'Cofounder and Open Source Evangelist',
        start: 'Feb 2009',
        end: 'Dec 2016',
        brief: true,
        summary:
          'Developed over 40 software applications ranging from Internet Security to Media management to Enterprise Feedback Management System. Finalists in OpenSoft competition in Kshitij technical fest, IIT Kharagpur in 2011. Developed strong competency in **Visual Basic**, **VB.NET**, **VB Script**, **C** and **Microsoft Office**.',
      },
      {
        name: 'Microsoft',
        logo: 'microsoft.png',
        role: 'Student Partner',
        start: 'Dec 2012',
        end: 'Jun 2014',
        brief: true,
        summary:
          'Created presentations, conducted sessions and evangelized Microsoft technologies among colleagues in college. Also created various apps for Windows 8. Globally ranked one in round 1 of Microsoft Imagine Cup 2012.',
      },
      {
        name: 'Augpace',
        logo: 'augpace.png',
        role: 'Cofounder and CTO',
        start: 'Jun 2012',
        end: 'Aug 2012',
        summary: 'Invented an augmented reality technology, called AURAmarker to store far more information than QR codes.',
      },
      {
        name: 'Chessamo',
        logo: 'chessamo.png',
        role: 'Cofounder',
        start: 'Jun 2013',
        end: 'Dec 2013',
        summary: 'Worked as the designer and programmer. Chessamo was an online chess website.',
      },
      {
        name: 'nanoWE',
        logo: 'nanowe.png',
        role: 'Developer and Social Media Manager',
        start: 'Jan 2012',
        end: 'Jun 2012',
        summary:
          'Developed a metro app prototype for nanoWE that aimed at commercializing nanotechnology. Pitched the idea at Global Entrepreneurship Summit, IIT Kharagpur in 2012.',
      },
      {
        name: 'SWAT',
        logo: 'swat.png',
        role: 'Cofounder and President',
        start: 'May 2013',
        end: 'Jun 2014',
        summary: 'Students working for advanced technology is a college community aimed at building competency in students.',
      },
      {
        name: 'C.E.O',
        logo: 'ceo.png',
        role: 'Vice President',
        start: 'Aug 2011',
        end: 'Aug 2012',
        summary: 'Led 30 colleagues in creativity department of center for entrepreneurial opportunities, e-cell of the college.',
      },
    ],
  },

  scores: [
    { exam: 'GRE', score: '326/340', note: 'Sectionwise best', details: [['Quantitative', '169/170'], ['Verbal', '158/170'], ['Analytical writing', '4.5/6']] },
    { exam: 'TOEFL', score: '113/120', details: [['Listening', '30/30'], ['Speaking', '29/30'], ['Reading', '29/30'], ['Writing', '25/30']] },
    { exam: 'IELTS', score: '7.5/9', details: [['Listening', '8.5/9'], ['Speaking', '7.5/9'], ['Reading', '7.5/9'], ['Writing', '7/9']] },
    { exam: 'CAT', score: '96.2 percentile', details: [['Quantitative', '93.96'], ['Verbal', '94.27']] },
    { exam: 'eLitmus', score: 'Percentile', details: [['Quantitative', '99.37'], ['Problem solving', '99.36'], ['Verbal', '87.71']] },
  ],

  personal: [
    { label: 'Date of birth', value: '16 May 1991' },
    { label: 'Languages', value: 'Fluent in Hindi and English' },
    { label: 'Hobbies', value: 'Recreational mathematics, cricket, table tennis, travelling, programming, chess and listening to music.' },
    { label: 'Active VISA(s)', value: 'USA R B1/B2 (Exp 2028), Singapore MJV (Exp 2028)' },
    { label: 'Past VISA(s)', value: 'Schengen Tourist, UK Visitor' },
    { label: 'Permanent address', value: 'B-279, Alpha 1, Greater Noida' },
    { label: 'Other', value: 'Indian | Male | Married', icon: 'india.png' },
  ],
};

export default resume;
