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
    var prevImg = currentImg.previousElementSibling;

    if (prevImg == null) {
        prevImg = document.getElementById("image_list").lastElementChild;
    }

    currentImg.classList.add('hidden');
    currentImg.removeAttribute('id');
    prevImg.id = 'selected_img';
    prevImg.classList.remove('hidden');
}

function nextImg() {
    var currentImg = document.getElementById('selected_img');
    var nextImg = currentImg.nextElementSibling;

    if (nextImg == null) {
        nextImg = document.getElementById("image_list").firstElementChild;
    }

    currentImg.classList.add('hidden');
    currentImg.removeAttribute('id');
    nextImg.id = 'selected_img';
    nextImg.classList.remove('hidden');
}

function expandImg(e) {
    if (e.classList.contains("expanded-img")) {
        e.classList.remove("expanded-img");
        e.classList.add("compressed-img");
    } else if (e.classList.contains("compressed-img")) {
        e.classList.remove("compressed-img");
        e.classList.add("expanded-img");
    }
}