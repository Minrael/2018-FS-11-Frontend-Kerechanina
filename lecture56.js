function getPosition (opts) {
  return new Promise((resolve, reject) => {
  navigator.geolocation,getCurrentPosition(console.log, cjnsole.err, opts);
  
});
}

getPosition().then((position) => console.log(position.coords))




function loadImage (src) {
    return new Promise((resolve, reject) => {
        imgeElem = new Image();
        imageElem.onload = event => resolve(imageElem);
        imaeElem.onerror = reject;
        imageElem.src = src;
    }};
