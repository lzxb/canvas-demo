import * as helpers from '../helpers/index'

const ctx: CanvasRenderingContext2D = helpers.createApp()
const speed = 5
let rotate = 0

const draw: Function = (x: number, y: number, width: number, height: number) => {
  helpers.clearCanavs(ctx)
  ctx.fillStyle = '#333'
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotate * Math.PI / 180)
  ctx.rect(-(width / 2), -(height / 2), width, height)
  ctx.fill()
  ctx.restore()
  helpers.drawPosition(ctx, x, y, '#fff')
}
// x, y, 宽度, 厚度
draw(200, 500 / 4, 120, 120)
// setInterval(() => {
//   rotate = (rotate + speed) % 181
//   draw(200, 500 / 4, 120, 120)
// }, 1000 / 60)
// const timer: number = requestAnimationFrame(() => {
//   rotate = (rotate + speed) % 181
//   draw(200, 500 / 4, 120, 120)
// })
helpers.animation(() => {
  rotate = (rotate + speed) % 181
  draw(200, 500 / 4, 120, 120)
})
