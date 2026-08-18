export const profile = {
  name: 'Christian Omara',
  title: 'Junior Data Scientist · Machine Learning for Healthcare',
  location: 'Kampala, Uganda',
  email: 'mail.cardiosense@gmail.com',
  github: 'https://github.com/crisomara',
  linkedin: 'https://www.linkedin.com/in/omara-christian-kenneth',
  bio: [
    'I was born in Gulu, in Northern Uganda, and earned a Bachelor of Engineering in Biomedical and Mechatronics Engineering from Kyambogo University.',
    "My work sits at the intersection of machine learning and cardiac care — I'm especially interested in biomedical signal processing, model-based ML for diagnosis, and building tools that hold up in low-infrastructure settings.",
    "I'm currently focused on closing the diagnosis gap for Non-Communicable Diseases (NCDs) across Sub-Saharan Africa, and on epidemiology work around primordial prevention.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: 'heart' | 'waveform' | 'scale';
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: 'Wearable MI Detection System',
    description:
      'A low-cost, ML-powered wearable that detects and monitors early signs of myocardial infarction in real time — built to bridge the gap left by limited infrastructure and clinical specialists in Sub-Saharan Africa.',
    tags: ['Machine Learning', 'ECG', 'Wearables', 'FastAPI'],
    href: 'https://github.com/crisomara/kardiosense_website',
    icon: 'heart',
    highlight: 'HSB Grant · Innovate Africa',
  },
  {
    title: 'ecg-prototype-mvp',
    description:
      'ECG signal capture prototype built on an Arduino UNO R4 with an AD8232 sensor — the hardware groundwork for real-time cardiac monitoring.',
    tags: ['Arduino', 'AD8232', 'Signal Processing'],
    href: 'https://github.com/crisomara/ecg-prototype-mvp',
    icon: 'waveform',
  },
  {
    title: 'sheria_yangu',
    description:
      'A multi-agent system for legal document analysis, applying agentic ML workflows outside the healthcare domain.',
    tags: ['Multi-Agent Systems', 'Python', 'NLP'],
    href: 'https://github.com/crisomara/sheria_yangu',
    icon: 'scale',
  },
];

export type Achievement = {
  title: string;
  date: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    title: 'Innovation at National Science Week 2025',
    date: '2025',
    description:
      'Presented an AI-powered myocardial infarction detection system with a portable ECG device connected to a cloud-based AI model, alerting healthcare providers to early heart attack risk in real time.',
    href: 'https://lnkd.in/gmQZwB49',
    linkLabel: 'Read more on the Kyambogo website',
  },
  {
    title: 'Recipient of the HSB Grant, Innovate Africa',
    date: '2025',
    description:
      'Awarded through the HSB Research Training programme, marking a shift from curiosity to a sustained commitment to impactful, community-facing research.',
    href: 'https://www.linkedin.com/posts/hsbglobal-health_hsbglobal-hsbresearchchallenge-futureofhealth-activity-7366167540198215680-rpwP',
    linkLabel: 'View LinkedIn post',
  },
];

export const techStack: { category: string; items: string[] }[] = [
  { category: 'Languages & Data', items: ['Python', 'NumPy', 'Pandas', 'SciPy', 'Matplotlib'] },
  { category: 'ML / AI', items: ['scikit-learn', 'TensorFlow', 'Anaconda'] },
  { category: 'Backend & Infra', items: ['FastAPI', 'Firebase', 'SQLite', 'MySQL'] },
  { category: 'Hardware', items: ['Arduino'] },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
