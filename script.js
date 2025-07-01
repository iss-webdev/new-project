const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})


const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.10
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

