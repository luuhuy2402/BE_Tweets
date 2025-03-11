import express from 'express'
import usersrouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'

const app = express()
const port = 3000

app.use(express.json()) //để parse dữ liệu gửi  lên từ json -> object

//nếu muốn truy cập vào router/tweets thì sẽ cần ghi /apis/tweets
app.use('/users', usersrouter)

databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
