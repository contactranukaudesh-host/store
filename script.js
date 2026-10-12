const bagCount = document.querySelector('#bag-count');
const toast = document.querySelector('#toast');
let bag = 0;
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
}
document.querySelectorAll('.product-image').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    bag += 1;
    bagCount.textContent = String(bag).padStart(2, '0');
    showToast('ADDED TO YOUR BAG ✳  (DEMO)');
  });
});
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  });
});
const searchPanel = document.querySelector('#search-panel');
document.querySelector('.search-toggle').addEventListener('click', () => {
  searchPanel.classList.add('open');
  searchPanel.setAttribute('aria-hidden', 'false');
  document.querySelector('#search-input').focus();
});
document.querySelector('.search-close').addEventListener('click', () => {
  searchPanel.classList.remove('open');
  searchPanel.setAttribute('aria-hidden', 'true');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchPanel.classList.remove('open');
    searchPanel.setAttribute('aria-hidden', 'true');
  }
});
document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email');
  if (email.checkValidity()) {
    document.querySelector('.form-message').textContent = 'YOU’RE ON THE LIST ✳ (DEMO ONLY)';
    email.value = '';
  }
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav');
  const open = nav.classList.toggle('mobile-open');
  nav.style.display = open ? 'flex' : '';
  nav.style.flexDirection = open ? 'column' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '64px' : '';
  nav.style.left = open ? '0' : '';
  nav.style.right = open ? '0' : '';
  nav.style.background = open ? 'var(--paper)' : '';
  nav.style.padding = open ? '24px 6vw' : '';
  nav.style.alignItems = open ? 'flex-start' : '';
  nav.style.borderBottom = open ? '1px solid var(--line)' : '';
});
