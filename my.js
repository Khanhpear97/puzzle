function changeImage1() {
    let image = document.getElementById('image-1');
    let typeImage = image.getAttribute('data-id');
    if (typeImage === 'panda') {
        image.src = "funny1x1.jpg";
        image.setAttribute('data-id', 'funny');
    } else if (typeImage === 'funny') {
        image.src = "monkey1x1.jpg";
        image.setAttribute('data-id', 'monkey');
    } else {
        image.src = "panda1x1.jpg";
        image.setAttribute('data-id', 'panda');
    }
    checkWin();
}
function changeImage2() {
    let image = document.getElementById('image-2')
    let typeImage = image.getAttribute('data-id');
    if (typeImage === 'funny') {
        image.src = "monkey2x1.jpg";
        image.setAttribute('data-id', 'monkey');
    } else if (typeImage === 'monkey') {
        image.src = "panda2x1.jpg";
        image.setAttribute('data-id', 'panda');
    } else {
        image.src = "funny2x1.jpg";
        image.setAttribute('data-id', 'funny');
    }
    checkWin();
}
function changeImage3() {
    let image = document.getElementById('image-3')
    let typeImage = image.getAttribute('data-id');
    if (typeImage === 'monkey') {
        image.src = "panda3x1.jpg";
        image.setAttribute('data-id', 'panda');
    } else if (typeImage === 'panda') {
        image.src = "funny3x1.jpg";
        image.setAttribute('data-id', 'funny');
    } else {
        image.src = "monkey3x1.jpg";
        image.setAttribute('data-id', 'monkey');
    }
    checkWin();
}
function changeImage4() {
    let image = document.getElementById('image-4')
    let typeImage = image.getAttribute('data-id');
    if (typeImage === 'funny') {
        image.src = "monkey4x1.jpg";
        image.setAttribute('data-id', 'monkey');
    } else if (typeImage === 'monkey') {
        image.src = "panda4x1.jpg";
        image.setAttribute('data-id', 'panda');
    } else {
        image.src = "funny4x1.jpg";
        image.setAttribute('data-id', 'funny');
    }
    checkWin();
}
function changeImage5() {
    let image = document.getElementById('image-5');
    let typeImage = image.getAttribute('data-id');
    if (typeImage === 'panda') {
        image.src = "funny5x1.jpg";
        image.setAttribute('data-id', 'funny');
    } else if (typeImage === 'funny') {
        image.src = "monkey5x1.jpg";
        image.setAttribute('data-id', 'monkey');
    } else {
        image.src = "panda5x1.jpg";
        image.setAttribute('data-id', 'panda');
    }
    checkWin();
}
function checkWin() {
    let image1 = document.getElementById('image-1');
    let image2 = document.getElementById('image-2');
    let image3 = document.getElementById('image-3');
    let image4 = document.getElementById('image-4');
    let image5 = document.getElementById('image-5');
    let typeImage1 = image1.getAttribute('data-id');
    let typeImage2 = image2.getAttribute('data-id');
    let typeImage3 = image3.getAttribute('data-id');
    let typeImage4 = image4.getAttribute('data-id');
    let typeImage5 = image5.getAttribute('data-id');

    if (typeImage1 === typeImage2 && typeImage3 === typeImage1 && typeImage4 === typeImage1 && typeImage5 === typeImage1) {
        image1.style.border = "2px solid red";
        image2.style.border = "2px solid red";
        image3.style.border = "2px solid red";
        image4.style.border = "2px solid red";
        image5.style.border = "2px solid red";
    } else {
        image1.style.border = "none";
        image2.style.border = "none";
        image3.style.border = "none";
        image4.style.border = "none";
        image5.style.border = "none";
    }
}