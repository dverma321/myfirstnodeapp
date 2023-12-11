// Array of image file names
const imageFileNames = [
    'images/1.jpg',
    'images/2.jpg',
    'images/xmasa.jpg',
    'images/xmasb.jpg',
    // Add more image file names as needed
];

// Function to get a random index from the array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
// Function to set a random image
function setRandomImage() {
    const randomIndex = getRandomIndex(imageFileNames);
    const randomImageFileName = imageFileNames[randomIndex];
    document.getElementById('randomImage').src = randomImageFileName;

    // Set the timeout for 3 seconds (adjust as needed)
    const displayTime = 3000; // in milliseconds (3 seconds in this case)

    // Call setRandomImage again after the specified time
    setTimeout(setRandomImage, displayTime);
}

// Use DOMContentLoaded event to ensure the DOM has fully loaded
document.addEventListener('DOMContentLoaded', setRandomImage);