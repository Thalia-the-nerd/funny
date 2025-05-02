
(function(){
  // Inject Dark Mode CSS
  var style = document.createElement('style');
  style.textContent = "\n:root {\n  --darkmode-bg: #1d1e22;\n  --darkmode-text: #f0f0f0;\n}\nbody.darkmode {\n  background-color: var(--darkmode-bg);\n  color: var(--darkmode-text);\n}\n";
  document.head.appendChild(style);

  // Create control panel styles
  var panelStyle = document.createElement('style');
  panelStyle.textContent = `
    #mcdtweaks-panel {
      position: fixed;
      top: 12px;
      right: 12px;
      z-index: 999999;
      background: #fff;
      border: 1px solid #ccc;
      padding: 12px 14px;
      font-family: sans-serif;
      font-size: 14px;
      color: #000;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
      transition: 0.3s ease;
    }
    #mcdtweaks-panel.dark {
      background: #2b2b2b;
      color: #eee;
      border-color: #444;
    }
    #mcdtweaks-panel h4 {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 15px;
    }
    #mcdtweaks-panel label {
      display: block;
      margin: 4px 0;
      cursor: pointer;
    }
  `;
  document.head.appendChild(panelStyle);

  // Create panel UI
  var panel = document.createElement('div');
  panel.id = 'mcdtweaks-panel';
  panel.innerHTML = `
    <h4>MCDTweaks</h4>
    <label><input type="checkbox" id="mcd-dark"> Dark Mode</label>
    <label><input type="checkbox" id="mcd-ultrawide"> Ultrawide Mode</label>
    <label><input type="checkbox" id="mcd-autoapply"> Auto-Apply</label>
  `;
  document.body.appendChild(panel);

  function applyDarkMode(enabled) {
    document.documentElement.classList.toggle('darkmode', enabled);
    panel.classList.toggle('dark', enabled);
  }
  function applyUltrawide(enabled) {
    document.documentElement.classList.toggle('ultrawide', enabled);
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

  const darkInput = panel.querySelector('#mcd-dark');
  const ultraInput = panel.querySelector('#mcd-ultrawide');
  const autoInput = panel.querySelector('#mcd-autoapply');

  const savedDark = localStorage.getItem('mcdtweaks-darkmode') === 'true';
  const savedUltra = localStorage.getItem('mcdtweaks-ultrawide') === 'true';
  const savedAuto = localStorage.getItem('mcdtweaks-autoapply') === 'true';

  darkInput.checked = savedDark;
  ultraInput.checked = savedUltra;
  autoInput.checked = savedAuto;

  applyDarkMode(savedDark);
  applyUltrawide(savedUltra);
  if (savedAuto) sortClassesByTrack();

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
})();
