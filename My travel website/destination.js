
const locations = [
    "London",
    "Ghana",
    "Tokyo",
    "Lagos",
    "France",
    "Spain",
    "Germany",
    "Naples",
];

const searchInput = document.querySelector('.search-input');
const suggestionBox = document.querySelector('.suggestions');
const searchButton = document.querySelector('.search-button');

let map;
let marker;

function initMap() {const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteration: false,
      },  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // You can change this to 'fade', 'cube', 'coverflow', or 'flip'
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
    map = new
    google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.5074, ing: -0.1278},
        zoom: 8,
    });
}
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = " ";

    if (query.length > 0) {
        const matches = locations.filter(location =>
            location.toLowerCase().startsWith(query)
        );
        matches.forEach(match => {
            const suggestionItem = document.createElement('div');

            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = match;

            suggestionItem.addEventListener('click', () => {
                searchInput.value = match;
                suggestionBox.innerHTML = "";
            });
            suggestionBox.appendChild(suggestionItem);
        });
    }
});



searchButton.addEventListener('click',() => {
    const selectedLocation = searchInput.value;
    
    if(selectedLocation) {
        const geocoder = new
        google.maps.Geocoder();
            geocoder.geocoder ({ address: selectedLocation}, (results, status) => {
                if (status === "OK") {
                    const location = results[0].geometry.location;

                    map.setCenter(location);
                    map.setZoom(12);

                if (marker) {
                    marker.setMap(null);
                }
                marker = new
                google.maps.Marker({
                    position: location,
                    map: map,
                });

            }else{
                alert("Location not found:" + status);
            }
    });
            }else{
                alert("Please select or type a location to search!");
            }
    });

    window.onload = initMap;


searchButton.addEventListener('click')

