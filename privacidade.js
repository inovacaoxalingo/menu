/* Xalingo — aviso de privacidade (cookies) dos sites do QR code: Menu, Manuais, Realidade aumentada (e Jogos, quando medidos).
   Um arquivo só, guardado no repositório do Menu e usado pelos outros sites:
     <script src="/menu/privacidade.js?v=1"></script>   (no <head>, ANTES do script do Google Analytics)
   O GA de cada página só liga por XalPriv.aoPermitir(funcaoQueLigaOGA).
   A escolha vale para todos os sites de inovacaoxalingo.github.io (fica guardada uma vez só neste navegador).
   Padrão aprovado pela Inovação em 16/11/2026: barra no rodapé, Configurar / Recusar / Aceitar do mesmo tamanho,
   2ª camada com o detalhe e o link da política. Interactive Play e Arca de Noé (ref. 2084.3) têm o aviso próprio do adulto. */
(function () {
  'use strict';
  if (window.XalPriv) return;
  var CHAVE = 'xalingo_sites_aceite', VERSAO = 1, GA_ID = 'G-HB9RN5N1J2';
  var POLITICA = '/menu/privacidade.html';
  var me = document.currentScript || {}, ds = me.dataset || {};
  var fila = [], estado = null, raiz = null;
  try { estado = JSON.parse(localStorage.getItem(CHAVE) || 'null'); } catch (e) { estado = null; }
  if (!estado || estado.v !== VERSAO) estado = null;
  if (estado && !estado.ga) window['ga-disable-' + GA_ID] = true;

  function hoje() { var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
  function salvar(ga) { estado = { v: VERSAO, ga: !!ga, em: hoje() }; try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) {} }
  function apagarCookiesGA() {
    try {
      document.cookie.split(';').forEach(function (c) {
        var n = c.split('=')[0].trim();
        if (/^_ga/.test(n)) ['', location.hostname, '.' + location.hostname].forEach(function (d) {
          document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
        });
      });
    } catch (e) {}
  }
  function decidir(ga) {
    salvar(ga);
    if (ga) { window['ga-disable-' + GA_ID] = false; fila.splice(0).forEach(function (f) { try { f(); } catch (e) {} }); }
    else { window['ga-disable-' + GA_ID] = true; apagarCookiesGA(); }
    fechar();
    try { document.dispatchEvent(new CustomEvent('xalpriv', { detail: { ga: !!ga } })); } catch (e) {}
  }

  var CSS =
    '.xpv{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#fff;color:#0E2C6B;border-top:3px solid #164194;box-shadow:0 -8px 24px rgba(10,24,60,.16);font:400 13.5px/1.5 "Open Sans",system-ui,-apple-system,"Segoe UI",sans-serif;padding:12px 14px calc(12px + env(safe-area-inset-bottom))}' +
    '.xpv *{box-sizing:border-box}' +
    '.xpv-in{max-width:1180px;margin:0 auto;display:flex;align-items:center;gap:18px}' +
    '.xpv p{margin:0;flex:1;min-width:0}' +
    '.xpv a{color:#164194;font-weight:700;text-decoration:underline;cursor:pointer}' +
    '.xpv-bts{display:flex;gap:8px;flex:none}' +
    '.xpv button{font:inherit;font-weight:800;font-size:13.5px;line-height:1.2;border-radius:10px;padding:10px 18px;cursor:pointer;min-height:42px;border:2px solid #164194}' +
    '.xpv .xpv-s{background:#fff;color:#164194}' +
    '.xpv .xpv-p{background:#164194;color:#fff}' +
    '.xpv button:focus-visible,.xpv a:focus-visible{outline:3px solid #00A1FF;outline-offset:2px}' +
    '@media(max-width:760px){.xpv-in{display:block}.xpv p{margin-bottom:10px;font-size:13px}.xpv-bts{display:grid;grid-template-columns:1fr 1fr 1fr}.xpv button{padding:10px 6px;font-size:13px}}' +
    /* 2ª camada */
    '.xpv-veu{position:fixed;inset:0;z-index:2147483000;background:rgba(10,24,60,.5);display:flex;align-items:flex-end;justify-content:center}' +
    '.xpv-folha{width:min(560px,100%);max-height:calc(100vh - 24px);overflow:auto;background:#fff;color:#1D2540;border-radius:20px 20px 0 0;padding:10px 18px calc(16px + env(safe-area-inset-bottom));font:400 13.5px/1.5 "Open Sans",system-ui,-apple-system,"Segoe UI",sans-serif;box-shadow:0 -10px 40px rgba(0,0,0,.3)}' +
    '@media(min-width:761px){.xpv-veu{align-items:center}.xpv-folha{border-radius:20px;padding-bottom:18px}}' +
    '.xpv-folha *{box-sizing:border-box}' +
    '.xpv-pega{width:42px;height:4px;border-radius:4px;background:#C9D0DE;margin:0 auto 10px}' +
    '.xpv-folha h2{margin:0 0 4px;font-size:18px;font-weight:800;color:#0E2C6B;text-transform:none;letter-spacing:0}' +
    '.xpv-folha .xpv-sub{margin:0 0 6px;color:#5B6380;font-size:13px}' +
    '.xpv-it{display:flex;gap:12px;align-items:flex-start;justify-content:space-between;padding:11px 0;border-top:1px solid #E5E9F2}' +
    '.xpv-it b{display:block;font-size:14px;color:#0E2C6B}' +
    '.xpv-it span{display:block;font-size:12.5px;color:#5B6380;margin-top:2px}' +
    '.xpv-tg{flex:none;position:relative;width:46px;height:26px;margin-top:2px}' +
    '.xpv-tg input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer}' +
    '.xpv-tg i{position:absolute;inset:0;border-radius:20px;background:#C9D0DE;transition:background .15s;pointer-events:none}' +
    '.xpv-tg i::after{content:"";position:absolute;left:3px;top:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:left .15s}' +
    '.xpv-tg input:checked+i{background:#164194}.xpv-tg input:checked+i::after{left:23px}' +
    '.xpv-tg input:disabled+i{opacity:.6}.xpv-tg input:focus-visible+i{outline:3px solid #00A1FF;outline-offset:2px}' +
    '.xpv-resp{font-size:12px;color:#5B6380;margin:8px 0 12px}' +
    '.xpv-folha a{color:#164194;font-weight:700;text-decoration:underline}' +
    '.xpv-folha .xpv-bts{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}' +
    '.xpv-folha button{font:inherit;font-weight:800;font-size:13.5px;line-height:1.2;border-radius:10px;padding:11px 6px;cursor:pointer;min-height:44px;border:2px solid #164194}' +
    '.xpv-folha .xpv-s{background:#fff;color:#164194}.xpv-folha .xpv-p{background:#164194;color:#fff}' +
    '.xpv-folha button:focus-visible,.xpv-folha a:focus-visible{outline:3px solid #00A1FF;outline-offset:2px}';

  /* textos: português; inglês e espanhol para os manuais traduzidos (seguem o idioma da página) */
  var RESP = 'XALINGO S/A INDÚSTRIA E COMÉRCIO – EM RECUPERAÇÃO JUDICIAL';
  var TX = {
    pt: { aria: 'Aviso de cookies', barra: '<b>Cookies:</b> contamos de forma anônima quais conteúdos ajudam mais as famílias (Google Analytics). Sem cadastro e sem propaganda.',
      ler: 'Ler tudo', config: 'Configurar', nao: 'Recusar', sim: 'Aceitar', salvar: 'Salvar escolha', tit: 'Configurar cookies',
      sub: 'Vale para o Menu, os Manuais e o site de Realidade aumentada da Xalingo.',
      nec: 'Necessários', necTx: 'Guardam só a sua escolha neste aparelho. Sempre ligados.', necAria: 'Necessários, sempre ligados',
      est: 'Estatísticas (Google Analytics)', estTx: 'Páginas abertas, buscas e toques no Menu, tipo de aparelho e cidade aproximada, com um código aleatório no navegador por até 14 meses. Sem nome, e-mail ou telefone. Sinais do Google e anúncios desligados.',
      resp: 'Responsável: ' + RESP + ' · SAC (51) 3719-9800 · sac@xalingo.com.br', pol: 'Política de privacidade completa' },
    en: { aria: 'Cookie notice', barra: '<b>Cookies:</b> we count anonymously which content helps families the most (Google Analytics). No sign-up and no ads.',
      ler: 'Read more', config: 'Settings', nao: 'Reject', sim: 'Accept', salvar: 'Save choice', tit: 'Cookie settings',
      sub: 'Applies to the Xalingo Menu, Manuals and Augmented Reality site.',
      nec: 'Necessary', necTx: 'Only store your choice on this device. Always on.', necAria: 'Necessary, always on',
      est: 'Statistics (Google Analytics)', estTx: 'Pages opened, searches and taps in the Menu, device type and approximate city, with a random code in the browser for up to 14 months. No name, e-mail or phone. Google signals and ads turned off.',
      resp: 'Controller: ' + RESP + ' · Customer service +55 51 3719-9800 · sac@xalingo.com.br', pol: 'Full privacy policy (in Portuguese)' },
    es: { aria: 'Aviso de cookies', barra: '<b>Cookies:</b> contamos de forma anónima qué contenidos ayudan más a las familias (Google Analytics). Sin registro y sin publicidad.',
      ler: 'Leer todo', config: 'Configurar', nao: 'Rechazar', sim: 'Aceptar', salvar: 'Guardar elección', tit: 'Configurar cookies',
      sub: 'Vale para el Menú, los Manuales y el sitio de Realidad aumentada de Xalingo.',
      nec: 'Necesarias', necTx: 'Solo guardan tu elección en este dispositivo. Siempre activas.', necAria: 'Necesarias, siempre activas',
      est: 'Estadísticas (Google Analytics)', estTx: 'Páginas abiertas, búsquedas y toques en el Menú, tipo de dispositivo y ciudad aproximada, con un código aleatorio en el navegador por hasta 14 meses. Sin nombre, e-mail ni teléfono. Señales de Google y anuncios desactivados.',
      resp: 'Responsable: ' + RESP + ' · Atención al cliente +55 51 3719-9800 · sac@xalingo.com.br', pol: 'Política de privacidad completa (en portugués)' }
  };
  function L() {
    var l = String(window.__LANG || document.documentElement.lang || 'pt').slice(0, 2).toLowerCase();
    return TX[l] || TX.pt;
  }

  function css() {
    if (document.getElementById('xpv-css')) return;
    var st = document.createElement('style'); st.id = 'xpv-css'; st.textContent = CSS; document.head.appendChild(st);
  }
  function espaco(px) { try { document.body.style.paddingBottom = px ? px + 'px' : ''; } catch (e) {} }

  function barra() {
    fechar(); css();
    var T = L();
    raiz = document.createElement('div'); raiz.className = 'xpv'; raiz.setAttribute('role', 'region'); raiz.setAttribute('aria-label', T.aria);
    raiz.innerHTML = '<div class="xpv-in"><p>' + T.barra + ' <a role="button" tabindex="0" data-xpv="ler">' + T.ler + '</a></p>' +
      '<div class="xpv-bts"><button type="button" class="xpv-s" data-xpv="config">' + T.config + '</button><button type="button" class="xpv-s" data-xpv="nao">' + T.nao + '</button><button type="button" class="xpv-p" data-xpv="sim">' + T.sim + '</button></div></div>';
    document.body.appendChild(raiz);
    ligar(raiz);
    setTimeout(function () { if (raiz) espaco(raiz.offsetHeight); }, 30);
  }
  function folha() {
    fechar(); css();
    var ligado = !!(estado && estado.ga), T = L();
    raiz = document.createElement('div'); raiz.className = 'xpv-veu';
    raiz.innerHTML = '<div class="xpv-folha" role="dialog" aria-modal="true" aria-labelledby="xpv-t"><div class="xpv-pega"></div>' +
      '<h2 id="xpv-t">' + T.tit + '</h2><p class="xpv-sub">' + T.sub + '</p>' +
      '<div class="xpv-it"><div><b>' + T.nec + '</b><span>' + T.necTx + '</span></div><label class="xpv-tg"><input type="checkbox" checked disabled aria-label="' + T.necAria + '"><i></i></label></div>' +
      '<div class="xpv-it"><div><b>' + T.est + '</b><span>' + T.estTx + '</span></div><label class="xpv-tg"><input type="checkbox" data-xpv="tg"' + (ligado ? ' checked' : '') + ' aria-label="' + T.est + '"><i></i></label></div>' +
      '<p class="xpv-resp">' + T.resp + ' · <a href="' + POLITICA + '" target="_blank" rel="noopener">' + T.pol + '</a></p>' +
      '<div class="xpv-bts"><button type="button" class="xpv-s" data-xpv="nao">' + T.nao + '</button><button type="button" class="xpv-s" data-xpv="salvar">' + T.salvar + '</button><button type="button" class="xpv-p" data-xpv="sim">' + T.sim + '</button></div></div>';
    document.body.appendChild(raiz);
    ligar(raiz);
    raiz.addEventListener('click', function (e) { if (e.target === raiz) { estado ? fechar() : barra(); } });
    setTimeout(function () { try { raiz.querySelector('.xpv-p').focus({ preventScroll: true }); } catch (e) {} }, 40);
  }
  function ligar(el) {
    el.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('[data-xpv]') : null; if (!a) return;
      var k = a.getAttribute('data-xpv');
      if (k === 'sim') decidir(true);
      else if (k === 'nao') decidir(false);
      else if (k === 'ler' || k === 'config') folha();
      else if (k === 'salvar') { var t = el.querySelector('[data-xpv="tg"]'); decidir(!!(t && t.checked)); }
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.getAttribute && e.target.getAttribute('data-xpv') === 'ler') folha();
      if (e.key === 'Escape' && el.className === 'xpv-veu') { estado ? fechar() : barra(); }
    });
  }
  function fechar() { if (raiz) { raiz.remove(); raiz = null; } espaco(0); }

  window.XalPriv = {
    ga: function () { return !!(estado && estado.ga); },
    escolha: function () { return estado; },
    aoPermitir: function (f) { if (estado && estado.ga) { try { f(); } catch (e) {} } else fila.push(f); },
    abrir: function () { folha(); },
    aceitar: function () { decidir(true); },
    recusar: function () { decidir(false); },
    politica: POLITICA
  };
  /* qualquer link com data-privacidade (ex.: no rodapé) reabre a escolha */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-privacidade]') : null;
    if (a) { e.preventDefault(); folha(); }
  });
  function iniciar() {
    if (!estado && ds.barra !== '0') barra();
    try { new MutationObserver(function () { if (raiz) { raiz.className === 'xpv' ? barra() : folha(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] }); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
