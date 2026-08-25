const images = [
    "./assets/img/img_01.jpg",
    "./assets/img/img_02.jpg",
    "./assets/img/img_03.jpg",
    "./assets/img/img_04.jpg",
    "./assets/img/img_05.jpg",
    "./assets/img/img_06.jpg",
    "./assets/img/img_07.jpg",
    "./assets/img/img_08.jpg",
    "./assets/img/img_09.jpg",
    "./assets/img/img_10.jpg",
    "./assets/img/img_11.jpg",
    "./assets/img/img_12.jpg",
    "./assets/img/img_13.jpg",
    "./assets/img/img_14.jpg"
];

const titles = [
    "Bluebell Dreams",
    "Silent Horizon",
    "Sapphire Bloom",
    "Winter Sky",
    "Ocean Motion",
    "Frozen Blue",
    "Crystal Petals",
    "Midnight Leaves",
    "Arctic Silence",
    "Lone Winter",
    "Coastal Calm",
    "Blue Tides",
    "Turquoise Forest",
    "Water Drops"
];


const dialogRef = document.getElementById("img-dialog");
let currentImageIndex = 0;



// Bilder aus den Arrays in der Galerie anzeigen
function generateGallery() {
    let galleryRef = document.getElementById("gallery");

    for (let i = 0; i < images.length; i++) {
        galleryRef.innerHTML += `<img src="${images[i]}" alt="${titles[i]}" onclick="openDialog(${i})">`;
    }
}

// Öffnet das ausgewählte Bild im Dialog und zeigt Bild, Titel und Bildzähler an
function openDialog(i) {
    currentImageIndex = i;

    document.getElementById("img-title").innerHTML = titles[i];
    document.getElementById("image").innerHTML = `<img src="${images[i]}" alt="${titles[i]}">`;
    document.getElementById("image-counter").innerHTML = `${i + 1}/${images.length}`;

    dialogRef.showModal();
}


function closeDialog() {
    dialogRef.close();
}


function nextImage() {
    currentImageIndex++;

    // Nach dem letzten Bild wieder zum ersten Bild springen
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("img-title").innerHTML = titles[currentImageIndex];
    document.getElementById("image").innerHTML = `<img src="${images[currentImageIndex]}" alt="${titles[currentImageIndex]}">`;
    document.getElementById("image-counter").innerHTML = `${currentImageIndex + 1}/${images.length}`;
}


function previousImage() {
    currentImageIndex--;

    // Vor dem ersten Bild wieder zum letzten Bild springen
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    document.getElementById("img-title").innerHTML = titles[currentImageIndex];
    document.getElementById("image").innerHTML = `<img src="${images[currentImageIndex]}" alt="${titles[currentImageIndex]}">`;
    document.getElementById("image-counter").innerHTML = `${currentImageIndex + 1}/${images.length}`;
}