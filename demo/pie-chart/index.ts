
const createCanvas = (): HTMLCanvasElement => {
  // 创建原生
  const el = document.createElement('canvas')!
  document.body.appendChild(el)
  return el
}

const canvas = createCanvas()
const width: number = 500
const height: number = 500
const ctx = canvas.getContext('2d')
if (!ctx) {
  throw new Error('浏览器不支持 canvas 2d')
}
// 初始化画布的背景颜色
const initCanvas = () => {
  canvas.width = width
  canvas.height = height

  ctx.fillStyle = '#ccc'
  ctx.fillRect(0, 0, width, height)
}
// 获取一组随机的数据
const randomArr = (): number[] => {
  const arr: number[] = []
  let len = 5
  while (--len) {
    arr.push(Math.random() * 1000)
  }

  return arr
}
const drawCircle = () => {
  // 绘制黑色
  ctx.beginPath()
  ctx.arc(width / 2, height / 2, 200, Math.PI / 2, 1.5 * Math.PI)
  ctx.closePath()
  ctx.fillStyle = '#222'
  ctx.fill()
  // 绘制白色
  ctx.beginPath()
  ctx.arc(width / 2, height / 2, 200, 1.5 * Math.PI, Math.PI / 2)
  ctx.closePath()
  ctx.fillStyle = '#fff'
  ctx.fill()

  // 绘制黑色小圆
  ctx.beginPath()
  ctx.arc(width / 2, height / 2 + 100, 100, Math.PI * 2, 0)
  ctx.fillStyle = '#222'
  ctx.closePath()
  ctx.fill()
  // 绘制白色小圆
  ctx.beginPath()
  ctx.arc(width / 2, height / 2 - 100, 100, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fillStyle = '#fff'
  ctx.fill()
  // 绘制黑色小圆点
  // 绘制白色小圆点
}
initCanvas()
drawCircle()

console.log(randomArr())
