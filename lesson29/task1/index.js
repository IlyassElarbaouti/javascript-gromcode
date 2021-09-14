export const addImage = (imgSrc, callback) => {
  // put your code here
  const imgElem = document.createElement('img');
  imgElem.src =imgSrc;
  imgElem.setAttribute('alt',`my photo`);
  const containerElem = document.querySelector('.page');
  containerElem.appendChild(imgElem);
  imgElem.addEventListener('load',()=>callback(null,imgElem));
  imgElem.addEventListener('error',()=>callback('Image load is failed'))
  
};

// callback function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
  console.log(`${width} x ${height}`)
};

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );


