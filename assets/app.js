document.addEventListener('DOMContentLoaded',()=>{
  // Carousel
  const slides = Array.from(document.querySelectorAll('.slide'))
  const prev = document.querySelector('#prev')
  const next = document.querySelector('#next')
  let idx = 0
  function show(i){
    slides.forEach(s=>s.classList.remove('active'))
    slides[i].classList.add('active')
  }
  if(slides.length){
    show(idx)
    prev?.addEventListener('click',()=>{ idx = (idx-1+slides.length)%slides.length; show(idx)})
    next?.addEventListener('click',()=>{ idx = (idx+1)%slides.length; show(idx)})
    // Auto rotate
    setInterval(()=>{ idx = (idx+1)%slides.length; show(idx)},8000)
  }

  // Active nav
  const links = document.querySelectorAll('.nav a')
  links.forEach(l=>{
    if(location.pathname.endsWith(l.getAttribute('href'))|| (location.pathname.endsWith('/') && l.getAttribute('href')==='index.html')){
      l.classList.add('active')
    }
  })
})
