const form = document.querySelector('#geocode');
const address = document.querySelector('#address');
const coordinates = document.querySelector('#coordinates');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.value}***&key=AIzaSyDhAHbgc4cJH48P6ZQJsCHORGCKLQ5Kd6Y`)
      .then(response => response.json())
      .then((data) => {
        form.reset();
        coordinates.innerHTML = '';
        data.results.forEach((result) => {
          coordinates.insertAdjacentHTML('beforeend', `
            <h3>${result.formatted_address}</h3>
            <p><strong>Lat:</strong> ${result.geometry.location.lat} / <strong>Lng:</strong> ${result.geometry.location.lng}</p>
          `);
        });
      });
  });
}
