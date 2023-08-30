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

  for (var i = 0; i < habilidades.length; i++) {
    var habilidad = habilidades[i];
    var distancia_habilidad = window.innerHeight - habilidad.getBoundingClientRect().top;

    if (distancia_habilidad >= 300) {
      habilidad.classList.add(habilidad.dataset.animation);
    }
  }
}

window.onscroll = function () {
  efectoHabilidades();
}
// document.querySelector('#app').innerHTML = `
//   <div>

//   </div>
// `

