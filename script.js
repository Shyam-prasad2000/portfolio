/**
 * Shyam Prasad Portfolio - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Project Case Study Data Store (from Resume)
  const projectsData = {
    p2p: {
      title: 'P2P Procurement Management Platform',
      role: 'Full-Stack Developer (Angular, NestJS, PostgreSQL)',
      client: 'Seeroo IT Solutions',
      summary: 'An enterprise procurement ecosystem covering the complete cycle from Purchase Requisitions (PR) to Request for Quotations (RFQ), quotation comparisons, Purchase Orders (PO), and automated supplier approvals.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'NestJS', 'Node.js', 'PostgreSQL', 'Reactive Forms', 'FormArrays', 'JWT', 'RBAC'],
      features: [
        'Built dynamic, multi-step Reactive Forms utilizing Angular FormArrays for line-item calculations, taxes, discounts, and tiered approvals.',
        'Engineered supplier evaluation portal with RFQ broadcast, quotation submission, and automated commercial comparison matrices.',
        'Contributed to backend RESTful microservices in NestJS and PostgreSQL for transactional integrity, audit logging, and role-based permissions.',
        'Implemented JWT authentication, token refresh workflows, and granular role authorization across buyers, approvers, and vendors.'
      ]
    },
    aurex: {
      title: 'Aurex – Enterprise Auditing Software',
      role: 'Software Engineer (Angular, TypeScript)',
      client: 'Beinex Consulting',
      summary: 'A mission-critical enterprise risk auditing platform designed for regulatory governance, risk profiling, compliance checklists, and automated audit trails.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Reactive Forms', 'REST APIs', 'Node.js', 'MSSQL'],
      features: [
        'Developed modular and reusable Angular UI components for risk evaluation matrices and multi-tenant audit scorecards.',
        'Implemented complex Reactive Forms with conditional field validations and live calculation of risk severity indices.',
        'Collaborated with cross-functional architecture teams to tune frontend rendering and improve data table responsiveness across thousands of audit rows.'
      ]
    },
    lulu: {
      title: 'Lulu Icon (HRMS)',
      role: 'Junior Software Developer (Angular, Node.js, MSSQL)',
      client: 'Mantles Solution',
      summary: 'Centralized Human Resource Management System managing records, attendance, leave approval hierarchies, and payroll processing for thousands of retail employees.',
      tech: ['Angular', 'Node.js', 'Express.js', 'Sequelize ORM', 'MSSQL', 'Bootstrap', 'PDFKit', 'SSRS'],
      features: [
        'Created responsive Angular dashboards, employee profile management, department rosters, and multi-level approval hierarchies.',
        'Developed backend services and REST APIs with Node.js and Express.js, connecting to MSSQL using Sequelize ORM.',
        'Automated document generation and PDF export for pay slips, clearance certificates, and attendance sheets with PDFKit and SSRS Report Viewer.',
        'Integrated third-party SOAP/REST endpoints for biometric attendance tracking and automated shift scheduling.'
      ]
    },
    cafm: {
      title: 'CAFM – Multi-Tenant Facility Management System',
      role: 'Angular Developer',
      client: 'Seeroo IT Solutions',
      summary: 'Computer-Aided Facility Management application supporting building operations, tenant service ticketing, preventative maintenance, and space allocation.',
      tech: ['Angular', 'TypeScript', 'REST APIs', 'Angular Material', 'RxJS', 'PostgreSQL'],
      features: [
        'Constructed intuitive service request ticket workflows with real-time status tracking and technician assignment.',
        'Engineered responsive dashboards with maintenance scheduling calendars and asset telemetry displays.',
        'Integrated with backend RESTful APIs with centralized HTTP interceptors for error logging and retry mechanisms.'
      ]
    },
    alshareef: {
      title: 'AlShareef – Employee Management Module',
      role: 'Angular & Backend Developer',
      client: 'Seeroo IT Solutions',
      summary: 'Specialized enterprise CRM extension facilitating comprehensive staff lifecycle workflows, task assignments, and organizational governance.',
      tech: ['Angular', 'RxJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      features: [
        'Extended CRM core with dedicated employee records, hierarchy trees, and role entitlement matrices.',
        'Built dynamic Angular forms with real-time field validation and file upload pipelines for credential verification.',
        'Optimized state handling and asynchronous data streams using RxJS pipes, BehaviorSubjects, and switchMap operators.'
      ]
    },
    lulubiz: {
      title: 'Lulu Business Suite (MarketConnect, Maintenance, Leasing)',
      role: 'Junior Software Developer',
      client: 'Mantles Solution',
      summary: 'A versatile suite of commercial enterprise applications powering supplier marketplace integration, property leasing contracts, and retail store maintenance.',
      tech: ['Angular', 'Node.js', 'Sequelize', 'MySQL', 'MongoDB', 'DataTables'],
      features: [
        'Developed multi-step leasing contract creation wizards with dynamic term calculations and digital approval checkpoints.',
        'Implemented database queries, transactions, and schema associations across MSSQL, MySQL, and MongoDB.',
        'Built high-performance tabular reporting views using DataTables with column filtering, sorting, and Excel export.'
      ]
    }
  };

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close when clicking nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 1.1 Top Scroll Progress Bar & Scrolled Navbar
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function updateScrollState() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Update progress bar
    if (scrollProgressBar) {
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Update navbar background & compact state
    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Update back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('is-active');
      } else {
        backToTopBtn.classList.remove('is-active');
      }
    }
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 1.2 Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 1.3 Hero Stats Pulse on Scroll
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;
  const statsSection = document.querySelector('.hero-right');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          statNumbers.forEach((num, index) => {
            setTimeout(() => {
              num.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
              num.style.transform = 'scale(1.12)';
              setTimeout(() => {
                num.style.transform = 'scale(1)';
              }, 250);
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // 2. Active Navigation Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 3. Modals Management (Skills, Resume, Project Detail)
  function setupModal(modalId, openTriggers, closeTriggers) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    openTriggers.forEach(btnId => {
      const btn = typeof btnId === 'string' ? document.getElementById(btnId) : btnId;
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.add('active');
          modal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        });
      }
    });

    closeTriggers.forEach(btnId => {
      const btn = typeof btnId === 'string' ? document.getElementById(btnId) : btnId;
      if (btn) {
        btn.addEventListener('click', () => {
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      }
    });

    // Close on clicking backdrop
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  setupModal('skillsModal', ['viewAllSkillsBtn', 'openMoreSkillsCard'], ['closeSkillsModal']);
  setupModal('resumeModal', ['openResumeBtn'], ['closeResumeModal']);

  // Global Escape key to close any active modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      });
      document.body.style.overflow = '';
    }
  });

  // 4. View All Projects Expander
  const viewAllProjectsBtn = document.getElementById('viewAllProjectsBtn');
  const moreProjectsContainer = document.getElementById('moreProjectsContainer');

  if (viewAllProjectsBtn && moreProjectsContainer) {
    viewAllProjectsBtn.addEventListener('click', () => {
      const isExpanded = moreProjectsContainer.classList.toggle('expanded');
      const textSpan = viewAllProjectsBtn.querySelector('span');
      if (textSpan) {
        textSpan.textContent = isExpanded ? 'Show Less' : 'View All Projects';
      }
      if (isExpanded) {
        moreProjectsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // 5. Project Detail Modal Setup
  const projectCards = document.querySelectorAll('.project-card[data-project-id]');
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');
  const pmTitle = document.getElementById('pmTitle');
  const pmSubtitle = document.getElementById('pmSubtitle');
  const pmBody = document.getElementById('pmBody');

  if (projectModal && closeProjectModal) {
    closeProjectModal.addEventListener('click', () => {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });

    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const pId = card.getAttribute('data-project-id');
        const data = projectsData[pId];
        if (!data) return;

        const projectImages = {
          p2p: { src: 'assets/images/project-p2p.svg', desc: 'P2P Procurement Portal • Purchase Orders, RFQ Evaluations & Supplier Workflows' },
          aurex: { src: 'assets/images/project-aurex.svg', desc: 'Aurex Audit Suite • Enterprise Risk Governance, Matrix & Real-time Audit Trails' },
          lulu: { src: 'assets/images/project-lulu.svg', desc: 'Lulu Icon HRMS • Multi-Tier Leave Approvals, Workforce & Attendance' },
          cafm: { src: 'assets/images/project-cafm.svg', desc: 'CAFM Facility Management • Work Orders, Building Dispatch & Preventative Maintenance' },
          alshareef: { src: 'assets/images/project-alshareef.svg', desc: 'AlShareef CRM • Staff Hierarchy, Team Directory & RBAC Security' },
          lulubiz: { src: 'assets/images/project-lulubiz.svg', desc: 'Lulu Business Hub • MarketConnect Vendor Catalog & Mall Leasing Contracts' }
        };

        const imgData = projectImages[pId] || { src: 'assets/images/project-p2p.svg', desc: 'Enterprise System Architecture' };

        pmTitle.textContent = data.title;
        pmSubtitle.textContent = `${data.role} • ${data.client}`;

        let techBadgesHtml = data.tech.map(t => `<span class="cat-pill">${t}</span>`).join('');
        let featuresHtml = data.features.map(f => `<li>${f}</li>`).join('');

        pmBody.innerHTML = `
          <!-- Visual Project UI Preview -->
          <div style="margin-bottom: 22px; border-radius: 10px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 16px rgba(0,0,0,0.06); background: #0F172A;">
            <img src="${imgData.src}" alt="${data.title}" style="width: 100%; height: auto; display: block;">
            <div style="padding: 9px 14px; background: #F8FAFC; border-top: 1px solid #E2E8F0; font-size: 11.5px; color: #475569; font-weight: 600;">
              ✨ UI Architecture: ${imgData.desc}
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 13px; font-weight: 700; color: #737373; text-transform: uppercase; margin-bottom: 8px;">Executive Summary</h4>
            <p style="font-size: 14.5px; line-height: 1.6; color: #141414;">${data.summary}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 13px; font-weight: 700; color: #737373; text-transform: uppercase; margin-bottom: 8px;">Key Contributions & Architecture</h4>
            <ul style="padding-left: 20px; font-size: 14px; line-height: 1.65; color: #374151; display: flex; flex-direction: column; gap: 8px;">
              ${featuresHtml}
            </ul>
          </div>

          <div>
            <h4 style="font-size: 13px; font-weight: 700; color: #737373; text-transform: uppercase; margin-bottom: 10px;">Technologies & Tools</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${techBadgesHtml}
            </div>
          </div>
        `;

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // 6. CTA Banner Contact Button Smooth Scroll
  const ctaContactBtn = document.getElementById('ctaContactBtn');
  if (ctaContactBtn) {
    ctaContactBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 7. Interactive Contact Form with Validation & Mailto Fallback
  const contactForm = document.getElementById('contactForm');
  const submitFormBtn = document.getElementById('submitFormBtn');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  if (contactForm && submitFormBtn) {
    submitFormBtn.addEventListener('click', () => {
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out your Name, Email, and Message before submitting.');
        return;
      }

      // Show friendly confirmation
      if (formSuccessMessage) {
        formSuccessMessage.style.display = 'block';
      }

      // Generate mailto link as direct communication channel
      const mailtoUrl = `mailto:shyamprasad2000.sp@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);
    });
  }
});
