document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.site-nav');

  btn.addEventListener('click', ()=>{
    const isOpen = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    nav.classList.toggle('open', isOpen);
  });

  // close nav when clicking outside on mobile
  document.addEventListener('click', (e)=>{
    if(!btn.contains(e.target) && !nav.contains(e.target) && btn.classList.contains('open')){
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      nav.classList.remove('open');
    }
  });
});