const positionsArray = ['rotate0', 'rotate90', 'rotate180', 'rotate270'];

const mainVideo = document.querySelector('.html5-video-container > video');
const controlsRight = document.querySelector('div.ytp-right-controls');

const rotateButton = document.createElement('button');
rotateButton.setAttribute('data-toggle', 'tooltip');
rotateButton.setAttribute('data-placement', 'top');
rotateButton.setAttribute('title', 'Girar');
rotateButton.classList.add('ytp-button', 'rotate-button');

const rotateButtonImgContainer = document.createElement('div');
rotateButtonImgContainer.classList.add('ytp-routate-button-img-container');
rotateButtonImgContainer.innerHTML = `<img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ERotate%3C/title%3E%3Cdesc%3EA solid styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' d='M60.693 22.023a3 3 0 0 0-4.17.784l-2.476 3.622A27.067 27.067 0 0 0 28 6C13.443 6 2 18.036 2 32.584a26.395 26.395 0 0 0 45.066 18.678 3 3 0 1 0-4.244-4.242A20.395 20.395 0 0 1 8 32.584C8 21.344 16.752 12 28 12a21.045 21.045 0 0 1 20.257 16.059l-4.314-3.968a3 3 0 0 0-4.062 4.418l9.737 8.952c.013.013.03.02.043.033.067.06.143.11.215.163a2.751 2.751 0 0 0 .243.17c.076.046.159.082.24.12a3.023 3.023 0 0 0 .279.123c.08.03.163.05.246.071a3.045 3.045 0 0 0 .323.07c.034.006.065.017.1.022.051.006.102-.002.154.002.063.004.124.017.187.017.07 0 .141-.007.212-.012l.08-.004.05-.003c.06-.007.118-.03.179-.04a3.119 3.119 0 0 0 .387-.087c.083-.027.16-.064.239-.097a2.899 2.899 0 0 0 .314-.146 2.753 2.753 0 0 0 .233-.151 2.944 2.944 0 0 0 .263-.2c.07-.06.135-.124.199-.19a3.013 3.013 0 0 0 .224-.262c.03-.04.069-.073.097-.114l7.352-10.752a3.001 3.001 0 0 0-.784-4.17z' fill='%23202020'%3E%3C/path%3E%3C/svg%3E" alt="Rotate" />`;

rotateButton.append(rotateButtonImgContainer);

let rotateNowIndex = 0;
let rotateNextIndex = 0;

rotateButton.onclick = () => {
  rotateNowIndex = rotateNextIndex;
  mainVideo.classList.remove(positionsArray[rotateNowIndex]);
  if (rotateNextIndex < positionsArray.length - 1) {
    rotateNextIndex++;
  } else {
    rotateNextIndex = 0;
  }
  mainVideo.classList.add(positionsArray[rotateNextIndex]);
};

controlsRight.prepend(rotateButton);
