
document.addEventListener('DOMContentLoaded', function () {
  // update year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;

  // collapse navbar after clicking link (mobile)
  const bsCollapseEl = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (bsCollapseEl && bsCollapseEl.classList.contains('show')) {
        new bootstrap.Collapse(bsCollapseEl).hide();
      }
    });
  });


  try {
    const path = window.location.pathname.replace(/\/$/, '');
    const parts = path.split('/');
    let last = parts[parts.length-1] || parts[parts.length-2] || '';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      const lp = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '');
      if (lp.endsWith('/' + last) || (last === 'quiz1' && lp.endsWith('/quiz1'))) {
        link.classList.add('active');
      }
    });
  } catch (e) {
    // ignore
  }
});
