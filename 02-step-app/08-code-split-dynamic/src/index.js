import hellWorld  from './hello-world.js'
import  './async-module.js'
import img_src from './asset/error.png'
import _ from 'lodash'
import './style/style.css'
import './style/style.less'

console.log(_.join(['Index','module','loaded!'],' '));


const img = document.createElement('img')
img.src = img_src
document.body.appendChild(img)

hellWorld();
