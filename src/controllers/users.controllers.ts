//xử lý logic
import { Request, Response } from 'express'
import usersService from '~/services/users.services'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'xeoxeo1895@gmail.com' && password === '123456') {
    res.status(200).json({
      message: 'Login success'
    })
    return
  }
  res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await usersService.register({ email, password })

    res.json({
      message: 'Register success',
      result: result
    })
    return
  } catch (error) {
    res.status(400).json({
      error: 'Register failed'
    })
    return
  }
}
