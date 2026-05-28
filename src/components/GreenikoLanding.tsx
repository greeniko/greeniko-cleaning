import React, { useState, useEffect } from 'react';

const COLORS = {
  cream: '#F5F1E8',
  forest: '#2D5016',
  sage: '#6B8E4E',
  beige: '#E8DCC8',
  charcoal: '#3A3A3A',
  white: '#FFFFFF',
  gold: '#C9A961',
};

const SERVICES = [
  {
    title: 'Deep Cleaning',
    subtitle: 'Best for first-time or seasonal cleaning',
    description: 'Detailed top-to-bottom cleaning that removes buildup, grease and hidden dirt.',
    price: 'From $200',
  },
  {
    title: 'Standard Cleaning',
    subtitle: 'Weekly • Bi-Weekly • Monthly',
    description: 'Regular maintenance cleaning to keep your home consistently fresh.',
    price: 'From $120',
  },
  {
    title: 'Move-In / Move-Out',
    subtitle: 'Perfect for moving days & rentals',
    description: 'Complete cleaning before moving in or after moving out.',
    price: 'From $250',
  },
  {
    title: 'Post-Construction',
    subtitle: 'After renovation or remodeling',
    description: 'Dust and debris removal after construction or repair work.',
    price: 'From $300',
  },
  {
    title: 'Commercial Cleaning',
    subtitle: 'Offices & small businesses',
    description: 'Reliable cleaning for offices and commercial spaces.',
    price: 'Custom quote',
  },
  {
    title: 'Last-Minute Cleaning',
    subtitle: 'Same-Day & Urgent Requests',
    description: 'Need urgent cleaning before guests, move-out or an event? We offer limited same-day and next-day availability when possible.',
    price: 'Custom quote',
  },
];

const STEPS = [
  { num: '01', title: 'Request a Quote', text: 'Submit your details and photos if available.' },
  { num: '02', title: 'Get Your Price', text: 'We review details and provide a clear quote.' },
  { num: '03', title: 'We Clean', text: 'We arrive on time and complete detailed work.' },
  { num: '04', title: 'Pay After Completion', text: 'No upfront payment required.' },
];

const REVIEWS = [
  {
    text: 'Honestly, I was surprised how much better the kitchen looked. The stove and bathrooms were probably the biggest difference. Easy to text with and they showed up on time.',
    name: 'Jessica M.',
    city: 'Folsom',
  },
  {
    text: 'We used Greeniko for a move-out clean in Roseville. The place honestly looked better than when we started packing.',
    name: 'Amanda T.',
    city: 'Roseville',
  },
  {
    text: 'Very detailed. They cleaned corners and small spots I usually miss.',
    name: 'Michael S.',
    city: 'Carmichael',
  },
  {
    text: 'Friendly team and easy scheduling. I liked knowing the price before they arrived.',
    name: 'Sarah L.',
    city: 'Granite Bay',
  },
  {
    text: 'Booked online, sent a few photos and got a quote back pretty quickly.',
    name: 'Brian K.',
    city: 'Rocklin',
  },
  {
    text: 'Our house felt fresh again after the visit. Good communication and no pressure.',
    name: 'Lauren P.',
    city: 'Fair Oaks',
  },
  {
    text: 'Professional from start to finish. They treated the house with respect.',
    name: 'Marcus D.',
    city: 'Elk Grove',
  },
  {
    text: 'They did a deep clean before family came over. Bathrooms, floors and kitchen looked great.',
    name: 'David R.',
    city: 'Sacramento',
  },
];

const WHY_CHOOSE = [
  { title: 'Attention to detail', text: 'We notice the spots others miss.' },
  { title: 'Reliable scheduling', text: 'We respect your time.' },
  { title: 'Family owned', text: 'Sacramento-based and locally run.' },
  { title: 'Satisfaction focused', text: 'If something needs attention, let us know and we\'ll make it right.' },
];

const BEFORE_AFTER = [
  { label: 'Kitchen stove', before: '/images/stove-before.jpg', after: '/images/stove-after.jpg' },
  { label: 'Bathroom', before: '/images/toilet-before.jpg', after: '/images/toilet-after.jpg' },
  { label: 'Bathroom counter', before: '/images/counter-before.jpg', after: '/images/counter-after.jpg' },
  { label: 'Shower & tile', before: '/images/shower-before.jpg', after: '/images/shower-after.jpg' },
  { label: 'Kitchen floor', before: '/images/floor-before.jpg', after: '/images/floor-after.jpg' },
];

const FAQ_ITEMS = [
  {
    q: 'How do I get a quote?',
    a: 'Text us at 916-937-3537 or submit the form above. We\'ll respond as soon as possible with a clear price.',
  },
  {
    q: 'Do I need to be home?',
    a: 'It depends on your preference. Some clients prefer to stay home during the cleaning, while many simply provide access and let us work. We\'ll coordinate everything with you beforehand.',
  },
  {
    q: 'What\'s the difference between deep and standard cleaning?',
    a: 'Deep cleaning covers buildup, grease, baseboards, inside appliances, and detailed bathroom work — best for first-time or seasonal cleanings. Standard cleaning is maintenance: surfaces, floors, kitchen, bathrooms — ideal for recurring service.',
  },
  {
    q: 'Do you bring supplies?',
    a: 'Yes. We bring professional cleaning supplies and equipment. You don\'t need to prepare anything.',
  },
  {
    q: 'What if something was missed?',
    a: 'If something needs attention, please let us know within 24 hours. We care about the result and will gladly come back to make it right.',
  },
  {
    q: 'How do I pay?',
    a: 'After the cleaning is complete. We accept card, Zelle, Venmo and Apple Pay. No upfront payment required.',
  },
  {
    q: 'What areas do you service?',
    a: 'We serve Sacramento and surrounding areas including Roseville, Folsom, Rocklin, and Elk Grove.',
  },
  {
    q: 'I have pets — is that a problem?',
    a: 'Not at all — we love animals! Just let us know in advance so we can plan accordingly. If your pet gets anxious around new people, you can keep them in a separate room during the cleaning. We\'ll always treat your pet — and your home — with respect.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We try to be flexible — sometimes we can fit you in the same day or next day, especially for standard cleanings. For deep or move-out cleanings, 2-3 days notice helps us plan. Reach out anytime and we\'ll do our best to accommodate your schedule.',
  },
];

const SERVICE_AREAS = [
  'Sacramento', 'Roseville', 'Folsom', 'Rocklin', 'Elk Grove'
];

// ============================================================
// LOGO COMPONENT — text only, no icons
// ============================================================
function Logo({ size = 'normal', color }: { size?: 'small' | 'normal' | 'large'; color?: string }) {
  const c = color || COLORS.forest;
  const sizes = {
    small: { name: 'text-base sm:text-lg', sub: 'text-[9px] sm:text-[10px]', spacing: 'mt-0.5' },
    normal: { name: 'text-xl sm:text-2xl', sub: 'text-[10px] sm:text-xs', spacing: 'mt-1' },
    large: { name: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm', spacing: 'mt-1.5' },
  };
  const s = sizes[size];
  return (
    <div className="inline-flex flex-col items-center select-none" style={{ color: c }}>
      <span
        className={`${s.name} font-light tracking-[0.2em] leading-none`}
        style={{ fontFamily: '"Montserrat", sans-serif' }}
      >
        GREENIKO
      </span>
      <div className={`flex items-center gap-2 ${s.spacing}`}>
        <span className="block h-px w-4 sm:w-5" style={{ backgroundColor: COLORS.beige }} />
        <span
          className={`${s.sub} font-medium tracking-[0.3em] leading-none`}
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          CLEANING
        </span>
        <span className="block h-px w-4 sm:w-5" style={{ backgroundColor: COLORS.beige }} />
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function GreenikoLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cityZip: '',
    serviceType: 'Deep Cleaning',
    hasPets: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ============================================================
    // FORMSUBMIT CONFIGURATION
    // ============================================================
    // 1. Replace email below with your real receiving email
    // 2. First submission triggers an "Activate Form" email
    //    — click the link in that email to activate
    // 3. All subsequent submissions arrive at your inbox
    // ============================================================
    const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hello@greeniko.com';

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Build a clean, formatted payload for FormSubmit
    const payload = {
      // Customer data (clean labels for email)
      'Name': formData.name,
      'Phone': formData.phone,
      'City / ZIP': formData.cityZip,
      'Service Type': formData.serviceType,
      'Pets at home': formData.hasPets || 'Not specified',
      'Message': formData.message || '—',
      'Submitted from': 'greeniko.com',
      'Submitted at': new Date().toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        dateStyle: 'medium',
        timeStyle: 'short',
      }),

      // FormSubmit configuration (underscore-prefixed fields)
      _subject: `🧹 New Cleaning Request from ${formData.name || 'Greeniko Site'}`,
      _template: 'table', // pretty table layout in email
      _captcha: 'false',  // skip captcha for better UX
      _honey: '',         // honeypot field (filled by bots = blocked)
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmittedName(formData.name.trim().split(' ')[0] || '');
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          cityZip: '',
          serviceType: 'Deep Cleaning',
          hasPets: '',
          message: '',
        });
        // Reset success message after 10 seconds
        setTimeout(() => setSubmitStatus('idle'), 10000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal, fontFamily: '"Montserrat", sans-serif' }}
    >
      {/* CSS animations (fonts loaded via src/index.css) */}
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .fade-in-visible { opacity: 1; transform: translateY(0); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .btn-hover { transition: transform 0.2s ease-out, box-shadow 0.2s ease-out; }
        .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(45, 80, 22, 0.4); }
        .card-hover { transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -20px rgba(58, 58, 58, 0.15); }
        .img-zoom { transition: transform 0.6s ease-out; }
        .img-zoom-wrap:hover .img-zoom { transform: scale(1.05); }
      `}</style>

      {/* ============================================================
          HEADER (sticky)
          ============================================================ */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(245, 241, 232, 0.92)', borderBottom: `1px solid ${COLORS.beige}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button onClick={scrollToTop} aria-label="Back to top" className="cursor-pointer bg-transparent border-0 p-0">
            <Logo size="small" />
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: COLORS.charcoal }}>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#how" className="hover:opacity-70 transition-opacity">How It Works</a>
            <a href="#team" className="hover:opacity-70 transition-opacity">Our Team</a>
            <a href="#results" className="hover:opacity-70 transition-opacity">Results</a>
            <a href="#reviews" className="hover:opacity-70 transition-opacity">Reviews</a>
            <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
          </nav>
          <button
            onClick={scrollToForm}
            className="btn-hover px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold"
            style={{ backgroundColor: COLORS.forest, color: COLORS.cream }}
          >
            Get a Quote
          </button>
        </div>
      </header>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="Premium Sacramento home interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, rgba(245,241,232,0.92) 0%, rgba(245,241,232,0.65) 45%, rgba(245,241,232,0) 70%)'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 font-medium" style={{ color: COLORS.sage }}>
              Sacramento Area · Premium Cleaning
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5 font-bold"
              style={{ color: COLORS.forest }}
            >
              Reliable home cleaning for Sacramento area families.
            </h1>
            <p className="italic text-lg sm:text-xl mb-7" style={{ fontFamily: '"Playfair Display", serif', color: COLORS.charcoal }}>
              Clean spaces, calm mind.
            </p>
            <p className="hidden sm:block text-base sm:text-lg mb-8 leading-relaxed" style={{ color: COLORS.charcoal }}>
              Deep cleaning, move-in/out, and recurring service from a trusted local team. No upfront payment.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToForm}
                className="btn-hover px-7 py-3.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: COLORS.forest, color: COLORS.cream }}
              >
                Get a Quote
              </button>
              <a
                href="sms:+19169373537"
                className="btn-hover px-7 py-3.5 rounded-full text-sm font-semibold border-2 inline-flex items-center"
                style={{ borderColor: COLORS.forest, color: COLORS.forest, backgroundColor: 'rgba(255,255,255,0.7)' }}
              >
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section className="border-y" style={{ borderColor: COLORS.beige, backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { t: 'Trusted & Responsive', s: 'Fast replies, on-time arrivals' },
            { t: 'Easy & Convenient', s: 'Online booking and text updates' },
            { t: 'Detail Oriented', s: 'Thorough cleaning in every corner' },
            { t: 'We Care', s: 'We treat your home like our own' },
          ].map((item, i) => (
            <div key={i} className="px-2">
              <p className="text-sm sm:text-base font-semibold mb-1" style={{ color: COLORS.forest }}>{item.t}</p>
              <p className="text-xs sm:text-sm leading-snug" style={{ color: COLORS.charcoal, opacity: 0.7 }}>{item.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SERVICES
          ============================================================ */}
      <section id="services" className="py-20 sm:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.forest }}>
              Cleaning services for every home
            </h2>
            <p className="italic text-base sm:text-lg" style={{ fontFamily: '"Playfair Display", serif', color: COLORS.charcoal }}>
              Premium care for your space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="card-hover p-7 rounded-2xl flex flex-col"
                style={{ backgroundColor: COLORS.white, border: `1px solid ${COLORS.beige}` }}
              >
                <h3 className="text-xl font-bold mb-1.5" style={{ color: COLORS.forest }}>
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-wider mb-3 font-medium" style={{ color: COLORS.sage }}>
                  {service.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: COLORS.charcoal, opacity: 0.8 }}>
                  {service.description}
                </p>
                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: COLORS.beige }}>
                  <span className="text-base font-bold" style={{ color: COLORS.forest }}>{service.price}</span>
                  <button
                    onClick={scrollToForm}
                    className="text-xs uppercase tracking-wider font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: COLORS.forest }}
                  >
                    Book →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm italic mt-8" style={{ color: COLORS.charcoal, opacity: 0.6 }}>
            Final pricing depends on home size, condition and service type.
          </p>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — 4 STEPS
          ============================================================ */}
      <section id="how" className="py-20 sm:py-24 fade-in-section" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>The Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: COLORS.forest }}>
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center px-2">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: COLORS.cream, color: COLORS.forest, border: `1.5px solid ${COLORS.beige}` }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: COLORS.forest }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.charcoal, opacity: 0.75 }}>
                    {step.text}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px" style={{ backgroundColor: COLORS.beige }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MEET THE TEAM
          ============================================================ */}
      <section id="team" className="py-20 sm:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="img-zoom-wrap overflow-hidden rounded-2xl shadow-lg order-2 lg:order-1">
              <img src="/images/team.jpg" alt="Greeniko Cleaning team" className="img-zoom w-full h-auto block" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>Our Team</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.forest }}>
                Meet your Greeniko team
              </h2>
              <p className="text-base sm:text-lg mb-5 leading-relaxed" style={{ color: COLORS.charcoal }}>
                Family owned and Sacramento-based, our small team focuses on details that make your home feel fresh,
                comfortable and welcoming. The same trusted faces, every visit.
              </p>
              <p className="italic text-base sm:text-lg mb-7" style={{ fontFamily: '"Playfair Display", serif', color: COLORS.charcoal }}>
                Friendly. Reliable. Detail-focused.
              </p>
              <div className="space-y-2.5">
                {['Background-checked', 'Consistent quality every visit', '100% satisfaction focus'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: COLORS.forest, flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" />
                      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium" style={{ color: COLORS.charcoal }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BEFORE / AFTER — REAL RESULTS
          ============================================================ */}
      <section id="results" className="py-20 sm:py-24 fade-in-section" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>Real Results</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.forest }}>
              See the difference
            </h2>
            <p className="italic text-base sm:text-lg" style={{ fontFamily: '"Playfair Display", serif', color: COLORS.charcoal }}>
              Honest before & after from real homes we've cleaned.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {BEFORE_AFTER.map((pair, i) => (
              <div key={i} className="group">
                <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300" style={{ border: `1px solid ${COLORS.beige}` }}>
                  {/* BEFORE */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={pair.before}
                      alt={`${pair.label} before cleaning`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded"
                      style={{ backgroundColor: COLORS.charcoal, color: COLORS.cream, boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }}
                    >
                      Before
                    </span>
                  </div>
                  {/* AFTER */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={pair.after}
                      alt={`${pair.label} after cleaning`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded"
                      style={{ backgroundColor: COLORS.sage, color: COLORS.white, boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }}
                    >
                      After
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium" style={{ color: COLORS.forest }}>
                  {pair.label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={scrollToForm}
              className="btn-hover px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ backgroundColor: COLORS.forest, color: COLORS.cream }}
            >
              Book Your Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEWS
          ============================================================ */}
      <section id="reviews" className="py-20 sm:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>Reviews</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.forest }}>
              Trusted by families across Sacramento
            </h2>
            <p className="italic text-base sm:text-lg" style={{ fontFamily: '"Playfair Display", serif', color: COLORS.charcoal }}>
              Real words from local clients.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto hide-scrollbar pb-4">
          <div className="flex gap-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ width: 'max-content' }}>
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-7 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.beige}`,
                  width: '320px',
                  boxShadow: '0 4px 12px -4px rgba(58, 58, 58, 0.08)',
                }}
              >
                <div className="mb-4 text-lg tracking-wider" style={{ color: COLORS.gold }}>
                  ★★★★★
                </div>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: COLORS.charcoal }}>
                  "{review.text}"
                </p>
                <p className="text-sm font-semibold" style={{ color: COLORS.forest }}>
                  — {review.name}, <span className="font-normal" style={{ color: COLORS.charcoal, opacity: 0.7 }}>{review.city}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em]" style={{ color: COLORS.charcoal, opacity: 0.6 }}>
            As seen on: Google · Yelp · Facebook · Nextdoor
          </p>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE GREENIKO
          ============================================================ */}
      <section className="py-20 sm:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>Why Greeniko</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: COLORS.forest }}>
              What makes us different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl text-center"
                style={{ backgroundColor: COLORS.white, border: `1px solid ${COLORS.beige}` }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: COLORS.forest, margin: '0 auto 16px' }}>
                  <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" />
                  <path d="M10 16.5l4 4 8-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: COLORS.forest }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.charcoal, opacity: 0.75 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          QUOTE FORM
          ============================================================ */}
      <section id="quote-form" className="py-20 sm:py-24 fade-in-section" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>Get Started</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.forest }}>
              Book your next cleaning
            </h2>
            <p className="italic text-base sm:text-lg" style={{ fontFamily: '"Playfair Display", serif', color: COLORS.charcoal }}>
              Tell us about your home — we'll send a quote within 1-2 hours.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field — invisible to humans, catches spam bots */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: COLORS.forest }}>
                  Name
                </label>
                <input
                  type="text" name="name" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.beige}`, color: COLORS.charcoal }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: COLORS.forest }}>
                  Phone
                </label>
                <input
                  type="tel" name="phone" required value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.beige}`, color: COLORS.charcoal }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: COLORS.forest }}>
                City / ZIP
              </label>
              <input
                type="text" name="cityZip" required value={formData.cityZip}
                onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                placeholder="e.g. Folsom, 95630"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 transition-all"
                style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.beige}`, color: COLORS.charcoal }}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: COLORS.forest }}>
                Service Type
              </label>
              <select
                name="serviceType" value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 transition-all"
                style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.beige}`, color: COLORS.charcoal }}
              >
                <option>Deep Cleaning</option>
                <option>Standard Cleaning</option>
                <option>Move-In / Move-Out</option>
                <option>Post-Construction</option>
                <option>Commercial Cleaning</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: COLORS.forest }}>
                Pets?
              </label>
              <div className="flex gap-6">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio" name="hasPets" value={option}
                      checked={formData.hasPets === option}
                      onChange={(e) => setFormData({ ...formData, hasPets: e.target.value })}
                      style={{ accentColor: COLORS.forest }}
                    />
                    <span className="text-sm" style={{ color: COLORS.charcoal }}>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: COLORS.forest }}>
                Message (optional)
              </label>
              <textarea
                name="message" rows={4} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your home, square footage, anything special..."
                className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 transition-all resize-none"
                style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.beige}`, color: COLORS.charcoal }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-hover w-full py-4 rounded-full text-sm font-semibold uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: COLORS.forest, color: COLORS.cream }}
            >
              {isSubmitting ? 'Sending…' : 'Send Request'}
            </button>

            {/* Success message */}
            {submitStatus === 'success' && (
              <div
                className="p-4 rounded-xl flex items-start gap-3"
                style={{ backgroundColor: '#E8F0DC', border: `1px solid ${COLORS.sage}` }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ color: COLORS.forest, flexShrink: 0, marginTop: '1px' }}>
                  <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.5 11.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: COLORS.forest }}>
                    {submittedName ? `Got it, ${submittedName} — your request is in!` : 'Got it — your request is in!'}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: COLORS.charcoal }}>
                    We'll text you back within 1-2 hours during business hours (Mon-Sat, 7am-7pm).
                    Need it sooner? Text us at{' '}
                    <a href="sms:+19169373537" className="font-semibold underline" style={{ color: COLORS.forest }}>
                      916-937-3537
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {/* Error message */}
            {submitStatus === 'error' && (
              <div
                className="p-4 rounded-xl flex items-start gap-3"
                style={{ backgroundColor: '#FDF2F0', border: '1px solid #D9534F' }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ color: '#D9534F', flexShrink: 0, marginTop: '1px' }}>
                  <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11 6v6M11 15.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#D9534F' }}>
                    Something went wrong
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: COLORS.charcoal }}>
                    Please text or call us directly at{' '}
                    <a href="tel:+19169373537" className="font-semibold underline" style={{ color: COLORS.forest }}>
                      916-937-3537
                    </a>
                  </p>
                </div>
              </div>
            )}

            <p className="text-center text-xs" style={{ color: COLORS.charcoal, opacity: 0.6 }}>
              Or text us directly at{' '}
              <a href="tel:+19169373537" className="font-semibold underline" style={{ color: COLORS.forest }}>
                916-937-3537
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section id="faq" className="py-20 sm:py-24 fade-in-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.sage }}>FAQ</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: COLORS.forest }}>
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: COLORS.white, border: `1px solid ${COLORS.beige}` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: COLORS.forest }}>
                    {item.q}
                  </span>
                  <span
                    className="text-2xl font-light flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: COLORS.forest,
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? '400px' : '0',
                    transition: 'max-height 0.4s ease-out',
                    overflow: 'hidden',
                  }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: COLORS.charcoal, opacity: 0.8 }}>
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer style={{ backgroundColor: COLORS.forest, color: COLORS.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <Logo size="normal" color={COLORS.cream} />
              <p className="italic text-sm mt-5 mb-5" style={{ fontFamily: '"Playfair Display", serif', opacity: 0.9 }}>
                Clean spaces, calm mind.
              </p>
              <p className="text-xs leading-relaxed" style={{ opacity: 0.7 }}>
                Serving: {SERVICE_AREAS.join(' · ')}
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4 font-semibold" style={{ color: COLORS.beige }}>
                Services
              </p>
              <ul className="space-y-2.5 text-sm" style={{ opacity: 0.85 }}>
                {SERVICES.map((s, i) => (
                  <li key={i}>
                    <a href="#services" className="hover:opacity-70 transition-opacity">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4 font-semibold" style={{ color: COLORS.beige }}>
                Contact
              </p>
              <ul className="space-y-2.5 text-sm" style={{ opacity: 0.85 }}>
                <li>
                  <a href="tel:+19169373537" className="hover:opacity-70 transition-opacity">916-937-3537</a>
                </li>
                <li>
                  <a href="mailto:hello@greeniko.com" className="hover:opacity-70 transition-opacity">hello@greeniko.com</a>
                </li>
                <li className="pt-1" style={{ opacity: 0.75 }}>Mon-Sat · 7am-7pm</li>
              </ul>
              <div className="flex gap-3 mt-5">
                {/* Social — monochrome */}
                {[
                  { name: 'Instagram', d: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.14 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 00-.83-1.27 3.4 3.4 0 00-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.5 3.79 15.14 3.78 12 3.78zm0 2.76a5.46 5.46 0 110 10.92 5.46 5.46 0 010-10.92zm0 1.62a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68zm5.65-1.81a1.27 1.27 0 110 2.55 1.27 1.27 0 010-2.55z' },
                  { name: 'Facebook', d: 'M22 12a10 10 0 10-11.56 9.88v-6.99h-2.54V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z' },
                  { name: 'Google', d: 'M21.35 11.1H12v2.85h5.35a4.58 4.58 0 01-1.99 3v2.5h3.22A9.7 9.7 0 0021.35 12c0-.3-.03-.6-.07-.9z M12 21a9.7 9.7 0 006.58-2.4l-3.22-2.5a5.81 5.81 0 01-8.65-3.05H3.34v2.58A9.7 9.7 0 0012 21z M6.71 13.05a5.83 5.83 0 010-3.7V6.78H3.34a9.7 9.7 0 000 8.74l3.37-2.47z M12 6.95a5.27 5.27 0 013.72 1.45L18.6 5.6A9.34 9.34 0 0012 3a9.7 9.7 0 00-8.66 3.78l3.37 2.58A5.81 5.81 0 0112 6.95z' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                    style={{ backgroundColor: 'rgba(245, 241, 232, 0.1)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={COLORS.cream}>
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-7 border-t flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(232, 220, 200, 0.15)' }}>
            <p className="text-xs" style={{ opacity: 0.6 }}>© 2026 GREENIKO Cleaning. All rights reserved.</p>
            <p className="text-xs" style={{ opacity: 0.6 }}>Sacramento, California</p>
          </div>
        </div>
      </footer>

      {/* ============================================================
          STICKY MOBILE BAR
          ============================================================ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 flex gap-2"
        style={{ backgroundColor: COLORS.cream, borderTop: `1px solid ${COLORS.beige}`, boxShadow: '0 -4px 12px -4px rgba(0,0,0,0.05)' }}
      >
        <a
          href="sms:+19169373537"
          className="flex-1 py-3 text-center rounded-full text-sm font-semibold border-2"
          style={{ borderColor: COLORS.forest, color: COLORS.forest, backgroundColor: COLORS.white }}
        >
          Text
        </a>
        <button
          onClick={scrollToForm}
          className="flex-1 py-3 rounded-full text-sm font-semibold"
          style={{ backgroundColor: COLORS.forest, color: COLORS.cream }}
        >
          Quote
        </button>
      </div>
    </div>
  );
}
