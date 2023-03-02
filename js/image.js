const images=[
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const todaysImage= images[Math.floor(Math.random()*images.length)];

const makeImg = document.createElement("img");

makeImg.src=`${todaysImage}`;

document.body.appendChild(makeImg);
makeImg.classList.add("bgimg");