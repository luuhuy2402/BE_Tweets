import { Request, Response, NextFunction } from 'express'

// export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
//   const { email, password } = req.body
//   if (!email || !password) {
//     return res.status(400).json({
//       error: 'Missing email or password'
//     })
//   }
//   next()
// }

export const loginValidator = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({
      error: 'Missing email or password'
    })
    return // Đảm bảo kết thúc middleware
  }
  next()
}
