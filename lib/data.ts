export interface Company {
  id?: string;
  name?: string;
  description?: string;
  founded?: number;
  website?: string;
  image?: string;
  categories?: string[];
  fundingStage?: string;
  tagline?: string;
}

export const categories = [
  "Natural Language Processing",
  "Computer Vision",
  "Machine Learning",
  "Robotics",
  "Healthcare",
  "Finance",
  "Education",
  "Enterprise",
  "Sports",
  "Gaming"
];

export const fundingStages = [
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "Public",
  "unknown"
];

export const companies: Company[] = [
  {
    id: "1",
    name: "OpenAI",
    description: "Leading artificial intelligence research laboratory developing safe and beneficial AI.",
    founded: 2015,
    website: "https://openai.com",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    categories: ["Natural Language Processing", "Machine Learning"],
    fundingStage: "Series C+"
  },
  {
    id: "2",
    name: "DeepMind",
    description: "Research company focusing on artificial intelligence development and its real-world applications.",
    founded: 2010,
    website: "https://deepmind.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    categories: ["Machine Learning", "Healthcare", "Enterprise"],
    fundingStage: "Series C+"
  },
  {
    id: "3",
    name: "Anthropic",
    description: "AI research company focused on developing safe and ethical AI systems.",
    founded: 2021,
    website: "https://anthropic.com",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800",
    categories: ["Natural Language Processing", "Machine Learning"],
    fundingStage: "Series B"
  },
  {
    id: "4",
    name: "Scale AI",
    description: "Data platform for AI, providing high-quality training data for machine learning applications.",
    founded: 2016,
    website: "https://scale.com",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    categories: ["Computer Vision", "Machine Learning", "Enterprise"],
    fundingStage: "Series C+"
  },
  {
    id: "5",
    name: "Cohere",
    description: "Platform providing access to advanced language models and NLP tools.",
    founded: 2019,
    website: "https://cohere.ai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    categories: ["Natural Language Processing", "Enterprise"],
    fundingStage: "Series B"
  },
  {
    id: "6",
    name: "Stability AI",
    description: "Open-source artificial intelligence company focusing on generative AI models.",
    founded: 2020,
    website: "https://stability.ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    categories: ["Computer Vision", "Machine Learning"],
    fundingStage: "Series A"
  },
  {
    name: "OpenAI",
    categories: ["Artificial Intelligence Research"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Discovering and enacting the path to safe artificial general intelligence",
    description: "OpenAI is an AI research and deployment company, aiming to ensure that artificial general intelligence (AGI) benefits all of humanity. They are known for developing advanced language models like GPT-3 and GPT-4, as well as other AI systems like DALL-E and ChatGPT.",
    fundingStage: "unknown"
  },
  {
    name: "DeepMind",
    categories: ["Artificial Intelligence Research"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Solving intelligence to advance science and benefit humanity",
    description: "DeepMind, a subsidiary of Alphabet Inc., focuses on developing advanced AI systems to solve complex problems. They are renowned for creating AlphaGo, the first computer program to defeat a professional human Go player, and for their work in protein folding prediction with AlphaFold.",
    fundingStage: "unknown"
  },
  {
    name: "Anthropic",
    categories: ["AI Safety and Ethics"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Building reliable, interpretable, and steerable AI systems",
    description: "Anthropic is dedicated to ensuring the development of safe and ethical AI. They focus on creating AI systems that are more reliable, interpretable, and aligned with human values. Their research includes work on large language models and AI safety techniques.",
    fundingStage: "unknown"
  },
  {
    name: "Nvidia",
    categories: ["Hardware and AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Powering the AI revolution",
    description: "While primarily known for graphics processing units (GPUs), Nvidia has become a major player in AI hardware and software. They provide powerful computing platforms for AI training and inference, and develop AI technologies for various applications including autonomous vehicles and robotics.",
    fundingStage: "unknown"
  },
  {
    name: "IBM Watson",
    categories: ["Enterprise AI Solutions"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "AI for smarter business",
    description: "IBM Watson offers a suite of enterprise-ready AI services, applications, and tools. It provides solutions for natural language processing, computer vision, and machine learning, helping businesses integrate AI into their operations and decision-making processes.",
    fundingStage: "unknown"
  },
  {
    name: "Clarifai",
    categories: ["Computer Vision AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "AI with a vision",
    description: "Clarifai specializes in visual recognition AI, offering powerful image and video analysis tools. Their technology is used in various industries for tasks such as content moderation, product recognition, and facial recognition.",
    fundingStage: "unknown"
  },
  {
    name: "DataRobot",
    categories: ["Automated Machine Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "AI you can trust",
    description: "DataRobot provides an automated machine learning platform that enables users to build and deploy accurate predictive models quickly. Their technology democratizes data science, making AI accessible to a wider range of businesses and industries.",
    fundingStage: "unknown"
  },
  {
    name: "H2O.ai",
    categories: ["Open Source AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "AI to do good",
    description: "H2O.ai is known for its open-source machine learning platform. They offer tools for data scientists and developers to create AI models efficiently, focusing on making AI more accessible and interpretable.",
    fundingStage: "unknown"
  },
  {
    name: "SenseTime",
    categories: ["Computer Vision and Deep Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Uplifting the way we live with AI",
    description: "SenseTime is a leading AI software company specializing in computer vision and deep learning. They develop technologies for facial recognition, image recognition, and autonomous driving, among other applications.",
    fundingStage: "unknown"
  },
  {
    name: "Palantir Technologies",
    categories: ["Big Data Analytics"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Turning data into knowledge",
    description: "Palantir Technologies specializes in big data analytics, providing software platforms for integrating, visualizing, and analyzing large datasets. Their AI-powered solutions are used in various sectors, including government, finance, and healthcare.",
    fundingStage: "unknown"
  },
  {
    name: "C3.ai",
    categories: ["Enterprise AI Software"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Accelerating digital transformation",
    description: "C3.ai offers a comprehensive suite of enterprise AI applications, focusing on predictive maintenance, fraud detection, and supply chain optimization. They serve various industries, helping organizations leverage AI for improved efficiency and decision-making.",
    fundingStage: "unknown"
  },
  {
    name: "Databricks",
    categories: ["Big Data and AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Unified analytics for data and AI",
    description: "Databricks provides a unified analytics platform for data engineering, machine learning, and business analytics. Their technology helps organizations process and analyze large datasets, enabling data-driven decision making and AI model development.",
    fundingStage: "unknown"
  },
  {
    name: "UiPath",
    categories: ["Robotic Process Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Accelerating human achievement",
    description: "UiPath is a leader in robotic process automation (RPA), offering AI-powered software robots that can learn, mimic, and execute rules-based business processes. Their technology helps organizations automate repetitive tasks and improve operational efficiency.",
    fundingStage: "unknown"
  },
  {
    name: "Graphcore",
    categories: ["AI Hardware"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Making AI compute more efficient",
    description: "Graphcore develops Intelligence Processing Units (IPUs) specifically designed for AI and machine learning applications. Their hardware accelerates AI computations, enabling faster training and inference for complex AI models.",
    fundingStage: "unknown"
  },
  {
    name: "Scale AI",
    categories: ["AI Data Platform"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The data platform for AI",
    description: "Scale AI provides high-quality training data for AI applications. They offer services for data annotation, data curation, and evaluation datasets, helping companies build more accurate and reliable AI models across various domains.",
    fundingStage: "unknown"
  },
  {
    name: "Darktrace",
    categories: ["Cybersecurity AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The world's leading AI for cyber defense",
    description: "Darktrace uses AI and machine learning to detect and respond to cyber threats in real-time. Their self-learning technology can identify novel threats and anomalies in network behavior, providing advanced protection for organizations.",
    fundingStage: "unknown"
  },
  {
    name: "Anduril Industries",
    categories: ["Defense AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Transforming U.S. & allied military capabilities",
    description: "Anduril Industries develops AI-powered defense systems, including autonomous drones and sensor networks. Their technology aims to enhance military and border security capabilities through advanced AI and robotics.",
    fundingStage: "unknown"
  },
  {
    name: "Tempus",
    categories: ["Healthcare AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Making precision medicine a reality",
    description: "Tempus uses AI to analyze clinical and molecular data to provide personalized cancer care. Their platform helps physicians make data-driven treatment decisions, advancing the field of precision medicine.",
    fundingStage: "unknown"
  },
  {
    name: "Vicarious",
    categories: ["Robotics AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Building human-level AI",
    description: "Vicarious focuses on developing artificial general intelligence for robotics applications. Their research aims to create AI systems that can learn and adapt like humans, with potential applications in manufacturing, logistics, and beyond.",
    fundingStage: "unknown"
  },
  {
    name: "Recursion Pharmaceuticals",
    categories: ["Drug Discovery AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Decoding biology to radically improve lives",
    description: "Recursion Pharmaceuticals uses AI and machine learning to accelerate drug discovery and development. Their platform combines automated microscopy, cellular biology, and AI to identify potential new treatments for various diseases.",
    fundingStage: "unknown"
  },
  {
    name: "Wolf3d",
    categories: ["Gaming"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The World's Leading Avatar Platform",
    description: "Wolf3D specializes in creating personalized 3D avatars for video games and virtual reality through their Ready Player Me platform, which generates avatars from a single selfie.",
    fundingStage: "unknown"
  },
  {
    name: "Fliki",
    categories: ["AI Voice Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Turn text into videos with AI voices",
    description: "Fliki is an AI-powered text-to-video generator that allows users to create engaging videos quickly and easily, making it ideal for social media content. Users can input text, or even blog posts, and Fliki converts this content into videos with lifelike voiceovers.",
    fundingStage: "unknown"
  },
  {
    name: "Meshy.ai",
    categories: ["3d Model Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Create stunning 3d models with ai",
    description: "The platform features AI-driven texturing tools, support for multiple art styles, and the ability to create a wide range of models from characters to objects. Meshy AI provides an intuitive interface with options for refining and customizing models.",
    fundingStage: "unknown"
  },
  {
    name: "Coda",
    categories: ["AI Voice Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Turn text into videos with AI voices",
    description: "Coda is an AI-powered text-to-video generator that allows users to create engaging videos quickly and easily, making it ideal for social media content. Users can input text, or even blog posts, and Coda converts this content into videos with lifelike voiceovers.",
    fundingStage: "unknown"
  },
  {
    name: "Blender Foundation",
    categories: ["3d Model Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Create stunning 3d models with ai",
    description: "The platform features AI-driven texturing tools, support for multiple art styles, and the ability to create a wide range of models from characters to objects. Blender Foundation provides an intuitive interface with options for refining and customizing models.",
    fundingStage: "unknown"
  },
  {
    name: "Hugging Face",
    categories: ["AI Voice Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Turn text into videos with AI voices",
    description: "Hugging Face is an AI-powered text-to-video generator that allows users to create engaging videos quickly and easily, making it ideal for social media content. Users can input text, or even blog posts, and Hugging Face converts this content into videos with lifelike voiceovers.",
    fundingStage: "unknown"
  },
  {
    name: "Synthesia",
    categories: ["AI Voice Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The #1 AI video communication platform",
    description: "Synthesia offers over 400 AI voices in 130+ languages, along with 160+ customizable AI avatars. Synthesia's key features include AI-powered script generation, voice cloning capabilities, and seamless integration with existing content management systems.",
    fundingStage: "unknown"
  },
  {
    name: "Wysa",
    categories: ["Mental Health"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Mental Health, redefined",
    description: "Wysa is designed as an AI-powered chatbot for mental health conversations, helping people with issues like depression and anxiety. Wysa has conducted over half a billion conversations with more than five million users across 95 countries. The app offers an AI chatbot that provides anonymous, stigma-free support, mood tracking, and self-help exercises designed to improve symptoms of depression and anxiety.",
    fundingStage: "unknown"
  },
  {
    name: "Cursor.ai",
    categories: ["AI Code Editor"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Built to make you extraordinary productive, Cursor is the best way to code with AI",
    description: "Cursor is an AI-powered code editor that helps developers write code faster and more efficiently. The platform offers features like code completion, error detection, and code suggestions, making it easier for developers to write high-quality code.",
    fundingStage: "unknown"
  },
  {
    name: "Exsientia",
    categories: ["AI Drug Discovery"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", 
    tagline: "Inventors of the worls best AI designed drugs to enter clinical trials",
    description: "Exscientia has expanded its AI platform to develop novel therapeutic antibodies through generative AI design and was the first to bring an AI-designed drug candidate to clinical trials in early 2020. The company has also entered into a partnership with the Gates Foundation to develop AI-designed drugs for neglected diseases.",
    fundingStage: "unknown"
  },
  {
    name: "BenevolentAI",
    categories: ["AI Drug Discovery"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "AI enabled drug discovery",
    description: "BenevolentAI utilizes its AI-enabled platform, the Benevolent Platform™. The platform analyzes vast biomedical data, employing machine learning to create a multidimensional representation of human biology across various diseases.",
    fundingStage: "unknown"
  },
  {
    name: "Fakespot",
    categories: ["Fake reviews detection"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Use AI to detect fake reviews and scams",
    description: "Fakespot is an AI-powered tool designed to help consumers identify fake reviews and counterfeit products when shopping online. Its primary goal is to improve transparency and reliability in e-commerce.",
    fundingStage: "unknown"
  },
  {
    name: "Vivint Smart Home AI",
    categories: ["Smart Home"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Smarter Security, Professionally installed",
    description: "Vivint Smart Home is a provider of smart home security and automation solutions. They offer a range of products, including home security systems, smart security cameras, smart locks, and smart lighting, all designed to enhance home safety and convenience.",
    fundingStage: "unknown"
  },
  {
    name: "Polybee",
    categories: ["Agriculture"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Enabling data driven decision making",
    description: "Polybee is an agtech startup that uses AI-powered mini drones for automated pollination and digital phenotyping in indoor agriculture, employing color camera sensors and AI software to vibrate flowers without direct contact.",
    fundingStage: "unknown"
  },
  {
    name: "Colossyan",
    categories: ["AI Video Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The AI video creator for your business needs",
    description: "he platform features AI presenters, text-to-speech capabilities in over 70 languages, and tools for adding images, music, and animations, making it ideal for employee onboarding and internal communications.",
    fundingStage: "unknown"
  },
  {
    name: "Beatoven.ai",
    categories: ["AI Music Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Find the tune that carries your story",
    description: "The platform offers text-to-music functionality, allowing users to generate custom tracks based on their ideas, with options for prompt-based customization and adjustments to tempo, instruments, and other musical elements.",
    fundingStage: "unknown"
  },
  {
    name: "Dashtoon",
    categories: ["AI Comic Creation Platform"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Bring Your World to Life!",
    description: "Users can create consistent designs across panels and explore different genres. The platform utilizes advanced AI technology, including Azure's infrastructure, to generate over 50,000 images daily and offers features like auto-coloring and text bubble insertion.",
    fundingStage: "unknown"
  },
  {
    name: "Coffee Robot",
    categories: ["Enterprise Robotics"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The most advanced fully automated café system",
    description: "Cafe X Technologies specializes in developing robotic coffee bars that offer fully autonomous, AI-powered coffee service, capable of serving over 100 drinks per hour with minimal daily labor.",
    fundingStage: "unknown"
  },
  {
    name: "SwingVision",
    categories: ["Sports", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Elevate your game using just your iphone",
    description: "SwingVision is an AI-powered tennis analysis app that provides real-time video analysis for players, tracking every shot and measuring ball velocity to generate professional-quality statistics and highlights.",
    website: "https://swing.tennis/",
    fundingStage: "unknown"
  },
  {
    name: "Granola",
    categories: ["Saaas"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "The AI notepad for people in back-to-back meetings",
    description: "Granola is an AI-powered notepad designed to enhance meeting note-taking by combining user input with AI assistance. It transcribes meetings in the background while users type their own notes, which are organized and enhanced by AI afterward.",
    website: "https://www.granola.ai/",
    fundingStage: "Series A"
  },
  {
    name: "Fracta",
    categories: ["Utilies", "SaaS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Predict breaks, target leaks and reduce Non Revenue Water in as little as 45 days",
    description: "Fracta is a California-based startup that utilizes artificial intelligence and machine learning to predict pipe failures in water distribution systems, enhancing asset management for utilities.",
    website: "https://www.fracta.ai/",
    fundingStage: "unknown"
  },
  {
    name: "Hebbia",
    categories: ["Document Search", "SaaS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "Add the power of generative AI to your firm",
    description: "Hebbia is an AI-powered platform revolutionizing document search and analysis. Its Matrix AI technology enables processing of vast datasets across multiple document types, featuring an infinite context window.",
    website: "https://www.hebbia.ai/",
    fundingStage: "Series B"
  },
  {
    name: "Obico",
    categories: ["3d Printing"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tagline: "AI Failure Detection Gives You 3D Printing Peace of Mind",
    description: "Obico provides real-time monitoring of 3D prints using a camera and advanced machine learning algorithms to detect issues such as spaghetti monsters. The platform highlights potential failures in the print process and can automatically pause prints to prevent material waste.",
    website: "https://www.obico.io/",
    fundingStage: "unknown"
  }
];