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
});
