const VideoChosenResult = document.querySelector('.file-upload-result');
let Video = null;

const VideoChosen = (event) => {
    if (VideoChosenResult) VideoChosenResult.textContent = event.target.files[0].name;
    if (event.target.files[0]) Video = event.target.files[0];
}