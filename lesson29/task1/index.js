const addImage = (imgSrc, callback) => {
  // put your code here
  const container = document.querySelector('.page');
  const img = document.createElement('img');
  img.setAttribute('src',`${imgSrc}`);
  img.addEventListener('load',()=>{
  container.appendChild(img);
  callback(null,img);

  })

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
};

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );

addImage(
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
   onImageLoaded,
 );
