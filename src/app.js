/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let quién = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let acción = [" comió", " pisó", " aplastó", " rompió"];
  let qué = [" mi tarea", " mi teléfono", " el auto"];
  let cuando = [
    " antes de la clase",
    " cuando dormía",
    " mientras hacía ejercicio",
    " durante mi almuerzo",
    " mientras oraba"
  ];

  let rdm1 = Math.floor(Math.random() * quién.length);
  let rdm2 = Math.floor(Math.random() * acción.length);
  let rdm3 = Math.floor(Math.random() * qué.length);
  let rdm4 = Math.floor(Math.random() * cuando.length);

  document.querySelector("#excusa").innerHTML =
    quién[rdm1] + acción[rdm2] + qué[rdm3] + cuando[rdm4];
};
