/**
 * schedule.js — Render class cards into the schedule list
 */

/**
 * Build a single class card element
 * @param {Object} classData
 * @param {number} index - used for staggered animation delay
 * @returns {HTMLElement}
 */
function buildClassCard(classData, index) {
  const el = document.createElement('div');
  el.className = `class-item color-${classData.color}`;
  el.style.animationDelay = `${index * 0.06}s`;

  el.innerHTML = `
    <div class="class-time-block">
      <div class="class-start">${classData.time}</div>
      <div class="class-ampm">${classData.ampm}</div>
    </div>
    <div class="class-divider"></div>
    <div class="class-info">
      <div class="class-name">${classData.name}</div>
      <div class="class-meta">
        <span>🏛️ ${classData.room}</span>
        <span>⏱ ${classData.duration}</span>
        <span class="class-badge badge-${classData.type.toLowerCase()}">${classData.type}</span>
      </div>
    </div>
    <div class="class-arrow">›</div>
  `;

  el.addEventListener('click', () => openModal(classData));
  return el;
}

/**
 * Render all classes for a given day key
 * @param {string} day - e.g. 'mon', 'tue'
 */
function renderSchedule(day) {
  const list = document.getElementById('classes-list');
  const classes = SCHEDULE[day] || [];

  list.innerHTML = '';

  classes.forEach((classData, i) => {
    list.appendChild(buildClassCard(classData, i));
  });

  // Update today's class count stat
  const statToday = document.getElementById('stat-today');
  if (statToday) statToday.textContent = classes.length;
}
