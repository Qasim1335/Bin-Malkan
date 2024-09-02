const slider= document.querySelector(".slider"),
firstImg= slider.querySelectorAll("img")[0];
arrowIcons= document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14 //getting first img width & adding 14 margin value
let scrollWidth = slider.scrollWidth - slider.clientWidth;

const showHideIcons = () => {
    arrowIcons[0].style.display= slider.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display= slider.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(),60);
    });
});

const dragStart = (e) => {
    // Updating global variable values on mouseDown event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    // Scrolling images to the left according to mouse pointer
    if(!isDragStart)return;
    e.preventDefault();
    slider.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart= false;
    slider.classList.remove("dragging");
}

slider.addEventListener("mousedown",dragStart);
slider.addEventListener("mousemove",dragging);
slider.addEventListener("mouseup",dragStop);




document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});



