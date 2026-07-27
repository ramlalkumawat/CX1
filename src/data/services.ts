export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: 'strategy' | 'data' | 'technology' | 'digital' | 'operations' | 'other';
  icon: string;
  shortDesc: string;
  overview: string;
  benefits: string[];
  workflow: string[];
  deliverables: string[];
  features: string[];
  useCases: string[];
  faqs: ServiceFAQ[];
  keywords: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'political-consulting',
    name: 'Political Consulting',
    category: 'strategy',
    icon: 'Briefcase',
    shortDesc: 'Elite political advisory, coalition building, and strategy formulated by experts from IIMs and elite technology firms.',
    overview: 'Our political consulting services in Rajasthan offer top-tier strategic advice, candidate positioning, and constituency planning. We align data-driven analytics with seasoned ground intelligence to build winning campaigns for the Vidhan Sabha and Lok Sabha elections.',
    benefits: [
      'Positioning as a credible leader backed by scientific data.',
      'Comprehensive competitor mapping and counter-strategy development.',
      'Optimized resource allocation across all election phases.'
    ],
    workflow: [
      'Constituency profiling and demographic scanning.',
      'Candidate SWOT analysis and image assessment.',
      'Campaign message formulation and localized themes.',
      'Execution monitoring and mid-course correction.'
    ],
    deliverables: [
      'Constituency Intelligence Report.',
      'Candidate Positioning Blueprint.',
      '100-Day Campaign Action Plan.'
    ],
    features: [
      'Experienced consultants from IIMs and top political analysts.',
      'Integration of ground-level surveys and digital sentiment analysis.',
      'Real-time crisis management and rapid response strategies.'
    ],
    useCases: [
      'A first-time candidate looking to build a high-profile launch strategy in Jaipur.',
      'An incumbent MLA aiming to defend a highly competitive seat in Jodhpur.'
    ],
    faqs: [
      {
        question: 'What is the role of political consulting in Rajasthan elections?',
        answer: 'Political consulting helps candidates navigate complex caste equations, local developmental grievances, and dynamic voter behavior in Rajasthan using scientific data and tailored communication plans.'
      },
      {
        question: 'How do you structure political advisory?',
        answer: 'We deploy seasoned strategists alongside data engineers to establish local office procedures, speech writing, and crisis desks for the candidate.'
      }
    ],
    keywords: ['Political Consulting Jaipur', 'Election Consultant Jodhpur', 'Political Strategy Rajasthan']
  },
  {
    slug: 'election-strategy',
    name: 'Election Strategy',
    category: 'strategy',
    icon: 'Compass',
    shortDesc: 'Comprehensive election-winning blueprints designed around voter demographics, historical margins, and localized issues.',
    overview: 'CampaignX designs high-impact election strategies that turn raw data into absolute victory. Our strategic blueprints detail exactly how to secure winning majorities by identifying swing voters, mapping local influencers, and dominating key narratives.',
    benefits: [
      'Clear, mathematical clarity on the path to victory.',
      'Proactive identification of vote-bank vulnerabilities.',
      'Agile strategies that respond to shifting political climates.'
    ],
    workflow: [
      'Historical election data modeling (booth-wise).',
      'Swing margin calculation and target voter profiling.',
      'Theme customization for key local assembly segments.',
      'Polling day mobilization planning.'
    ],
    deliverables: [
      'Booth-level Win Strategy Document.',
      'Voter Turnout & Mobilization Guide.',
      'Narrative & Issue Maps.'
    ],
    features: [
      'Proprietary predictive modeling engines.',
      'Dynamic voter segment grouping.',
      'High-impact narrative testing.'
    ],
    useCases: [
      'Formulating a targeted swing-voter strategy in Udaipur to overcome a historic margin.',
      'Designing a multi-caste consolidation blueprint in Sikar.'
    ],
    faqs: [
      {
        question: 'How do you construct a dynamic election strategy?',
        answer: 'We combine past voting percentages, current demographic weights, and opinion survey results to create booth-level target thresholds.'
      }
    ],
    keywords: ['Election Strategy Rajasthan', 'Political Campaign Strategy Jaipur']
  },
  {
    slug: 'campaign-planning',
    name: 'Campaign Planning',
    category: 'strategy',
    icon: 'Calendar',
    shortDesc: 'End-to-end campaign scheduling, route optimization, and logistics management for maximum candidate impact.',
    overview: 'Our campaign planning services structure the candidate\'s daily public interactions, town halls, and rallies. We optimize travel routes and campaign stops using geographic data to ensure maximum coverage of target booths with minimum fatigue.',
    benefits: [
      'Efficient calendar management preventing last-minute scheduling chaos.',
      'Maximum physical presence in high-priority voting blocks.',
      'Streamlined campaign logistics for volunteers, assets, and media.'
    ],
    workflow: [
      'Asset and resource mapping across the assembly segment.',
      'Optimal candidate route selection using GIS inputs.',
      'Event sequencing (rallies, nukkad sabhas, door-to-door).',
      'Feedback loops to assess rally effectiveness.'
    ],
    deliverables: [
      'Candidate Route Optimization Map.',
      'Campaign Event Playbook.',
      'Daily Logistical Checklists.'
    ],
    features: [
      'GIS-based location targeting.',
      'Real-time schedule tracking for campaign team.',
      'Integrated public relations scheduling.'
    ],
    useCases: [
      'Scheduling a 20-day intensive tour across the vast rural areas of Barmer.',
      'Optimizing street-corner meetings (nukkad sabhas) in urban Ajmer.'
    ],
    faqs: [
      {
        question: 'Why is candidate route optimization important in Rajasthan?',
        answer: 'Rajasthan\'s geographically expansive districts like Jaisalmer and Barmer require efficient route planning to cover maximum villages without wasting critical hours.'
      }
    ],
    keywords: ['Campaign Planning Rajasthan', 'Political Campaign Agency Udaipur']
  },
  {
    slug: 'election-management',
    name: 'Election Management',
    category: 'strategy',
    icon: 'Layers',
    shortDesc: 'Complete synchronization of candidate activities, volunteer networks, media operations, and ground machinery.',
    overview: 'CampaignX offers professional, enterprise-grade election management services. We bring corporate project management principles to political campaigns, managing budgets, personnel, communication desks, and legal compliance teams.',
    benefits: [
      'Complete control over diverse campaign operations.',
      'Reduced overheads and administrative waste.',
      'Absolute sync between digital, media, and ground teams.'
    ],
    workflow: [
      'Setting up local campaign command structures.',
      'Daily operational sprints with core campaign units.',
      'Asset inventory management (vehicles, materials, technology).',
      'Reporting frameworks directly to the candidate\'s office.'
    ],
    deliverables: [
      'Campaign Command Structure Chart.',
      'Operational Dashboard Access.',
      'Weekly Resource Audit Report.'
    ],
    features: [
      'Dedicated operations managers assigned to the campaign.',
      'Cloud-based asset tracking software.',
      'Daily stand-ups and performance tracking.'
    ],
    useCases: [
      'Managing a complex multi-city election team in Kota.',
      'Synchronizing 500+ active campaign volunteers in Bhilwara.'
    ],
    faqs: [
      {
        question: 'What does election management cover?',
        answer: 'It covers everything from ground volunteer organization, logistics, rally permits, war room monitoring, digital campaigns, and polling day operations.'
      }
    ],
    keywords: ['Election Management Company Rajasthan', 'Political Campaign Company Jaipur']
  },
  {
    slug: 'war-room',
    name: 'War Room Setup',
    category: 'technology',
    icon: 'Shield',
    shortDesc: 'High-tech centralized monitoring units executing dynamic communication, rapid response, and analytics.',
    overview: 'Establish a state-of-the-art political war room to command your campaign. Our war rooms integrate intelligence feeds, social media trackers, local news crawls, and ground feedback loops to formulate instant rebuttals and candidate messaging.',
    benefits: [
      'Unmatched response time to opposition narratives and fake news.',
      'Continuous feed of ground issues directly to the decision makers.',
      'Real-time control over volunteer and digital output.'
    ],
    workflow: [
      'Physical workspace setup with high-speed networks and media feeds.',
      'Installation of custom monitoring consoles and tracking portals.',
      'Recruitment and onboarding of media, tech, and intelligence staff.',
      '24/7 narrative mapping and response execution.'
    ],
    deliverables: [
      'Fully operational War Room Facility.',
      'Rapid Response Protocol Playbook.',
      'Daily Narrative Analysis Briefs.'
    ],
    features: [
      'AI-powered social sentiment tracking.',
      'Direct WhatsApp and SMS integration for mass outreach.',
      'TV and local digital media crawler monitoring.'
    ],
    useCases: [
      'Setting up a central Jaipur war room monitoring 8 assembly constituencies.',
      'Deploying a local assembly-level rapid response cell in Bikaner.'
    ],
    faqs: [
      {
        question: 'How fast can a CampaignX war room counter fake news?',
        answer: 'Our average detection-to-rebuttal time is under 15 minutes, utilizing automated templates and broadcast networks.'
      }
    ],
    keywords: ['War Room Rajasthan', 'Political War Room Jaipur']
  },
  {
    slug: 'survey-research',
    name: 'Survey & Research',
    category: 'data',
    icon: 'Search',
    shortDesc: 'Scientific, demographic, and issue-based surveys tracking real voter sentiments on the ground.',
    overview: 'We conduct highly structured, double-blind surveys across all districts of Rajasthan. Our methodology guarantees low margins of error, providing real insights into caste preferences, local issues, and candidate approval ratings.',
    benefits: [
      'Unbiased, objective data regarding your electoral standing.',
      'Identification of hidden voter trends and swing-voter triggers.',
      'Accurate understanding of local anger or satisfaction markers.'
    ],
    workflow: [
      'Questionnaire design tailored for specific Rajasthani dialect nuances.',
      'On-ground data collection using GPS-tagged mobile applications.',
      'Data verification via audio logs and double-entry methods.',
      'Statistical modeling and cross-tabulation reporting.'
    ],
    deliverables: [
      'Constituency Baseline Survey Report.',
      'Voter Sentiment Matrix.',
      'Issues & Grievances Map.'
    ],
    features: [
      '100% GPS-verified physical door-to-door surveys.',
      'Dynamic sample sizing mapped to local caste distributions.',
      'Advanced statistical analytics (regression, clustering).'
    ],
    useCases: [
      'Conducting an extensive demographic survey across 200 villages in Alwar.',
      'Determining voter preference shift in urban Jodhpur.'
    ],
    faqs: [
      {
        question: 'How do you ensure survey accuracy in rural Rajasthan?',
        answer: 'We use local enumerators who understand regional dialects, enforce strict GPS tracking, and verify at least 20% of responses through telephone call-backs.'
      }
    ],
    keywords: ['Survey & Research Rajasthan', 'Political Survey Jaipur']
  },
  {
    slug: 'opinion-polls',
    name: 'Opinion Polls',
    category: 'data',
    icon: 'BarChart2',
    shortDesc: 'Statewide and constituency-level voter opinion analysis tracking candidate trends over time.',
    overview: 'Track voter approval levels, party popularity, and swing parameters using CampaignX Opinion Polls. We capture public opinion at regular intervals, allowing candidates to measure campaign velocity and adjust key policy stands.',
    benefits: [
      'Measure the direct impact of your campaign events and announcements.',
      'Verify if your core messaging is resonating with voters.',
      'Early indicators of voting intention shifts.'
    ],
    workflow: [
      'Constituency segmentation based on historical polling patterns.',
      'Randomized stratified sampling of target voter populations.',
      'Multi-channel polling (ground, telephonic, digital).',
      'Trend-line analysis and report visualization.'
    ],
    deliverables: [
      'Constituency Popularity Report.',
      'Messaging Impact Assessment.',
      'Trend Velocity Charts.'
    ],
    features: [
      'Stratified random sampling designs.',
      'Interactive dashboard tracking sentiment timelines.',
      'Demographic breakdown (age, gender, caste, income).'
    ],
    useCases: [
      'Assessing the public reaction to a newly released manifesto in Udaipur.',
      'Tracking lead margins in a key seat in Bharatpur.'
    ],
    faqs: [
      {
        question: 'What is the sample size for a constituency opinion poll?',
        answer: 'We typically sample between 1,200 to 2,500 respondents per assembly constituency to ensure a confidence level of 95% with a margin of error under 3%.'
      }
    ],
    keywords: ['Opinion Polls Rajasthan', 'Voter Survey Jaipur']
  },
  {
    slug: 'exit-polls',
    name: 'Exit Polls',
    category: 'data',
    icon: 'PieChart',
    shortDesc: 'Scientific exit polling on election day to forecast seats, margins, and voter behaviors.',
    overview: 'CampaignX Exit Polls deliver extremely precise seat projections immediately after voting closes. By surveying voters directly outside polling booths, we capture actual voting behavior and the decisive demographic shifts that determined the result.',
    benefits: [
      'Instant clarity on voting results before the official count.',
      'Deep insight into which caste or group shifted allegiance on polling day.',
      'Media-ready projections for candidate and party strategy meetings.'
    ],
    workflow: [
      'Selection of representative polling stations across the constituency.',
      'Deployment of trained exit-poll enumerators at booth exits.',
      'Hourly data transmission directly to our central analytics node.',
      'Projection computation based on voter turnout matrices.'
    ],
    deliverables: [
      'Seat & Margin Projection Brief.',
      'Demographic Shift Analysis.',
      'Booth-level Performance Estimate.'
    ],
    features: [
      'Systematic interval sampling at polling locations.',
      'Real-time analysis to prevent data manipulation.',
      'Calibration models incorporating historical turnout biases.'
    ],
    useCases: [
      'Predicting victory margins in a tightly contested multi-cornered seat in Ajmer.',
      'Analyzing voter turnout behavior in rural Bhilwara on voting day.'
    ],
    faqs: [
      {
        question: 'How do you guarantee confidentiality in exit polls?',
        answer: 'We use digital mock-ballots on tablets, allowing voters to enter their choice anonymously without showing the interviewer.'
      }
    ],
    keywords: ['Exit Polls Rajasthan', 'Election Projections Jaipur']
  },
  {
    slug: 'gis-mapping',
    name: 'GIS Mapping & Spatial Analytics',
    category: 'data',
    icon: 'MapPin',
    shortDesc: 'Geographic plotting of voter booths, demographics, developmental metrics, and campaign coverage.',
    overview: 'Leverage spatial database intelligence to plan your operations. We map every polling booth, caste group, and developmental metric onto interactive maps. This allows campaign leaders to physically visualize strongholds, weak areas, and route maps.',
    benefits: [
      'Visual clarity on campaign coverage and gaps.',
      'Demographic density visualization for targeted village campaigns.',
      'Optimized distribution of campaign materials.'
    ],
    workflow: [
      'Gathering geographical booth boundaries and census coordinates.',
      'Overlaying past election data onto the spatial map.',
      'Visual mapping of local infrastructure (roads, water bodies, schools).',
      'Publishing interactive mapping dashboards for the field team.'
    ],
    deliverables: [
      'Constituency GIS Map Dashboard.',
      'Booth Heatmaps.',
      'Coverage Gap Analysis Map.'
    ],
    features: [
      'High-resolution multi-layer mapping.',
      'Mobile-friendly responsive maps for field workers.',
      'Custom data overlays for dynamic demographic analysis.'
    ],
    useCases: [
      'Mapping water shortage grievances in dry regions of Jaisalmer to frame speech issues.',
      'Targeting material distribution along highway villages in Tonk.'
    ],
    faqs: [
      {
        question: 'What mapping tools do you use?',
        answer: 'We utilize open-source GIS engines combined with custom map layers to provide mobile-responsive mapping dashboards.'
      }
    ],
    keywords: ['GIS Mapping Rajasthan', 'Political Mapping Jaipur']
  },
  {
    slug: 'booth-management',
    name: 'Booth Management & Micro-Targeting',
    category: 'operations',
    icon: 'Home',
    shortDesc: 'Strengthening the structural unit of elections: complete mapping and mobilization of booth committees.',
    overview: 'Elections are won or lost at the polling booth. CampaignX Booth Management designs comprehensive structures to build, verify, and activate booth committees (Panna Pramukhs). We ensure that every voter on your list is contacted and brought to the booth.',
    benefits: [
      'Guaranteed voter turnout of your core supporters on polling day.',
      'Real-time tracking of booth committee activity and readiness.',
      'Instant identification of inactive booth committees before it is too late.'
    ],
    workflow: [
      'Booth-wise voter list analysis and categorization.',
      'Recruitment and validation of booth captains and Panna Pramukhs.',
      'Training sessions on voter mobilization and legal compliance.',
      'Mock mobilization drills prior to polling day.'
    ],
    deliverables: [
      'Verified Booth Committee Registry.',
      'Panna Pramukh Mobile App Access.',
      'Booth Mobilization Strategy Playbook.'
    ],
    features: [
      'Panna-level mobile tracking software.',
      'Automated check-ins and task lists for booth workers.',
      'Real-time communication channels between booth captains and central war room.'
    ],
    useCases: [
      'Organizing a network of 250 booth committees in Sikar.',
      'Activating Panna Pramukhs in high-density urban areas of Jaipur.'
    ],
    faqs: [
      {
        question: 'What is a Panna Pramukh strategy?',
        answer: 'It assigns a single page (Panna) of the voter list containing roughly 30-40 voters to a dedicated local volunteer, ensuring highly personalized contact.'
      }
    ],
    keywords: ['Booth Management Rajasthan', 'Panna Pramukh Jaipur', 'Election Marketing Jaipur']
  },
  {
    slug: 'voter-crm',
    name: 'Voter CRM Software',
    category: 'technology',
    icon: 'Database',
    shortDesc: 'Enterprise-grade constituent relation database mapping voter records, caste, issues, and contact logs.',
    overview: 'Our custom Voter CRM software allows candidates to maintain structured databases of their entire constituency. Store voter details, caste groups, past contact history, issues reported, and support probability in a secure, searchable cloud database.',
    benefits: [
      'Centralized repository of all voter interactions.',
      'Instant filtering by caste, age, area, or grievance type.',
      'High-security encryption preventing data leakage to opponents.'
    ],
    workflow: [
      'Importing and cleansing official voter lists.',
      'Data tagging based on field survey and contact logs.',
      'Integrating communication channels (SMS, WhatsApp, Voice calls).',
      'Training the candidate\'s office on CRM search and reporting.'
    ],
    deliverables: [
      'Secure Voter CRM Database Instance.',
      'User Role Matrix & Training Documentation.',
      'Voter Outreach Integration Panel.'
    ],
    features: [
      'Enterprise-grade security with role-based access.',
      'Seamless import/export and duplicate detection.',
      'Integrations with SMS gateways and automated dialing systems.'
    ],
    useCases: [
      'Setting up a secure database of 2.5 lakh voters in Bhilwara assembly segment.',
      'Segmenting beneficiaries of government schemes for targeted outreach in Alwar.'
    ],
    faqs: [
      {
        question: 'Is the voter CRM data secure?',
        answer: 'Yes, we implement bank-grade encryption, double-factor authentication, and strict user role access to prevent any data exposure.'
      }
    ],
    keywords: ['Election Software Rajasthan', 'Voter CRM Jaipur', 'Political Software Rajasthan']
  },
  {
    slug: 'volunteer-management',
    name: 'Volunteer Management System',
    category: 'technology',
    icon: 'Users',
    shortDesc: 'Recruiting, organizing, task-assignment, and reward systems for campaign volunteer groups.',
    overview: 'Mobilize, coordinate, and track thousands of active supporters using our digital volunteer framework. Assign tasks, track leaflet distribution, monitor door-to-door progress, and keep motivation high through gamified leaderboards.',
    benefits: [
      'Scalable volunteer operations without administrative chaos.',
      'Clear task metrics for every volunteer on the ground.',
      'Improved volunteer retention through recognition and clear goals.'
    ],
    workflow: [
      'Digital volunteer recruitment landing page launch.',
      'Verification and geographic clustering of registered volunteers.',
      'Task distribution (digital sharing, wall writing, door-to-door).',
      'Feedback logging and incentive distribution.'
    ],
    deliverables: [
      'Volunteer Mobile App Access.',
      'Task Monitoring Console.',
      'Volunteer Leaderboard Portal.'
    ],
    features: [
      'Location-based task dispatch.',
      'Built-in training manuals and media assets for sharing.',
      'Real-time activity logs and chat groups.'
    ],
    useCases: [
      'Managing a 1000-strong youth volunteer force across Kota.',
      'Assigning door-to-door tasks to neighborhood volunteers in Udaipur.'
    ],
    faqs: [
      {
        question: 'How do volunteers receive tasks?',
        answer: 'They receive automated tasks via our lightweight mobile app or directly through coordinated WhatsApp workflow groups.'
      }
    ],
    keywords: ['Volunteer Management Rajasthan', 'Political Volunteers Jaipur']
  },
  {
    slug: 'door-to-door-tracking',
    name: 'Door-to-Door Campaign Tracking',
    category: 'operations',
    icon: 'Footprints',
    shortDesc: 'GPS-tracked mobile application auditing physical voter visits, pamphlets, and stickers.',
    overview: 'Eliminate fake ground reports. CampaignX Door-to-Door Tracking uses geo-fenced mobile apps to track canvassers. See exactly which houses have been visited, what materials were handed over, and what issues the resident raised.',
    benefits: [
      '100% auditable door-to-door campaign progress.',
      'Immediate capture of local house-level issues.',
      'Optimized distribution of candidate brochures and manifesto cards.'
    ],
    workflow: [
      'Assigning specific street routes to canvassers via the app.',
      'Canvassers checking-in at GPS coordinates of target homes.',
      'Data entry of voter response, contact details, and issues.',
      'Daily supervisor audit of visited houses.'
    ],
    deliverables: [
      'Door-to-Door Progress Dashboard.',
      'GPS Canvassing Reports.',
      'Constituent Feedback Database.'
    ],
    features: [
      'Offline caching for remote rural zones.',
      'Auto-GPS tagging and timestamp logs.',
      'Grievance categorization tagging.'
    ],
    useCases: [
      'Auditing the coverage of 45,000 households in Sri Ganganagar.',
      'Executing targeted pamphlets delivery in residential areas of Jaipur.'
    ],
    faqs: [
      {
        question: 'Does the door-to-door app work offline?',
        answer: 'Yes, it caches data locally in areas with poor network coverage and uploads it automatically once a connection is established.'
      }
    ],
    keywords: ['Door-to-Door Tracking Rajasthan', 'Ground Campaign Tracking Jaipur']
  },
  {
    slug: 'digital-marketing',
    name: 'Political Digital Marketing',
    category: 'digital',
    icon: 'Globe',
    shortDesc: 'Comprehensive digital campaigns across social channels targeting custom demographics.',
    overview: 'CampaignX builds premium digital campaigns that dominate the online space. We leverage custom audiences, localized content formats, and data analytics to run conversion-focused campaigns that shift voter perspectives.',
    benefits: [
      'Unmatched reach directly to voters\' smartphone screens.',
      'Micro-targeted messages based on age, occupation, and interest.',
      'Measurable metrics on voter engagement and brand recall.'
    ],
    workflow: [
      'Digital presence audit and page setups.',
      'Custom audience creation from voter CRM data.',
      'Ad campaign structuring (awareness, engagement, turnout).',
      'Daily conversion and budget optimization.'
    ],
    deliverables: [
      'Digital Media Calendar.',
      'Target Audience Blueprints.',
      'Weekly Ad Performance Analytics.'
    ],
    features: [
      'Caste and region-specific target groupings.',
      'Dynamic creative optimization based on user reactions.',
      'Cross-platform coordination (Meta, Google, YouTube, WhatsApp).'
    ],
    useCases: [
      'Launching a youth-focused branding campaign in Jaipur city.',
      'Promoting agricultural scheme achievements to farmers in Hanumangarh.'
    ],
    faqs: [
      {
        question: 'How do you comply with Election Commission rules for digital ads?',
        answer: 'We ensure all digital creatives are pre-certified by MCMC (Media Certification and Monitoring Committee) and maintain clean transaction ledgers.'
      }
    ],
    keywords: ['Political Digital Marketing Rajasthan', 'Election Marketing Jaipur']
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    category: 'digital',
    icon: 'Instagram',
    shortDesc: 'Sleek visual campaigns targeting youth, women, and urban segments through precise micro-targeting.',
    overview: 'Run high-converting Facebook and Instagram ads using our advanced targeting methodologies. We segment voters by geography, interest, and demographic factors, serving tailored video reels, creatives, and carousels that drive engagement.',
    benefits: [
      'Massive reach across Rajasthan\'s massive active social userbase.',
      'Cost-effective lead generation for volunteers and supporters.',
      'Direct visual alignment with candidate branding.'
    ],
    workflow: [
      'Ad account verification and political disclaimer setup.',
      'Creative designing (video reels, image posters).',
      'Deploying custom geo-fenced target sets.',
      'Monitoring comment sentiment and adjusting strategy.'
    ],
    deliverables: [
      'Approved Meta Ad Account Config.',
      'Custom Ad Creative Library.',
      'Sentiment Analysis Reports.'
    ],
    features: [
      'Disclaimer setup and verification assistance.',
      'Comment moderation automation scripts.',
      'A/B split testing of ad copy.'
    ],
    useCases: [
      'Targeting first-time voters with educational reels in Kota.',
      'Promoting local developmental projects to housewives in Jodhpur.'
    ],
    faqs: [
      {
        question: 'What is a political disclaimer for Meta Ads?',
        answer: 'It is a mandatory tag displayed on political ads ("Paid for by...") to ensure transparency under Meta\'s civic advertising guidelines.'
      }
    ],
    keywords: ['Meta Ads political Rajasthan', 'Facebook Ads election Jaipur']
  },
  {
    slug: 'google-ads',
    name: 'Google Search & Display Ads',
    category: 'digital',
    icon: 'Chrome',
    shortDesc: 'Search dominance for candidate names, developmental keywords, and issue queries.',
    overview: 'Dominate Google Search. When voters search for your name, opposition controversies, or local constituency issues, ensure your platform, achievements, and content appear at the very top. We construct high-authority search and display ad networks.',
    benefits: [
      'Absolute control over search intent regarding the candidate.',
      'High-impact visual display ads across local Rajasthani news portals.',
      'Immediate capture of high-intent search traffic.'
    ],
    workflow: [
      'Keyword research on candidate name and local topics.',
      'Ad copy writing and landing page design.',
      'Setting up search networks and display banners.',
      'Negative keyword list updates to prevent waste.'
    ],
    deliverables: [
      'Google Keyword Blueprint.',
      'High-Converting Landing Pages.',
      'Performance Dashboards.'
    ],
    features: [
      'Keyword match types optimization.',
      'Dynamic search ad setup.',
      'Location-based IP targeting.'
    ],
    useCases: [
      'Appearing on top for "MLA achievements Bhilwara" queries.',
      'Displaying banner ads on local news sites during election week in Ajmer.'
    ],
    faqs: [
      {
        question: 'Are Google Ads cost-effective for MLA elections?',
        answer: 'Yes, because you only pay when a voter actually clicks on your ad to read your manifesto or watch your speech.'
      }
    ],
    keywords: ['Google Ads election Rajasthan', 'Political Google Marketing Jaipur']
  },
  {
    slug: 'youtube-ads',
    name: 'YouTube Video Advertising',
    category: 'digital',
    icon: 'Youtube',
    shortDesc: 'Unskippable visual story-telling, speech highlights, and developmental documentaries.',
    overview: 'Deliver your messages directly into households through YouTube ads. We write, produce, and run highly engaging 15-second unskippable bumper ads, 30-second skippable stories, and long-format constituency documentaries to build candidate authority.',
    benefits: [
      'High impact equivalent to television commercials at a fraction of the cost.',
      'Targeting audiences based on their media consumption preferences.',
      'Deep narrative building through rich video storytelling.'
    ],
    workflow: [
      'Scripting and video storyboard creation.',
      'Video production and voice-over recording (Hindi/Rajasthani).',
      'Targeting configuration (geographic filters, age classes).',
      'Analyzing skip-rate and video watch-time metrics.'
    ],
    deliverables: [
      'Video Ad Creative Library.',
      'Audience Engagement Blueprint.',
      'Bumper Ad Assets.'
    ],
    features: [
      'Local language/accent adjustments.',
      'In-stream and discovery ad configuration.',
      'Remarketing setup to build repeat viewership.'
    ],
    useCases: [
      'Running a 6-second bumper ad campaign across Udaipur ahead of the candidate\'s rally.',
      'Distributing a 5-minute development documentary to households in Nagaur.'
    ],
    faqs: [
      {
        question: 'What video formats work best on YouTube for campaigns?',
        answer: 'Bumper ads (6 seconds) for high-frequency candidate recall, and skippable in-stream ads (30 seconds) for describing achievements.'
      }
    ],
    keywords: ['YouTube Ads election Rajasthan', 'Political Video Ads Jaipur']
  },
  {
    slug: 'whatsapp-marketing',
    name: 'WhatsApp Campaign Automation',
    category: 'digital',
    icon: 'MessageSquare',
    shortDesc: 'Secure Broadcast messaging, chatbot query handling, and volunteer community management.',
    overview: 'Dominate India\'s most critical communication channel. CampaignX designs compliant, high-scale WhatsApp broadcast matrices and automated chat channels. Share video links, PDF manifestos, and gather feedback instantly from lakhs of voters.',
    benefits: [
      'Open rates exceeding 95% compared to email or standard print.',
      'Personalized outreach directly in the voter\'s private chat workspace.',
      'Automated responder systems answering voter queries 24/7.'
    ],
    workflow: [
      'Official WhatsApp Business API setup and green tick verification.',
      'Audience list mapping and template copywriting.',
      'Setting up automated interactive chat navigation scripts.',
      'Monitored message broadcasting.'
    ],
    deliverables: [
      'Verified WhatsApp Business API Node.',
      'Custom Chatbot Workflow.',
      'Interactive Message Template Library.'
    ],
    features: [
      'Bulk template scheduling.',
      'Multi-language template support.',
      'Interactive buttons driving traffic to candidate web pages.'
    ],
    useCases: [
      'Distributing digital voter slips containing booth locations in Sikar.',
      'Broadcasting candidate speech clips to 50,000 volunteers in Jaipur.'
    ],
    faqs: [
      {
        question: 'How do you prevent WhatsApp accounts from getting blocked?',
        answer: 'We use official WhatsApp Cloud APIs, register pre-approved templates, and enforce opt-out routes to ensure clean compliance.'
      }
    ],
    keywords: ['WhatsApp Marketing election Rajasthan', 'WhatsApp Campaign Jaipur']
  },
  {
    slug: 'bulk-sms',
    name: 'Bulk SMS Solutions',
    category: 'digital',
    icon: 'Smartphone',
    shortDesc: 'High-delivery transactional and promotional SMS routing mapped to voter DLT registrations.',
    overview: 'Ensure your message reaches even basic phone users. Our high-delivery DLT-compliant SMS solutions broadcast candidate greetings, meeting notices, and crucial voting day reminders across the constituency instantly.',
    benefits: [
      'Reach 100% of the electorate, including offline and feature phone users.',
      'Instant delivery for critical schedule changes or announcements.',
      'Low cost per contact.'
    ],
    workflow: [
      'DLT registration and template pre-approvals.',
      'Constituency database cleansing and sorting.',
      'Drafting regional content alerts.',
      'Broadcasting and tracking delivery logs.'
    ],
    deliverables: [
      'Approved DLT Entity Registration.',
      'SMS Delivery Reports.',
      'Custom Sender ID Config.'
    ],
    features: [
      'Fallback routing to guarantee 99% delivery.',
      'Dynamic voter name merge tags.',
      'Scheduled sending options.'
    ],
    useCases: [
      'Sending candidate festival wishes to 2 lakh voters in Jhalawar.',
      'Broadcasting emergency rally location updates in Baran.'
    ],
    faqs: [
      {
        question: 'What is DLT registration?',
        answer: 'DLT (Distributed Ledger Technology) is a mandatory registration system in India designed to control spam messages, which we fully configure for candidates.'
      }
    ],
    keywords: ['Bulk SMS election Rajasthan', 'Political SMS Jaipur']
  },
  {
    slug: 'ai-calling',
    name: 'AI-Powered Interactive Calling',
    category: 'technology',
    icon: 'Cpu',
    shortDesc: 'Hyper-personalized automated voice calls interacting dynamically with voter feedback.',
    overview: 'Revolutionize voter contact with AI. Our systems place automated calls that speak directly to the voter, using natural dialogue and voice cloning of the candidate. Gather voter intentions and feedback dynamically without manual agents.',
    benefits: [
      'Place 1 lakh personalized calls within an hour.',
      'Voter reactions are automatically logged in the CRM.',
      'High-impact candidate voice connection at scale.'
    ],
    workflow: [
      'Voice-cloning candidate authorization and recording.',
      'Dialer routing tree configuration based on responses.',
      'Executing localized calling schedules.',
      'Sentiment tagging from voter voice/press-button feedback.'
    ],
    deliverables: [
      'Cloned Candidate Voice Engine.',
      'Calling Interactive Response Tree.',
      'Detailed Analytics Logs.'
    ],
    features: [
      'Dynamic voice-cloning technology.',
      'Instant sentiment mapping.',
      'Localized language options (Marwari, Mewari, Haroti).'
    ],
    useCases: [
      'Calling 80,000 households in Udaipur to gather local development grievances.',
      'Broadcasting candidate-voice personal appeals on election eve in Jaipur.'
    ],
    faqs: [
      {
        question: 'Is AI calling legal?',
        answer: 'Yes, provided calls comply with TRAI regulations and are sent during approved hours (9 AM - 9 PM) with proper candidate disclosure.'
      }
    ],
    keywords: ['AI Calling Rajasthan', 'Election AI Calling Jaipur']
  },
  {
    slug: 'voice-calls',
    name: 'Obd Voice Calls & Interactive IVR',
    category: 'digital',
    icon: 'PhoneCall',
    shortDesc: 'Automated outbound dials delivering candidate voice clips and collecting feedback via keypad inputs.',
    overview: 'Outbound Dialing (OBD) delivers pre-recorded speeches and greetings directly to voters. With interactive IVR (Interactive Voice Response), voters can press numbers on their keypad to state their issues or volunteer availability.',
    benefits: [
      'Simple, robust technology that works on every mobile phone.',
      'Higher answer rates than promotional text messages.',
      'Direct collection of voter survey data.'
    ],
    workflow: [
      'Recording audio clips in studio quality.',
      'Configuring IVR menu options (e.g., Press 1 to support, Press 2 for grievance).',
      'Executing outbound dialing across targeted booths.',
      'Synthesizing IVR feedback graphs.'
    ],
    deliverables: [
      'Studio-Recorded Audio Assets.',
      'IVR Response Reports.',
      'Voter Call Status Logs.'
    ],
    features: [
      'Automatic redialing for unanswered calls.',
      'Real-time response capture.',
      'High-concurrency dialer capacity (50,000 simultaneous channels).'
    ],
    useCases: [
      'Distributing pre-recorded campaign song clip in Churu.',
      'Polling local issues (water vs roads) in Rajsamand via IVR.'
    ],
    faqs: [
      {
        question: 'What is the answer rate for outbound voice calls?',
        answer: 'The average answer rate ranges from 45% to 65%, depending on the caller ID designation and timing.'
      }
    ],
    keywords: ['Voice Calls election Rajasthan', 'IVR political campaigns Jaipur']
  },
  {
    slug: 'qr-campaigns',
    name: 'Interactive QR Campaigns',
    category: 'digital',
    icon: 'QrCode',
    shortDesc: 'Smart QR codes deployed on flyers, banners, and vehicles linking to manifestos and voter cards.',
    overview: 'Bridge the gap between print and digital. We place trackable QR codes on all candidate banners, posters, and visiting cards. Scanning these codes links voters directly to custom manifesto videos, volunteer forms, or their dynamic voter slip.',
    benefits: [
      'Convert traditional print readers into digital leads.',
      'Measure the ROI and engagement of physical banners.',
      'Provide instant, paperless access to manifesto documents.'
    ],
    workflow: [
      'Generating custom trackable QR nodes.',
      'Integrating QRs into graphic layouts (pamphlets, walls, vehicles).',
      'Configuring dynamic destination pages (manifestos, digital forms).',
      'Tracking scanning metrics by booth location.'
    ],
    deliverables: [
      'Dynamic QR Code Assets.',
      'Optimized Mobile Landing Pages.',
      'Scan Analytics Dashboard.'
    ],
    features: [
      'Dynamic destination updates (change link without changing printed QR).',
      'Booth-wise print tracking.',
      'Interactive WhatsApp chat triggers on scan.'
    ],
    useCases: [
      'Placing QRs on candidate pamphlets in Sikar linking to a local survey.',
      'Vehicle banners in Alwar containing QRs for quick volunteer registration.'
    ],
    faqs: [
      {
        question: 'Can we change the QR destination page later?',
        answer: 'Yes! Our dynamic QR codes allow you to redirect users to a new video or speech at any time, even after printing.'
      }
    ],
    keywords: ['QR Campaigns election Rajasthan', 'Smart Political QR Jaipur']
  },
  {
    slug: 'candidate-websites',
    name: 'Premium Candidate Websites',
    category: 'technology',
    icon: 'Monitor',
    shortDesc: 'Elite candidate portfolios, digital manifestos, and lead capturing hubs designed with Next.js.',
    overview: 'Your digital headquarters. We design high-performance, responsive candidate websites featuring clean typography, mobile-first design, biography sections, constituency updates, developmental reports, and newsletter signups.',
    benefits: [
      'Professional digital presence that establishes immediate credibility.',
      'Centralized hub for all official updates, manifestos, and press releases.',
      'Permanent asset for public relations and constituent contact.'
    ],
    workflow: [
      'UX design mapping out candidate bio, work, and plans.',
      'Development using Next.js for extreme speed and Google SEO.',
      'Content editing (adding statements, dynamic gallery, media clips).',
      'Launch on global CDN with SSL protection.'
    ],
    deliverables: [
      'Next.js Web Platform.',
      'Content Management System (CMS) Access.',
      'SSL Certificate & Cloudflare Config.'
    ],
    features: [
      'Blazing-fast load speed (under 1 second).',
      'Built-in volunteer and newsletter forms.',
      'Dynamic blog/news section for team updates.'
    ],
    useCases: [
      'Deploying a premium bilingual website for an MLA candidate in Jaipur.',
      'Creating an interactive work portfolio for a Lok Sabha representative.'
    ],
    faqs: [
      {
        question: 'Why build a candidate website with Next.js?',
        answer: 'Next.js provides server-side rendering, ensuring the candidate\'s achievements load instantly and rank highly on search engines.'
      }
    ],
    keywords: ['Candidate Websites Jaipur', 'Political Website Design Rajasthan']
  },
  {
    slug: 'election-apps',
    name: 'Constituency & Election Mobile Apps',
    category: 'technology',
    icon: 'Smartphone',
    shortDesc: 'Custom Android and iOS applications connecting the candidate directly with constituents and volunteers.',
    overview: 'Put your campaign inside the voter\'s pocket. We develop custom mobile apps featuring local news feeds, development requests, grievance tracking, volunteer dashboards, and direct notifications from the MLA candidate.',
    benefits: [
      'Direct, un-filtered communication channel avoiding social algorithms.',
      'High voter engagement through push notifications.',
      'Structured grievance collection directly from citizens.'
    ],
    workflow: [
      'Feature wireframing and user journey mapping.',
      'Native Android/iOS app development.',
      'Integration of voter verification APIs and databases.',
      'Publication on Google Play and Apple App Store.'
    ],
    deliverables: [
      'Android App package (APK).',
      'iOS App Store build.',
      'Admin Monitoring Portal.'
    ],
    features: [
      'Push notification console.',
      'Grievance ticketing system.',
      'Volunteer tasks integration.'
    ],
    useCases: [
      'Launching a "My Constituency" app for citizens of Udaipur to report water leaks.',
      'Configuring volunteer tasks tracking app in Jaipur.'
    ],
    faqs: [
      {
        question: 'How long does it take to deploy a custom candidate app?',
        answer: 'We deploy fully tested constituency apps on the Play Store within 3 to 4 weeks.'
      }
    ],
    keywords: ['Election Apps Rajasthan', 'Political Mobile App Jaipur']
  },
  {
    slug: 'analytics-dashboard',
    name: 'Real-Time Analytics Dashboard',
    category: 'technology',
    icon: 'Activity',
    shortDesc: 'Consolidated dashboards visualization for campaigns: tracking surveys, ground campaigns, and digital ads.',
    overview: 'Our real-time analytics dashboard aggregates all your campaign feeds into a single control panel. Monitor survey progress, volunteer checks, Meta ad spending, OBD calls, and ward-wise voter support levels dynamically.',
    benefits: [
      'One single screen displaying campaign health.',
      'Data-backed decision making replacing gut feelings.',
      'Immediate alert systems for underperforming sectors.'
    ],
    workflow: [
      'Integrating API nodes from CRM, ads, and ground apps.',
      'Designing visual charts (pie, bar, geographic plots).',
      'Configuring user permissions for campaign managers.',
      'Deploying secure dashboard web instances.'
    ],
    deliverables: [
      'Secure Dashboard Portal Access.',
      'Custom Data Visualization Layouts.',
      'Weekly Automated Email Digests.'
    ],
    features: [
      'Real-time data synchronization.',
      'Interactive filters (ward-wise, booth-wise).',
      'Drill-down views to individual Panna pramukh records.'
    ],
    useCases: [
      'Providing the central party war room in Jaipur with a statewide dashboard.',
      'Monitoring assembly campaign metrics in Bhilwara.'
    ],
    faqs: [
      {
        question: 'Can the dashboard handle data from multiple agencies?',
        answer: 'Yes, our open API architecture allows us to import and clean data streams from external vendors easily.'
      }
    ],
    keywords: ['Analytics Dashboard Rajasthan', 'Campaign Analytics Jaipur']
  },
  {
    slug: 'call-center',
    name: 'Political Call Center Setup',
    category: 'operations',
    icon: 'Headphones',
    shortDesc: 'Dedicated outbound/inbound call centers conducting voter verification, invitation campaigns, and grievances logging.',
    overview: 'Set up an outbound calling engine. We establish professional political call centers staffed by trained callers who contact voters to verify database details, invite them to local rallies, log grievances, and conduct soft-support surveys.',
    benefits: [
      'Personal touchpoint showing candidate concern for voter issues.',
      'High-quality constituent database validation.',
      'Rapid feedback loop on local constituency problems.'
    ],
    workflow: [
      'Call center station setup and dialing line configurations.',
      'Recruitment, onboarding, and training of callers.',
      'Deploying target calling sheets via cloud software.',
      'Auditing caller transcripts and logging responses.'
    ],
    deliverables: [
      'Call Center Operation Infrastructure.',
      'Caller Scripts and Training Playbooks.',
      'Logged Voter Feedback Database.'
    ],
    features: [
      'Automated predictive dialers.',
      'Audio recording for all sessions.',
      'Direct integrations with central Voter CRM.'
    ],
    useCases: [
      'Deploying a 50-seater calling floor in Jaipur for regional outreach.',
      'Conducting invitation campaigns for a massive rally in Ajmer.'
    ],
    faqs: [
      {
        question: 'Do you provide call center staff?',
        answer: 'Yes, we recruit, train, and manage calling staff fluent in the local Rajasthani dialects.'
      }
    ],
    keywords: ['Call Center election Rajasthan', 'Political Call Center Jaipur']
  },
  {
    slug: 'creative-content',
    name: 'Creative Content & Design Studio',
    category: 'digital',
    icon: 'PenTool',
    shortDesc: 'Premium graphic design, slogan development, branding kits, and campaign identity kits.',
    overview: 'Design is the first impression. Our creative studio develops premium, modern visual content including brand style guides, campaign slogans, typography parameters, background banners, and dynamic digital assets that stand out from cluttered formats.',
    benefits: [
      'Visually stunning candidate presentation establishing modern leadership.',
      'Cohesive candidate branding across print, digital, and outdoor media.',
      'High emotional recall of campaign slogans and color palettes.'
    ],
    workflow: [
      'Candidate brand workshop and style definition.',
      'Drafting campaign taglines and key color systems.',
      'Creating template kits (social media headers, posters, brochures).',
      'Publishing a unified style guide.'
    ],
    deliverables: [
      'Candidate Branding Kit.',
      'Slogan & Slogan Strategy Dossier.',
      'Social Media Template Library.'
    ],
    features: [
      'High-end typography select.',
      'Custom vector art designs.',
      'Print-ready vector assets (PDF, EPS, SVG).'
    ],
    useCases: [
      'Developing a modern visual identity for a young candidate in Jaipur.',
      'Redesigning campaign assets for an established leader in Jodhpur.'
    ],
    faqs: [
      {
        question: 'What is included in the candidate branding kit?',
        answer: 'It includes custom logo files, typography recommendations, color palettes, templates for Facebook/Instagram posts, and stationery designs.'
      }
    ],
    keywords: ['Creative Content election Rajasthan', 'Political Design Studio Jaipur']
  },
  {
    slug: 'posters',
    name: 'Political Posters & Banner Design',
    category: 'digital',
    icon: 'Image',
    shortDesc: 'Premium print-ready billboards, flyers, booth pamphlets, and wall branding templates.',
    overview: 'High-impact physical media design. We create print-ready graphics for hoarding banners, street pamphlets, booth-level flyers, and wall designs that ensure candidate visibility in physical communities.',
    benefits: [
      'Visually balanced layouts that communicate key issues clearly.',
      'Optimized color schemes that look vibrant in outdoor sunlight.',
      'Consistent candidate face and symbol presentation.'
    ],
    workflow: [
      'Content layout and hierarchy planning.',
      'Graphic design detailing candidate, symbol, and slogan.',
      'Color calibration for high-format printers.',
      'Delivering verified, print-ready files.'
    ],
    deliverables: [
      'Print-Ready Billboard Designs.',
      'Booth Pamphlet Templates.',
      'Constituency Flyer Assets.'
    ],
    features: [
      'High-resolution vector assets.',
      'Standard hoarding sizes configuration.',
      'Optimized layout templates for high-speed printing.'
    ],
    useCases: [
      'Designing constituency banners for highway checkpoints in Udaipur.',
      'Creating booth-level pocket pamphlets for volunteers in Bhilwara.'
    ],
    faqs: [
      {
        question: 'Do you handle physical printing?',
        answer: 'We specialize in design and prepress files, but we can coordinate directly with your local printers to ensure color accuracy.'
      }
    ],
    keywords: ['Posters design election Rajasthan', 'Political Poster Jaipur']
  },
  {
    slug: 'reels',
    name: 'Instagram Reels & Video Production',
    category: 'digital',
    icon: 'Video',
    shortDesc: 'Premium short-form video content, speech reels, and behind-the-scenes content.',
    overview: 'Master social video algorithms. We write script concepts, film, and edit high-impact 30-second vertical reels, YouTube Shorts, and WhatsApp video updates. We highlight critical candidate statements, volunteer action, and crowds.',
    benefits: [
      'High organic reach across young demographics.',
      'Visually polished content that positions the candidate as energetic.',
      'Highly shareable assets across volunteer WhatsApp channels.'
    ],
    workflow: [
      'Tracking trending audio tracks and formatting hooks.',
      'On-site video recording of events and speeches.',
      'Fast-paced editing incorporating transitions, subtitles, and music.',
      'Optimization for social algorithm uploads.'
    ],
    deliverables: [
      'Weekly Instagram Reels Package.',
      'Edited Speech Highlights.',
      'Custom Thumbnail Graphics.'
    ],
    features: [
      'High-speed, rhythm-based editing styles.',
      'Embedded animated captions.',
      'Format options for all platforms.'
    ],
    useCases: [
      'Creating a viral reel capturing the energy of a rally in Kota.',
      'Filming a candid Q&A session with a candidate in Jaipur.'
    ],
    faqs: [
      {
        question: 'What makes a political reel go viral?',
        answer: 'A strong hook in the first 3 seconds, high-speed subtitles, relevant background scores, and authentic candidate emotion.'
      }
    ],
    keywords: ['Instagram Reels election Rajasthan', 'Political Video Production Jaipur']
  },
  {
    slug: 'ai-videos',
    name: 'AI-Generated Videos',
    category: 'digital',
    icon: 'Sparkles',
    shortDesc: 'Dynamic AI video messaging, digital avatars, and programmatic local-language video edits.',
    overview: 'Deploy programmatic video campaigns using advanced AI tools. Generate customized video messages where the candidate greets individual booth leaders by name or addresses specific local issues in regional dialects without filming delays.',
    benefits: [
      'Unprecedented personalization at scale.',
      'Rapid video generation response times.',
      'Reduced video production costs for repetitive announcements.'
    ],
    workflow: [
      'High-definition candidate physical scan and recording.',
      'AI voice model configuration (Hindi/Marwari/Mewari).',
      'Programmatic script generation based on booth coordinates.',
      'Video rendering and mass distribution.'
    ],
    deliverables: [
      'Candidate AI Digital Twin.',
      'Automated Video Generation Interface.',
      'Programmatic Video Library.'
    ],
    features: [
      'Hyper-realistic lip synchronization.',
      'Multi-dialect translation outputs.',
      'Bulk rendering integrations.'
    ],
    useCases: [
      'Generating 500 custom videos addressing individual village issues in Sikar.',
      'Sending personalized video greetings to all booth presidents in Rajasthan.'
    ],
    faqs: [
      {
        question: 'Are AI videos ethical?',
        answer: 'We require absolute candidate consent, watermark all generated assets as AI-created, and strictly forbid deepfake manipulations of opponents.'
      }
    ],
    keywords: ['AI Videos election Rajasthan', 'Political AI Video Jaipur']
  },
  {
    slug: 'manifesto-design',
    name: 'Manifesto Design',
    category: 'strategy',
    icon: 'FileText',
    shortDesc: 'Scientific research of local problems to formulate attractive constituency manifestos.',
    overview: 'A manifesto should be more than empty promises. CampaignX research teams identify core regional issues—such as agricultural water, electricity, jobs, or road networks—to write, format, and publish realistic, high-impact constituency manifestos.',
    benefits: [
      'A constructive development plan that beats generic empty slogans.',
      'Demonstrated policy expertise that builds credibility among swing voters.',
      'Clear, readable policy brochures that voters remember.'
    ],
    workflow: [
      'Secondary research on local budgetary allocations and needs.',
      'Focus group studies to test policy popularity.',
      'Copywriting of policy proposals in accessible languages.',
      'Graphic design and print layout development.'
    ],
    deliverables: [
      'Comprehensive Constituency Manifesto.',
      'Summary Brochure (Pamphlet format).',
      'Interactive Dynamic Web Manifesto.'
    ],
    features: [
      'Data-supported policy development.',
      'Targeted manifestos for specific demographic groups.',
      'Visual layout maps showing planned infrastructure projects.'
    ],
    useCases: [
      'Drafting a localized farming manifesto for Sri Ganganagar.',
      'Structuring a youth employment outline for a candidate in Jaipur.'
    ],
    faqs: [
      {
        question: 'How do you test if a policy proposal will win votes?',
        answer: 'We utilize localized focus groups and baseline survey data to measure which developmental issue holds the highest priority for voters.'
      }
    ],
    keywords: ['Manifesto Design Rajasthan', 'Political Manifesto Jaipur']
  },
  {
    slug: 'speech-writing',
    name: 'Speech Writing',
    category: 'strategy',
    icon: 'Mic',
    shortDesc: 'High-impact political oratory scripting, rally speeches, and press conference statements.',
    overview: 'Command the podium. Our experienced speechwriters draft speeches that capture candidate character while delivering key punches. We design scripts with emotional hooks, statistical arguments, and memorable slogans tailored for local crowds.',
    benefits: [
      'Confidently deliver powerful oration that inspires crowds.',
      'Clear message alignment across press conferences, rallies, and media.',
      'Sharp, quotable lines designed for television news clips.'
    ],
    workflow: [
      'Analyzing candidate style and regional speech cadence.',
      'Gathering data on local concerns, opponent errors, and achievements.',
      'Drafting speech structures (opening hooks, logical builds, call to action).',
      'Rehearsal briefings and adjustments.'
    ],
    deliverables: [
      'Rally Address Scripts.',
      'Press Statements & Q&A guides.',
      'Social Media Quote Blocks.'
    ],
    features: [
      'Dialect integration (Marwari, Mewari, Shekhawati).',
      'Timing and rhetorical structure guides.',
      'Opponent critique strategies.'
    ],
    useCases: [
      'Writing an address for a major central rally in Ajmer.',
      'Drafting press statement guidelines ahead of a critical news briefing in Jaipur.'
    ],
    faqs: [
      {
        question: 'Do you write speeches in regional dialects?',
        answer: 'Yes, we integrate local idioms, historical references, and regional dialect phrases to build immediate rapport with rural audiences.'
      }
    ],
    keywords: ['Speech Writing Rajasthan', 'Political Speech Writer Jaipur']
  },
  {
    slug: 'public-relations',
    name: 'Public Relations (PR)',
    category: 'strategy',
    icon: 'Radio',
    shortDesc: 'Strategic media relations, press release distribution, and candidate image optimization.',
    overview: 'Build candidate authority through proactive media placement. We manage candidate PR by distributing press releases, arranging interviews, placing articles on regional portals, and controlling negative news cycles.',
    benefits: [
      'Consistent positive candidate presence in mainstream media.',
      'Stronger relationships with regional journalists and editors.',
      'Professional management of unexpected political controversies.'
    ],
    workflow: [
      'Media audit and journalist contact alignment.',
      'Drafting and distributing weekly press releases.',
      'Scheduling media interactions and tv interviews.',
      'Monitoring print/digital mentions.'
    ],
    deliverables: [
      'Press Release Portfolio.',
      'Media Database Contacts.',
      'Weekly Media Coverage Dossiers.'
    ],
    features: [
      'Direct contact networks with leading Hindi/English dailies in Rajasthan.',
      'Crisis PR protocol systems.',
      'Op-ed placement networks.'
    ],
    useCases: [
      'Deploying a PR strategy for a state-level candidate launch in Jaipur.',
      'Managing a media response structure during a seat nomination challenge.'
    ],
    faqs: [
      {
        question: 'What is the role of print media PR in Rajasthan elections?',
        answer: 'Despite digital growth, newspapers like Rajasthan Patrika and Dainik Bhaskar remain highly authoritative in framing public perception.'
      }
    ],
    keywords: ['Political Public Relations Rajasthan', 'Political PR Jaipur']
  },
  {
    slug: 'media-management',
    name: 'Media Management',
    category: 'strategy',
    icon: 'Volume2',
    shortDesc: 'Managing candidate media briefings, journalist updates, and campaign press credentials.',
    overview: 'Professionalize your media interactions. We set up, staff, and run the candidate\'s press office. We manage media credentials, schedule daily press briefings, distribute statements, and verify that journalists receive verified information.',
    benefits: [
      'Smooth, error-free communication with media organizations.',
      'Consistent formatting of all outgoing campaign quotes.',
      'Protected candidate access preventing unplanned media ambushes.'
    ],
    workflow: [
      'Establishing physical/digital campaign press desks.',
      'Drafting standard procedures for outgoing campaign quotes.',
      'Scheduling regular press updates.',
      'Reviewing and logging daily media questions.'
    ],
    deliverables: [
      'Press Desk Standard Operating Guide.',
      'Daily Press briefing schedules.',
      'Media Contact Log Portal.'
    ],
    features: [
      'Dedicated media spokespersons.',
      'Official campaign press release distribution networks.',
      'Verification checkmarks setup for press offices.'
    ],
    useCases: [
      'Managing the press office for a high-profile MP campaign in Jodhpur.',
      'Establishing a regional press office in Udaipur.'
    ],
    faqs: [
      {
        question: 'How do you coordinate journalists during campaigns?',
        answer: 'We deploy a dedicated media liaison officer who maintains a WhatsApp broadcast group for immediate document delivery.'
      }
    ],
    keywords: ['Media Management election Rajasthan', 'Press Office political campaigns Jaipur']
  },
  {
    slug: 'branding',
    name: 'Branding & Positioning',
    category: 'strategy',
    icon: 'Award',
    shortDesc: 'Long-term narrative building to position candidates as authoritative, accessible community leaders.',
    overview: 'Establish your brand identity. CampaignX builds candidate positioning plans that highlight personal history, social contributions, and professional expertise. We ensure voters perceive you as the most qualified candidate for their growth.',
    benefits: [
      'Clear, positive image that stands out from typical political noise.',
      'Trust building among voters who do not support your party.',
      'Permanent personal brand value that lasts beyond the election.'
    ],
    workflow: [
      'Reviewing candidate history, work, and public profile.',
      'Formulating the core personal brand values.',
      'Translating values into uniform visual assets and slogans.',
      'Launching positioning campaigns across all media.'
    ],
    deliverables: [
      'Brand Identity Guide.',
      'Personal Brand Strategy Document.',
      'Digital Profile Asset Library.'
    ],
    features: [
      'Executive-level identity design.',
      'Biographic profile development.',
      'Targeted focus campaigns.'
    ],
    useCases: [
      'Positioning an academician as a highly competent politician in Jaipur.',
      'Branding a grassroots organizer as a champion of farmers in Bikaner.'
    ],
    faqs: [
      {
        question: 'How does candidate positioning differ from political marketing?',
        answer: 'Positioning establishes who the candidate is and what they represent, while marketing focuses on distributing campaign messages to secure votes.'
      }
    ],
    keywords: ['Candidate Branding Rajasthan', 'Political Branding Jaipur']
  },
  {
    slug: 'campaign-automation',
    name: 'Campaign Automation',
    category: 'technology',
    icon: 'Sliders',
    shortDesc: 'Automation engines for coordinate systems: SMS alerts, WhatsApp triggers, and volunteer tasks dispatch.',
    overview: 'Run efficient, low-overhead operations. We automate campaign checklists: auto-assign tasks to volunteers based on location, trigger OBD calls on voter birthdays, send SMS alerts when new events are planned, and compile data automatically.',
    benefits: [
      'Significantly reduced manual administrative hours.',
      'Eliminated errors in task assignments.',
      'High operational speed responding to campaign needs.'
    ],
    workflow: [
      'Mapping standard campaign processes (volunteer signs, ad spend).',
      'Configuring cloud integrations (Zapier, custom Webhooks).',
      'Setting up notification structures for field teams.',
      'System testing and optimization.'
    ],
    deliverables: [
      'Integrated Automation Infrastructure.',
      'Process Map Diagrams.',
      'Operational Metric Reports.'
    ],
    features: [
      'Event-triggered database updates.',
      'Automated location-based alerts.',
      'Dynamic schedule sync platforms.'
    ],
    useCases: [
      'Auto-dispatching brochures to volunteers when they register in Ajmer.',
      'Triggering congratulatory texts to local community leaders automatically.'
    ],
    faqs: [
      {
        question: 'What triggers are typically automated?',
        answer: 'We automate volunteer onboarding alerts, voter registration confirmations, event coordination logs, and campaign budget alarms.'
      }
    ],
    keywords: ['Campaign Automation Rajasthan', 'Political Tech Automation Jaipur']
  },
  {
    slug: 'data-analytics',
    name: 'Data Analytics',
    category: 'data',
    icon: 'TrendingUp',
    shortDesc: 'Advanced statistical analytics modeling constituency metrics to identify swing booths.',
    overview: 'Unlock hidden patterns. CampaignX Data Analytics crunches decades of booth-wise voting statistics alongside current surveys, census records, and developmental indexes. We provide clear data visualizations showing exactly where resources are required.',
    benefits: [
      'No money wasted on advertising to solid opponent bases.',
      'High-clarity identification of swing voting blocks.',
      'Accurate prediction of voter turnouts by area.'
    ],
    workflow: [
      'Cleaning and structuring historical booth files.',
      'Overlaying current census and demographic information.',
      'Applying predictive algorithm models.',
      'Generating dashboard layouts for campaign leadership.'
    ],
    deliverables: [
      'Constituency Analytics Dossier.',
      'Predictive Turnout Report.',
      'Swing Booth Target Matrix.'
    ],
    features: [
      'Advanced statistical models.',
      'Dynamic data visualizers.',
      'Data updates based on current campaign feedback.'
    ],
    useCases: [
      'Identifying swing booths in Jodhpur Rural to deploy targeted volunteers.',
      'Analyzing vote split dynamics in a triangular contest in Alwar.'
    ],
    faqs: [
      {
        question: 'What data sources do you analyze?',
        answer: 'We combine Election Commission voting data, census profiles, geographic records, local news reports, and candidate survey files.'
      }
    ],
    keywords: ['Data Analytics election Rajasthan', 'Political Data Jaipur']
  },
  {
    slug: 'polling-day-management',
    name: 'Polling Day Management',
    category: 'operations',
    icon: 'CheckSquare',
    shortDesc: 'End-to-end management of voter turnout, booth agents coordination, and hourly turnout tracking.',
    overview: 'The final, decisive step. We manage your polling day operations by setting up volunteer desks, tracking voter turnout percentages by the hour, coordinating with booth agents to confirm support percentages, and ensuring voters reach the booths.',
    benefits: [
      'Maximize voter turnout of your base during key hours.',
      'Instant resolution of voting issues or booth interruptions.',
      'Continuous, clean data on votes cast by constituency section.'
    ],
    workflow: [
      'Setting up candidate helpdesks outside polling boundaries.',
      'Equipping booth agents with digital check-in tools.',
      'Hourly tracking of voter turnout files.',
      'Mobilizing fallback volunteer teams to target low-turnout booths.'
    ],
    deliverables: [
      'Polling Day Operational Guide.',
      'Booth Agent Digital Tool Access.',
      'Incident Response System Console.'
    ],
    features: [
      'Hourly turnout charts.',
      'Incident reporting systems.',
      'Direct calling integration from agent software.'
    ],
    useCases: [
      'Deploying a 400-booth polling day operation in Udaipur.',
      'Coordinating incident responses in competitive sectors of Jaipur.'
    ],
    faqs: [
      {
        question: 'How do booth agents report turnout?',
        answer: 'They use our lightweight mobile app or interactive SMS protocols to submit turnout figures every 2 hours.'
      }
    ],
    keywords: ['Polling Day Management Rajasthan', 'Voter Turnout Strategy Jaipur']
  },
  {
    slug: 'end-to-end-execution',
    name: 'End-to-End Election Execution',
    category: 'operations',
    icon: 'Star',
    shortDesc: 'Complete turnkey campaign package covering strategy, surveys, technology, content, and ground machinery.',
    overview: 'Our premier service. CampaignX manages the entire campaign from initial baseline survey to polling day. We assign senior strategists, install technology networks, deploy content teams, run digital ads, and manage ground units under a single, unified command.',
    benefits: [
      'Candidates focus entirely on public speaking and voter contact.',
      'Seamless execution with no vendor alignment issues.',
      'The highest standard of tech-driven political consulting in India.'
    ],
    workflow: [
      'Constituency acquisition and kickoff audits.',
      'Full deployment of surveys, CRM, and war room.',
      'Continuous design, digital marketing, and PR management.',
      'Polling day organization and post-election audits.'
    ],
    deliverables: [
      'Complete Campaign Command System.',
      'Turnkey Operation Deployment.',
      'Permanent Constituent Infrastructure.'
    ],
    features: [
      'Dedicated director assigned to the constituency.',
      'Unlimited access to all software features (CRM, App, AI dialer).',
      'All-inclusive content creation and distribution.'
    ],
    useCases: [
      'Managing a highly critical assembly campaign in Jaipur from day 1.',
      'Deploying a comprehensive election structure for a Lok Sabha candidate.'
    ],
    faqs: [
    ],
    keywords: ['Election Management Company Rajasthan', 'Political Consulting Jaipur', 'End-to-End Election Campaign']
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    category: 'digital',
    icon: 'Instagram',
    shortDesc: 'Complete candidate social media presence setup, daily post scheduling, reels, and stories.',
    overview: 'Establish a dominant daily presence across all key digital networks. CampaignX manages your social media channels end-to-end, writing posts, producing visual reels, designing banners, and maintaining a high volume of positive constituent interactions.',
    benefits: [
      'Consistent daily presence on Facebook, Instagram, YouTube, X, and WhatsApp.',
      'Professional profile and cover graphics aligned with your campaign theme.',
      'Active community moderation to counter negative comments instantly.'
    ],
    workflow: [
      'Social media profile audit and setup.',
      'Weekly content calendar blueprint mapping.',
      'Daily content creation (2-5 posts per day including reels and stories).',
      'Daily comment moderation and audience engagement logs.'
    ],
    deliverables: [
      'Verified Social Profiles setup.',
      'Daily Post Archive & Scheduling Log.',
      'Weekly Digital Reach Analytics Report.'
    ],
    features: [
      'Profiles cover and layout design.',
      'Custom reels and stories production.',
      'Regional festival and local issue post designs.'
    ],
    useCases: [
      'A candidate starting their digital campaign from scratch in Jaipur.',
      'An incumbent MLA looking to scale up daily reel volume in Kota.'
    ],
    faqs: [
      {
        question: 'How many posts do you publish daily?',
        answer: 'We schedule and publish between 2 to 5 high-quality posts every day, customized for Facebook, Instagram, and local WhatsApp groups.'
      }
    ],
    keywords: ['Social Media Management Rajasthan', 'Candidate Social Media Jaipur', 'Political PR Agency Jodhpur']
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    category: 'digital',
    icon: 'Share2',
    shortDesc: 'Targeted paid ad campaigns, platforms strategy, and WhatsApp API marketing integration.',
    overview: 'Drive targeted voter acquisition and messaging through paid media. We design micro-targeted ad campaigns on Meta and Google, set up official WhatsApp API nodes for broadcast distribution, and coordinate volunteer outreach groups.',
    benefits: [
      'Broad reach directly targeting voter segments by age, location, and issues.',
      'Automated daily poster and video distribution to volunteers.',
      'Highly optimized ad spends generating maximum brand recall.'
    ],
    workflow: [
      'Demographic targeting planning.',
      'Paid ad copy design and campaign launching.',
      'WhatsApp API portal and automated broadcast setup.',
      'Daily conversions and budget tuning.'
    ],
    deliverables: [
      'Digital Strategy Blueprint.',
      'WhatsApp Broadcast Portal Access.',
      'Paid Ads Conversion Reports.'
    ],
    features: [
      'Platform-wise campaign planning.',
      'Booth-wise WhatsApp broadcasts.',
      'Paid Facebook/Google ads.'
    ],
    useCases: [
      'Running paid ad loops targeting undecided voters in Udaipur.',
      'Broadcasting daily manifestos to 5,000 volunteers in Ajmer.'
    ],
    faqs: [
      {
        question: 'What is WhatsApp API Marketing?',
        answer: 'We connect an official Meta business phone number to our broadcast tool, allowing you to send updates to thousands of voters without risk of number bans.'
      }
    ],
    keywords: ['Social Media Marketing Jaipur', 'WhatsApp Marketing Rajasthan', 'Political Advertising Ajmer']
  },
  {
    slug: 'branding-independent',
    name: 'Branding (for Independent Candidates)',
    category: 'digital',
    icon: 'Award',
    shortDesc: 'Logo design, tagline/slogan, personal brand identity, and color themes tailored for independent campaigns.',
    overview: 'Establish a powerful, independent visual identity that rivals major party campaigns. We design custom candidate logos, memorable local slogans, and color palettes that build instant association with your election symbol.',
    benefits: [
      'Strong, unique personal brand independent of traditional party logos.',
      'High symbol-recall among rural and urban voters.',
      'Consistent and premium visual presence across banners, flyers, and digital media.'
    ],
    workflow: [
      'Candidate brand profile audit.',
      'Election symbol visualization and logo design.',
      'Tagline and slogan copywriting.',
      'Campaign color palette and canvas templates creation.'
    ],
    deliverables: [
      'Candidate Logo Kit.',
      'Campaign Taglines & Slogan Deck.',
      'Social Media Graphic Templates.'
    ],
    features: [
      'Symbol-association designs.',
      'Personal branding color guidelines.',
      'Slogan and rally chant ideation.'
    ],
    useCases: [
      'An independent candidate building an identity around a free symbol in Barmer.',
      'Designing flyers and vehicle banners for a candidate in Sikar.'
    ],
    faqs: [
      {
        question: 'Why do independent candidates need custom branding?',
        answer: 'Independent candidates lack default party symbols. Professional branding builds clear, visual connections between your face, name, and allocated symbol.'
      }
    ],
    keywords: ['Independent Candidate Branding Rajasthan', 'Candidate Logo Design Jaipur', 'Election Symbol Marketing']
  },
  {
    slug: 'call-center-services',
    name: 'Call Center Services',
    category: 'operations',
    icon: 'PhoneCall',
    shortDesc: 'Direct caller networks for voter feedback surveys, volunteer calls, and polling day GOTV.',
    overview: 'Deploy a dedicated human call center to connect directly with your constituency. Our operators run surveys, verify volunteer commitments, register grievances, and coordinate booth committees over phone calls.',
    benefits: [
      'Highly personalized, two-way verbal communication with voters.',
      'Direct audit of ground volunteer and Panna Pramukh activity.',
      'High-impact Get-Out-The-Vote (GOTV) outreach on election day.'
    ],
    workflow: [
      'Script writing matching local Rajasthani dialects.',
      'Operator onboarding and database sync.',
      'Outbound calling campaign execution.',
      'Daily feedback categorization and reporting.'
    ],
    deliverables: [
      'Call Log Database.',
      'Voter Grievance Categorization Sheets.',
      'Volunteer Call-back Report.'
    ],
    features: [
      'Voter feedback calling.',
      'Panna Pramukh coordination calls.',
      'IVR and bulk voice messaging.'
    ],
    useCases: [
      'Verifying booth committee active lists in Kota before election week.',
      'Calling 20,000 households in Bikaner to log developmental grievances.'
    ],
    faqs: [
      {
        question: 'How do you train call center operators?',
        answer: 'Our operators are trained in regional dialects (Marwari, Mewari, etc.) and follow structured, candidate-specific scripts.'
      }
    ],
    keywords: ['Call Center Services Jaipur', 'Political Tele-calling Rajasthan', 'Voter Survey Call Center']
  },
  {
    slug: 'modern-election-technology',
    name: 'Modern Election Technology',
    category: 'technology',
    icon: 'Cpu',
    shortDesc: 'Unified election tech stack integrating Voter CRM, booth apps, analytics dashboards, and websites.',
    overview: 'Deploy the complete CampaignX software stack for your election campaign. We integrate your secure Voter CRM, Panna Pramukh tracking applications, GIS booth mapping dashboards, and public websites under a unified data node.',
    benefits: [
      'All campaign data synced across ground apps, CRM, and central war room.',
      'Real-time visualization of voter support and swing margins.',
      'Zero risk of database leakages with encrypted access.'
    ],
    workflow: [
      'Voter list scrubbing and database setup.',
      'Custom app configuration and logins release.',
      'Analytics dashboard connection.',
      'Constant tech support during the campaign.'
    ],
    deliverables: [
      'Candidate Website & Voter CRM Setup.',
      'Ground App Logins.',
      'Central Analytics Dashboard License.'
    ],
    features: [
      'Voter CRM and Booth Management software.',
      'GIS Booth Mapping & App Trackers.',
      'Voter Feedback Platforms.'
    ],
    useCases: [
      'Syncing ground survey logs from 300 canvassers in Alwar.',
      'Monitoring real-time support charts for a candidate in Jaipur.'
    ],
    faqs: [
      {
        question: 'Does the software require internet connection on the ground?',
        answer: 'Our mobile apps include offline caching, enabling volunteers to register voter feedback in rural areas without active network.'
      }
    ],
    keywords: ['Election Software Rajasthan', 'Voter CRM Jaipur', 'Panna Pramukh App']
  },
  {
    slug: 'campaign-song',
    name: 'Campaign Song Production',
    category: 'other',
    icon: 'Music',
    shortDesc: 'Custom localized campaign anthems, slogans, and audio tracks to energize supporters.',
    overview: 'Music drives political movements. CampaignX writes, composes, and records high-impact, custom campaign songs, slogans, and audio tracks tailored to local cultural tastes and dialects of Rajasthan.',
    benefits: [
      'Memorable campaign audio that spreads rapidly on WhatsApp and rallies.',
      'Emotional alignment of voters with candidate messaging.',
      'Professional recording and composition matching industry standards.'
    ],
    workflow: [
      'Candidate theme and lyric outline formulation.',
      'Music composition and dialect tuning (e.g. Marwari, Mewari).',
      'Studio recording and mixing.',
      'Audio packaging for social broadcasts and sound vehicles.'
    ],
    deliverables: [
      'High-quality Master Audio Track (WAV/MP3).',
      'Rally Slogan Audio Hooks.',
      'Promo video background audio files.'
    ],
    features: [
      'Custom lyric writing.',
      'Professional singers and instrumentation.',
      'Dialect-based vocal composting.'
    ],
    useCases: [
      'Recording a Mewari campaign anthem for a candidate in Udaipur.',
      'Creating high-energy DJ slogans for sound trucks in Jaipur.'
    ],
    faqs: [
      {
        question: 'How long does song production take?',
        answer: 'Standard writing, composition, and recording process takes between 7 to 10 working days.'
      }
    ],
    keywords: ['Campaign Song Rajasthan', 'Political Music Jaipur', 'Election Anthem Composition']
  },
  {
    slug: 'nukad-natak',
    name: 'Nukkad Natak (Street Plays)',
    category: 'other',
    icon: 'Smile',
    shortDesc: 'On-ground street plays, drama, and interactive folk performances in local rural zones.',
    overview: 'Connect directly with rural constituent hearts through traditional street theater. We script, rehearse, and deploy professional Nukkad Natak teams to perform in local markets, town squares, and village chaupals, simplifying candidate messages.',
    benefits: [
      'High engagement rates in rural areas with low digital presence.',
      'Simplified messaging of manifestos and schemes through humor and drama.',
      'Strong physical grassroots connection building community trust.'
    ],
    workflow: [
      'Grievance research and script development.',
      'Theater troupe coordination and local dialect rehearsal.',
      'Schedule mapping for village visits (chaupals).',
      'On-ground plays execution.'
    ],
    deliverables: [
      'Nukkad Natak Script Book.',
      'Troupe Tour Schedule.',
      'Ground Performance Photos & Video Clips.'
    ],
    features: [
      'Local dialect street plays.',
      'Interactive voter engagement sessions.',
      'Custom candidate banners integrations.'
    ],
    useCases: [
      'Deploying street plays mapping agricultural issues in rural Hanumangarh.',
      'Performing street theater regarding drinking water in dry sectors of Jaisalmer.'
    ],
    faqs: [
      {
        question: 'How long is a Nukkad Natak play?',
        answer: 'Each performance runs for 15 to 20 minutes, including an interactive candidate message delivery at the end.'
      }
    ],
    keywords: ['Nukkad Natak Rajasthan', 'Street Plays Jaipur', 'Folk Campaigning Udaipur']
  }
];
