document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    var btn = dropdown.querySelector('.dropbtn');
    var content = dropdown.querySelector('.dropdown-content');
    if (!btn || !content) return;
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      content.classList.toggle('show');
    });
  });

  document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdown-content.show').forEach(function(openContent) {
      if (!openContent.parentElement.contains(event.target)) {
        openContent.classList.remove('show');
        var btn = openContent.parentElement.querySelector('.dropbtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  var langSelect = document.getElementById('language-select');
  if (langSelect) {
    var langs = ['ru', 'en', 'de', 'fr', 'it', 'es', 'ko', 'ja', 'zh'];
    var current = location.pathname.split('/')[1];
    if (!langs.includes(current)) current = 'ru';
    langSelect.value = current;
    langSelect.addEventListener('change', function () {
      var target = this.value;
      var file = location.pathname.split('/').pop();
      if (!file || !file.endsWith('.html')) file = 'index.html';
      var newPath = target === 'ru' ? '/' + file : '/' + target + '/' + file;
      window.location.pathname = newPath;
    });
  }
});
