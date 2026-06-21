(function () {
  const root = document.documentElement;
  root.classList.add('dynamic-ready');

  const menuButton = document.querySelector('.hamburger');
  const mobilePanel = document.querySelector('.mobile-panel');

  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', function () {
      mobilePanel.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', mobilePanel.classList.contains('open') ? 'true' : 'false');
    });
  }

  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you. This demo form is ready to connect to your backend or email service.');
    });
  });

  const header = document.querySelector('.header');
  const backToTop = document.querySelector('.back-to-top');
  function updateScrollState() {
    const scrolled = window.scrollY > 45;
    if (header) header.classList.toggle('header-scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 420);
  }
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  const revealSelector = [
    '.hero-content',
    '.section-title-grid',
    '.feature-card',
    '.about-layout',
    '.photo-frame',
    '.about-content',
    '.project-card',
    '.service-card',
    '.split-cta .image',
    '.split-cta .content',
    '.stat',
    '.team-card',
    '.testimonial-intro',
    '.testimonial',
    '.blog-card',
    '.newsletter .container',
    '.footer-grid > div',
    '.panel',
    '.text-card',
    '.process-card',
    '.product-card',
    '.gallery-grid img',
    '.content-grid',
    '.two-col',
    '.mini-hero .container',
    '.form-grid',
    '.map-placeholder'
  ].join(',');

  const revealItems = Array.from(document.querySelectorAll(revealSelector));
  revealItems.forEach(function (el, index) {
    if (!el.classList.contains('animate-on-scroll')) el.classList.add('animate-on-scroll');
    el.style.setProperty('--reveal-delay', (index % 6) * 70 + 'ms');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { observer.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  document.querySelectorAll('.btn, .subscribe-form button').forEach(function (button) {
    button.addEventListener('click', function (event) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.left = (event.clientX - rect.left) + 'px';
      ripple.style.top = (event.clientY - rect.top) + 'px';
      button.appendChild(ripple);
      window.setTimeout(function () { ripple.remove(); }, 650);
    });
  });

  function parseCounter(text) {
    const match = String(text).trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    return { value: parseFloat(match[1]), suffix: match[2] || '' };
  }

  function animateCounter(el) {
    if (el.dataset.counted === 'true') return;
    const parsed = parseCounter(el.textContent);
    if (!parsed) return;
    el.dataset.counted = 'true';
    const duration = 1350;
    const start = performance.now();
    const target = parsed.value;
    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current + parsed.suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const counters = Array.from(document.querySelectorAll('.stat strong'));
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });
    counters.forEach(function (counter) { counterObserver.observe(counter); });
  } else {
    counters.forEach(animateCounter);
  }

  document.querySelectorAll('.project-card, .service-card, .feature-card, .blog-card, .team-card, .product-card').forEach(function (card) {
    card.addEventListener('mousemove', function (event) {
      if (window.matchMedia('(max-width: 820px)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 4;
      const rotateX = ((y / rect.height) - 0.5) * -4;
      card.style.transform = 'translateY(-10px) perspective(900px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
})();

(function () {
  const form = document.querySelector('[data-quote-form]');
  if (!form) return;

  const steps = Array.from(form.querySelectorAll('.quote-step'));
  const progressBars = Array.from(form.querySelectorAll('.quote-progress span'));
  const currentStepText = form.querySelector('[data-current-step]');
  const backButton = form.querySelector('[data-quote-back]');
  const nextButton = form.querySelector('[data-quote-next]');
  const submitButton = form.querySelector('.quote-submit');
  let currentStep = 0;

  function updateServiceSelections() {
    form.querySelectorAll('.quote-option').forEach(function (option) {
      const input = option.querySelector('input');
      option.classList.toggle('selected', !!input && input.checked);
    });
  }

  function showStep(index) {
    currentStep = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach(function (step, stepIndex) {
      step.classList.toggle('active', stepIndex === currentStep);
    });
    progressBars.forEach(function (bar, barIndex) {
      bar.classList.toggle('active', barIndex <= currentStep);
    });
    if (currentStepText) currentStepText.textContent = String(currentStep + 1);
    if (backButton) backButton.disabled = currentStep === 0;
    if (nextButton) nextButton.classList.toggle('hidden', currentStep === steps.length - 1);
    if (submitButton) submitButton.classList.toggle('hidden', currentStep !== steps.length - 1);
  }

  function validateCurrentStep() {
    const step = steps[currentStep];
    if (!step) return true;

    const helper = step.querySelector('.quote-helper');
    if (helper) helper.classList.remove('error');

    if (currentStep === 0) {
      const checked = form.querySelectorAll('input[name="services"]:checked').length;
      if (!checked) {
        if (helper) {
          helper.textContent = 'Please select at least one service before continuing.';
          helper.classList.add('error');
        }
        return false;
      }
      if (helper) helper.textContent = 'Select all that apply.';
    }

    const requiredFields = Array.from(step.querySelectorAll('[required]'));
    for (const field of requiredFields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  }

  form.querySelectorAll('.quote-option input').forEach(function (input) {
    input.addEventListener('change', updateServiceSelections);
  });

  const fileInput = form.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      const uploadBox = fileInput.closest('.upload-box');
      const label = uploadBox ? uploadBox.querySelector('strong') : null;
      if (label) label.textContent = fileInput.files.length ? fileInput.files.length + ' file(s) selected' : 'Click to upload';
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', function () {
      if (validateCurrentStep()) showStep(currentStep + 1);
    });
  }

  if (backButton) {
    backButton.addEventListener('click', function () {
      showStep(currentStep - 1);
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validateCurrentStep()) return;
    alert('Thank you. Your quote request form is complete and ready to connect to an email or backend service before publishing.');
  });

  updateServiceSelections();
  showStep(0);
})();
