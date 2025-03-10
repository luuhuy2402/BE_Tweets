import express from 'express'
const router = express.Router()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// đây là middleware  khi truy cập vào router ví dụ /tweets thì sẽ luôn đi qua middleware
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'hello'
      }
    ]
  })
})
//nếu muốn truy cập vào router/tweets thì sẽ cần ghi /apis/tweets
app.use('/apis', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
