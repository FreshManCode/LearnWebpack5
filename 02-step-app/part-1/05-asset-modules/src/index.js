import hellWorld  from './hello-world'
import img_src from './asset/error.png'
import svg from './asset/test.svg'
import exampleTest from './asset/test.txt'
import jpgMap from './asset/offset.jpg'
import jpegMap from './asset/WechatIMG127.jpeg'

hellWorld();
const img = document.createElement('img')
img.src = img_src
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width:200px'
img2.src = svg
document.body.appendChild(img2)

const block = document.createElement('div');
block.style.cssText = 'width:200px;height:200px;background:aliceblue';
block.textContent = exampleTest;
document.body.appendChild(block);

const img3 = document.createElement('img')
img3.style.cssText = 'width:600px;display:block';
img3.src = jpgMap;
document.body.appendChild(img3)

const img4 = document.createElement('img')
img4.style.cssText = 'width:600px;display:block';
img4.src = jpegMap;
document.body.appendChild(img4)