import hellWorld  from './hello-world'
import img_src from './asset/error.png'
import svg from './asset/test.svg'
import exampleTest from './asset/test.txt'
import jpgMap from './asset/offset.jpg'
import jpegMap from './asset/WechatIMG127.jpeg'
import './style/style.css'
import './style/style.less'
import dataXML from './asset/AndroidManifest.xml'
import dataCSV from './asset/androidx-class-mapping.csv'

// 解析json5,yaml,taml相关类型数据文件
import json5 from './asset/my.json5'

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
block.classList.add('block-bg');
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

// 把css中的class添加进来,看是否生效,
document.body.classList.add('hello')


// 引入iconfont 的字体图标
const span = document.createElement('span')
span.classList.add('icon')
// 设置内容为对应的unicode编码
span.innerHTML = '&#xe681;'
document.body.appendChild(span);


console.log('dataXML:',dataXML);
// dataXML 被转换为js的对象
console.log('dataCSV:',dataCSV);
// dataCSV 被转换为一个数组

// .json5,.toml,.yaml等数据文件格式都能被当成json格式一样使用,只不过需要使用相应的插件
// json5 toml yaml
console.log('json5:',json5);