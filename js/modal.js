/**
 * modal.js — Class detail modal: open, close, flip, QR generation, map popup
 */

let currentClass = null;

// ── Open modal with class data ──────────────────────────────────────────────

function openModal(classData) {
  currentClass = classData;

  // Badge class type
  const badgeClass =
    classData.type === 'Lecture' ? 'badge-lecture' :
    classData.type === 'Lab'     ? 'badge-lab'     :
    'badge-seminar';

  document.getElementById('modal-badge').innerHTML =
    `<span class="class-badge ${badgeClass}">${classData.type}</span>`;

  // Text fields
  document.getElementById('modal-title').textContent    = classData.name;
  document.getElementById('modal-code').textContent     = classData.code;
  document.getElementById('modal-time').textContent     = `${classData.time} ${classData.ampm}`;
  document.getElementById('modal-duration').textContent = classData.duration;
  document.getElementById('modal-room').textContent     = classData.room;
  document.getElementById('modal-building').textContent = classData.building;
  document.getElementById('modal-instructor').textContent = classData.instructor;

  // Instructor avatar initials
  const initials = classData.instructor
    .split(' ')
    .map(w => w[0])
    .join('');
  document.getElementById('modal-avatar').textContent = initials;

  // Back face labels
  document.getElementById('back-room-title').textContent =
    `Navigate to ${classData.room}`;
  document.getElementById('back-room-sub').textContent =
    `${classData.building} · Scan QR to start`;

  // Map popup labels
  document.getElementById('map-popup-title').textContent =
    `Route to ${classData.room}`;
  document.getElementById('map-popup-sub').textContent =
    classData.building;

  // Map destination label (strip non-digits for room number)
  const roomNum = classData.room.replace(/\D/g, '') || '104';
  const destLabel = document.getElementById('map-dest-label');
  if (destLabel) destLabel.textContent = roomNum;

  // Apply color class to modal header glow
  const header = document.getElementById('modal-header');
  header.className = 'modal-header modal-color-' + classData.color;

  // Ensure card is showing front face
  document.getElementById('modal-flipper').classList.remove('flipped');

  // Show overlay
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Generate QR after a short delay (lets the flip reset animate first)
  setTimeout(() => generateQR(classData), 80);
}

// ── Close modal ─────────────────────────────────────────────────────────────

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('modal-flipper').classList.remove('flipped');
  document.body.style.overflow = '';
  currentClass = null;
}

// ── Flip to navigation (back face) ──────────────────────────────────────────

function flipCard() {
  document.getElementById('modal-flipper').classList.add('flipped');
}

function unflipCard() {
  document.getElementById('modal-flipper').classList.remove('flipped');
}

// ── QR Code generation ───────────────────────────────────────────────────────

function generateQR(classData) {
  const box = document.getElementById('qr-box');
  box.innerHTML = ''; // clear previous QR

  const qrData =
    `NAVIO:${classData.code}:${classData.room}:${classData.building}:${classData.time}${classData.ampm}`;

  try {
    new QRCode(box, {
      text: qrData,
      width: 152,
      height: 152,
      colorDark: '#06080f',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M,
    });
    // Make QR clickable after generation
    box.addEventListener('click', showMapPopup, { once: false });
  } catch (err) {
    box.innerHTML = '<p style="color:#6b82a8;font-size:12px;text-align:center;padding:20px;">QR unavailable</p>';
  }
}

// ── Map popup ────────────────────────────────────────────────────────────────

function showMapPopup() {
  document.getElementById('map-popup').classList.add('open');
}

function closeMapPopup() {
  document.getElementById('map-popup').classList.remove('open');
}

// ── Event listeners ──────────────────────────────────────────────────────────

function initModal() {
  // Overlay click-outside to close
  document.getElementById('overlay').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  // Map popup click-outside to close
  document.getElementById('map-popup').addEventListener('click', function (e) {
    if (e.target === this) closeMapPopup();
  });

  // Front close button
  document.getElementById('modal-close-front').addEventListener('click', closeModal);

  // Back close button
  document.getElementById('modal-close-back').addEventListener('click', closeModal);

  // Navigate to room button (flip trigger)
  document.getElementById('flip-btn').addEventListener('click', flipCard);

  // Back to details button (unflip)
  document.getElementById('unflip-btn').addEventListener('click', unflipCard);

  // Map close button
  document.getElementById('map-close-btn').addEventListener('click', closeMapPopup);

  // Escape key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (document.getElementById('map-popup').classList.contains('open')) {
        closeMapPopup();
      } else {
        closeModal();
      }
    }
  });
}
