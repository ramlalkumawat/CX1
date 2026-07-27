export interface DistrictDetail {
  slug: string;
  name: string;
  assemblySeats: number;
  totalBooths: number;
  demographicFocus: string;
  keyIssues: string[];
  localKeywords: string[];
  strategicApproach: string;
}

export const DISTRICTS: DistrictDetail[] = [
  {
    slug: 'jaipur',
    name: 'Jaipur',
    assemblySeats: 19,
    totalBooths: 4250,
    demographicFocus: 'High density urban-middle class, youth, business traders, and rural-agricultural pockets.',
    keyIssues: ['Urban traffic and Metro expansion', 'Drinking water supply (Bisalpur phase-II)', 'Traders safety and tax compliance ease', 'Youth employment and tech parks development'],
    localKeywords: ['Political Consulting Jaipur', 'Political Campaign Company Jaipur', 'Election Strategy Jaipur'],
    strategicApproach: 'Our Jaipur campaign blueprint focuses on digital narrative dominance, WhatsApp micro-broadcasts, and intensive door-to-door validation across high-rise residential societies and traditional trading markets. We integrate CRM analytics with volunteer nodes to manage high voter densities.'
  },
  {
    slug: 'jodhpur',
    name: 'Jodhpur',
    assemblySeats: 10,
    totalBooths: 2200,
    demographicFocus: 'Strong heritage urban communities, handloom workers, and expansive rural segments.',
    keyIssues: ['Industrial pollution in local rivers', 'Water scarcity in rural blocks', 'Tourism promotion and heritage conservation', 'Rural electricity grid supply'],
    localKeywords: ['Election Consultant Jodhpur', 'Political Marketing Jodhpur', 'Election CRM Jodhpur'],
    strategicApproach: 'In Jodhpur, we deploy a hybrid strategy combining traditional community-head (caste clusters) alignment with GPS-tracked volunteer canvassing. Our OBD calling system reaches out in regional Mewari accents to establish trust.'
  },
  {
    slug: 'udaipur',
    name: 'Udaipur',
    assemblySeats: 8,
    totalBooths: 1850,
    demographicFocus: 'Tribal communities, tourism service providers, marble industry laborers, and urban voters.',
    keyIssues: ['Tribal forest rights and livelihood security', 'Lake conservation and sustainable tourism', 'Marble industry waste management', 'Rural healthcare access'],
    localKeywords: ['Election Campaign Agency Udaipur', 'Political Strategy Udaipur', 'Booth Management Udaipur'],
    strategicApproach: 'For Udaipur campaigns, we formulate localized tribal manifestos and deploy physical mobile-van campaign units equipped with interactive video screens. We focus heavily on booth management using local volunteer rewards.'
  },
  {
    slug: 'kota',
    name: 'Kota',
    assemblySeats: 6,
    totalBooths: 1400,
    demographicFocus: 'Large coaching student populations, industrial laborers, and coaching infrastructure operators.',
    keyIssues: ['Coaching students welfare and safety policies', 'Industrial renewal and jobs', 'Urban sanitation', 'Agricultural canal water supply'],
    localKeywords: ['Election Marketing Kota', 'Political Consulting Kota', 'Campaign Management Kota'],
    strategicApproach: 'Kota campaigns demand high-velocity youth social media campaigns (Instagram Reels) and call-center support lines. We track student-area voter shifts and leverage targeted Meta Ads targeting landlords and service sectors.'
  },
  {
    slug: 'ajmer',
    name: 'Ajmer',
    assemblySeats: 8,
    totalBooths: 1800,
    demographicFocus: 'Multi-religious community mix, educational institutional employees, and rural farmers.',
    keyIssues: ['Tourism infrastructure at key shrines', 'Bisalpur water supply regularity', 'Smart City project completion', 'Educational sector reforms'],
    localKeywords: ['Election Consultant Ajmer', 'Political Marketing Ajmer', 'War Room Setup Ajmer'],
    strategicApproach: 'Ajmer campaigns require highly balanced, inclusive messaging. We establish a central war room to monitor and rebut communal narratives instantly, and configure smart QR code flyers to deliver candidate videos directly.'
  },
  {
    slug: 'bhilwara',
    name: 'Bhilwara',
    assemblySeats: 7,
    totalBooths: 1650,
    demographicFocus: 'Textile factory workers, mining laborers, and rich trade guilds.',
    keyIssues: ['Textile industry regulatory support', 'Mining safety and environmental compliance', 'Labor housing and welfare', 'Water contamination check'],
    localKeywords: ['Political Strategy Bhilwara', 'Election Agency Bhilwara', 'Booth Committee Bhilwara'],
    strategicApproach: 'Our Bhilwara campaign system maps the labor databases onto our Voter CRM to execute targeted broadcast campaigns. We focus on booth-level Panna Pramukh committees to secure high turnout in labor-heavy wards.'
  },
  {
    slug: 'alwar',
    name: 'Alwar',
    assemblySeats: 11,
    totalBooths: 2500,
    demographicFocus: 'NCR-linked industrial workforce, dairy farmers, and diverse caste groups.',
    keyIssues: ['NCR pollution controls impact on industry', 'Dairy farming subsidies and cold storage', 'Law and order in border villages', 'Skill centers for rural youth'],
    localKeywords: ['Election Management Alwar', 'Political Strategy Alwar', 'Voter CRM Alwar'],
    strategicApproach: 'Alwar requires border-compliant, highly secure ground canvassing. We utilize GPS-tracked door-to-door tracking apps to cover the expansive assembly segments bordering Haryana, and run micro-targeted Meta campaigns.'
  },
  {
    slug: 'bikaner',
    name: 'Bikaner',
    assemblySeats: 7,
    totalBooths: 1600,
    demographicFocus: 'Cottage industry workers, dry-land farmers, and traditional urban populations.',
    keyIssues: ['Indira Gandhi Canal water allocation', 'Bikaner wool and clay industry support', 'Sewerage network in old city blocks', 'Border area security development'],
    localKeywords: ['Political Campaign Bikaner', 'Election Strategy Bikaner', 'Political Consultant Bikaner'],
    strategicApproach: 'In Bikaner, we focus on rural canal-belt issues. We design tailored manifesto folders addressing local agricultural pricing and run AI Calling calls in local dialects to verify voter support.'
  },
  {
    slug: 'sikar',
    name: 'Sikar',
    assemblySeats: 8,
    totalBooths: 1900,
    demographicFocus: 'Shekhawati rural farming communities, defense families, and student education hubs.',
    keyIssues: ['Farming irrigation technology subsidy', 'Defense personnel pension/welfare programs', 'Coaching hub regulation and security', 'Water table depletion levels'],
    localKeywords: ['Election Marketing Sikar', 'Booth Management Sikar', 'Political Marketing Agency Sikar'],
    strategicApproach: 'Sikar campaigns are driven by strong defense and agricultural themes. We utilize volunteer networks of ex-servicemen and run extensive local WhatsApp broadcast campaigns targeting student groups and farm owners.'
  },
  {
    slug: 'junjhunu',
    name: 'Jhunjhunu',
    assemblySeats: 7,
    totalBooths: 1550,
    demographicFocus: 'Defense veteran families, NRI relatives, and dryland farmers.',
    keyIssues: ['Veteran services and local hospitals', 'Yamuna water share project delay', 'Self-employment schemes for youths', 'Road linkages across village zones'],
    localKeywords: ['Political Consulting Jhunjhunu', 'Election Strategy Jhunjhunu', 'Campaign Agency Jhunjhunu'],
    strategicApproach: 'Jhunjhunu requires focus on patriotic narratives and NRI-supported local developmental updates. We manage candidate portals with dynamic updates, sending personalized SMS packages to families of servicemen.'
  },
  {
    slug: 'churu',
    name: 'Churu',
    assemblySeats: 6,
    totalBooths: 1350,
    demographicFocus: 'Desert farming communities, migrant worker families, and traditional businesses.',
    keyIssues: ['Extreme weather adaptation policies', 'Drinking water pipelines', 'Rural road maintenance', 'Support for families of migrant workers'],
    localKeywords: ['Election Marketing Churu', 'Political Consulting Churu', 'Booth Strategy Churu'],
    strategicApproach: 'For Churu campaigns, we configure interactive IVR calling networks that gather direct feedback on drinking water reach, and map water shortage coordinates to design local candidates speech topics.'
  },
  {
    slug: 'nagaur',
    name: 'Nagaur',
    assemblySeats: 10,
    totalBooths: 2300,
    demographicFocus: 'Salt-mine workers, farming communities, and independent political blocks.',
    keyIssues: ['Agricultural market yard (Mandi) reforms', 'Drinking water salinity control', 'Salt mine worker safety wages', 'Youth job boards setup'],
    localKeywords: ['Election Strategist Nagaur', 'Political Strategy Nagaur', 'Campaign Company Nagaur'],
    strategicApproach: 'Nagaur is known for dynamic political swings. We use deep data analytics on past multi-candidate contests to identify winning margins, and utilize real-time dashboard analytics to monitor shift patterns.'
  },
  {
    slug: 'pali',
    name: 'Pali',
    assemblySeats: 6,
    totalBooths: 1400,
    demographicFocus: 'Textile dyeing workers, agrarian families, and urban trading classes.',
    keyIssues: ['Textile unit water pollution filters', 'Luni river cleaning projects', 'Agrarian crop crop insurance checks', 'Urban drainage infrastructure'],
    localKeywords: ['Political Marketing Pali', 'Election Management Pali', 'Volunteer App Pali'],
    strategicApproach: 'In Pali, we leverage GIS spatial mapping to plot downstream industrial pollution complaints. We run targeted campaigns on candidate plans to solve water cleaning, creating custom video reels for residents.'
  },
  {
    slug: 'barmer',
    name: 'Barmer',
    assemblySeats: 7,
    totalBooths: 1750,
    demographicFocus: 'Refinery workers, border village populations, and arid land farmers.',
    keyIssues: ['Barmer refinery local hiring policies', 'Border area cell connectivity', 'Water tankers pipeline supply', 'Fodder subsidies for cattle'],
    localKeywords: ['Political Strategy Barmer', 'Election Consultant Barmer', 'Ground Campaigns Barmer'],
    strategicApproach: 'Barmer campaigns demand vast geographic logistics planning. We use GIS mapping to optimize the candidate\'s tour routes, and run low-bandwidth compatible mobile tools to log physical house-to-house audits.'
  },
  {
    slug: 'jaisalmer',
    name: 'Jaisalmer',
    assemblySeats: 2,
    totalBooths: 650,
    demographicFocus: 'Desert tourism communities, wind energy technicians, and sparse rural villages.',
    keyIssues: ['Tourism guides certification welfare', 'Wind energy corporate community hiring', 'Drinking water pond restoration', 'Rural road safety'],
    localKeywords: ['Election Campaign Jaisalmer', 'Political Marketing Jaisalmer', 'Booth Setup Jaisalmer'],
    strategicApproach: 'Jaisalmer\'s sparse population density requires high-delivery digital targeting. We configure high-volume WhatsApp Business broadcast accounts and OBD voice loops to cover remote hamlets (Dhanis) efficiently.'
  },
  {
    slug: 'sri-ganganagar',
    name: 'Sri Ganganagar',
    assemblySeats: 6,
    totalBooths: 1450,
    demographicFocus: 'Rich canal-irrigated farmers, agribusiness traders, and border towns.',
    keyIssues: ['Canal water sharing treaties with Punjab', 'Agribusiness Mandi taxation', 'Border smuggling prevention', 'Cotton crop price protection'],
    localKeywords: ['Election Agency Sri Ganganagar', 'Political Strategy Sri Ganganagar', 'Voter CRM Sri Ganganagar'],
    strategicApproach: 'Sri Ganganagar campaigns focus on the canal agricultural economy. We write specialized farming manifestos and deploy automated SMS notification networks linking to market-rate updates from the candidate.'
  },
  {
    slug: 'hanumangarh',
    name: 'Hanumangarh',
    assemblySeats: 5,
    totalBooths: 1200,
    demographicFocus: 'Canal-belt farmers, dairy cooperatives, and brick kiln workers.',
    keyIssues: ['Canal water supply regularity', 'Dairy milk bonus payments', 'Brick kiln labor welfare', 'Agriculture debt relief policies'],
    localKeywords: ['Political Consulting Hanumangarh', 'Election Marketing Hanumangarh', 'Campaign Agency Hanumangarh'],
    strategicApproach: 'We activate booth committees in Hanumangarh through our custom Volunteer Management App, sending daily tasks to dairy union workers and tracking candidate presence at rural village squares (Choupals).'
  },
  {
    slug: 'tonk',
    name: 'Tonk',
    assemblySeats: 4,
    totalBooths: 950,
    demographicFocus: 'Traditional weavers, leather workers, and agrarian voters.',
    keyIssues: ['Water canal extension from Bisalpur dam', 'Leather craft subsidies and market access', 'Youth employment portals', 'Rural road linkages'],
    localKeywords: ['Election Management Tonk', 'Political Strategy Tonk', 'War Room Tonk'],
    strategicApproach: 'In Tonk, our campaign focuses on traditional community mobilization. We coordinate physical corner meetings (Nukkad Sabhas) backed by QR-campaign links to collect direct grievance submissions from voters.'
  },
  {
    slug: 'bundi',
    name: 'Bundi',
    assemblySeats: 3,
    totalBooths: 750,
    demographicFocus: 'Rice farmers, cement industrial labor, and tourism operators.',
    keyIssues: ['Rice crop purchase minimum price', 'Cement factory local workforce quotas', 'Heritage site preservation funding', 'Rural medical clinics staff'],
    localKeywords: ['Political Marketing Bundi', 'Election Consultant Bundi', 'Booth Committee Bundi'],
    strategicApproach: 'We coordinate rice cooperative associations in Bundi, using custom WhatsApp broadcast groups to distribute the candidate\'s agricultural growth blueprint, and manage booth committees via local volunteers.'
  },
  {
    slug: 'chittorgarh',
    name: 'Chittorgarh',
    assemblySeats: 5,
    totalBooths: 1150,
    demographicFocus: 'Industrial cement laborers, heritage conservation groups, and farming blocks.',
    keyIssues: ['Cement plant pollution checks', 'Tourism infrastructure expansion', 'Opium farming license licensing policies', 'Water quality in zinc zones'],
    localKeywords: ['Political Strategy Chittorgarh', 'Election Consultant Chittorgarh', 'Campaign Team Chittorgarh'],
    strategicApproach: 'Chittorgarh campaigns require balancing environmental concerns with industrial job growth. We deploy targeted social videos detailing candidate plans for emission filters and mining labor security.'
  },
  {
    slug: 'rajsamand',
    name: 'Rajsamand',
    assemblySeats: 4,
    totalBooths: 950,
    demographicFocus: 'Marble mine owners and laborers, handicraft artisans, and rural communities.',
    keyIssues: ['Marble mining lease regulations', 'Terracotta craft marketing and export access', 'Tourism around Rajsamand lake', 'District hospital upgrades'],
    localKeywords: ['Election Management Rajsamand', 'Political Consulting Rajsamand', 'Voter CRM Rajsamand'],
    strategicApproach: 'Our Rajsamand strategy organizes the marble and artisan unions. We implement customized CRM tags to trace mine worker needs and run automated IVR calling campaigns to address community concerns.'
  },
  {
    slug: 'dungarpur',
    name: 'Dungarpur',
    assemblySeats: 4,
    totalBooths: 900,
    demographicFocus: 'Pre-dominantly tribal (Bhil) populations, forest gathering workers, and border traders.',
    keyIssues: ['Tribal land reservation rights', 'Minor forest produce minimum support price', 'Migration mitigation and local jobs', 'Rural drinking water lines'],
    localKeywords: ['Election Campaign Dungarpur', 'Political Consultant Dungarpur', 'Tribal Campaign Dungarpur'],
    strategicApproach: 'Dungarpur campaigns require deep local dialect alignment (Wagdi) and ground volunteer coordination. We support field teams with audio-visual campaign materials explaining government schemes and forest rights.'
  },
  {
    slug: 'banswara',
    name: 'Banswara',
    assemblySeats: 5,
    totalBooths: 1100,
    demographicFocus: 'Tribal communities, agricultural laborers, and gold/marble mining fields.',
    keyIssues: ['Mahi dam canal water distribution', 'Tribal area healthcare infrastructure', 'Gold mining project local jobs', 'Wage protection for seasonal laborers'],
    localKeywords: ['Political Consulting Banswara', 'Election Strategy Banswara', 'Booth Management Banswara'],
    strategicApproach: 'In Banswara, our strategy targets irrigation access. We map Mahi canal command areas via GIS, running customized digital campaigns for villages receiving water, and track booth-level support probabilities.'
  },
  {
    slug: 'pratapgarh',
    name: 'Pratapgarh',
    assemblySeats: 2,
    totalBooths: 500,
    demographicFocus: 'Tribal forest dwellers, small agrarian farmers, and tea/spice plantation laborers.',
    keyIssues: ['Forest land entitlement records', 'Opium crop price protection policies', 'Maternal healthcare centers in villages', 'Rural school teacher recruitment'],
    localKeywords: ['Political Strategy Pratapgarh', 'Election Agency Pratapgarh', 'Campaign Setup Pratapgarh'],
    strategicApproach: 'Pratapgarh\'s low urban density demands strong ground-level volunteer activation. We recruit young local village volunteers using our CRM and distribute custom-made voice updates in regional dialects.'
  },
  {
    slug: 'sawai-madhopur',
    name: 'Sawai Madhopur',
    assemblySeats: 4,
    totalBooths: 950,
    demographicFocus: 'Guava orchard farmers, tourism hotel operators, and rural tribal blocks.',
    keyIssues: ['Guava processing factory setup', 'Ranthambore buffer zone village conflict', 'Railway station area sanitation', 'Agricultural power cuts'],
    localKeywords: ['Election Consultant Sawai Madhopur', 'Political Marketing Sawai Madhopur', 'War Room Sawai Madhopur'],
    strategicApproach: 'We coordinate guava farming associations in Sawai Madhopur, distributing brochures on planned local processing plants, and run targeted Google Ads to capture tourists-interest business sentiment.'
  },
  {
    slug: 'karauli',
    name: 'Karauli',
    assemblySeats: 4,
    totalBooths: 950,
    demographicFocus: 'Sandstone quarry miners, temple tourism traders, and rural communities.',
    keyIssues: ['Sandstone mining regulatory ease', 'Kaila Devi temple visitor infrastructure', 'Chambal water lifting project delays', 'Youth employment migration'],
    localKeywords: ['Political Strategy Karauli', 'Election Management Karauli', 'Campaign Desk Karauli'],
    strategicApproach: 'Karauli campaigns focus on mining and tourism development. We create high-impact documentaries showcasing candidate commitments to lift Chambal water to local villages, run via Meta and WhatsApp.'
  },
  {
    slug: 'dholpur',
    name: 'Dholpur',
    assemblySeats: 4,
    totalBooths: 900,
    demographicFocus: 'Agrarian riverine communities, sandstone miners, and rural laborers.',
    keyIssues: ['Ravine area reclamation and agriculture', 'Chambal water supply expansion', 'Border safety security policing', 'Vocational training colleges'],
    localKeywords: ['Political Consultant Dholpur', 'Election strategy Dholpur', 'Booth Management Dholpur'],
    strategicApproach: 'Dholpur campaigns require strong security checks and border-village target maps. We setup local calling cells to verify voter support and organize physical village committee meetings (Panchayat Sabhas).'
  },
  {
    slug: 'bharatpur',
    name: 'Bharatpur',
    assemblySeats: 7,
    totalBooths: 1600,
    demographicFocus: 'Mustard agrarian farmers, brass industry artisans, and NCR-adjacent populations.',
    keyIssues: ['Mustard oil mill crop support prices', 'Keoladeo national park tourism decline', 'Urban drainage and city roads', 'Rural electricity during sowing season'],
    localKeywords: ['Election Marketing Bharatpur', 'Political Consulting Bharatpur', 'CRM System Bharatpur'],
    strategicApproach: 'Bharatpur requires a data-driven agricultural campaign. We segment mustard farming clusters and use WhatsApp chatbot automation to share candidate plans for new processing clusters and seed subsidies.'
  },
  {
    slug: 'dausa',
    name: 'Dausa',
    assemblySeats: 5,
    totalBooths: 1100,
    demographicFocus: 'Traditional handicraft weavers, local farming communities, and highway-linked business traders.',
    keyIssues: ['Delhi-Mumbai expressway local business access', 'Drinking water pipelines', 'Stone quarry workers health schemes', 'Rural electricity stability'],
    localKeywords: ['Political Strategy Dausa', 'Election Management Dausa', 'Volunteer Network Dausa'],
    strategicApproach: 'Dausa campaigns focus on highway-led development. We run targeted campaigns on candidate plans for trade parks along the expressway and manage booth committees using our custom mobile tracking software.'
  },
  {
    slug: 'baran',
    name: 'Baran',
    assemblySeats: 4,
    totalBooths: 950,
    demographicFocus: 'Tribal (Saharayia) groups, spice farming communities, and thermal power laborers.',
    keyIssues: ['Saharayia tribal welfare schemes access', 'Garlic/coriander crop warehouse systems', 'Thermal plant environment controls', 'Drinking water dams connectivity'],
    localKeywords: ['Political Consulting Baran', 'Election Strategy Baran', 'Campaign Desk Baran'],
    strategicApproach: 'In Baran, we map spice farming clusters and run targeted automated dialer calling campaigns to discuss mandi pricing. We distribute video stories highlighting Saharayia tribal community updates.'
  },
  {
    slug: 'jhalawar',
    name: 'Jhalawar',
    assemblySeats: 4,
    totalBooths: 950,
    demographicFocus: 'Orange orchard growers, stone quarry miners, and agrarian workers.',
    keyIssues: ['Orange pulp processing factories setup', 'Jhalrapatan stone industry regulation', 'River linking irrigation projects', 'Rural healthcare centers support'],
    localKeywords: ['Political Strategy Jhalawar', 'Election Marketing Jhalawar', 'Booth Setup Jhalawar'],
    strategicApproach: 'Jhalawar is a stronghold region demanding high-visibility campaigns. We run candidate-focused branding videos showcasing agricultural innovation, orange export plans, and manage 900+ booth agents via our central portal.'
  }
];
