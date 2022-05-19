// Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
// nome e cognome
// km da percorrere
// eta (input testuale o number)
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)
// Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
// Al click sul tasto ANNULLA si svuotano i campi
// BONUS
// la sezione del biglietto generato, all’avvio dovrebbe essere nascosta e comparire solo quando si preme il pulsante genera
// Questo compare solo se i dati inseriti sono validi
// per l’età inserire una select con 3 voci:
// minorenne
// maggiorenne
// over 65
// In base alla voce scelta dall’utente, fare i dovuti calcoli
const passengerName = document.getElementById("passengerName");
const distance = document.getElementById("distance");
const age = document.getElementById("age");
const generateButton = document.getElementById("generateButton");
const clearButton = document.getElementById("clearButton");

generateButton.addEventListener("click", function () {

  let totalprice = distance.value * 0.21;

  if (distance.value > 1200 || distance.value < 10 || isNaN(distance.value) || distance.value < 0) {
    alert(
      "Attenzione! Il numero di chilometri deve essere compreso tra 10 e 1200"
    );
    totalprice = "Inserisci i dati corretti";
  }

 if (passengerName.value == "") {
    alert("Attenzione! Inserire il nome del passeggero");
    totalprice = "Inserisci i dati corretti";
  }

  if (age.value == "Minorenne") {
    totalprice = (totalprice - totalprice * 0.2).toFixed(2);
  }

  if (age.value == "Over 65") {
    totalprice = (totalprice - totalprice * 0.4).toFixed(2);
  }

  if (age.value == "Maggiorenne") {
    totalprice = (totalprice).toFixed(2);
  }

  document.getElementById("printpassengername").innerHTML= passengerName.value;
  document.getElementById("printtotalprice").innerHTML= totalprice;

});

clearButton.addEventListener("click", function () {
  passengerName.value = "";
  distance.value = "";
  age.value = "";
  document.getElementById("printpassengername").innerHTML= "";
  document.getElementById("printtotalprice").innerHTML= "";
});
