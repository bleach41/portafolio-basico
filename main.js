let menuVisible = false
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = ""
    menuVisible = false
  }
  else {
    document.getElementById("nav").classList = "responsive"
    menuVisible = true
  }
}

function seleccionar() {
  document.getElementById("nav").classList = ""
  menuVisible = false

}
function efectoHabilidades() {
  var habilidades = document.getElementsByClassName("progreso");
  var scrollPos = window.scrollY;
  var windowHeight = window.innerHeight;

  for (var i = 0; i < habilidades.length; i++) {
    var habilidad = habilidades[i];
    var distancia_habilidad = habilidad.getBoundingClientRect().top + scrollPos;

    // Verificar si el elemento está en el viewport
    if (distancia_habilidad < (scrollPos + windowHeight - 100)) {
      habilidad.classList.add(habilidad.dataset.animation);
    }
  }
}

const video = document.querySelector('.overlay-video video');

video.addEventListener('mouseover', () => {
  video.play();
});

video.addEventListener('mouseout', () => {
  video.pause();
});

window.addEventListener('scroll', function () {
  requestAnimationFrame(efectoHabilidades);
});
// document.querySelector('#app').innerHTML = `
//   <div>

//   </div>
// `

