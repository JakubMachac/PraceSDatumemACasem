function doplnCisloZlevaNulamiNa2(c) {
  let s = c.toString();
  return s.padStart(2,"0");

}
function ukazCas() {
  let dt = new Date();
  //let s = dt.getHours() + ":" + dt.getMinutes() + ":" + doplnCisloZlevaNulamiNa2(dt.getSeconds());
  let s = dt.toLocaleTimeString() ;
  document.getElementById("cas").innerHTML = s;
}
let startTime;
function poNacteni() {
 startTime = Date.now();
  let dt = new Date();
 // let s = "Dnes je " + dt.getDate() + "." + (dt.getMonth()+1) + "." + dt.getFullYear();
 let s = "Dnes je " + dt.toLocaleDateString();
  console.log(s);
  document.getElementById("datum").innerHTML = s;

  setInterval(ukazCas, 1000);
}
function mezicas() {
  let ms = Date.now() - startTime;
  document.getElementById("mezicas").innerHTML = ms + " ms";
}
function nastav() {
  let dt = new Date();
  let dt1 = new Date(dt.getFullYear(), dt.getMonth(),1,12);
  console.log(dt1.getDay());

  let ms = dt.getTime() - dt1.getTime(); //pocet ms od 1. v mesici
  console.log(ms);
  }