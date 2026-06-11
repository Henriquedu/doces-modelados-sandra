
const panel = document.querySelector('.mobile-panel');
const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-menu');
const backdrop = document.querySelector('.mobile-backdrop');
function openMenu(){ panel?.classList.add('active'); document.body.style.overflow='hidden'; }
function closeMenu(){ panel?.classList.remove('active'); document.body.style.overflow=''; }
openBtn?.addEventListener('click', openMenu); closeBtn?.addEventListener('click', closeMenu); backdrop?.addEventListener('click', closeMenu);
const routes = {
  'presente':'/presentes-afetivos/','presentes':'/presentes-afetivos/','namorados':'/presentes-afetivos/','natal':'/presentes-afetivos/','pascoa':'/presentes-afetivos/','professor':'/presentes-afetivos/',
  'mesa':'/mesa-decorada/','circo':'/mesa-decorada/','patrulha':'/mesa-decorada/','decorada':'/mesa-decorada/',
  'pedido':'/pedido-personalizado/','personalizado':'/pedido-personalizado/','fazendinha':'/pedido-personalizado/','anjinho':'/pedido-personalizado/','religioso':'/pedido-personalizado/',
  'contato':'/contato/','encomenda':'/encomendas/','quem somos':'/quem-somos/'
};
function basePath(){ return location.pathname.includes('/temperinho-da-vovo') ? '/temperinho-da-vovo' : ''; }
document.querySelectorAll('[data-search-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const q = (form.querySelector('input')?.value || '').toLowerCase().trim();
    const key = Object.keys(routes).find(k => q.includes(k));
    location.href = basePath() + (routes[key] || '/doces-modelados/');
  });
});
