
import { Project, Service, SkillGroup, Metric, PhilosophyPrinciple, ReasonToChoose } from './types';

export const PROFILE = {
  name: "MARY | Data & AI",
  title: "Data Analyst & AI Engineer",
  tagline: "I build intelligent dashboards, AI systems, and end-to-end business automations.",
  bio: "I discovered my passion for data while volunteering for an NGO, where I began connecting patterns in information to track progress and achieve meaningful outcomes. That experience sparked a fascination with turning raw, messy data into actionable insights, and over the past six years, I’ve helped businesses across multiple industries harness data and AI to streamline operations, make smarter decisions, and drive tangible results.\n\nToday, as a data and AI professional, I combine technical expertise with a business-focused mindset, creating AI-integrated processes that are practical, scalable, and impact-driven. I work closely with clients to understand their goals and challenges, ensuring every solution is tailored to their unique needs. My mission is to help businesses not just navigate data but leverage it to grow, innovate, and succeed.",
  email: "mary@example.com",
  linkedin: "https://www.linkedin.com/in/mary-anene-theanalyst/",
  github: "https://github.com/Oluchi5",
  location: "Remote / Worldwide",
  availability: "Available for Projects"
};

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Analytics Tools", items: ["Power BI", "Tableau", "Excel", "Python (Pandas, NumPy, Scikit-learn)", "Google Sheets"] },
  { category: "SQL & Databases", items: ["PostgreSQL", "MySQL", "BigQuery", "Microsoft SQL Server", "Oracle SQL"] },
  { category: "AI Engineering", items: ["OpenAI", "Gemini", "LLAMA", "LangChain", "Vector Databases (Pinecone, Chroma)", "RAG pipelines"] },
  { category: "Automation", items: ["Zapier", "Make", "n8n", "API integrations", "Webhooks"] },
  { category: "Development Support", items: ["FastAPI", "Docker", "GitHub"] },
];

export const METRICS: Metric[] = [
  { value: "6+", label: "Years of Experience" },
  { value: "50+", label: "Projects completed" },
  { value: "8+", label: "Industries Served" }
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  { title: "Clarity Above All", description: "I simplify complex challenges into clear, actionable solutions that your team can implement with confidence." },
  { title: "Impact-Driven", description: "Every approach I take is designed to deliver tangible results and meaningful improvement for your business." },
  { title: "Collaborative Partnership", description: "I work alongside you as a trusted partner, ensuring that every solution is fully aligned with your goals and priorities." }
];

export const WHY_CHOOSE_ME: ReasonToChoose[] = [
  { title: "Business-First", description: "Business-focused insights, not just dashboards." },
  { title: "Tailored AI", description: "AI systems tailored to real workflows, not just hype." },
  { title: "Fast Delivery", description: "Fast delivery with clean, professional reporting." },
  { title: "Hybrid Skillset", description: "Cross-functional skillset across analytics + AI." },
  { title: "Reliable Support", description: "Clear communication, documentation, and support." },
];

export const SERVICES: Service[] = [
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    icon: "BarChart",
    shortDescription: "Turning raw data into clear, actionable dashboards and insights.",
    fullDescription: "I transform complex, raw datasets into intuitive visual narratives. Whether you need to track KPIs, understand customer behavior, or clean up messy data, I provide end-to-end analytics solutions that empower your team to make decisions faster.",
    deliverables: ["Dashboard development", "Data cleaning & preparation", "EDA & insight reporting", "KPI tracking", "Automated dashboards"],
    startingPrice: "$1,500"
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    icon: "Brain",
    shortDescription: "Advanced machine learning models, computer vision, and predictive analytics.",
    fullDescription: "Unlock the power of your data with advanced Machine Learning. I build and deploy Supervised models (for classification and regression) and Unsupervised algorithms (for clustering and pattern detection). I also specialize in Computer Vision to digitize physical workflows.",
    deliverables: ["Supervised ML (Regression/Classification)", "Unsupervised ML (Clustering)", "Computer Vision & OCR", "Predictive Modeling", "Forecasting algorithms"],
    startingPrice: "$2,500"
  },
  {
    id: "ai-engineering",
    title: "AI Engineering & Automation",
    icon: "Zap",
    shortDescription: "Building custom RAG systems, chatbots, and automated workflows.",
    fullDescription: "Leverage the power of Generative AI and automation to scale your business operations. I build Retrieval-Augmented Generation (RAG) systems for internal knowledge, custom chatbots, and autonomous agents that handle repetitive tasks.",
    deliverables: ["RAG systems", "Custom AI chatbots", "Knowledge base systems", "Zapier/Make/n8n automations", "AI Agents"],
    startingPrice: "$3,000"
  }
];

export const PROJECTS: Project[] = [
  // --- Data Analytics Projects ---
  {
    id: "web-traffic-dashboard",
    title: "Web Traffic Analysis Dashboard",
    category: "Data Analytics",
    summary: "Visualizing website performance metrics.",
    description: "A comprehensive Tableau dashboard analyzing web traffic sources, user behavior, and engagement metrics to drive digital marketing strategies.",
    technologies: ["Tableau", "CSV", "Data Visualization"],
    imageUrl: "https://image.pollinations.ai/prompt/Web%20Traffic%20Analysis%20Dashboard%20data%20visualization%20dark%20mode%20futuristic%20ui%20charts?nologo=true",
    results: ["Optimized ad spend based on high-traffic sources", "Improved user retention analysis"],
    demoLink: "https://public.tableau.com/app/profile/mary.oluchukwu.anene/viz/WebAnalysisDashboard_16830329694650/WEBTRAFFICANALYSIS",
    challenge: "The marketing team needed to optimize ad spend but lacked visibility into which channels drove high-quality engagement versus bounce. They required a unified view of user behavior across global regions.",
    approach: "I aggregated raw traffic data in Tableau and created calculated fields for conversion rates and session duration. I designed an interactive dashboard that allows stakeholders to filter by region and device, highlighting top-performing acquisition channels."
  },
  {
    id: "tweet-automation",
    title: "Tweet Automation & Analysis",
    category: "Data Analytics",
    summary: "Automated social sentiment tracking.",
    description: "An automated pipeline using Zapier and Power BI to collect and analyze tweets for #Chimamanda, providing real-time sentiment insights.",
    technologies: ["Power BI", "Zapier", "Twitter API"],
    imageUrl: "https://image.pollinations.ai/prompt/Twitter%20Sentiment%20Analysis%20Network%20Graph%20Data%20Dark%20Mode%20Neon?nologo=true",
    results: ["Real-time sentiment tracking", "Automated data collection workflow"],
    demoLink: "https://app.powerbi.com/view?r=eyJrIjoiOTZhZmM0NzAtYWQ2MC00ZTUwLTgwMGQtMDgzMGM4M2EwMDQxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
    challenge: "Tracking real-time public sentiment for the #Chimamanda campaign was manual and slow, causing missed engagement opportunities and delayed crisis management.",
    approach: "I built an automated pipeline using Zapier to capture tweets instantly. Data was pushed to a Power BI dataset where I applied sentiment classification rules to visualize positive versus negative trends dynamically."
  },
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn",
    category: "Data Analytics",
    summary: "Predicting and analyzing customer attrition.",
    description: "A Power BI analysis identifying key factors contributing to customer churn in the telecom sector, helping stakeholders target retention efforts.",
    technologies: ["Power BI", "CSV", "Data Analysis"],
    imageUrl: "https://image.pollinations.ai/prompt/Telecom%20Customer%20Churn%20Analysis%20Dashboard%20Red%20Indicators%20Dark%20Tech?nologo=true",
    results: ["Identified top 3 churn risk factors", "Visualized customer retention patterns"],
    demoLink: "https://app.powerbi.com/view?r=eyJrIjoiZGY0YTI1NTEtNWZiMi00ZDFkLWE1NzktNGVlZDEyMWVjODI2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection1fb684ae4f3f538b0b65",
    challenge: "The telecom provider faced rising customer attrition but lacked specific insights into *why* customers were leaving, making retention strategies a guessing game.",
    approach: "I cleaned and modeled customer demographic and usage data in Power BI. By analyzing contract types and support calls, I identified key churn indicators, allowing the retention team to target at-risk users."
  },
  {
    id: "hr-analysis",
    title: "HR Diversity Analysis",
    category: "Data Analytics",
    summary: "Gender equality and diversity tracking.",
    description: "An HR dashboard focused on visualizing workforce demographics, gender equality metrics, and diversity distribution across departments.",
    technologies: ["Excel", "Power BI", "HR Analytics"],
    imageUrl: "https://image.pollinations.ai/prompt/HR%20Diversity%20Analytics%20Dashboard%20People%20Icons%20Dark%20Mode%20Modern?nologo=true",
    results: ["Enhanced visibility into diversity metrics", "Supported data-driven HR policy changes"],
    demoLink: "https://app.powerbi.com/view?r=eyJrIjoiYWI3NWFmMGUtY2UzZS00OTc4LWJhNzAtNmE4ODM1YzdiYzdkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
    challenge: "HR leadership needed to audit workforce diversity to meet new compliance goals, but employee data was siloed across various spreadsheets and legacy systems.",
    approach: "I consolidated employee data into a cohesive Power BI data model. I visualized gender and diversity distribution across departments to pinpoint specific areas needing improvement."
  },
  {
    id: "mobile-sales-analysis",
    title: "Mobile Phone Sales Analysis",
    category: "Data Analytics",
    summary: "Sales performance trends and insights.",
    description: "Analyzed mobile phone sales data to track revenue trends, brand performance, and market share using Excel and Power BI.",
    technologies: ["Excel", "Power BI", "Sales Analytics"],
    imageUrl: "https://image.pollinations.ai/prompt/Mobile%20Phone%20Sales%20Analytics%20Charts%20Graphs%20Dark%20Mode%20Tech?nologo=true",
    results: ["Tracked top-performing brands", "Identified seasonal sales trends"],
    demoLink: "https://app.powerbi.com/view?r=eyJrIjoiYzEwMzE3YmItZTI3MS00ODJjLWEwOGUtOTlkYTk0NTVjMTU4IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
    challenge: "Sales managers needed to track brand performance and seasonal trends to improve inventory planning, but reporting was static and retrospective.",
    approach: "I processed sales transaction data in Excel and exported it to Power BI. I created time-series visualizations to forecast demand peaks and identify underperforming brands."
  },
  {
    id: "dannys-diner",
    title: "Danny's Diner Case Study",
    category: "Data Analytics",
    summary: "SQL-based customer behavior analysis.",
    description: "A comprehensive SQL case study analyzing customer visiting patterns and spending habits for a restaurant business.",
    technologies: ["SQL", "Database Querying", "Data Analysis"],
    imageUrl: "https://image.pollinations.ai/prompt/Restaurant%20Diner%20SQL%20Database%20Data%20Neon%20Sign%20Dark%20Analysis?nologo=true",
    results: ["Solved complex business questions via SQL", "Analyzed customer loyalty metrics"],
    repoLink: "https://github.com/Oluchi5/DATA-ANALYST-PORTFOLIO/blob/main/SQL/SQL%20Project/DANNYSDINER%20CASE-STUDY.sql",
    challenge: "A restaurant owner needed to understand customer visiting patterns and spending habits to launch a meaningful loyalty program, but the raw data was unorganized.",
    approach: "I utilized advanced SQL queries (Window functions, CTEs) to segment customers, calculate average spend per visit, and determine the most popular menu items to inform the menu strategy."
  },
  {
    id: "quantium-chips",
    title: "Quantium Chips Analysis",
    category: "Data Analytics",
    summary: "Retail strategy analysis using R.",
    description: "Analyzed retail transaction data using R to evaluate customer purchasing behavior and trial store performance.",
    technologies: ["R", "Statistical Analysis", "Data Mining"],
    imageUrl: "https://image.pollinations.ai/prompt/Potato%20Chips%20Retail%20Data%20Analysis%20R%20Programming%20Dark%20Mode?nologo=true",
    results: ["Performed A/B testing analysis", "Generated strategic retail insights"],
    repoLink: "https://github.com/Oluchi5/DATA-ANALYST-PORTFOLIO/blob/main/R/Quantium%20Chips.R",
    challenge: "A retail chain needed to evaluate the effectiveness of a trial store layout change on sales performance and determine if the results were statistically significant.",
    approach: "I used R for statistical analysis, performing A/B testing between trial and control stores. I calculated significance levels to determine if the sales uplift was valid or due to chance."
  },
  {
    id: "netflix-analysis",
    title: "Netflix Data Analysis",
    category: "Data Analytics",
    summary: "Content trends and insights on Netflix.",
    description: "Exploratory data analysis of the Netflix catalog to understand content distribution, genre popularity, and production trends over time.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    imageUrl: "https://image.pollinations.ai/prompt/Netflix%20Streaming%20Data%20Analysis%20Movies%20Charts%20Red%20Dark%20Mode?nologo=true",
    results: ["Visualized content growth trends", "Analyzed genre dominance by region"],
    repoLink: "https://github.com/Oluchi5/DATA-ANALYST-PORTFOLIO/blob/main/Python%20Projects/Netflix%20Data%20Analysis.ipynb",
    challenge: "A media study aimed to understand content trends, specifically genre popularity and runtime evolution over the last decade, to predict future content needs.",
    approach: "I performed Exploratory Data Analysis (EDA) in Python using Pandas and Matplotlib. I visualized the shift from movies to TV shows and identified regional genre preferences."
  },
  {
    id: "covid-analysis",
    title: "Nigeria COVID-19 Analysis",
    category: "Data Analytics",
    summary: "Pandemic impact visualization.",
    description: "Analyzed COVID-19 data in Nigeria to visualize infection rates, recovery trends, and regional impact using Python.",
    technologies: ["Python", "Data Visualization", "Pandas"],
    imageUrl: "https://image.pollinations.ai/prompt/COVID-19%20Virus%20Data%20Map%20Nigeria%20Analysis%20Dark%20Medical%20Tech?nologo=true",
    results: ["Tracked infection spread trends", "Provided data-driven health insights"],
    repoLink: "https://github.com/Oluchi5/DATA-ANALYST-PORTFOLIO/blob/main/Python%20Projects/Nigeria%20COVID-19%20Data%20Analysis%20using%20Python%20.ipynb",
    challenge: "Public health officials and the public needed clear, data-driven visualizations of infection spread to understand the urgency and impact of the pandemic.",
    approach: "I scraped and cleaned daily case data using Python. I built time-series plots to show infection rates, recovery curves, and regional hotspots to aid in public communication."
  },

  // --- AI & Automation Projects ---
  {
    id: "web-scraping-ebay",
    title: "E-Commerce Web Scraping",
    category: "AI & Automation",
    summary: "Automated product data extraction.",
    description: "Built a Python web scraper to extract product pricing, descriptions, and ratings from eBay for competitive analysis.",
    technologies: ["Python", "BeautifulSoup", "Web Scraping"],
    imageUrl: "https://image.pollinations.ai/prompt/Web%20Scraping%20Code%20E-commerce%20Shopping%20Cart%20Cyber%20Dark%20Matrix?nologo=true",
    results: ["Automated data collection for thousands of items", "Structured unstructured web data"],
    repoLink: "https://github.com/Oluchi5/DATA-ANALYST-PORTFOLIO/blob/main/Python%20Projects/WEB%20SCRAPPING%20E-%20COMMERCE%20SITE%20%20(EBAY).ipynb",
    challenge: "A retailer needed to monitor competitor pricing on eBay to adjust their own pricing strategy dynamically, but manual checking was impossible at scale.",
    approach: "I developed a Python script using BeautifulSoup to iterate through product pages, handling pagination and extracting price, rating, and shipping data into structured CSVs."
  },
  {
    id: "facial-features",
    title: "Computer Vision Facial Features",
    category: "AI & Automation",
    summary: "Real-time face, eye, and smile detection.",
    description: "This Python script uses OpenCV and Haar Cascade Classifiers to perform real-time face, eye, and smile (mouth) detection using webcam, Still Image and Video. The program identifies facial features in grayscale video frames and draws rectangles around detected faces, eyes, and smiles for visual feedback. It can be used for basic computer vision applications such as emotion recognition, security interfaces, or interactive installations.",
    technologies: ["Python", "OpenCV", "Haar Cascades", "Computer Vision"],
    imageUrl: "https://image.pollinations.ai/prompt/Computer%20Vision%20Face%20Detection%20Scanning%20AI%20HUD%20Cyberpunk?nologo=true",
    results: ["Real-time detection of Faces, Eyes, and Smiles", "Works on Webcam streams, Still Images, and Videos", "Immediate visual feedback with bounding boxes"],
    repoLink: "https://github.com/Oluchi5/DATA-SCIENTIST-PORTFOLIO/blob/main/Computer_Vision/Facial%20features%20Detection_computer%20vision%20.ipynb",
    challenge: "Developing a robust input system for an interactive installation that required real-time user engagement detection without expensive hardware.",
    approach: "I implemented OpenCV with Haar Cascade classifiers to process video streams. I optimized the detection loop to run in real-time, drawing bounding boxes around faces and smiles with minimal latency."
  },
  {
    id: "ocr-classification",
    title: "Multi-Input OCR Models",
    category: "AI & Automation",
    summary: "Deep Learning models for complex OCR tasks.",
    description: "Developed multi-input machine learning models to classify and extract text from complex documents. Focus was on handling varied formats and improving recognition accuracy for messy inputs.",
    technologies: ["Python", "TensorFlow/Keras", "OCR", "Deep Learning"],
    imageUrl: "https://image.pollinations.ai/prompt/OCR%20Text%20Scanning%20Document%20Processing%20AI%20Laser%20Dark%20Mode?nologo=true",
    results: ["Improved text extraction accuracy on low-quality scans", "Implemented multi-modal data processing"],
    repoLink: "https://github.com/Oluchi5/AI-ENGINEERING-PORTFOLIO/blob/main/AI_ENGINEER/Developing%20Multi-Input%20Models%20For%20OCR.ipynb",
    challenge: "Standard OCR tools failed to accurately transcribe text from scanned documents with mixed layouts, watermarks, and poor image quality.",
    approach: "I designed a custom Deep Learning pipeline using TensorFlow. I pre-processed images to enhance contrast and used a multi-input model architecture to treat image segments and layout context simultaneously."
  },
  {
    id: "email-llama",
    title: "Email Classification with Llama",
    category: "AI & Automation",
    summary: "Local LLM for secure email sorting.",
    description: "Implemented a local Llama model to classify incoming emails into categories (Support, Sales, Spam, Urgent) without sending data to external APIs, ensuring privacy and speed.",
    technologies: ["Llama 2/3", "Python", "LLMs", "NLP"],
    imageUrl: "https://image.pollinations.ai/prompt/AI%20Robot%20Sorting%20Email%20Server%20Glowing%20Data%20Stream%20Dark?nologo=true",
    results: ["Achieved 92% classification accuracy", "Zero data egress for privacy compliance"],
    repoLink: "https://github.com/Oluchi5/AI-ENGINEERING-PORTFOLIO/blob/main/AI_ENGINEER/Classifying%20Emails%20using%20Llama.ipynb",
    challenge: "The support team was overwhelmed by unclassified emails, and sending sensitive customer data to cloud APIs was prohibited due to strict privacy policies.",
    approach: "I deployed a local quantized Llama model. I fine-tuned the system prompt to categorize emails into 'Support', 'Sales', and 'Spam', achieving high accuracy with zero data egress."
  },
  {
    id: "car-reviews",
    title: "Car Review Analysis with LLMs",
    category: "AI & Automation",
    summary: "Sentiment analysis on product reviews.",
    description: "Leveraged Large Language Models to analyze thousands of car reviews, extracting sentiment, common feature requests, and safety concerns to guide product development.",
    technologies: ["LLMs", "Python", "Sentiment Analysis", "NLP"],
    imageUrl: "https://image.pollinations.ai/prompt/Car%20Automobile%20Review%20Data%20Analysis%20Hologram%20Futuristic%20Dark?nologo=true",
    results: ["Processed 50k+ reviews automatically", "Identified top 3 recurring mechanical issues"],
    repoLink: "https://github.com/Oluchi5/AI-ENGINEERING-PORTFOLIO/blob/main/AI_ENGINEER/Analyzing%20Car%20Reviews%20with%20LLMs.ipynb",
    challenge: "Product managers couldn't manually read 50,000+ customer reviews to find recurring safety defects and feature requests, leading to slow feedback loops.",
    approach: "I built an NLP pipeline using LLMs to summarize reviews and extract specific entities related to mechanical failures. I aggregated these insights to highlight top safety concerns instantly."
  },
  {
    id: "marketing-analyst-ai",
    title: "Digital Reporting Marketing Analyst AI",
    category: "AI & Automation",
    summary: "Automated marketing performance reporting.",
    description: "A comprehensive automation system that aggregates data from marketing channels, analyzes performance using AI, and generates visual reports for stakeholders.",
    technologies: ["Python", "Automation", "Data Visualization", "AI Reporting"],
    imageUrl: "https://image.pollinations.ai/prompt/Digital%20Marketing%20AI%20Analytics%20Dashboard%20Futuristic%20Screen%20Dark?nologo=true",
    results: ["Automated 100% of weekly reporting tasks", "Provided actionable insights on ad spend efficiency"],
    demoLink: "https://drive.google.com/file/d/1UL9AVQrWDqRdUukm5D-HtNQ_RcmecjGA/view?usp=drive_link",
    challenge: "Marketing analysts spent 10+ hours weekly manually copying data from various platforms into Excel reports, leading to errors and burnout.",
    approach: "I automated the workflow using Python scripts triggered by API calls. The system aggregates data, calculates KPIs, and auto-generates formatted reports for stakeholders."
  },
  {
    id: "rag-pinecone",
    title: "RAG Knowledge Assistant",
    category: "AI & Automation",
    summary: "AI Assistant using Pinecone & RAG.",
    description: "Built a Retrieval-Augmented Generation system allowing users to query internal knowledge bases. Utilized Pinecone for vector storage to ensure accurate context retrieval.",
    technologies: ["Pinecone", "LangChain", "OpenAI", "RAG"],
    imageUrl: "https://image.pollinations.ai/prompt/AI%20Brain%20Knowledge%20Base%20Neural%20Network%20Library%20Cyberpunk?nologo=true",
    results: ["Reduced information search time by 90%", "Seamlessly indexed hundreds of documents"],
    demoLink: "https://drive.google.com/file/d/17F5tYpih6ETMZ2poRhcMUPACFDlM17RD/view?usp=drive_link",
    challenge: "Employees struggled to find specific policy information buried in hundreds of internal PDF documents, resulting in compliance delays.",
    approach: "I created a RAG system using LangChain. I indexed documents into the Pinecone vector database, allowing the LLM to retrieve exact context and answer natural language queries accurately."
  },
  {
    id: "vet-receptionist",
    title: "AI Voice Receptionist (Oakfield Vet)",
    category: "AI & Automation",
    summary: "Telegram Bot for text and voice appointments.",
    description: "Designed a Telegram bot serving as an AI receptionist for a veterinary center. It handles booking inquiries via both text and voice messages, automating the scheduling process.",
    technologies: ["Telegram API", "Voice AI", "Automation", "Python"],
    imageUrl: "https://image.pollinations.ai/prompt/Veterinary%20Clinic%20AI%20Robot%20Dog%20Cat%20Receptionist%20Futuristic?nologo=true",
    results: ["handled 24/7 appointment queries", "Reduced front-desk workload significantly"],
    demoLink: "https://drive.google.com/file/d/1IcF_zxKc_uwL3NPUZwBWB26Fu7zrSbj8/view?usp=drive_link",
    challenge: "The vet clinic's front desk was missing calls during peak hours, and off-hours inquiries were going unanswered, leading to lost revenue.",
    approach: "I developed a Telegram bot integrated with Voice-to-Text AI. It parses voice notes to extract appointment details and confirms bookings automatically via the clinic's calendar API."
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification AI Agent",
    category: "AI & Automation",
    summary: "Automated lead scoring and engagement.",
    description: "An AI-driven agent designed to qualify leads by analyzing engagement and data points, prioritizing high-value prospects for the sales team.",
    technologies: ["AI Agents", "Automation", "CRM Integration"],
    imageUrl: "https://image.pollinations.ai/prompt/Sales%20Funnel%20AI%20Agent%20Lead%20Qualification%20Target%20Tech%20Dark?nologo=true",
    results: ["Increased sales team efficiency", "Prioritized top 20% of high-conversion leads"],
    demoLink: "https://drive.google.com/file/d/17djOz7TYi1kBgTbFxZ1XLUrsE09IyfiW/view?usp=sharing",
    challenge: "Sales reps were wasting time calling unqualified leads who had low intent to purchase, reducing overall close rates.",
    approach: "I built an autonomous AI agent that analyzes lead behavior data and scores them based on engagement. Only high-score leads are forwarded to the CRM for human follow-up."
  }
];
