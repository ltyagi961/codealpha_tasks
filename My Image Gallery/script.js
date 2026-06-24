let overlay = document.querySelector(".galleryOverlay");
let imgBox = document.querySelector(".imgBox");
let bigImg = document.querySelector(".imgBox img");
let closeBtn = document.querySelector(".close");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let currentIndex = 0;
let allImages = document.querySelectorAll(".galleryItems img");

allImages.forEach((image, index) => {
    image.addEventListener("click", function() {
        currentIndex = index;
        showBigImage();
        overlay.style.display = "block";
        imgBox.style.display = "block";
    });
});

function showBigImage() {
    bigImg.src = allImages[currentIndex].src;
}

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if(currentIndex >= allImages.length) {
        currentIndex = 0;
    }
    showBigImage();
});

prevBtn.addEventListener("click", function() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = allImages.length - 1;
    }
    showBigImage();
});

closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
    imgBox.style.display = "none";
});

overlay.addEventListener("click", function() {
    overlay.style.display = "none";
    imgBox.style.display = "none";
});