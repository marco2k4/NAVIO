/**
 * ui.js — Section navigation and day strip interactions
 */

/**
 * Switch active section (Schedule / Roadmap / Campus Map / About)
 * @param {string} sectionId - matches the data-section attribute on nav pills
 */
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  // Show target
  const target = document.getElementById('section-' + sectionId);
  if (target) target.classList.add('active');

  // Update nav pills
  document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.section === sectionId);
  });
}

/**
 * Initialise nav pill click handlers
 */
function initNavPills() {
  document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', () => showSection(pill.dataset.section));
  });
}

/**
 * Initialise day strip click handlers
 */
function initDayStrip() {
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSchedule(btn.dataset.day);
    });
  });
}
