import { RegisterReqBody } from '~/models/requests/User.requests'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'

class UsersService {
  async register(payload: RegisterReqBody) {
    const result = await databaseService.users.insertOne(
      //UserType cura date_of_birth quy  định là kiểu Date mà người dùng gửi lên kiểu string nên cần ép kiểu dữ liệu ghi đè lại thành kiểu Date
      new User({ ...payload, date_of_birth: new Date(payload.date_of_birth) })
    )
    return result
  }

  async checkEmailExist(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }
}

const usersService = new UsersService()
export default usersService
