import koa from 'koa'

const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(5000, () => {
  console.log('正在监听端口 5000')
})