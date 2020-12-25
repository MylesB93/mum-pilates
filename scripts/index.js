let map;

function initMap() {
    const location = { lat: 50.92731651229432, lng: -1.3312037236649066 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.92731651229432, lng: -1.3312037236649066 },
        zoom: 16,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

function prevImg() {
    var currentImg = document.getElementById('selected_img');
    var prevImg = currentImg.previousElementSibling
    currentImg.classList.add('hidden');
    currentImg.removeAttribute('id');
    prevImg.id = 'selected_img';
    prevImg.classList.remove('hidden');
}

function nextImg() {
    var currentImg = document.getElementById('selected_img');
    var nextImg = currentImg.nextElementSibling;
    currentImg.classList.add('hidden');
    currentImg.removeAttribute('id');
    nextImg.id = 'selected_img';
    nextImg.classList.remove('hidden');
}

function load() {
    var selectedImg = document.getElementById('selected_img');
    var images = document.getElementById('image_list').getElementsByTagName('li');
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener('click', activateImage);
    }

    function activateImage() {
        selectedImg.innerHTML = this.innerHTML;
        console.log('it works!');
    }
}