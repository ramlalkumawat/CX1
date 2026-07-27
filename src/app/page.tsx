'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveDashboard from '@/components/InteractiveDashboard';
import DistrictHub from '@/components/DistrictHub';
import ServiceExplorer from '@/components/ServiceExplorer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/context/LanguageContext';
import {
  TrendingUp,
  Cpu,
  Layers,
  Shield,
  Search,
  Users,
  Compass,
  CheckCircle,
  Database,
  ArrowRight,
  HelpCircle,
  MessageSquare,
  Award,
  Zap,
  Globe,
  Share2,
  User,
  Phone,
  Smartphone,
  Activity,
  Server,
  HardDrive
} from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();

  const stats = [
    { value: t('15 Million+', '15 Million+'), label: t('Voter Touchpoints', 'Voter Touchpoints') },
    { value: t('120+', '120+'), label: t('Campaigns Executed', 'Campaigns Executed') },
    { value: t('500+', '500+'), label: t('Precise Surveys', 'Precise Surveys') },
    { value: t('99.4%', '99.4%'), label: t('CRM Uptime', 'CRM Uptime') },
  ];

  const valueProps = [
    {
      icon: <BrainIcon className="w-8 h-8 text-brand-blue" />,
      title: t('IIM-IIT Driven Strategic Rigor', 'IIM-IIT Driven Strategic Rigor'),
      description: t('We replace old-school guesswork with mathematical precision. Our strategy is designed by management consultants from IIM Ahmedabad & IIM Bangalore, alongside engineering graduates from IIT Delhi.', 'We replace old-school guesswork with mathematical precision. Our strategy is designed by management consultants from IIM Ahmedabad & IIM Bangalore, alongside engineering graduates from IIT Delhi.')
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-blue" />,
      title: t('Enterprise-Grade Technology', 'Enterprise-Grade Technology'),
      description: t('From geo-fenced canvassing trackers to custom-built Voter CRM engines and AI-cloned calling bots, we equip your campaign with the state-of-the-art software systems.', 'From geo-fenced canvassing trackers to custom-built Voter CRM engines and AI-cloned calling bots, we equip your campaign with the state-of-the-art software systems.')
    },
    {
      icon: <Layers className="w-8 h-8 text-brand-blue" />,
      title: t('Micro-Targeted Local Operations', 'Micro-Targeted Local Operations'),
      description: t('We do not run generic campaigns. We map voters down to individual polling booths and Panna Pramukhs, delivering tailored communications based on local caste matrices and grievances.', 'We do not run generic campaigns. We map voters down to individual polling booths and Panna Pramukhs, delivering tailored communications based on local caste matrices and grievances.')
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      title: t('Absolute Database Confidentiality', 'Absolute Database Confidentiality'),
      description: t('Your opponent should never know your metrics. We enforce bank-grade encryption, double-factor authentication, and strict non-disclosure clauses to keep your campaign data secure.', 'Your opponent should never know your metrics. We enforce bank-grade encryption, double-factor authentication, and strict non-disclosure clauses to keep your campaign data secure.')
    }
  ];

  const techStack = [
    { name: 'Next.js 15 / React', desc: 'High-performance SSR static generation', icon: <Cpu className="w-5 h-5" /> },
    { name: 'PostgreSQL / GIS', desc: 'Encrypted voter database with spatial mapping', icon: <Database className="w-5 h-5" /> },
    { name: 'QGIS & Leaflet', desc: 'Demographic mapping & booth heatmaps', icon: <Compass className="w-5 h-5" /> },
    { name: 'WhatsApp Cloud API', desc: 'Automated broadcasts & chatbot workflows', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'AI Voice Synthesis', desc: 'Dialect voice cloning (Mewari & Marwari)', icon: <BrainIcon className="w-5 h-5" /> },
    { name: 'Python Data Science', desc: 'Voter swing simulations & statistical models', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Cloudflare WAF CDN', desc: 'DDoS security & bot protection rules', icon: <Shield className="w-5 h-5" /> },
    { name: 'Twilio & Telecom SIP', desc: 'Concurrent high-throughput OBD calling', icon: <Phone className="w-5 h-5" /> },
    { name: 'React Native Mobile', desc: 'GPS-tracked door-to-door canvassing app', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Apache Kafka Streams', desc: 'Real-time ground survey telemetry processing', icon: <Activity className="w-5 h-5" /> },
    { name: 'Docker & Kubernetes', desc: 'High-availability secure container orchestration', icon: <Server className="w-5 h-5" /> },
    { name: 'Redis Cache Nodes', desc: 'Ultra-fast key-value voter lookup caching', icon: <HardDrive className="w-5 h-5" /> },
  ];

  const steps = [
    {
      number: '01',
      title: t('Baseline Auditing & Demographics', 'Baseline Auditing & Demographics'),
      desc: t('We map historical voting statistics, calculate swing thresholds, and run double-blind ground surveys to establish a precise starting index.', 'We map historical voting statistics, calculate swing thresholds, and run double-blind ground surveys to establish a precise starting index.')
    },
    {
      number: '02',
      title: t('War Room Setup & CRM Launch', 'War Room Setup & CRM Launch'),
      desc: t('We launch a centralized communication node, integrate custom voter tracking software, and train your immediate campaign leadership.', 'We launch a centralized communication node, integrate custom voter tracking software, and train your immediate campaign leadership.')
    },
    {
      number: '03',
      title: t('Narrative Framing & Media Ads', 'Narrative Framing & Media Ads'),
      desc: t('Our speechwriters and media teams design local manifestos, while our ad specialists construct targeted campaigns on Meta, Google, and YouTube.', 'Our speechwriters and media teams design local manifestos, while our ad specialists construct targeted campaigns on Meta, Google, and YouTube.')
    },
    {
      number: '04',
      title: t('Booth Committee Activation', 'Booth Committee Activation'),
      desc: t('We deploy custom mobile trackers to onboard and monitor your Panna Pramukhs, ensuring that supporters are identified and engaged.', 'We deploy custom mobile trackers to onboard and monitor your Panna Pramukhs, ensuring that supporters are identified and engaged.')
    },
    {
      number: '05',
      title: t('Polling Day Turnout Delivery', 'Polling Day Turnout Delivery'),
      desc: t('On election day, we track turnout by the hour, deploying backup volunteer networks to target low-turnout booths and ensure victory.', 'On election day, we track turnout by the hour, deploying backup volunteer networks to target low-turnout booths and ensure victory.')
    }
  ];

  const caseStudies = [
    {
      title: 'Rural Jaipur Assembly: Turning Deficits into Victory',
      meta: 'Vidhan Sabha Election | Swing Strategy',
      summary: 'A candidate facing a historical 4.5% voter deficit in a rural assembly constituency of Jaipur required scientific voter recovery.',
      tactics: [
        'GIS mapping identified 24 underperforming farming booths.',
        'Targeted local manifestos addressing canal irrigation pricing.',
        'AI calling updates delivered directly in local Marwari accent.'
      ],
      result: 'Shifted swing voter support by 7.5%, securing victory with a final margin of 3,210 votes.'
    },
    {
      title: 'Urban Udaipur Constituency: Turnout Mobilization',
      meta: 'Vidhan Sabha Election | Tech Operations',
      summary: 'An urban constituency required high voter mobilization among middle-class families and young business owners.',
      tactics: [
        'WhatsApp CRM automation distributed personalized digital voter slips.',
        'Volunteer dashboard tracked booth-level canvassing progress.',
        'Social media reels highlighting developmental work went viral.'
      ],
      result: 'Lifts voter turnout by 9.4% in target zones, delivering a decisive win for the candidate.'
    }
  ];

  const founders = [
    {
      name: 'Ramlal Kumawat',
      role: 'Co-Founder, Software Engineer & Political Election Strategist',
      image: '/ramlal.jpg',
      bio: 'Pioneering technology-driven campaign operations in India. Combines software architecture expertise with ground-level political engineering.'
    },
    {
      name: 'Avni Sharma',
      role: 'Co-Founder, Management & Data Analytics Expert',
      image: '/avni.jpg',
      bio: 'Alumni of IIM Ahmedabad. Specializes in statistical survey research models, demographic matrices, and data-driven swing forecasting.'
    }
  ];

  const coreTeam = [
    {
      name: 'Aman Jain',
      role: 'Software Engineer',
      bio: 'Expert in secure database design, Voter CRM development, and high-concurrency calling infrastructure.'
    },
    {
      name: 'Ashish Kumawat',
      role: 'Creative Content Head',
      bio: 'Directs digital asset production, visual branding parameters, and viral campaign slogan development.'
    },
    {
      name: 'Abhinav Kumar',
      role: 'Software Engineer & Social Media Expert',
      bio: 'Graduate of IIT Delhi. Connects mathematical social algorithms with targeted ad distribution frameworks.'
    },
    {
      name: 'Yashika Gupta',
      role: 'Research & Analytics Specialist',
      bio: 'Alumni of IIM Bangalore. Manages qualitative constituency research, focus group surveys, and manifesto framing.'
    }
  ];

  const faqs = [
    {
      question: 'How does CampaignX secure candidate data confidentiality?',
      answer: 'We treat database security with corporate rigor. All constituency and voter CRM files are hosted on isolated, encrypted cloud instances. We enforce two-factor authentication, restrict user permissions, and sign legally binding Non-Disclosure Agreements (NDAs) before auditing any data.'
    },
    {
      question: 'How do your surveys differ from traditional exit/opinion polls?',
      answer: 'Our ground surveys are double-blind and GPS-verified. Enumerators utilize geo-fenced mobile apps that verify their physical presence at the voter\'s door. Additionally, we verify 20% of all interview records via automated audio reviews and phone callbacks to guarantee clean data.'
    },
    {
      question: 'Can you work with candidates who already have an existing campaign team?',
      answer: 'Absolutely. We regularly act as the technology and strategy partner for established campaign offices. We onboard existing volunteers onto our CRM platforms, establish war rooms, and provide direct strategic advice to the candidate\'s existing committee.'
    },
    {
      question: 'What is the ideal timeframe to hire CampaignX ahead of an election?',
      answer: 'While we can deploy rapid response teams within 48 hours, building solid ground structures like booth committees and Panna Pramukh databases requires 6 to 12 months for optimal results.'
    }
  ];

  const blogs = [
    {
      title: 'Dominating the Panna Pramukh System: Rajasthan Election Blueprint',
      excerpt: 'How to successfully structure, verify, and mobilize booth committees using modern mobile tracking databases.',
      date: 'July 15, 2026'
    },
    {
      title: 'AI calling and Outbound Voice: The New Battleground',
      excerpt: 'Analyzing the compliance, optimization, and voter response rates of cloned voice dialer campaigns in Mewar and Marwar.',
      date: 'June 28, 2026'
    },
    {
      title: 'Using GIS Spatial Data to Map Water Grievances in Jaisalmer',
      excerpt: 'A technical review of overlaying public pipeline grids with voter CRM logs to write high-converting speeches.',
      date: 'May 14, 2026'
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-24 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28 border-b border-slate-100">
          <div className="absolute inset-0 z-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-brand-blue border border-blue-100 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-current" /> {t('Next-Gen Political Engineering', 'Next-Gen Political Engineering')}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-tight">
                  {t('Demolish Guesswork.', 'Demolish Guesswork.')}<br />
                  <span className="text-brand-blue">{t('Win Elections', 'Win Elections')}</span> {t('with Science & Technology.', 'with Science & Technology.')}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t("CampaignX is Rajasthan's leading election management, political consulting & campaign technology company. We integrate IIM-IIT analytics, secure voter CRMs, military-grade war rooms, and micro-targeted digital campaigns to secure decisive electoral majorities.")}
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {t('Request Strategy Audit', 'Request Strategy Audit')} <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="#dashboard"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-base shadow-sm transition-all duration-200"
                  >
                    {t('View War Room Demo', 'View War Room Demo')}
                  </a>
                </div>

                {/* Local Keywords tag */}
                <div className="pt-4 text-xs text-slate-400">
                  <p>{t('Rajasthan-wide consulting footprint covering: Jaipur, Jodhpur, Udaipur, Kota, Sikar, Ajmer, Bhilwara, Alwar, and all 33 districts.', 'Rajasthan-wide consulting footprint covering: Jaipur, Jodhpur, Udaipur, Kota, Sikar, Ajmer, Bhilwara, Alwar, and all 33 districts.')}</p>
                </div>
              </div>

              {/* Graphic Side */}
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-auto sm:aspect-square max-w-[420px] mx-auto rounded-3xl bg-slate-50 border border-slate-200/80 p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-60 z-0" />
                  <div className="absolute bottom-[-20%] left-[-20%] w-60 h-60 bg-amber-100 rounded-full blur-3xl opacity-60 z-0" />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">{t('System Stack', 'SYSTEM STACK')}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="relative z-10 space-y-3 my-6">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-xs flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue"><Database className="w-4 h-4" /></div>
                      <div className="min-w-0 flex-1"><p className="text-xs font-bold text-slate-800">{t('Secure Voter CRM Node', 'Secure Voter Voter CRM Node')}</p><p className="text-[9px] text-slate-500 truncate">{t('Voter segments synced successfully', 'Voter segments synced successfully')}</p></div>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-xs flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-brand-gold"><TrendingUp className="w-4 h-4" /></div>
                      <div className="min-w-0 flex-1"><p className="text-xs font-bold text-slate-800">{t('Demographic Swing Analyzer', 'Demographic Swing Analyzer')}</p><p className="text-[9px] text-slate-500 truncate">{t('Calculated swing margin: +4.12%', 'Calculated swing margin: +4.12%')}</p></div>
                    </div>
                  </div>

                  <div className="relative z-10 border-t border-slate-100 pt-3">
                    <p className="text-xs text-slate-600 font-bold">{t('CampaignX Election Technology', 'CampaignX Election Technology')}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{t('Enterprise-grade UI & high performance SEO foundation', 'Enterprise-grade UI & high performance SEO foundation')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Counters Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-24 border-t border-slate-100 pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-3xl lg:text-4xl font-extrabold text-brand-dark">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT CAMPAIGNX */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Images & Founders info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="text-lg font-bold text-brand-dark">{t('About CampaignX', 'About CampaignX')}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {t('CampaignX was founded by software engineers and management analysts to revolutionize how elections are fought in Rajasthan. Traditional agencies rely on gut feelings; we rely on clean datasets, secure CRM tools, and audited field structures.')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                    <span className="text-xs text-brand-blue font-bold uppercase tracking-wider block">{t('CO-FOUNDER', 'CO-FOUNDER')}</span>
                    <h4 className="text-base font-bold text-brand-dark mt-1">{t('Ramlal Kumawat', 'Ramlal Kumawat')}</h4>
                    <p className="text-xs text-slate-500">{t('Software Engineer & Political Strategist', 'Software Engineer & Political Strategist')}</p>
                    <p className="text-xs text-slate-600 mt-2">
                      {t('Specializes in software tools, voter databases, and local constituency dynamics.')}
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                    <span className="text-xs text-brand-gold font-bold uppercase tracking-wider block">{t('CO-FOUNDER', 'CO-FOUNDER')}</span>
                    <h4 className="text-base font-bold text-brand-dark mt-1">{t('Avni Sharma', 'Avni Sharma')}</h4>
                    <p className="text-xs text-slate-500">{t('Management & Data Expert, IIM-A', 'Management & Data Expert, IIM-A')}</p>
                    <p className="text-xs text-slate-600 mt-2">
                      {t('Leverages statistical modeling, demographic mapping, and policy research techniques.')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Key Pillars */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                  {t('OUR CAMPAIGN ENGINEERING PRINCIPLES', 'OUR CAMPAIGN ENGINEERING PRINCIPLES')}
                </span>
                <h2 className="text-3xl font-extrabold text-brand-dark">
                  {t('How We Engineer Political Victories', 'How We Engineer Political Victories')}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("We don't offer generic advice. We deploy custom data pipelines, verify volunteer activity, and design narrative architectures that target specific voter segments, ensuring every rupee of your budget generates maximum electoral returns.")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0"><CheckCircle className="w-5 h-5 text-brand-blue" /></div>
                    <div><h4 className="text-sm font-bold text-slate-800">{t('100% Audited Surveys', '100% Audited Surveys')}</h4><p className="text-xs text-slate-500 mt-0.5">{t('GPS verified door-to-door validation.', 'GPS verified door-to-door validation.')}</p></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0"><CheckCircle className="w-5 h-5 text-brand-blue" /></div>
                    <div><h4 className="text-sm font-bold text-slate-800">{t('Custom CRM Platforms', 'Custom CRM Platforms')}</h4><p className="text-xs text-slate-500 mt-0.5">{t('Secure dashboard systems.', 'Secure dashboard systems.')}</p></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0"><CheckCircle className="w-5 h-5 text-brand-blue" /></div>
                    <div><h4 className="text-sm font-bold text-slate-800">{t('AI Calling Nodes', 'AI Calling Nodes')}</h4><p className="text-xs text-slate-500 mt-0.5">{t('Localized voice broadcast loops.', 'Localized voice broadcast loops.')}</p></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0"><CheckCircle className="w-5 h-5 text-brand-blue" /></div>
                    <div><h4 className="text-sm font-bold text-slate-800">{t('Verified Panna Pramukhs', 'Verified Panna Pramukhs')}</h4><p className="text-xs text-slate-500 mt-0.5">{t('Automated committee trackers.', 'Automated committee trackers.')}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-choose-us" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('THE CAMPAIGNX ADVANTAGE', 'THE CAMPAIGNX ADVANTAGE')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('Why Elite Candidates Partner With Us', 'Why Elite Candidates Partner With Us')}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
                {t('Traditional agencies focus on printing banners and managing rallies. CampaignX focuses on voter acquisition, analytics, and software security.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valueProps.map((prop, idx) => (
                <div
                  key={idx}
                  className="w-full h-full p-6 sm:p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  <div className="mb-4">{prop.icon}</div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{prop.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-grow">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMMAND CENTER DEMO */}
        <section id="dashboard" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('WAR ROOM PREVIEW', 'WAR ROOM PREVIEW')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('Real-Time Campaign Control Room', 'Real-Time Campaign Control Room')}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                {t('Interact with our mock interface. Select dialects, verify voter counts, and simulate outbound AI voice broadcast operations.')}
              </p>
            </div>

            <InteractiveDashboard />
          </div>
        </section>

        {/* DISTRICT STRATEGY HUB */}
        <section id="district-hub" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                LOCALIZED CONSULTING PLATFORM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                Rajasthan District Strategic Portals
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Select your assembly constituency&apos;s district to view tailored key issues and demographic weights mapped by CampaignX.
              </p>
            </div>

            <DistrictHub />
          </div>
        </section>

        {/* COMPLETE SERVICES SECTION */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                COMPREHENSIVE DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                30+ Election Technology & consulting Services
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Explore our full spectrum of services. Each service contains a workflow blueprint, target deliverables, features list, and localized target keywords.
              </p>
            </div>

            <ServiceExplorer />
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('ENTERPRISE ARCHITECTURE', 'ENTERPRISE ARCHITECTURE')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('Our Campaign Tech Stack', 'Our Campaign Tech Stack')}
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {t('We develop fast, secure, and highly scalable software solutions. We do not host databases on standard insecure web servers.', 'We develop fast, secure, and highly scalable software solutions. We do not host databases on standard insecure web servers.')}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6">
              {techStack.map((tech, idx) => (
                <div key={idx} className="w-full h-full p-3.5 sm:p-5 bg-white border border-slate-200/80 rounded-2xl text-center shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col items-center min-h-[160px]">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue mb-3 shrink-0">
                    {tech.icon}
                  </div>
                  <h4 className="text-xs font-bold text-slate-800">{t(tech.name, tech.name)}</h4>
                  <p className="text-[10px] text-slate-400 mt-1.5 sm:mt-2.5 leading-relaxed">{t(tech.desc, tech.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELECTION PROCESS */}
        <section id="process" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('CAMPAIGNX OPERATIONAL PROCESS', 'STEP-BY-STEP WORKFLOW')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('How We Deliver Victory', 'Our Campaign Execution Pipeline')}
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {t('We plan, initialize, run, and audit every campaign using a structured, 5-phase execution pipeline.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="w-full h-full p-5 rounded-2xl border border-slate-200/80 bg-slate-50 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="text-2xl font-extrabold text-brand-blue/30 block mb-2">{step.number}</span>
                    <h3 className="text-sm font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('OUR CLIENT SUCCESS STORIES', 'OUR CLIENT SUCCESS STORIES')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('Electoral Case Studies', 'Real-World Election Campaigns Mapped')}
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {t('Read how our tech blueprints and advisory panels secured majorities in challenging constituencies.')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((cs, idx) => (
                <div key={idx} className="w-full h-full p-6 sm:p-8 bg-white border border-slate-200/85 rounded-3xl shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-bold text-brand-blue">{cs.meta}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark mt-1.5 mb-3">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">{cs.summary}</p>
                  <div className="mb-4">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2">{t('Tactics Deployed:', 'Tactics Deployed:')}</h4>
                    <ul className="space-y-1.5">
                      {cs.tactics.map((t, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <span className="text-[10px] font-bold text-emerald-600 block uppercase">{t('Final Impact', 'Final Impact')}</span>
                    <p className="text-xs text-slate-700 font-semibold mt-0.5">{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('MEET THE STRATEGISTS', 'MEET THE STRATEGISTS')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('Campaign Leadership', 'Our Core Strategy & Advisory Board')}
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {t('CampaignX is led by management graduates and software engineers who bring corporate process management to campaign operations.')}
              </p>
            </div>

            {/* Co-Founders Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
              {founders.map((m, idx) => (
                <div key={idx} className="w-full h-full bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-slate-200 relative shadow-sm mx-auto sm:mx-0">
                    <img src={m.image} alt={t(m.name, m.name)} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col justify-between py-1 text-center sm:text-left">
                    <div>
                      <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider block">{t('CO-FOUNDER', 'CO-FOUNDER')}</span>
                      <h3 className="text-lg font-extrabold text-brand-dark mt-1">{t(m.name, m.name)}</h3>
                      <p className="text-xs text-brand-blue font-bold tracking-tight mt-0.5">{t(m.role, m.role)}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-3">{t(m.bio, m.bio)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Team Divider & Grid */}
            <div className="border-t border-slate-100 pt-12">
              <h3 className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
                {t('Core Engineering & Strategy Team', 'Core Engineering & Strategy Team')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreTeam.map((m, idx) => (
                  <div key={idx} className="w-full h-full p-5 bg-white border border-slate-200/70 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue mb-4">
                        <User className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-800">{t(m.name, m.name)}</h4>
                      <p className="text-xs text-brand-blue font-semibold mt-1 uppercase tracking-tight">{t(m.role, m.role)}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-3">{t(m.bio, m.bio)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section id="faqs" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('COMMON INQUIRIES', 'COMMON INQUIRIES')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('Frequently Asked Questions', 'Frequently Asked Campaign Queries')}
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {t('Get answers to critical questions about database safety, pricing models, and volunteer tracking structures.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>{t(faq.question, faq.question)}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 pl-7 leading-relaxed">
                    {t(faq.answer, faq.answer)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section id="blogs" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('RELIABLE INSIGHTS', 'RELIABLE INSIGHTS')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t('From The War Room', 'Latest Political Strategy Articles')}
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {t('Read detailed insights written by our analysts on local election guidelines, WhatsApp API, and survey models.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog, idx) => (
                <div key={idx} className="w-full h-full p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold block">{t(blog.date, blog.date)}</span>
                    <h3 className="text-base font-bold text-brand-dark mt-2 mb-3 leading-snug">{t(blog.title, blog.title)}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{t(blog.excerpt, blog.excerpt)}</p>
                  </div>
                  <span className="text-xs font-bold text-brand-blue inline-flex items-center gap-1">
                    {t('Read Article', 'Read Article')} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA CONTAINER */}
        <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
                {t('SECURE LEAD CAPTURE', 'SECURE LEAD CAPTURE')}
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark mt-2">
                {t('Initiate Your Strategic Consultation', 'Initiate Your Strategic Consultation')}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                {t("Onboard with CampaignX. Connect with Rajasthan's most trusted election technology portal.")}
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Temporary internal BrainIcon helper to prevent build issues
function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M12 5v14" />
      <path d="M12 12h6" />
      <path d="M12 12H6" />
    </svg>
  );
}
