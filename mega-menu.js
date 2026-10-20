/* Mega menu behaviour: hover (desktop), click/tap, keyboard, Escape, outside click. */
(function () {
  var item = document.querySelector('.has-mega');
  if (!item) return;
  var btn = item.querySelector('.mega-toggle');
  var canHover = window.matchMedia('(hover: hover) and (min-width: 861px)');

  function setOpen(open) {
    item.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!item.classList.contains('open'));
  });
  item.addEventListener('mouseenter', function () { if (canHover.matches) setOpen(true); });
  item.addEventListener('mouseleave', function () { if (canHover.matches) setOpen(false); });
  item.addEventListener('focusout', function (e) {
    if (!item.contains(e.relatedTarget)) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (!item.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && item.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
})();
