/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cambiarNumeroYSimbolo = () => {
  let card = document.querySelector(".card");

  let numerosYLetras = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indice = Math.floor(Math.random() * numerosYLetras.length);

  let nuevoNumero = numerosYLetras[indice];

  let numeroTarjeta = card.querySelector(".number");
  numeroTarjeta.textContent = nuevoNumero;

  let simbolos = ["♦", "♥", "♠", "♣"];

  let nuevoSimbolo = simbolos[Math.floor(Math.random() * simbolos.length)];

  let arriba = card.querySelector(".top");
  let abajo = card.querySelector(".bottom");

  arriba.textContent = nuevoSimbolo;
  abajo.textContent = nuevoSimbolo;

  if (nuevoSimbolo === "♦" || nuevoSimbolo === "♥") {
    arriba.style.color = "red";
    abajo.style.color = "red";
  } else {
    arriba.style.color = "black";
    abajo.style.color = "black";
  }
};

window.onload = cambiarNumeroYSimbolo;
