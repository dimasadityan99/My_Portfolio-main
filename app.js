// Static Asset Paths (Direct paths relative to index.html)
const BYDImage = 'src/assets/BYD.png';
const GMFImage = 'src/assets/GMF.png';
const JukeSosmedImage = 'src/assets/Juke_Sosmed.png';
const Galeri24Image = 'src/assets/Galeri24.png';
const HopsSosmedImage = 'src/assets/Hops_Sosmed.png';
const ProfileImage = 'src/assets/Profile.png';
const LanyardImage = 'src/assets/Lanyard.jpeg';

// Data Structures
const PROJECTS = [
  {
    id: '01',
    title: 'Website DMS BYD ERP System',
    category: 'UI/UX',
    badge: 'UI/UX Design',
    subtitle: 'Enterprise Document Management System for Procurement & Digital Marketing',
    image: BYDImage,
    tags: ['Figma', 'Design System', 'Fintech', 'Prototyping'],
    metrics: 'Stakeholder Approved Design',
    year: '2026',
    overview: 'Designed an Odoo ERP-based Document Management System (DMS) that streamlines document workflows for Procurement and Digital Marketing CRM. Collaborated with Business Analysts and Developers to deliver implementation-ready UI/UX designs.',
    problem: 'The existing document management process involved complex workflows and lacked a structured user experience, making daily operations less efficient for multiple business teams.',
    solution: 'Translated business requirements into user flows, wireframes, prototypes, and high-fidelity UI designs that aligned with stakeholder expectations and were approved without scope revisions.',
    link: 'https://app.notion.com/p/dimasann/BYD-ERP-System-DMS-Website-by-Odoo-94a22241648e83dba2e501acdd792196?source=copy_link'
  },
  {
    id: '02',
    title: 'Website PMO PT GMF AeroAsia',
    category: 'Frontend',
    badge: 'Frontend Dev',
    subtitle: 'Internal Project Monitoring Dashboard for Enterprise Operations',
    image: GMFImage,
    tags: ['HTML', 'CSS', 'Frontend', 'Dashboard'],
    metrics: 'Enterprise Internal System',
    year: '2022',
    overview: 'Developed the frontend interface for an internal PMO web application that helps project teams monitor progress, manage project information, and improve operational visibility.',
    problem: 'Project monitoring relied on fragmented information, making it difficult for teams to track progress efficiently.',
    solution: 'Built responsive frontend pages with a clear information hierarchy to improve usability, simplify project tracking, and support daily internal operations.',
    link: 'https://app.notion.com/p/dimasann/Project-Documentation-Website-Project-Monitoring-Office-PT-GMF-AeroAsia-Tbk-d2b85754b4f14b6dad48083b18c3b295?source=copy_link'
  },
  {
    id: '03',
    title: 'Juke Solutions Social Media',
    category: 'Graphic Design',
    badge: 'Graphic Design',
    subtitle: 'Brand & Social Media Content for Technology Company',
    image: JukeSosmedImage,
    tags: ['Brand Identity', 'Graphic Design', 'Social Media', 'Canva', 'ChatGPT'],
    metrics: '10× Social Media Growth',
    year: '2026',
    overview: 'Created engaging visual content and social media assets to strengthen Juke Solutions branding and improve digital engagement across multiple communication channels.',
    problem: 'The company required consistent visual communication to strengthen brand awareness and present a professional identity online.',
    solution: 'Designed marketing assets with consistent branding, visual hierarchy, and engaging layouts that supported the company’s digital communication strategy.',
    link: 'https://app.notion.com/p/dimasann/Juke-Solutions-Social-Media-3a722241648e80cb95a9d0ac6367d084?source=copy_link'
  },
  {
    id: '04',
    title: 'Website Procurement Galeri 24',
    category: 'UI/UX',
    badge: 'UI/UX & Frontend',
    subtitle: 'Threat intelligence platform for cloud SOC teams',
    image: Galeri24Image,
    tags: ['Figma', 'Odoo ERP', 'UX Research', 'Wireframing'],
    metrics: 'Go-Live in 3 Months',
    year: '2026',
    overview: 'Designed an enterprise Procurement System within Odoo ERP, covering Dashboard, Tender, and Vendor Management features through close collaboration with stakeholders and developers.',
    problem: 'The procurement workflow involved multiple stakeholders and required a user-friendly interface to simplify complex purchasing activities.',
    solution: 'Conducted UX research, identified business requirements, and designed implementation-ready interfaces that supported successful project delivery within three months.',
    link: 'https://app.notion.com/p/dimasann/Website-Procurement-Galeri24-33422241648e80969c7fcf67458f9b4b?source=copy_link'
  },
  {
    id: '05',
    title: 'Hops Bakery Social Media',
    category: 'Graphic Design',
    badge: 'Brand & Web',
    subtitle: 'Brand Identity & Digital Marketing for Local Bakery',
    image: HopsSosmedImage,
    tags: ['Brand Identity', 'Graphic Design', 'Meta Ads', 'Social Media'],
    metrics: '10× Followers & 2× Eid Orders',
    year: '2025',
    overview: 'Led branding and digital marketing initiatives by developing visual identity, social media content, promotional campaigns, and digital advertising strategies to increase business growth.',
    problem: 'The bakery needed stronger brand recognition and more effective digital marketing to reach new customers and increase seasonal sales.',
    solution: 'Developed a consistent visual identity, created promotional content, and executed Meta Ads campaigns that significantly increased audience growth and more than doubled Eid hamper orders.',
    link: 'https://app.notion.com/p/dimasann/Hops-Bakery-Social-Media-3a722241648e8041ba1ac959afa49dd3?source=copy_link'
  }
];

const EXPERIENCES = [
  {
    num: '01',
    role: 'UI/UX Designer',
    company: 'PT. Juke Solutions (BYD Project)',
    period: 'Feb 2026 - Jun 2026',
    description: 'Designed UI/UX for an Odoo-based Document Management System (DMS), collaborating with stakeholders and developers to transform business requirements into implementation-ready user interfaces.',
    impact: 'Translated business requirements into intuitive user experiences.',
    skills: ['Design Systems', 'Figma', 'React', 'UX Research', 'Prototyping', 'Odoo']
  },
  {
    num: '02',
    role: 'UI/UX Designer & Frontend Developer',
    company: 'PT Juke Solutions (Galeri 24)',
    period: 'Dec 2025 - Feb 2026',
    description: 'Designed UI for an Odoo-based Procurement System, conducting UX discovery with stakeholders and delivering implementation-ready interfaces that supported a successful project Go-Live.',
    impact: 'Supported the successful Go-Live of the procurement platform.',
    skills: ['Design Systems', 'HTML/CSS', 'JavaScript', 'Odoo', 'Prototyping']
  },
  {
    num: '03',
    role: 'Co-Founder – Brand & Digital Design',
    company: 'Hops Bakery',
    period: 'Jul 2023 - Dec 2025',
    description: 'Built the brand identity and managed digital marketing through social media, graphic design, and Meta Ads, growing the audience and increasing customer engagement and sales.',
    impact: 'Grew social media audience by 10× and increased Eid hamper orders.',
    skills: ['Brand Identity', 'Social Media Marketing', 'Canva', 'Content Creation']
  }
];

const TOOLS = [
  { name: 'Figma', category: 'Design', color: '#F24E1E' },
  { name: 'VS Code', category: 'Dev', color: '#007ACC' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#06B6D4' },
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Three.js', category: '3D/WebGL', color: '#00FF66' },
  { name: 'Framer Motion', category: 'Animation', color: '#E100FF' },
  { name: 'TypeScript', category: 'Dev', color: '#3178C6' },
  { name: 'Claude AI', category: 'Workflow', color: '#D97706' },
  { name: 'ChatGPT', category: 'Workflow', color: '#10A37F' },
  { name: 'Notion', category: 'Productivity', color: '#FFFFFF' }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Amar Maruf',
    role: 'Cyber Security at Pertamina',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFO7rzDPTeX2w/profile-displayphoto-shrink_400_400/B56ZcezAjsHUAo-/0/1748568378788?e=1786579200&v=beta&t=7JnZ9X-ZKlhFVrhsOZaDifFfTy8QSxDEoWzy4KFPSkI',
    quote: 'Dimas has a strong ability to translate business requirements into intuitive and implementation-ready designs. He communicates effectively with cross-functional teams and consistently delivers user-focused solutions.',
    rating: 5,
    stat: 'Business-Oriented Design'
  },
  {
    id: 2,
    name: 'Malik',
    role: 'Odoo Developer at PT Juke Solutions',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFWsA4bRX79BA/profile-displayphoto-scale_400_400/B56Z1q63TLHgAg-/0/1775615313433?e=1786579200&v=beta&t=yfIQKTtz_LE0qlIZOKohoandwkTtLUskKRjprA0DaTM',
    quote: 'Working with Dimas made the development process more efficient. His designs are well-structured, consistent, and include clear documentation that simplifies implementation within the Odoo ERP system.',
    rating: 5,
    stat: 'Developer-Friendly Design'
  },
  {
    id: 3,
    name: 'Lina Amalia',
    role: 'Social Media Specialist at Grab Indonesia',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHeFC3sgHODLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678699349668?e=1786579200&v=beta&t=hqL_tSrwHvKffrWe2g1fUG8DWJHjvGpeTC_K3lm3WRE',
    quote: 'Dimas combines creative thinking with a solid understanding of business goals. His designs are not only visually appealing but also effective in strengthening brand communication and enhancing the overall user experience.',
    rating: 5,
    stat: 'Creative Problem Solver'
  }
];

const ROLES = ['Product Designer', 'UI/UX Designer', 'Frontend Dev', 'Graphic Designer'];

// Initialize Layout Components
document.addEventListener('DOMContentLoaded', () => {
  // Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Populate Tools Marquee
  const marqueeContainer = document.getElementById('marquee-container');
  if (marqueeContainer) {
    const doubleTools = [...TOOLS, ...TOOLS];
    doubleTools.forEach((tool) => {
      const toolEl = document.createElement('div');
      toolEl.className = 'flex items-center gap-3 px-5 py-3 bg-zinc-900 border-2 border-zinc-800 rounded-xl hover:border-emerald-500 transition-all duration-300 hover:scale-105 group cursor-pointer';
      toolEl.innerHTML = `
        <span class="w-3 h-3 rounded-full" style="background-color: ${tool.color}"></span>
        <span class="font-mono font-bold text-sm text-zinc-300 group-hover:text-white">${tool.name}</span>
        <span class="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">${tool.category}</span>
      `;
      marqueeContainer.appendChild(toolEl);
    });
  }

  // Populate Experience Timeline
  const experienceTimeline = document.getElementById('experience-timeline');
  if (experienceTimeline) {
    EXPERIENCES.forEach((exp) => {
      const expEl = document.createElement('div');
      expEl.className = 'relative p-6 sm:p-8 bg-zinc-900 border-2 border-zinc-800 rounded-2xl hover:border-emerald-500 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(34,197,94,0.3)] group velocity-card';

      const skillsHTML = exp.skills.map(skill => `<span class="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-mono rounded">${skill}</span>`).join('');

      expEl.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div class="md:col-span-2 flex md:flex-col justify-between items-start">
            <span class="text-3xl font-mono font-black text-emerald-400 bg-zinc-950 px-3 py-1 rounded border border-zinc-800">${exp.num}</span>
            <span class="text-xs font-mono text-zinc-400 mt-2">${exp.period}</span>
          </div>
          <div class="md:col-span-7 space-y-3">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">${exp.role}</h3>
              <p class="text-sm font-mono text-cyan-400 mt-0.5">${exp.company}</p>
            </div>
            <p class="text-sm text-zinc-300 leading-relaxed">${exp.description}</p>
            <div class="p-3 bg-zinc-950 border border-emerald-500/30 rounded-lg text-xs font-mono text-emerald-400">
              ⚡ Impact: ${exp.impact}
            </div>
          </div>
          <div class="md:col-span-3 flex flex-wrap gap-1.5 justify-start md:justify-end">
            ${skillsHTML}
          </div>
        </div>
      `;
      experienceTimeline.appendChild(expEl);
    });
  }

  // Populate Testimonials
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (testimonialsGrid) {
    TESTIMONIALS.forEach((t) => {
      const starsHTML = Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join('');
      const cardEl = document.createElement('div');
      cardEl.className = 'p-6 bg-zinc-900 border-2 border-zinc-800 rounded-2xl relative space-y-4 hover:border-emerald-500 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] velocity-card';
      cardEl.innerHTML = `
        <div class="flex items-center gap-1 text-amber-400">${starsHTML}</div>
        <p class="text-zinc-300 text-sm leading-relaxed italic">"${t.quote}"</p>
        <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-emerald-400" />
            <div>
              <h4 class="font-bold text-white text-sm">${t.name}</h4>
              <p class="text-[11px] text-zinc-400 font-mono">${t.role}</p>
            </div>
          </div>
        </div>
        <div class="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded text-[11px] font-mono text-emerald-400 inline-block">${t.stat}</div>
      `;
      testimonialsGrid.appendChild(cardEl);
    });
  }

  // Initialize Scroll Velocity Variables
  initScrollVelocity();

  // Initialize Typing Loop
  initRoleTypist();

  // Initialize Copy Email Buttons
  initCopyEmail();

  // Initialize Three.js Badge
  initInteractiveBadge();

  // Initialize Project Carousel and Modal
  initProjectCarousel();

  // Initialize Smooth Scrolling Navigation
  initSmoothScroll();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// 1. Scroll Velocity Calculator (Enhanced with Lerp + Skew + Section Entrance)
function initScrollVelocity() {
  let lastScrollY = window.scrollY;
  let lastTime = performance.now();
  let rawVelocity = 0;
  let smoothVelocity = 0;  // lerped velocity for silky transitions
  let displayedDrift = 0; // further lerped for CSS output

  const LERP_FACTOR = 0.10;  // how fast velocity catches up (lower = smoother)
  const DISPLAY_LERP = 0.08; // how fast CSS property updates (extra smooth)

  const lerp = (a, b, t) => a + (b - a) * t;

  const updateVelocity = () => {
    const now = performance.now();
    const deltaTime = Math.max(8, now - lastTime);
    const deltaScroll = window.scrollY - lastScrollY;

    // Raw instantaneous velocity (px/ms)
    rawVelocity = deltaScroll / deltaTime;

    // Smooth lerp toward raw velocity — creates inertia
    smoothVelocity = lerp(smoothVelocity, rawVelocity, LERP_FACTOR);

    // Clamp drift to [-1, 1] range for CSS usage
    const targetDrift = Math.max(-1, Math.min(1, smoothVelocity * 0.06));

    // Extra lerp for display property — removes any jitter
    displayedDrift = lerp(displayedDrift, targetDrift, DISPLAY_LERP);

    document.documentElement.style.setProperty('--scroll-velocity', displayedDrift.toFixed(4));
    document.documentElement.style.setProperty('--scroll-velocity-abs', Math.abs(displayedDrift).toFixed(4));

    // Skew: subtle cinematic tilt while scrolling fast
    const skewDeg = Math.max(-1.2, Math.min(1.2, displayedDrift * -1.8));
    document.documentElement.style.setProperty('--scroll-skew', skewDeg.toFixed(4));

    lastScrollY = window.scrollY;
    lastTime = now;
    requestAnimationFrame(updateVelocity);
  };

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    requestAnimationFrame(updateVelocity);
    initSectionEntrance();
  }
}

// Section Entrance Observer — slides sections in as they enter the viewport
function initSectionEntrance() {
  const targets = document.querySelectorAll(
    'section, .velocity-card, #experience-timeline > div, #testimonials-grid > div'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sv-visible');
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => {
    el.classList.add('sv-hidden');
    observer.observe(el);
  });
}

// 2. Typing Role Animation
function initRoleTypist() {
  const roleEl = document.getElementById('role-typist');
  if (!roleEl) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = ROLES[roleIndex];
    if (isDeleting) {
      charIndex--;
      typingDelay = 50;
    } else {
      charIndex++;
      typingDelay = 100;
    }

    roleEl.innerHTML = `${currentRole.substring(0, charIndex)}<span class="animate-pulse text-white">_</span>`;

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = 2000; // Hold at the end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
      typingDelay = 500; // Delay before typing next role
    }

    setTimeout(type, typingDelay);
  }

  setTimeout(type, 1000);
}

// 3. Copy Email Functionality
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');
  const copyIcon = document.getElementById('copy-email-icon');

  const footerCopyBtn = document.getElementById('footer-copy-email-btn');
  const footerCopyText = document.getElementById('footer-copy-email-text');

  const emailStr = 'dimasadityan99@gmail.com';

  function handleCopy(buttonType) {
    navigator.clipboard.writeText(emailStr).then(() => {
      if (buttonType === 'hero') {
        copyText.textContent = 'Email Copied!';
        if (copyIcon) {
          copyIcon.setAttribute('data-lucide', 'check');
          if (window.lucide) window.lucide.createIcons();
        }
        setTimeout(() => {
          copyText.textContent = 'Copy Email';
          if (copyIcon) {
            copyIcon.setAttribute('data-lucide', 'copy');
            if (window.lucide) window.lucide.createIcons();
          }
        }, 3000);
      } else {
        const originalText = footerCopyText.textContent;
        footerCopyText.textContent = 'Copied to Clipboard!';
        setTimeout(() => {
          footerCopyText.textContent = emailStr;
        }, 3000);
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => handleCopy('hero'));
  }
  if (footerCopyBtn) {
    footerCopyBtn.addEventListener('click', () => handleCopy('footer'));
  }

  // Newsletter Sub
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterMessage = document.getElementById('newsletter-message');
  const newsletterSubmitBtn = document.getElementById('newsletter-submit-btn');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = newsletterEmail.value;
      if (!emailVal || !emailVal.includes('@')) {
        showNewsletterMessage('Masukkan alamat email yang valid.', 'error');
        return;
      }

      newsletterSubmitBtn.disabled = true;
      newsletterSubmitBtn.innerHTML = `<span>Loading...</span><i data-lucide="rotate-cw" class="w-4 h-4 animate-spin"></i>`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        showNewsletterMessage('Terima kasih! Anda telah berlangganan newsletter.', 'success');
        newsletterEmail.value = '';
        newsletterSubmitBtn.disabled = false;
        newsletterSubmitBtn.innerHTML = `<span>Subscribe</span><i data-lucide="send" class="w-4 h-4"></i>`;
        if (window.lucide) window.lucide.createIcons();
      }, 1200);
    });
  }

  function showNewsletterMessage(msg, type) {
    newsletterMessage.textContent = msg;
    newsletterMessage.classList.remove('hidden', 'text-emerald-400', 'text-rose-400');
    if (type === 'success') {
      newsletterMessage.classList.add('flex', 'text-emerald-400');
      newsletterMessage.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> <span>${msg}</span>`;
    } else {
      newsletterMessage.classList.add('flex', 'text-rose-400');
      newsletterMessage.innerHTML = `<i data-lucide="x" class="w-3.5 h-3.5"></i> <span>${msg}</span>`;
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

// 4. Three.js Interactive ID Badge
function initInteractiveBadge() {
  const container = document.getElementById('lanyard-container');
  if (!container || !window.THREE) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7.5);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0x00ff66, 1.2);
  dirLight1.position.set(5, 8, 5);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.0);
  dirLight2.position.set(-5, -5, 3);
  scene.add(dirLight2);

  const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
  pointLight.position.set(0, 0, 4);
  scene.add(pointLight);

  // Group for physics/swing
  const lanyardGroup = new THREE.Group();
  scene.add(lanyardGroup);

  let cardMesh = null;
  let ropeMesh = null;
  let ropeCurve = null;

  // Create Canvas Texture for ID Card
  const cardCanvas = document.createElement('canvas');
  cardCanvas.width = 512;
  cardCanvas.height = 768;
  const ctx = cardCanvas.getContext('2d');

  // Background
  ctx.fillStyle = '#121214';
  ctx.fillRect(0, 0, 512, 768);

  // Border
  ctx.strokeStyle = '#22C55E';
  ctx.lineWidth = 12;
  ctx.strokeRect(16, 16, 480, 736);

  // Header Stripe
  ctx.fillStyle = '#22C55E';
  ctx.fillRect(16, 16, 480, 80);

  ctx.fillStyle = '#0D0D0E';
  ctx.font = '900 32px sans-serif';
  ctx.fillText('PRODUCT DESIGNER', 40, 70);

  // Details Background
  ctx.fillStyle = '#18181B';
  ctx.fillRect(40, 120, 200, 240);
  ctx.strokeStyle = '#06B6D4';
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 120, 200, 240);

  // Names
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 42px sans-serif';
  ctx.fillText('DIMAS', 260, 180);

  ctx.fillStyle = '#A1A1AA';
  ctx.font = '24px sans-serif';
  ctx.fillText('UI/UX & Frontend', 260, 225);

  ctx.fillStyle = '#22C55E';
  ctx.font = 'bold 20px monospace';
  ctx.fillText('ID: #DMS-2026-NEX', 260, 270);

  // Status
  ctx.beginPath();
  ctx.arc(270, 310, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#22C55E';
  ctx.fill();

  ctx.fillStyle = '#22C55E';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('Available for Hire', 290, 317);

  // Skills
  ctx.fillStyle = '#27272A';
  ctx.fillRect(40, 390, 432, 180);

  ctx.fillStyle = '#00FF66';
  ctx.font = 'bold 22px monospace';
  ctx.fillText('SKILLS: REACT • THREE.JS • FIGMA', 60, 440);
  ctx.fillText('TAILWIND • DESIGN SYSTEMS', 60, 480);
  ctx.fillText('NEO-BRUTALISM UX ARCHITECT', 60, 520);

  // Bottom
  ctx.fillStyle = '#06B6D4';
  ctx.fillRect(40, 600, 432, 100);
  ctx.fillStyle = '#0D0D0E';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('AUTHENTIC ID BADGE', 80, 660);

  const buildCardScene = (texture) => {
    const cardGeometry = new THREE.BoxGeometry(2.2, 3.3, 0.06);
    const cardMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x18181b }), // Right
      new THREE.MeshStandardMaterial({ color: 0x18181b }), // Left
      new THREE.MeshStandardMaterial({ color: 0x18181b }), // Top
      new THREE.MeshStandardMaterial({ color: 0x18181b }), // Bottom
      new THREE.MeshBasicMaterial({ map: texture }), // Front (unaffected by scene lights)
      new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.3 })  // Back
    ];
    cardMesh = new THREE.Mesh(cardGeometry, cardMaterials);
    cardMesh.position.y = -0.8;
    lanyardGroup.add(cardMesh);

    // Cylindrical Clamp
    const clipGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.4, 16);
    const clipMaterial = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      metalness: 0.9,
      roughness: 0.1
    });
    const clipMesh = new THREE.Mesh(clipGeometry, clipMaterial);
    clipMesh.position.y = 0.95;
    clipMesh.rotation.z = Math.PI / 2;
    cardMesh.add(clipMesh);

    const clampGeometry = new THREE.BoxGeometry(0.35, 0.25, 0.15);
    const clampMesh = new THREE.Mesh(clampGeometry, clipMaterial);
    clampMesh.position.y = 1.15;
    cardMesh.add(clampMesh);

    // Rope
    const ropePoints = [
      new THREE.Vector3(-0.8, 3.2, 0),
      new THREE.Vector3(-0.4, 2.2, 0.2),
      new THREE.Vector3(0, 0.35, 0),
      new THREE.Vector3(0.4, 2.2, 0.2),
      new THREE.Vector3(0.8, 3.2, 0)
    ];

    ropeCurve = new THREE.CatmullRomCurve3(ropePoints);
    const ropeGeometry = new THREE.TubeGeometry(ropeCurve, 32, 0.04, 8, false);
    const ropeMaterial = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.5,
      metalness: 0.2
    });
    ropeMesh = new THREE.Mesh(ropeGeometry, ropeMaterial);
    scene.add(ropeMesh);
  };

  // Draw Profile Image
  const profileImg = new Image();
  profileImg.onload = () => {
    ctx.drawImage(profileImg, 40, 120, 200, 240);
    const texture = new THREE.CanvasTexture(cardCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    buildCardScene(texture);
  };
  profileImg.onerror = () => {
    const texture = new THREE.CanvasTexture(cardCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    buildCardScene(texture);
  };
  profileImg.src = LanyardImage;

  // Interaction variables
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;
  let swingVelocityX = 0;
  let swingVelocityY = 0;
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;

  const onPointerMove = (event) => {
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    const y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

    if (isDragging) {
      const deltaX = event.clientX - previousMouseX;
      const deltaY = event.clientY - previousMouseY;

      swingVelocityY += deltaX * 0.002;
      swingVelocityX += deltaY * 0.002;

      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    } else {
      mouseX = x;
      mouseY = y;
      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.4;
    }
  };

  const onPointerDown = (event) => {
    isDragging = true;
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  container.addEventListener('pointermove', onPointerMove);
  container.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);

  let time = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    time += 0.02;

    // Spring mechanics
    swingVelocityX += (targetRotationX - currentRotationX) * 0.08;
    swingVelocityY += (targetRotationY - currentRotationY) * 0.08;

    swingVelocityX *= 0.88;
    swingVelocityY *= 0.88;

    currentRotationX += swingVelocityX;
    currentRotationY += swingVelocityY;

    // Natural swing floating
    const idleSwingX = Math.sin(time * 1.5) * 0.05;
    const idleSwingY = Math.cos(time * 1.2) * 0.05;

    lanyardGroup.rotation.x = currentRotationX + idleSwingX;
    lanyardGroup.rotation.y = currentRotationY + idleSwingY;
    lanyardGroup.rotation.z = Math.sin(time * 1.1) * 0.03;

    // Redraw Rope dynamically
    if (cardMesh && ropeMesh) {
      const attachPos = new THREE.Vector3();
      cardMesh.getWorldPosition(attachPos);

      const dynamicRopePoints = [
        new THREE.Vector3(-0.9, 3.2, 0),
        new THREE.Vector3(-0.5, 2.0, 0.2),
        new THREE.Vector3(attachPos.x, attachPos.y + 1.2, attachPos.z),
        new THREE.Vector3(0.5, 2.0, 0.2),
        new THREE.Vector3(0.9, 3.2, 0)
      ];

      ropeCurve = new THREE.CatmullRomCurve3(dynamicRopePoints);
      ropeMesh.geometry.dispose();
      ropeMesh.geometry = new THREE.TubeGeometry(ropeCurve, 32, 0.04, 8, false);
    }

    renderer.render(scene, camera);
  };

  animate();

  const handleResize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };

  window.addEventListener('resize', handleResize);
}

// 5. 3D Cylindrical Project Carousel & Modal
function initProjectCarousel() {
  const filtersContainer = document.getElementById('project-filters');
  const ringContainer = document.getElementById('gallery-ring');
  const indexEl = document.getElementById('active-project-index');
  const totalEl = document.getElementById('total-projects-count');
  const prevBtn = document.getElementById('prev-project-btn');
  const nextBtn = document.getElementById('next-project-btn');
  const viewport = document.getElementById('gallery-viewport');

  // Modal elements
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalImage = document.getElementById('modal-image');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalOverview = document.getElementById('modal-overview');
  const modalProblem = document.getElementById('modal-problem');
  const modalSolution = document.getElementById('modal-solution');
  const modalTags = document.getElementById('modal-tags');
  const modalLink = document.getElementById('modal-link');

  const modalBadge = document.getElementById('modal-badge');
  const modalYear = document.getElementById('modal-year');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const closeModalFooterBtn = document.getElementById('close-modal-footer-btn');

  let activeIndex = 0;
  let activeFilter = 'All';
  let filteredList = [...PROJECTS];

  let isDragging = false;
  let dragStartX = 0;
  let dragOffset = 0;

  // Filter Categories
  const categories = ['All', 'UI/UX', 'Frontend', 'Graphic Design'];

  function updateCarousel() {
    const total = filteredList.length;
    if (total === 0) return;

    ringContainer.innerHTML = '';
    indexEl.textContent = String(activeIndex + 1).padStart(2, '0');
    totalEl.textContent = String(total).padStart(2, '0');

    filteredList.forEach((proj, idx) => {
      // Cylindrical coordinates math
      const offset = (idx - activeIndex + total) % total;
      let normalizedOffset = offset;
      if (offset > total / 2) normalizedOffset -= total;

      const isCenter = normalizedOffset === 0;
      const rotateY = normalizedOffset * -22;
      const translateX = normalizedOffset * 280;
      const translateZ = Math.abs(normalizedOffset) * -160;
      const scale = isCenter ? 1 : Math.max(0.7, 1 - Math.abs(normalizedOffset) * 0.18);
      const opacity = Math.max(0.2, 1 - Math.abs(normalizedOffset) * 0.4);

      const card = document.createElement('div');
      card.className = `absolute w-[300px] sm:w-[360px] md:w-[400px] bg-zinc-900 border-2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out select-none ${isCenter ? 'border-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.3)] z-30' : 'border-zinc-800 z-10'
        }`;

      // In Center state, apply drag offset
      const finalTranslateX = translateX + (isCenter ? dragOffset * 0.04 : 0);
      const finalRotateY = rotateY + (isCenter ? dragOffset * 0.002 : 0);

      card.style.transform = `translateX(${finalTranslateX}px) translateZ(${translateZ}px) rotateY(${finalRotateY}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.transformStyle = 'preserve-3d';

      const tagsHTML = proj.tags.slice(0, 3).map(t => `<span class="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded font-mono">${t}</span>`).join('');

      card.innerHTML = `
        <div class="relative h-48 sm:h-56 overflow-hidden bg-zinc-950">
          <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 pointer-events-none" />
          <div class="absolute top-3 left-3 px-3 py-1 bg-zinc-950/80 border border-emerald-500/50 rounded-md text-xs font-mono font-bold text-emerald-400 backdrop-blur-md">
            ${proj.badge}
          </div>
          <div class="absolute top-3 right-3 px-2.5 py-1 bg-zinc-900/90 border border-zinc-700 rounded-md text-xs font-mono text-zinc-300">
            ${proj.year}
          </div>
        </div>
        <div class="p-5 flex flex-col justify-between bg-zinc-900">
          <div>
            <h3 class="text-xl font-bold text-white mb-2 line-clamp-1">${proj.title}</h3>
            <p class="text-sm text-zinc-400 line-clamp-2 mb-4">${proj.subtitle}</p>
          </div>
          <div class="flex flex-wrap gap-1.5 mb-5">${tagsHTML}</div>
          <button class="view-case-study-btn w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono rounded-xl border-2 border-emerald-300 flex items-center justify-center gap-2 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
            <span>View Case Study</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </button>
        </div>
      `;

      // Stop pointerdown from reaching the viewport's drag handler.
      // Without this, viewport's pointerUp() calls updateCarousel() which
      // destroys this button before 'click' fires → browser suppresses the click.
      card.querySelector('.view-case-study-btn').addEventListener('pointerdown', (e) => {
        e.stopPropagation();
      });

      card.querySelector('.view-case-study-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(proj);
      });

      ringContainer.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Set Filters
  if (filtersContainer) {
    categories.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = `px-5 py-2 rounded-xl text-sm font-mono font-bold transition-all duration-200 border-2 ${activeFilter === cat
          ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] scale-105'
          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
        }`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeFilter = cat;
        filteredList = cat === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === cat);
        activeIndex = 0;

        // Update filter button styling
        Array.from(filtersContainer.children).forEach(child => {
          const isSelected = child.textContent === cat;
          child.className = `px-5 py-2 rounded-xl text-sm font-mono font-bold transition-all duration-200 border-2 ${isSelected
              ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] scale-105'
              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
            }`;
        });

        updateCarousel();
      });
      filtersContainer.appendChild(btn);
    });
  }

  // Nav actions
  const next = () => {
    activeIndex = (activeIndex + 1) % filteredList.length;
    updateCarousel();
  };

  const prev = () => {
    activeIndex = (activeIndex - 1 + filteredList.length) % filteredList.length;
    updateCarousel();
  };

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  // Drag logic
  const pointerDown = (e) => {
    isDragging = true;
    dragStartX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragOffset = 0;
  };

  const pointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX ?? e.touches?.[0]?.clientX ?? dragStartX;
    dragOffset = currentX - dragStartX;

    // Apply real-time preview transform shifts on center card
    const centerCard = ringContainer.querySelector('.border-emerald-500');
    if (centerCard) {
      centerCard.style.transform = `translateX(${dragOffset * 0.15}px) rotateY(${dragOffset * 0.05}deg)`;
    }
  };

  const pointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? dragStartX;
    const diff = endX - dragStartX;

    if (diff > 45) {
      prev();
    } else if (diff < -45) {
      next();
    } else {
      updateCarousel();
    }
  };

  if (viewport) {
    viewport.addEventListener('pointerdown', pointerDown);
    viewport.addEventListener('pointermove', pointerMove);
    viewport.addEventListener('pointerup', pointerUp);
    viewport.addEventListener('pointerleave', pointerUp);
    viewport.addEventListener('pointercancel', () => {
      isDragging = false;
      updateCarousel();
    });
  }

  // Autoplay loop
  let autoplay = setInterval(next, 5000);
  const resetAutoplay = () => {
    clearInterval(autoplay);
    autoplay = setInterval(next, 5000);
  };

  viewport.addEventListener('pointerdown', resetAutoplay);
  if (nextBtn) nextBtn.addEventListener('click', resetAutoplay);
  if (prevBtn) prevBtn.addEventListener('click', resetAutoplay);

  // Modal Actions
  function openModal(proj) {
    modalTitle.textContent = proj.title;
    modalSubtitle.textContent = proj.subtitle;
    modalImage.src = proj.image;
    modalImage.alt = proj.title;
    modalMetrics.textContent = proj.metrics;
    modalOverview.textContent = proj.overview;
    modalProblem.textContent = proj.problem;
    modalSolution.textContent = proj.solution;
    modalBadge.textContent = proj.badge;
    modalYear.textContent = proj.year;
    modalLink.href = proj.link;

    modalTags.innerHTML = '';
    proj.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-mono rounded-lg';
      span.textContent = t;
      modalTags.appendChild(span);
    });

    if (window.lucide) window.lucide.createIcons();

    // Use style.display directly — avoids Tailwind hidden/flex class-order conflicts
    modal.style.display = 'flex';
    // Freeze any CSS transform on <body> so position:fixed stays viewport-relative
    document.body.style.transform = 'none';
    document.body.style.filter = 'none';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    // Use style.display directly — avoids Tailwind class-order conflicts
    modal.style.display = 'none';
    // Restore body so scroll velocity effects resume
    document.body.style.transform = '';
    document.body.style.filter = '';
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeModalFooterBtn) closeModalFooterBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Initial draw
  updateCarousel();
}

// 6. Smooth Scroll and Section Navigation
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.navigation-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetHref = link.getAttribute('href');
      if (targetHref.startsWith('#')) {
        event.preventDefault();
        const targetId = targetHref.replace('#', '');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          window.history.pushState(null, '', targetHref);
        }
      }
    });
  });

  // Back to top button
  const bttBtn = document.getElementById('back-to-top-btn');
  if (bttBtn) {
    bttBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
