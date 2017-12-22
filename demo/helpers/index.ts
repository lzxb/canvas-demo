export const clearCanavs: Function = (ctx: CanvasRenderingContext2D) => {
  ctx.canvas.width = ctx.canvas.width
}

export const createApp: Function = (): CanvasRenderingContext2D => {
  const app: HTMLCanvasElement = document.createElement('canvas')
  const body: HTMLElement = document.body
  const Global: Window = window
  app.width = Global.innerWidth
  app.height = Global.innerHeight
  body.appendChild(app)
  body.style.margin = '0'
  body.style.overflow = 'hidden'
  return app.getContext('2d')!
}

export const drawPosition = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string = 'red') => {
  ctx.beginPath()
  ctx.moveTo(x - 10, y)
  ctx.lineTo(x + 10, y)
  ctx.moveTo(x, y - 10)
  ctx.lineTo(x, y + 10)
  ctx.closePath()
  ctx.strokeStyle = color
  ctx.stroke()
}

export const animation = (draw: Function) => {
  const wrapDraw: FrameRequestCallback = () => {
    draw()
    window.requestAnimationFrame(wrapDraw)
  }
  window.requestAnimationFrame(wrapDraw)
}
