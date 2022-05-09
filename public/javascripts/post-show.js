mapboxgl.accessToken = "pk.eyJ1IjoiZjhkZXYiLCJhIjoiY2wybndrNTlhMTEzZzNqbmt6YzN1cTE4dSJ9.5umUNkji3ee2SOISd5EWVw";

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: post.coordinates,
      zoom: 3
    });

  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for our location and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(post.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
  .setHTML('<h3>' + post.title + '</h3><p>' + post.location +'</p>'))
  .addTo(map); 

// Toggle esit review form
    $('.toggle-edit-form').on('click', function() {
        $(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
        $(this).siblings('.edit-review-form').toggle();
   });
