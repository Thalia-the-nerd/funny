(function(){
  const style = document.createElement('style');
  style.textContent = `
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
    }
    #mcdtweaks-panel h4 {
      margin: 0 0 8px;
      font-size: 15px;
    }
    #mcdtweaks-panel label {
      display: block;
      margin: 4px 0;
    }
  `;
  document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.id = 'mcdtweaks-panel';
  panel.innerHTML = `
    <h4>MCDTweaks</h4>
    <label><input type="checkbox" id="mcd-dark"> Dark Mode</label>
    <label><input type="checkbox" id="mcd-ultrawide"> Ultrawide</label>
    <label><input type="checkbox" id="mcd-autoapply"> Auto-Apply</label>
  `;
  document.body.appendChild(panel);

  const settings = {
    dark: localStorage.getItem('mcdtweaks-darkmode') === 'true',
    ultra: localStorage.getItem('mcdtweaks-ultrawide') === 'true',
    auto: localStorage.getItem('mcdtweaks-autoapply') === 'true'
  };

  document.documentElement.classList.toggle('darkmode', settings.dark);
  document.documentElement.classList.toggle('ultrawide', settings.ultra);

  document.getElementById('mcd-dark').checked = settings.dark;
  document.getElementById('mcd-ultrawide').checked = settings.ultra;
  document.getElementById('mcd-autoapply').checked = settings.auto;

  document.getElementById('mcd-dark').onchange = (e) => {
    localStorage.setItem('mcdtweaks-darkmode', e.target.checked);
    document.documentElement.classList.toggle('darkmode', e.target.checked);
  };
  document.getElementById('mcd-ultrawide').onchange = (e) => {
    localStorage.setItem('mcdtweaks-ultrawide', e.target.checked);
    document.documentElement.classList.toggle('ultrawide', e.target.checked);
  };
  document.getElementById('mcd-autoapply').onchange = (e) => {
    localStorage.setItem('mcdtweaks-autoapply', e.target.checked);
  };
})();
