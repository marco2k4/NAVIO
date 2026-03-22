/**
 * app.js — Entry point. Initialise all modules on DOMContentLoaded.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Wire up navigation pills
  initNavPills();

  // Wire up day strip
  initDayStrip();

  // Wire up modal events
  initModal();

  // Render default day (Monday)
  renderSchedule('mon');
});
