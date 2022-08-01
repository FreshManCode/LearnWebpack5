// 未使用别名之前,如果需要引用math.js需要做如下引用
const math = require("../../math")

// 在webpack中使用resolve 中的 alias 配置别名之后

const math2 = require('@/math.js')

function Body() {
    console.log('math2:',math2.add(2,3));
    return console.log(math.add(3,4));
}
export default Body