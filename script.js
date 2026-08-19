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

function generateGallery() {
    let galleryRef = document.getElementById("gallery");  // ✅ einmal reicht

    for (let i = 0; i < images.length; i++) {
        console.log(i);
        // Hier jetzt Bild-Elemente bauen & an galleryRef anhängen
        galleryRef.innerHTML += `<img src="${images[i]}" alt="Gallery image">`;
    }
}



// function openImg(i) {
//     console.log("Bild wurde geklickt!");
//     document.getElementById(`img${i}`).classList.add('open');
// }


// Nächster Schritt
// Du hast jetzt das Array und die Gallery-Referenz. Was fehlt: Aus jedem Bild-Pfad ein Thumbnail-Element bauen und in den #gallery-Container einfügen.
// Schau dir dazu nochmal das Video „Das DOM und .innerHTML" an – dort siehst du, wie du HTML dynamisch erzeugst. Für den Bild-Tag brauchst du vor allem src (dein Array-Wert) und einen sinnvollen alt-Text.
// Probier mal, in der Schleife ein <img>-Element mit createElement zu bauen und es mit appendChild ans galleryRef zu hängen. Wie weit kommst du damit?