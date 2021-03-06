const express = require('express')
const responseTime = require('response-time')

const app = express()

app.use(responseTime())

// app.use((req, res, next) =>{
//   const start = new Date()
//   res.locals.start = start
//   next()
// })

app.use((req, res, next) => {
  res.write('hello  world')
  for (let i = 0; i < 10000; i++) {
    res.write('hello  world')
  }
  res.end()
  next()
})

app.use((req, res, next) => {
  console.log(res.get('X-Response-Time'))
  next()
})

// app.use((req, res, next) => {
//   const time = new Date() - res.locals.start
//   console.log(`time: ${time}`)
//   next()
// })

app.listen(5000, () => {
  console.log('正在监听端口 5000')
})