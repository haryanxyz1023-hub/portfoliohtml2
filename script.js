const images =[
    "せせらぎ不動産.png",
    "img2.jpg",
    "img3.jpg",
];
let index = 0;

const slide = document.getElementById("slide");
document.getElementById("next").addEventListener("click", () => {
    index++;
    if(index >= images.length){
        index = 0;
    }
    slide.src = images[index];
});

document.getElementById("prev").addEventListener("click", () => {
    index--;
    if(index < 0){
        index = images.length -1;
    }
    slide.src = images[index];
});


