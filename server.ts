import koa from 'koa'

const app = new koa()

app.use(async (ctx, next) => {
  await next()
  const time = ctx.response.get('X-Response-Time') // 读取 response header
  console.log(`${ctx.url} - ${time}s`)
})
app.use(async (ctx, next) => {
  const  start = Date.now() // 记录开始时间
  await next()
  const time = Date.now() - start // 记录结束时间 - start = 总耗时
  ctx.set('X-Response-Time', `${time}ms`) // 总耗时 写入 response header 中
})
app.use(async (ctx, next) => {
  ctx.body = 'hello world'
  for(let i = 0; i < 10000; i++) {
    ctx.body += 'hello world'
  }
})

app.listen(5000, () => {
  console.log('正在监听端口 5000')
})