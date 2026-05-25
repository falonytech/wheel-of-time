document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code-copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const wrap = btn.closest('.code-block-wrap');
      const pre = wrap?.querySelector('pre');
      if (!pre) return;

      const text = pre.innerText.trim();
      const label = btn.querySelector('.code-copy-btn-label');

      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('copied');
        if (label) label.textContent = 'Copied';
        setTimeout(() => {
          btn.classList.remove('copied');
          if (label) label.textContent = 'Copy';
        }, 2000);
      } catch {
        if (label) label.textContent = 'Failed';
        setTimeout(() => {
          if (label) label.textContent = 'Copy';
        }, 2000);
      }
    });
  });
});
