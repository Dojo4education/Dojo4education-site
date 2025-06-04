const DOWNLOAD_URL = 'https://github.com/Dojo4education/Dojo4education-site/releases/download/01.25052025/ThesisAudit.exe';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.download-btn').forEach(el => {
    el.href = DOWNLOAD_URL;
  });
});
