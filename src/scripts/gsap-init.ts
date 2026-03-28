import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const nav = document.getElementById('nav') as HTMLElement;

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function runHeroAnimation(): void {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to(nav, { y: 0, opacity: 1, duration: 0.7 })
    .to('.hero-label', { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
    .to('.hero-title .word', {
      y: '0%',
      opacity: 1,
      duration: 1,
      stagger: 0.14,
    }, '-=0.3')
    .to(['.hero-tagline', '.scroll-hint'], {
      y: 0,
      opacity: 1,
      duration: 0.65,
      stagger: 0.1,
    }, '-=0.4');
}

const loaderTl = gsap.timeline({
  onComplete() {
    document.getElementById('loader')?.remove();
    document.body.classList.remove('is-loading');
    runHeroAnimation();
  },
});

loaderTl
  .from('.loader-logo', {
    opacity: 0,
    scale: 0.88,
    duration: 0.85,
    ease: 'power3.out',
  })
  .to('.loader-logo', {
    scale: 1.06,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.in',
  }, '+=0.35')
  .to('#loader', {
    yPercent: -100,
    duration: 0.85,
    ease: 'expo.inOut',
  }, '-=0.15');

gsap.utils.toArray<Element>('.section-label').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 88%' },
    x: -20, opacity: 0, duration: 0.6, ease: 'power3.out',
  });
});

gsap.utils.toArray<Element>('.project-item').forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 90%' },
    y: 28, opacity: 0, duration: 0.75,
    delay: i * 0.08,
    ease: 'power3.out',
  });
});

gsap.from('.about-bio', {
  scrollTrigger: { trigger: '.about-bio', start: 'top 85%' },
  x: -32, opacity: 0, duration: 0.85, ease: 'power3.out',
});

gsap.from('.about-details', {
  scrollTrigger: { trigger: '.about-details', start: 'top 85%' },
  x: 32, opacity: 0, duration: 0.85, ease: 'power3.out',
});

gsap.from('.contact-heading', {
  scrollTrigger: { trigger: '.contact-heading', start: 'top 85%' },
  y: 48, opacity: 0, duration: 1, ease: 'power3.out',
});

gsap.from('.contact-bottom', {
  scrollTrigger: { trigger: '.contact-bottom', start: 'top 90%' },
  y: 20, opacity: 0, duration: 0.65, ease: 'power3.out',
});
