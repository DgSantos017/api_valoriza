import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload { sub: string }

export function ensureLogin( req: Request, res: Response, next: NextFunction){

  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({error: 'Token missing'})
  }

  const [, token] = authToken.split(' ')

  try {

    const { sub } = verify(
      token,
      '4f93ac9d10cb751b8c9c646bc9dbccb9'
    ) as IPayload

    req.user_id = sub

    return next()

  } catch (err) {
    return res.status(401).json({error: 'Token missing'})
  }
}