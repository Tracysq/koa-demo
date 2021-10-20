import koa from 'koa'

const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello'
  await next()
  ctx.body += ' qdd'
})
app.use(async (ctx, next) => {
  ctx.body += ' world'
  await next()
})
app.use(async (ctx, next) => {
  ctx.set('Content-Type', 'text/html; charset=utf-8')
  await next()
})

app.listen(5000, () => {
  console.log('正在监听端口 5000')
})