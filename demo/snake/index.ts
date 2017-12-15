import { createApp } from '../helpers/index'
import drawMap from './drawMap'

const ctx: CanvasRenderingContext2D = createApp()
const maps: Array<Array<number>> = []
const row = 10
const column = 10

// 生成地图数据
for (let i: number = 0; i < row; i++) {
  maps.push([])
  for (let j: number = 0; j < column; j++) {
    maps[i].push(0)
  }
}
ctx.save()
// ctx.translate(ctx.canvas.width / 2 - (column * 100 / 2), ctx.canvas.height / 2 - (row * 100 / 2))
ctx.scale(0.5, 0.5)
drawMap(ctx, maps)
ctx.restore()
console.log(ctx, maps)
