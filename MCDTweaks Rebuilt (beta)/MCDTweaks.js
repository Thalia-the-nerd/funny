javascript:(function() {
  // Inject Styles
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --mcd-bg: #eeeeef;
      --mcd-text: #282b31;
      --mcd-panel-bg: #fff;
      --mcd-panel-text: #000;
      --mcd-border: #ccc;
    }
    body.dark-mode {
      --mcd-bg: #1d1e22;
      --mcd-text: #f0f0f0;
      --mcd-panel-bg: #2b2b2b;
      --mcd-panel-text: #f0f0f0;
      --mcd-border: #555;
    }
    body {
      background-color: var(--mcd-bg) !important;
      color: var(--mcd-text) !important;
    }
    #mcd-panel {
      position: fixed;
      top: 10px;
      right: 10px;
      background: var(--mcd-panel-bg);
      color: var(--mcd-panel-text);
      border: 1px solid var(--mcd-border);
      padding: 12px;
      font-family: sans-serif;
      font-size: 14px;
      border-radius: 8px;
      z-index: 99999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    #mcd-panel h4 {
      margin: 0 0 10px 0;
      font-size: 16px;
    }
    #mcd-panel label {
      display: block;
      margin-bottom: 6px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // Create Panel
  const panel = document.createElement('div');
  panel.id = 'mcd-panel';
  panel.innerHTML = `
    <h4>MCDTweaks</h4>
    <label><input type="checkbox" id="mcd-dark"> Dark Mode</label>
    <label><input type="checkbox" id="mcd-ultrawide"> Ultrawide</label>
    <label><input type="checkbox" id="mcd-autoapply"> Auto-Apply</label>
  `;
  document.body.appendChild(panel);

  // Core features
  function applyDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
  }

  function applyUltrawide(enabled) {
    document.body.classList.toggle('ultrawide-mode', enabled);
  }

  function sortClassesByTrack() {
    const classList = document.querySelector('.class-list');
    if (classList) {
      Array.from(classList.children).forEach(el => {
        const track = el.getAttribute('data-track') || '0';
        el.style.order = track;
      });
    }
  }

  // Event bindings
  const darkInput = panel.querySelector('#mcd-dark');
  const ultraInput = panel.querySelector('#mcd-ultrawide');
  const autoInput = panel.querySelector('#mcd-autoapply');

  darkInput.addEventListener('change', () => {
    localStorage.setItem('mcdtweaks-darkmode', darkInput.checked);
    applyDarkMode(darkInput.checked);
  });

  ultraInput.addEventListener('change', () => {
    localStorage.setItem('mcdtweaks-ultrawide', ultraInput.checked);
    applyUltrawide(ultraInput.checked);
  });

  autoInput.addEventListener('change', () => {
    localStorage.setItem('mcdtweaks-autoapply', autoInput.checked);
  });

  // Load settings from localStorage
  const savedDark = localStorage.getItem('mcdtweaks-darkmode') === 'true';
  const savedUltra = localStorage.getItem('mcdtweaks-ultrawide') === 'true';
  const savedAuto = localStorage.getItem('mcdtweaks-autoapply') === 'true';

  darkInput.checked = savedDark;
  ultraInput.checked = savedUltra;
  autoInput.checked = savedAuto;

  applyDarkMode(savedDark);
  applyUltrawide(savedUltra);

  if (savedAuto) {
    sortClassesByTrack();
  }
})();
