const express = require('express')
// const compression = require('compression')
const app = express()

// 使用中间件compression一定要写到 静态资源托管之前
// app.use(compression())
// 静态资源托管
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server is running')
})
