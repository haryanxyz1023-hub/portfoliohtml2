const images =[
    "image/せせらぎ不動産.png",
    "ima3.jpg",
    "ima4.jpg",
    "ima5.jpg",
    "ima6.jpg",
    "ima7.jpg",
    "ima8.jpg"
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


