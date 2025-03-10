import { Router } from 'express'
const userrouter = Router()

// đây là middleware  khi truy cập vào router ví dụ /tweets thì sẽ luôn đi qua middleware
userrouter.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

userrouter.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'hello'
      }
    ]
  })
})

export default userrouter
