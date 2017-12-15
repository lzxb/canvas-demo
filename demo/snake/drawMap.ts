export default function drawMap (ctx: CanvasRenderingContext2D, maps: Array<Array<number>>) {
  for (let i: number = 0; i < maps.length; i++) {
    for (let j: number = 0; j < maps[i].length; j++) {
      const width = 100
      const height = 100
      const border = 10
      ctx.rect(j * width + border, i * height + border, width - border * 2, height - border * 2)
      ctx.fillStyle = '#ccc'
      ctx.fill()
    }
  }
}
