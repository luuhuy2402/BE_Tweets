import express from 'express'
import userrouter from '~/user.router'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//nếu muốn truy cập vào router/tweets thì sẽ cần ghi /apis/tweets
app.use('/user', userrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
