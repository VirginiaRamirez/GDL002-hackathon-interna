fetch('http://www.omdbapi.com/?t=jaws&plot=full&apikey=8b7dde54')
.then((data) => {
  // convertimos nuestra data a JSON
  return data.json();
}).then((dataAsJSON) => {
  // cualquier operación con la data ya procesada
  console.log(Object.values(dataAsJSON));
  // podemos llamar a funciones también 👀
  // showData(dataAsJSON);
  // filterData(dataAsJSON);
  // orderData(dataAsJSON);
});
