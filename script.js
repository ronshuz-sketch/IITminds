// Small runtime helpers for the IITminds landing page
(function(){
  // set current year in footer
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length>1){
        var target = document.querySelector(href);
        if(target){
          e.preventDefault();
          window.scrollTo({top: target.offsetTop - 18, behavior: 'smooth'});
        }
      }
    });
  });
})();
