// anchor scrolling with a nav offset. No demo plugins are used on this page.
document.querySelectorAll('.fj-links a, .fj-foot a').forEach(function(a){
  a.addEventListener('click', function(e){
    var id = a.getAttribute('href');
    if(!id || id.charAt(0) !== '#') return;
    var el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    var off = window.innerWidth > 699 ? 64 : 0;
    window.scrollTo({top: el.getBoundingClientRect().top + window.pageYOffset - off, behavior:'smooth'});
  });
});
