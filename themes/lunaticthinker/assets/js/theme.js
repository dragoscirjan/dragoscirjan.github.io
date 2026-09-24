document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.menuToggle);
    const open = target?.toggleAttribute('data-open');
    button.setAttribute('aria-expanded', String(Boolean(open)));
  });
});

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const code = document.querySelector(button.dataset.copy);
    if (!code) return;
    await navigator.clipboard.writeText(code.textContent);
    const original = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = original; }, 1400);
  });
});
