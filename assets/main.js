// Footer year
document.getElementById('year')?.append(new Date().getFullYear());

// Copy email on Home
const copyBtn = document.getElementById('copyMail');
copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.mail);
    const old = copyBtn.textContent;
    copyBtn.textContent = 'Copied ✅';
    setTimeout(() => (copyBtn.textContent = old), 1500);
  } catch {
    alert('Copy failed. Please use: ' + copyBtn.dataset.mail);
  }
});
