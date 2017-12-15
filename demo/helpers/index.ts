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
